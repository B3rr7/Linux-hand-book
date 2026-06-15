---
name: ab
summary: Benchmark HTTP server performance with ApacheBench.
category: Network
tags: http, benchmark, apache, performance, load test
popular: true
---

## Additional Notes

`ab` stands for ApacheBench. It sends many HTTP requests to a URL and reports timing, throughput, failed requests, and concurrency behavior. It is useful for quick baseline checks of a web server, reverse proxy, API endpoint, or local development service.

Despite the name, `ab` can test any HTTP server, not only Apache. It is a simple benchmark tool, not a full load-testing platform. Use it for quick measurements and comparisons, then use stronger tools when you need realistic user journeys, multiple endpoints, login flows, or distributed load.

## Installation

On Debian and Ubuntu systems, `ab` is usually provided by `apache2-utils`:

```bash
sudo apt-get install apache2-utils
```

On RHEL, CentOS, Fedora, Rocky Linux, or AlmaLinux systems, it is commonly provided by `httpd-tools`:

```bash
sudo dnf install httpd-tools
```

## Syntax

```bash
ab [options] http://host[:port]/path
ab [options] https://host[:port]/path
```

## Parameters

- `url`: Full HTTP or HTTPS URL to benchmark. Include the scheme and path, such as `http://127.0.0.1:8080/`.
- `requests`: Total number of requests to send, set with `-n`.
- `concurrency`: Number of simultaneous requests, set with `-c`.
- `options`: Headers, POST data, timeout, output, and authentication settings.

## Common Options

- `-n requests`: Total number of requests to perform.
- `-c concurrency`: Number of requests to run at the same time.
- `-t seconds`: Run for a time limit instead of stopping only by request count.
- `-k`: Enable HTTP keep-alive so multiple requests can reuse connections.
- `-H "Header: value"`: Add a custom HTTP header.
- `-C name=value`: Add a cookie.
- `-A user:password`: Send HTTP Basic authentication credentials.
- `-p file`: Send a POST body from a file.
- `-T content-type`: Set the content type for POST data.
- `-i`: Use HEAD requests instead of GET.
- `-s seconds`: Set socket timeout.
- `-q`: Quiet progress output during large runs.
- `-e file.csv`: Write percentile data to a CSV file.
- `-g file.tsv`: Write data suitable for gnuplot or spreadsheet tools.
- `-v level`: Increase verbosity for debugging responses.
- `-V`: Show version information.

## Examples

```bash
ab -n 500 -c 10 http://127.0.0.1:8080/
```

Send 500 total requests with 10 concurrent requests.

```bash
ab -n 1000 -c 50 -k https://example.com/
```

Benchmark with keep-alive enabled.

```bash
ab -n 200 -c 20 -H "Authorization: Bearer TOKEN" https://api.example.com/status
```

Add a custom authorization header.

```bash
ab -n 300 -c 15 -p payload.json -T application/json http://127.0.0.1:3000/api/items
```

Send POST requests using a JSON payload file.

```bash
ab -t 30 -c 25 http://127.0.0.1/
```

Run the benchmark for about 30 seconds.

```bash
ab -n 1000 -c 25 -e percentiles.csv http://127.0.0.1/
```

Save percentile timing data to a CSV file.

## Reading Output

- `Requests per second`: Approximate throughput for this run.
- `Time per request`: Average request time. `ab` prints both per-request and concurrency-adjusted forms.
- `Transfer rate`: Approximate response data throughput.
- `Failed requests`: Requests that did not complete as expected.
- `Non-2xx responses`: Responses outside the 2xx range. These may be normal if the endpoint redirects or denies access.
- `Percentage of the requests served within`: Latency percentile table.

## Practical Notes

- Always include a trailing `/` when benchmarking a site root, such as `http://localhost/`.
- Start with small `-n` and `-c` values, then increase gradually.
- Do not benchmark public or third-party systems without permission.
- `ab` sends repeated requests to one URL. It does not model real browser behavior, assets, sessions, or user workflows.
- High concurrency can exhaust local client limits before the server is actually saturated.
- Use `-k` only when you want to measure keep-alive behavior.
- For production-grade testing, consider tools such as `wrk`, `hey`, `k6`, or JMeter.
