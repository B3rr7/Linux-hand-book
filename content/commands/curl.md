---
name: curl
summary: Transfer data from or to URLs.
category: Network
tags: http, url, download, api, request, network
popular: true
---

## Additional Notes

`curl` sends requests to URLs and prints or saves the response. It supports HTTP, HTTPS, FTP, and many other protocols, but it is most commonly used for web requests and API testing.

Unlike a browser, `curl` shows you the request/response behavior directly, which makes it useful for debugging, scripting, and learning HTTP.

## Syntax

```bash
curl [options] URL
```

## Parameters

- `options`: Flags that change how `curl` behaves.
- `URL`: The URL to fetch or send data to.

## Common Options

- `-o FILE`: Save output to a file.
- `-O`: Save using the remote filename.
- `-L`: Follow redirects.
- `-I`, `--head`: Show response headers only.
- `-i`: Include response headers in output.
- `-X METHOD`: Set HTTP method.
- `-H HEADER`: Add a request header.
- `-d DATA`: Send request body data.
- `-u USER:PASS`: Use basic authentication.
- `-k`, `--insecure`: Ignore TLS certificate validation errors.
- `-v`: Verbose connection details.
- `-s`: Silent mode.

## Examples

```bash
curl https://example.com
```

Fetch a page and print it.

```bash
curl -L https://example.com
```

Follow redirects.

```bash
curl -O https://example.com/file.zip
```

Download a file using the remote filename.

```bash
curl -o page.html https://example.com
```

Save output to a specific file.

```bash
curl -I https://example.com
```

Show HTTP response headers.

```bash
curl -H "Authorization: Bearer TOKEN" https://api.example.com/me
```

Send an authorization header.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"test"}' https://api.example.com/items
```

Send a JSON POST request.

## Practical Notes

- Use `-L` when downloads produce a small redirect page instead of the expected file.
- Use `-I` to inspect headers before downloading.
- Avoid pasting real tokens into shell history on shared systems.
- Use `-k` only for testing; it disables certificate verification.
- For simple file downloads, `wget` may be more convenient. For APIs, `curl` is usually better.
