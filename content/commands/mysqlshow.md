---
name: mysqlshow
summary: Display database, table, and column information for MySQL/MariaDB.
category: Databases
tags: mysql, mariadb, database, schema, inspect
popular: false
---

## Additional Notes

`mysqlshow` lists databases, tables, and columns in a MySQL or MariaDB server. It provides a quick way to inspect the database schema without writing SQL queries. It can show database names, table names, column definitions, and index information.

It is useful for exploring unfamiliar databases, verifying schema changes, and scripting database inventory tasks.

## Syntax

```bash
mysqlshow [options] [database [table [column]]]
```

## Parameters

- `database`: The database to show tables from. If omitted, all databases are listed.
- `table`: The table to show columns from. Requires a database name.
- `column`: The column to show details for. Requires both a database and table name.

## Common Options

- `-u user`, `--user=user`: MySQL user to connect as.
- `-p`, `--password`: Prompt for a password.
- `-h host`, `--host=host`: Connect to the specified host.
- `-P port`, `--port=port`: Port number.
- `-t`, `--show-table-type`: Show the table type for each table.
- `-k`, `--keys`: Show indexes for the table.
- `-i`, `--status`: Show additional table status information (row count, data size, etc.).
- `--count`: Show row count for tables.
- `-v`, `--verbose`: Verbose output.

## Examples

```bash
mysqlshow -u root -p
```

List all databases on the server.

```bash
mysqlshow -u root -p mydb
```

List all tables in the `mydb` database.

```bash
mysqlshow -u root -p mydb users
```

Show all columns in the `users` table.

```bash
mysqlshow -u root -p mydb users email
```

Show details for the `email` column in the `users` table.

```bash
mysqlshow -u root -p -k mydb users
```

Show indexes on the `users` table.

```bash
mysqlshow -u root -p -i mydb
```

Show tables with extended status (engine, row count, size).

## Practical Notes

- Without arguments, `mysqlshow` requires the `SHOW DATABASES` privilege.
- The `--count` option is useful for quickly comparing row counts across tables.
- For more detailed schema inspection, use `mysqldump --no-data` or connect with `mysql` and run `DESCRIBE table;`.

