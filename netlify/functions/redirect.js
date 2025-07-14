exports.handler = async function(event, context) {
  const path = event.path;
  
  // Check if the path starts with /blog/
  if (path.startsWith('/bloggg/')) {
    // Extract the part after /blog/
    const splat = path.substring(6); // Remove '/blog/' prefix
    
    // Construct the redirect URL
    const redirectUrl = `https://plaros.com/blog/${splat}`;
    
    return {
      statusCode: 200,
      headers: {
        'Location': redirectUrl,
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        message: 'Redirecting...',
        url: redirectUrl
      })
    };
  }
  
  // If not a blog path, return 404
  return {
    statusCode: 404,
    body: JSON.stringify({
      message: 'Not found'
    })
  };
}; 
