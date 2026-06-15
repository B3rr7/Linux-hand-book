---
name: nslookup
summary: Query DNS records interactively or directly.
category: Network
tags: dns, lookup, domain, resolver, network
popular: false
---

## Additional Notes

`nslookup` queries DNS records. It is older but still common on many systems and tutorials.

For modern detailed DNS work, `dig` is usually preferred. For quick simple checks, `host` is often easier.

## Syntax

```bash
nslookup name [server]
nslookup
```

## Parameters

- `options`: Flags that change how `nslookup` behaves.
- `name`: Domain name or IP address to query.

## Examples

```bash
nslookup example.com
```

Resolve a domain using the default resolver.

```bash
nslookup example.com 8.8.8.8
```

Ask a specific DNS server.

```bash
nslookup -type=MX example.com
```

Query MX records.

```bash
nslookup
```

Start interactive mode.

```text
> server 1.1.1.1
> set type=TXT
> example.com
> exit
```

Use interactive DNS queries.

## Practical Notes

- `nslookup` is widely available, including on Windows.
- Use `dig` when you need detailed sections, trace, or precise DNS debugging.
- DNS failures can be resolver-specific.
- Check `/etc/resolv.conf` or `resolvectl status` for resolver configuration.
