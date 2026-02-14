/**
 * Author: claude
 */
export default {
    async fetch(request, env, ctx) {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
      }
  
      // Verify webhook signature
      const signature = request.headers.get('X-Hub-Signature-256');
      const body = await request.text();
      
      if (!await verifySignature(body, signature, env.WEBHOOK_SECRET)) {
        return new Response('Invalid signature', { status: 401 });
      }
  
      const payload = JSON.parse(body);
  
      // Only process release.published events
      if (payload.action !== 'published') {
        return new Response('Ignored - not a published release', { status: 200 });
      }
  
      // Check if release has *.docs.tar.gz asset
      const docsAsset = payload.release?.assets?.find(asset => 
        asset.name.endsWith('.docs.tar.gz')
      );
  
      if (!docsAsset) {
        console.log(`No docs asset in ${payload.repository.full_name} ${payload.release.tag_name}`);
        return new Response('No docs asset found', { status: 200 });
      }
  
      // Trigger docs repo workflow
      console.log(`Triggering docs update for ${payload.repository.full_name} ${payload.release.tag_name}`);
      
      const dispatchResponse = await fetch(
        `https://api.github.com/repos/${env.DOCS_REPO}/dispatches`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${env.DOCS_REPO_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'docs-release-notifier',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event_type: 'docs_release',
            client_payload: {
              repo: payload.repository.full_name,
              tag: payload.release.tag_name,
              release_url: payload.release.html_url,
              asset_name: docsAsset.name
            }
          })
        }
      );
  
      if (dispatchResponse.ok) {
        console.log('Successfully dispatched to docs repo');
        return new Response('Dispatched', { status: 200 });
      } else {
        const error = await dispatchResponse.text();
        console.error('Dispatch failed:', error);
        return new Response(`Dispatch failed: ${error}`, { status: 500 });
      }
    }
  };
  
  async function verifySignature(payload, signature, secret) {
    if (!signature || !secret) {
      return false;
    }
    
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signed = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );
    
    const expectedSignature = 'sha256=' + Array.from(new Uint8Array(signed))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    return signature === expectedSignature;
}