---
name: hostid
summary: Print the numeric identifier for the current host.
category: System
tags: host, identifier, network, system
popular: false
---

## Additional Notes

`hostid` prints the unique numeric identifier of the current host as a 32-bit hexadecimal number. This identifier is typically set at system installation time and stored in `/etc/hostid` or derived from the system's network address.

The host ID is used by some software licensing systems to bind licenses to a specific machine. It can be set manually with the `hostid` command (as root) or by writing to `/etc/hostid`. The value is not the same as the machine's IP address or hostname.

## Syntax

```bash
hostid [options]
```

## Parameters

- `options`: Flags that change how `hostid` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--help`: Display help.
- `--version`: Show version information.

## Examples

```bash
hostid
```

Print the current host ID as a hexadecimal number.

## Practical Notes

- The output is a single hexadecimal string, such as `002a3f44`.
- The host ID can be set with `hostid NEWID` (requires root) or by writing a 4-byte value to `/etc/hostid`.
- Host IDs are used by some enterprise software (e.g., Oracle, some FlexLM applications) for license locking.
- Changing the host ID may invalidate existing software licenses.
- The host ID is usually derived from the IP address or a random value generated at installation time.
