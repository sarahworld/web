// - What is HTTP?
// data trasfer between browser and server protocol Hypertext trasfer protocol.

// - What is a URL?
//  

// - What is DNS?
// Domain name system this system converts url to ip addresses and vice versa.

// - What is a query string?
// it is the parametric information or data that goes along with GET http request.

// - What are two HTTP verbs and how are they different?
// GET & POST are two http requests and GET is to retrieve data from the server and post is to write data to the server.

// - What is an HTTP request?
// HTTP request consists of request method, http protocol, url and heads that has hostname, cookies, langiage etc.


// - What is an HTTP response?
// Response consists of HTTP protocol version, response status code, headers consists of content-type, date/time, cookies, caching info etc.


// - What is an HTTP header? Give a couple examples of request and response headers you have seen.

// Request headers example 
// Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
// Accept-Encoding:gzip, deflate, br
// Accept-Language:en-US,en;q=0.9
// Cache-Control:max-age=0
// Connection:keep-alive
// Host:search.r-project.org
// If-Modified-Since:Tue, 23 May 2023 15:46:46 GMT
// If-None-Match:"1d2d-5fc5e4b6de1ec-gzip"
// Referer:https://www.google.com/
// Sec-Ch-Ua:"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
// Sec-Ch-Ua-Mobile:?0
// Sec-Ch-Ua-Platform:"Windows"
// Sec-Fetch-Dest:document
// Sec-Fetch-Mode:navigate
// Sec-Fetch-Site:cross-site
// Sec-Fetch-User:?1
// Upgrade-Insecure-Requests:1
// User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36

//Response headers
// Accept-Ranges:bytes
// Connection:Keep-Alive
// Content-Encoding:gzip
// Content-Length:2898
// Content-Type:text/html
// Date:Thu, 25 May 2023 14:12:42 GMT
// Etag:"1d2d-5fc5e4b6de1ec-gzip"
// Keep-Alive:timeout=5, max=100
// Last-Modified:Tue, 23 May 2023 15:46:46 GMT
// Server:Apache/2.4
// Vary:Accept-Encoding



// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// When you write domain name on browser your browser will look for domain name in the computer cache, if not found it looks
// in the router, still not found it looks in the ISP een not found it looks in the DNS still not found it gives error not found.


// ## ****Part Two: Practice Tools****

// 1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”

// $ curl https://icanhazdadjoke.com/search?term=pirate
// Why couldn't the kid see the pirate movie? Because it was rated arrr!
// What did the pirate say on his 80th birthday? Aye Matey!
// What does a pirate pay for his corn? A buccaneer!
// Why do pirates not know the alphabet? They always get stuck at "C".
// shamsi@LAPTOP-KEPOMDS0:~/springboard$




// 2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*

// $ dig icanhazdadjoke.com

// ; <<>> DiG 9.18.1-1ubuntu1.2-Ubuntu <<>> icanhazdadjoke.com
// ;; global options: +cmd
// ;; Got answer:
// ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 7468
// ;; flags: qr rd ad; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0
// ;; WARNING: recursion requested but not available

// ;; QUESTION SECTION:
// ;icanhazdadjoke.com.            IN      A

// ;; ANSWER SECTION:
// icanhazdadjoke.com.     0       IN      A       104.21.66.15
// icanhazdadjoke.com.     0       IN      A       172.67.198.173

// ;; Query time: 0 msec
// ;; SERVER: 172.29.32.1#53(172.29.32.1) (UDP)
// ;; WHEN: Thu May 25 07:31:43 PDT 2023
// ;; MSG SIZE  rcvd: 86
// 3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.

// shamsi@LAPTOP-KEPOMDS0:~/springboard/web$ python3 -m http.server
// Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
// 127.0.0.1 - - [25/May/2023 07:49:04] "GET / HTTP/1.1" 200 -
// 127.0.0.1 - - [25/May/2023 07:49:04] code 404, message File not found
// 127.0.0.1 - - [25/May/2023 07:49:04] "GET /favicon.ico HTTP/1.1" 404 -

// ## **Part Three: Explore Dev Tools**

// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

