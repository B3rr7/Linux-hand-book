---
name: ypdomainname
summary: Print or set the NIS/YP domain name.
category: System
tags: nis, yp, domain, network, name
popular: false
---

## Additional Notes

`ypdomainname` prints or sets the system's NIS (Network Information Service, formerly Yellow Pages) domain name. It is essentially the same as the `domainname` command and reads/writes the same kernel parameter. The NIS domain name is used to identify which NIS server and maps a system belongs to.

NIS is a legacy directory service for sharing system configuration (users, groups, hosts, etc.) across a network. It has largely been replaced by LDAP and Active Directory. The `ypdomainname` command is part of the `nis` or `yp-tools` package.

## Syntax

```bash
ypdomainname [nis_domain]
```

## Parameters

- `nis_domain`: The NIS domain name to set. Without an argument, prints the current domain name.

## Examples

```bash
ypdomainname
```

Print the current NIS domain name.

```bash
sudo ypdomainname mydomain
```

Set the NIS domain name to `mydomain`.

## Practical Notes

- The NIS domain name is not the same as the DNS domain name (returned by `dnsdomainname` or `hostname -d`).
- Setting the NIS domain name usually requires root privileges.
- The domain name is stored in the kernel and can also be set via `domainname` or `nisdomainname`.
- NIS is considered insecure and its use is discouraged on modern networks.
- To check whether NIS is configured, look for `ypbind` or `domainname` in process listings.
