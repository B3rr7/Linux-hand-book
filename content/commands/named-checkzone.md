---
name: named-checkzone
summary: Check BIND DNS zone file syntax and validity.
category: Network
tags: dns, bind, zone, validate, named
popular: false
---

## Additional Notes

`named-checkzone` validates the syntax and consistency of BIND DNS zone files. It checks for correct resource record formatting, valid domain names, proper TTL values, serial number issues, and referential integrity (e.g., that NS records point to valid A records).

It is an essential tool before reloading a zone in a production BIND nameserver. Running `named-checkzone` on a zone file catches syntax errors that would otherwise cause the zone to fail to load, potentially disrupting DNS service.

## Syntax

```bash
named-checkzone [options] zone-name zone-file
```

## Parameters

- `zone-name`: The DNS zone name (e.g., `example.com`).
- `zone-file`: The path to the zone file to check.

## Common Options

- `-q`: Quiet mode; only output error messages.
- `-v`: Verbose output showing records being checked.
- `-d`: Enable debugging output.
- `-D`: Detailed debugging.
- `-c class`: Specify the DNS class (`IN` for internet, default).
- `-j`: Use journal file if present.
- `-k mode`: Check for DNSSEC key coverage.
- `-L serial`: Override the serial number found in the zone.
- `-m mode`: Set the check mode for MX records (`ignore`, `warn`, `fail`).
- `-M mode`: Set the check mode for name server (NS) records.
- `-S mode`: Set the check mode for stability.
- `-t dir`: Chroot directory to prepend to file paths.
- `-w dir`: Directory path for `$INCLUDE` files.
- `-s`: Check Sender Policy Framework (SPF) records.
- `-l`: List zones that need to be checked (BIND 9.18+).
- `-o file`: Write the optimized zone file to the specified file.

## Examples

```bash
named-checkzone example.com /var/named/example.com.zone
```

Check the zone file for `example.com`.

```bash
named-checkzone -q example.com /var/named/example.com.zone
```

Quiet mode; report only errors.

```bash
named-checkzone -s example.com /var/named/example.com.zone
```

Include SPF record validation.

```bash
named-checkzone -o /tmp/example-optimized.zone example.com /var/named/example.com.zone
```

Check and write an optimized version of the zone file.

## Practical Notes

- Always run `named-checkzone` after editing a zone file and before reloading the nameserver.
- The serial number should be incremented each time the zone file is modified; `named-checkzone` will warn if it has not changed.
- Common errors include missing trailing dots on FQDNs, incorrect TTL values, and unbalanced parentheses.
- For reverse DNS zones, the zone name is the reverse IP range (e.g., `1.168.192.in-addr.arpa`).

