import requests
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

TARGET_SERVER = 'http://localhost:3060'

class ProxyHandler(BaseHTTPRequestHandler):
    def _handle_request(self, method):
        req_headers = dict(self.headers)
        req_url = TARGET_SERVER + self.path
        req_body = None
        if self.headers['content-length']:
            req_body = self.rfile.read(int(self.headers['content-length']))

        res = requests.request(method=method, url=req_url, data=req_body, headers=req_headers)
        self.send_response(res.status_code)
        for key in res.headers:
            self.send_header(key, res.headers[key])
        self.end_headers()
        self.wfile.write(res.content)

    def do_GET(self):
        self._handle_request('get')
    
    def do_HEAD(self):
        self._handle_request('put')
    
    def do_POST(self):
        self._handle_request('post')
    
    def do_PUT(self):
        self._handle_request('put')
    
    def do_PATCH(self):
        self._handle_request('put')
    
    def do_DELETE(self):
        self._handle_request('delete')

with ThreadingHTTPServer(('', 8080), ProxyHandler) as server:
    print('Proxy is running on [:::]8080')
    server.serve_forever()
