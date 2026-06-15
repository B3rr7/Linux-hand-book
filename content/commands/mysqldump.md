---
name: mysqldump
summary: Back up MySQL databases.
category: Databases
tags: database, client, backup
popular: false
---

## Additional Notes

`mysqldump` is a database command used to back up MySQL databases. It exports databases as SQL scripts suitable for backup or migration between servers.

Use `mysqldump --all-databases` to back up all databases. For large databases, `mysqldump --single-transaction` produces a consistent snapshot without locking tables (for InnoDB).

## Syntax

```bash
mysqldump [options] [arguments]
```

## Parameters

- `options`: Flags that change how `mysqldump` behaves.
- `database`: Database name or connection target.
- `arguments`: Operation-specific options, queries, or object names.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
mysqldump --help
man mysqldump
```

## Practical Notes

Options can vary by distribution and package version. Use `man mysqldump`, `mysqldump --help`, or the package documentation for exact syntax.
