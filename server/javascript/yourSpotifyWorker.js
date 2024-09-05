addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newHeaders = new Headers(response.headers)

  // Modify the CSP header
  newHeaders.set('Content-Security-Policy',
    "default-src 'self' * data: *.ismyserveron.net; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' data: *.ismyserveron.net; " +
    "script-src-elem 'self' https://static.cloudflareinsights.com; " +
    "manifest-src 'self' https://acloudflareteamname.cloudflareaccess.com;"
  );

  newHeaders.set('Access-Control-Allow-Origin', "https://yourserver.ismyserveron.net");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
}
