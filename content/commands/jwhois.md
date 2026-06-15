---
name: jwhois
summary: Query domain registration and IP address WHOIS information.
category: Network
tags: whois, domain, ip, lookup, dns
popular: false
---

## Additional Notes

`jwhois` is a client for the WHOIS protocol used to query domain name registration details and IP address allocation information. It connects to WHOIS servers, follows referrals between servers automatically, and displays registration data such as registrant contact info, name servers, and expiration dates.

It is useful for checking domain availability, investigating domain ownership, looking up abuse contacts for IP addresses, and diagnosing DNS or registration issues. On many modern distributions, `jwhois` has been replaced by the `whois` command.

## Syntax

```bash
jwhois [options] query
```

## Parameters

- `query`: The domain name, IP address, or AS number to look up.

## Common Options

- `-h server`, `--whois-server server`: Use a specific WHOIS server instead of the default.
- `-p port`, `--port port`: Connect to a specific port.
- `-r`, `--raw`: Show the raw WHOIS response without any reformatting.
- `--verbose`: Show detailed information about the lookup process.
- `--version`: Display version information.

## Examples

```bash
jwhois example.com
```

Look up WHOIS information for `example.com`.

```bash
jwhois -h whois.verisign-grs.com example.com
```

Query a specific WHOIS server.

```bash
jwhois -r example.com
```

Show raw, unformatted WHOIS output.

## Practical Notes

- WHOIS data varies by TLD and registrar. Some domains use privacy services that hide registrant details.
- The `-r` flag is useful when the formatted output omits fields you need.
- On many systems `jwhois` and `whois` are separate packages; install `jwhois` explicitly if it is not the default.

