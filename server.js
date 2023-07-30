// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createServer } = require('https')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parse } = require('url')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const next = require('next')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const httpsOptions = {
  key: fs.readFileSync('./certs/localhost.key'),
  cert: fs.readFileSync('./certs/localhost.crt'),
}
const { execFile } = require('child_process');

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(5678, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log('> Server started on https://localhost:5678')
  })
})

function openBrowser(url) {
  if (/^win/.test(process.platform)) {
    execFile('cmd', ['/c', 'start', url]);
  } else {
    execFile('xdg-open', [url]);
  }
}

openBrowser('https://localhost:5678');
