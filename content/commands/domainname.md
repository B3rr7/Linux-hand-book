---
name: domainname
summary: Show or set the NIS/YP domain name.
category: Network
tags: nis, domain, network, hostname
popular: false
---

## Additional Notes

`domainname` displays or sets the NIS (Network Information Service, formerly YP) domain name of the current system. The NIS domain name is different from the DNS domain name and is used for NIS client-server communication to identify the administrative domain.

Without arguments, `domainname` prints the current NIS domain name. With an argument, it sets the domain name. The NIS domain name is typically configured in `/etc/defaultdomain` or set during system startup. It is often used in conjunction with `ypbind`, `ypserv`, and related NIS tools.

## Syntax

```bash
domainname [nis-domain]
```

## Parameters

- `nis-domain`: The NIS domain name to set. If omitted, the current domain name is displayed.

## Common Options

- `-F`, `--file file`: Read the domain name from a file instead of the command-line argument.
- `-h`, `--help`: Show help text.
- `-V`, `--version`: Show version information.

## Examples

```bash
domainname
```

Show the current NIS domain name.

```bash
sudo domainname mydomain
```

Set the NIS domain name to `mydomain` (requires root).

```bash
sudo domainname -F /etc/defaultdomain
```

Set the NIS domain name from the contents of a file.

## Practical Notes

- The NIS domain name is not the same as the DNS domain name shown by `dnsdomainname` or `hostname -d`.
- Setting the NIS domain name is required before starting NIS services.
- The domain name set with `domainname` is lost after reboot unless stored in a configuration file such as `/etc/defaultdomain` or `/etc/sysconfig/network`.
- Many systems use systemd's `nss-myhostname` or similar and do not require NIS; in those cases `domainname` returns `(none)`.
