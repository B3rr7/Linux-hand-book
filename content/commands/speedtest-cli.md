---
name: speedtest-cli
summary: Command-line interface for internet bandwidth testing.
category: Network
tags: speedtest, bandwidth, network, internet, speed
popular: false
---

## Additional Notes

`speedtest-cli` is a command-line tool for testing internet bandwidth using the Speedtest.net infrastructure. It measures download and upload speeds, latency (ping), and jitter by connecting to geographically distributed test servers. The tool was originally a Python-based unofficial client and later evolved into the official Ookla Speedtest CLI.

The official Ookla CLI (`speedtest`) provides more accurate results and supports the newer Speedtest.net protocol, while the older Python `speedtest-cli` package is open source but no longer updated. Both tools provide JSON output for scripting and automation.

## Syntax

```bash
speedtest-cli [options]
```

## Parameters

- `options`: Flags that change how `speedtest-cli` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--simple`: Show simple output (ping, download, upload only).
- `--secure`: Use HTTPS instead of HTTP for the test connections.
- `--share`: Generate a shareable result image on Speedtest.net.
- `--csv`: Show results as comma-separated values.
- `--json`: Show results as JSON.
- `--list`: List all available Speedtest.net servers.
- `--server SERVER_ID`: Test against a specific server by ID.
- `--mini URL`: Use a Speedtest Mini server at the specified URL.
- `--source IP`: Bind to a specific source IP address.
- `--timeout N`: Set the timeout for each test connection in seconds.
- `--bytes`: Show results in bytes instead of bits.
- `--no-download`: Skip the download test.
- `--no-upload`: Skip the upload test.
- `--single`: Use a single connection instead of multiple concurrent connections.
- `--version`: Show version information.

## Examples

```bash
speedtest-cli
```

Run a full speed test against the closest server.

```bash
speedtest-cli --simple
```

Show a simplified summary of ping, download, and upload speeds.

```bash
speedtest-cli --json
```

Output results in JSON format (useful for scripts).

```bash
speedtest-cli --server 1234
```

Test against a specific server by its ID.

```bash
speedtest-cli --list | head -20
```

List the first 20 available test servers.

```bash
speedtest-cli --share
```

Run the test and generate a shareable results image.

## Practical Notes

- The official `speedtest` CLI by Ookla provides more accurate results than the older `speedtest-cli` Python package.
- Results are displayed in bits per second (Mbps) by default; use `--bytes` for bytes per second.
- Single-threaded tests (`--single`) produce lower speeds but better represent real-world single-connection performance.
- Some networks throttle Speedtest traffic; results may not reflect real-world performance.
- Firewall rules may need to allow connections on various ports for Speedtest to work.
- The `--json` option is ideal for logging bandwidth metrics over time.
