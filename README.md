# express-stream-demo
An express web server demonstrating an HTTP POST endpoint that streams the length of a request body back in response

## Usage
Deployed to https://express-stream-demo.onrender.com.
1. warm up the service with GET request to https://express-stream-demo.onrender.com/
2. Upload a small file (< 2MB) using Postman or curl similar to below (the `-N` arg is required to disable response buffering)
    ```
    curl -X POST -N --data-binary "@/home/USERNAME/Pictures/Screenshots/small.png" https://express-stream-demo.onrender.com/
    ```
    Expected/Actual Result: we receive the content length received and the response ends
3. Upload a large file (> 4MB) using Postman or curl similar to below (the `-N` arg is required to disable response buffering)
    ```
    curl -X POST -N --data-binary "@/home/USERNAME/Pictures/Screenshots/large.png" https://express-stream-demo.onrender.com/
    ```
    Expected Result: we receive the content length received and the response ends
    Actual Result: we receive some content length received progress updates, but the request stalls out and the response hangs
