const http = require('http')
http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}/`);
    console.log(url)
    console.log(req.method)
    if(url.pathname.includes('users') && req.method === 'GET'){
        if(url.searchParams.get('name') === 'thao'){
            res.write(url.searchParams.toString())
        }
        //res.write('in get method')
    }
    //console.log(req.url, req.method)
    //res.write('hello world')
    res.end()
}).listen(3000, () => console.log('listening on 3000...'))


