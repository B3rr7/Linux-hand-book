---
name: dnsdomainname
summary: Show the DNS domain name of the system.
category: Network
tags: dns, domain, hostname, network
popular: false
---

## Additional Notes

`dnsdomainname` prints the DNS domain part of the system's fully qualified hostname. It extracts everything after the first dot in the FQDN as returned by `hostname --fqdn`.

On many systems `dnsdomainname` is a wrapper for `hostname -d`. It is useful in scripts that need the domain portion of a machine name, such as for Kerberos realm construction or DNS zone configuration. If the system does not have a domain configured, the output is empty.

## Syntax

```bash
dnsdomainname
```

## Parameters

No parameters are accepted.

## Common Options

- `-d`, `--domain`: Show the DNS domain name (same default behavior as `hostname -d`).
- `-F`, `--file file`: Read the hostname from the specified file and derive the domain.
- `-h`, `--help`: Show help text.
- `-V`, `--version`: Show version information.

## Examples

```bash
dnsdomainname
```

Print the DNS domain name.

```bash
hostname -d
```

Equivalent command. Both produce the same output.

## Practical Notes

- `dnsdomainname` requires the system hostname to be set as a fully qualified domain name (e.g., `server.example.com`).
- The DNS domain name is often used to discover LDAP base DNs, Kerberos realms, and DNS search domains.
- If the command returns nothing, check that `/etc/hostname` contains an FQDN or that `hostname --fqdn` produces a dotted name.
- On most Linux systems, `dnsdomainname` is provided by the `hostname` package and is a symbolic link or alias to `hostname -d`.
