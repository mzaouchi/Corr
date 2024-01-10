const http = require('http')

const port = 3000

http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>' )
    res.end()
}).listen(port,console.log(`Mar7bé bik`))