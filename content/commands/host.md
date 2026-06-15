---
name: host
summary: Perform simple DNS lookups.
category: Network
tags: dns, lookup, domain, ip, network
popular: true
---

## Additional Notes

`host` is a simple DNS lookup tool. It resolves names to addresses, addresses to names, and can query specific DNS record types.

It is easier to read than `dig` for quick checks, while `dig` is better for detailed DNS troubleshooting.

## Syntax

```bash
host [options] name [server]
```

## Parameters

- `options`: Flags that change how `host` behaves.
- `name`: Domain name or IP address to look up.

## Common Options

- `-t TYPE`: Query record type such as `A`, `AAAA`, `MX`, `TXT`, or `NS`.
- `-a`: Show all available information.
- `-v`: Verbose output.
- `-W SECONDS`: Set wait timeout.

## Examples

```bash
host example.com
```

Resolve a domain.

```bash
host 8.8.8.8
```

Reverse lookup an IP address.

```bash
host -t MX example.com
```

Query mail records.

```bash
host -t TXT example.com
```

Query TXT records.

```bash
host example.com 1.1.1.1
```

Ask a specific DNS server.

## Practical Notes

- Use `dig +short` for script-friendly output.
- DNS results may differ by resolver and cache.
- If `ping 8.8.8.8` works but `host example.com` fails, suspect DNS.
