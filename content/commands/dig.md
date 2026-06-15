---
name: dig
summary: Query DNS records.
category: Network
tags: dns, domain, lookup, network, troubleshoot
popular: true
---

## Additional Notes

`dig` queries DNS servers and prints detailed DNS answers. It is useful for troubleshooting domain names, records, resolvers, and propagation.

Compared with `host` or `nslookup`, `dig` gives more detailed output and is preferred by many administrators.

## Syntax

```bash
dig [@server] name [type] [options]
```

## Parameters

- `options`: Flags that change how `dig` behaves.
- `name`: Domain name or IP address to query.

## Common Record Types

- `A`: IPv4 address.
- `AAAA`: IPv6 address.
- `MX`: Mail exchanger.
- `NS`: Name servers.
- `TXT`: Text records.
- `CNAME`: Canonical name alias.
- `SOA`: Start of authority.

## Common Options

- `+short`: Print short answer only.
- `+trace`: Trace resolution from root servers.
- `+noall +answer`: Show only answer section.
- `@SERVER`: Query a specific DNS server.
- `-x IP`: Reverse DNS lookup.

## Examples

```bash
dig example.com
```

Query default A records.

```bash
dig example.com +short
```

Show a short result.

```bash
dig example.com MX
```

Query mail records.

```bash
dig @8.8.8.8 example.com A
```

Ask a specific DNS resolver.

```bash
dig -x 8.8.8.8
```

Reverse lookup an IP address.

```bash
dig example.com +trace
```

Trace DNS resolution path.

## Practical Notes

- DNS answers can differ between resolvers because of cache, split DNS, or propagation.
- Use `+short` for scripts and quick checks.
- Use `resolvectl status` to see system resolver settings on many systemd systems.
- DNS failure can break tools even when direct IP connectivity works.
