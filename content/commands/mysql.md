---
name: mysql
summary: Open a MySQL client session.
category: Databases
tags: database, client, backup
popular: false
---

## Additional Notes

`mysql` is a database command used to open a MySQL client session. It is the standard command-line client for interacting with MySQL and MariaDB databases interactively or via scripts.

Use `mysql -u USER -p DATABASE` to connect. Use `mysql -e "QUERY"` to execute a single query non-interactively from a script or command line.

## Syntax

```bash
mysql [options] [arguments]
```

## Parameters

- `options`: Flags that change how `mysql` behaves.
- `database`: Database name or connection target.
- `arguments`: Operation-specific options, queries, or object names.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
mysql --help
man mysql
```

## Practical Notes

Options can vary by distribution and package version. Use `man mysql`, `mysql --help`, or the package documentation for exact syntax.
