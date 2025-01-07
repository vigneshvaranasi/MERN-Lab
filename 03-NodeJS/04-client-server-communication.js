import http from 'http'

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  if (req.url === '/') {
    res.end('Hello, this is http server.')
  } else if (req.url === '/about') {
    res.end('Welcome to the About page.')
  } else {
    res.end('404: Page not found.')
  }
})

let port = 5000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
