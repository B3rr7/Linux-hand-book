---
name: nisdomainname
summary: Show or set the NIS (Network Information Service) domain name.
category: Network
tags: nis, domain, network, yellow-pages, yp
popular: false
---

## Additional Notes

`nisdomainname` prints or sets the NIS (Network Information Service, formerly called Yellow Pages) domain name for the current system. The NIS domain name is used by NIS clients and servers to identify which NIS domain the system belongs to.

It is distinct from the DNS domain name. The NIS domain name is typically set at boot time by startup scripts and is stored in the `/proc/sys/kernel/domainname` kernel parameter.

## Syntax

```bash
nisdomainname [name]
```

## Parameters

- `name`: The NIS domain name to set. If omitted, the current NIS domain name is displayed.

## Options

- `--help`: Display help and exit.
- `--version`: Show version information.

## Examples

```bash
nisdomainname
```

Show the current NIS domain name.

```bash
nisdomainname mydomain
```

Set the NIS domain name to `mydomain`.

```bash
sudo nisdomainname example-nis
```

Setting the domain name typically requires root privileges.

## Practical Notes

- The NIS domain name is not the same as the DNS domain name. A system can have a DNS domain of `example.com` and an NIS domain of `my-nis-domain`.
- NIS is largely obsolete and has been replaced by LDAP, Active Directory, or SSSD. It is considered insecure for modern environments.
- The `domainname` command (without the `nis-` prefix) is often an alias for `nisdomainname`.
- The NIS domain name can also be set via the `NISDOMAIN` environment variable.

