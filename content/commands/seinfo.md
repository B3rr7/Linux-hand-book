---
name: seinfo
summary: Query SELinux policy components and statistics.
category: System
tags: selinux, policy, security, query
popular: false
---

## Additional Notes

`seinfo` is a tool from the `setools-console` package that displays information about the loaded SELinux policy. It can show statistics, list policy components such as types, roles, users, booleans, classes, permissions, and more. It is the primary command-line tool for inspecting the SELinux security policy.

SELinux (Security-Enhanced Linux) implements mandatory access control (MAC) policies. `seinfo` helps administrators understand the policy structure, find available types, list booleans, and examine transition rules without reading raw policy source files.

## Syntax

```bash
seinfo [options] [filter]
```

## Parameters

- `filter`: Optional pattern to filter results (e.g., a type name to match).

## Common Options

- `-u`, `--user`: List all SELinux users.
- `-r`, `--role`: List all SELinux roles.
- `-t`, `--type`: List all SELinux types (domains).
- `-b`, `--bool`: List all SELinux booleans.
- `-c`, `--class`: List all object classes.
- `--constrain`: Display constraint rules.
- `--common`: Display common permission sets.
- `--sensitivity`: List MLS sensitivities.
- `--category`: List MLS categories.
- `--stats`: Show overall policy statistics (default).
- `-x`, `--line-breaks`: Print one entry per line for lists.
- `--help`: Show usage information.

## Examples

```bash
seinfo --stats
```

Show overall SELinux policy statistics (types, roles, booleans, etc.).

```bash
seinfo -t
```

List all types (domains) defined in the policy.

```bash
seinfo -b
```

List all SELinux booleans and their default values.

```bash
seinfo -u -x
```

List SELinux users, one per line.

## Practical Notes

- `seinfo` queries the currently loaded policy, not policy source files.
- The `-x` option is useful for piping results to `grep` or other tools.
- For policy rule searches, use `sesearch` instead.
- The `setools-console` package must be installed separately on most distributions.
- Policy statistics show counts of types, attributes, booleans, allow rules, and more.
