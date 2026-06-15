---
name: mysqladmin
summary: MySQL/MariaDB administration tool.
category: Databases
tags: mysql, mariadb, database, admin, query
popular: false
---

## Additional Notes

`mysqladmin` is an administrative tool for MySQL and MariaDB servers. It performs operations such as creating or dropping databases, checking server status, flushing tables, reloading permissions, and shutting down the server.

It connects to the MySQL server over the network and executes administrative SQL commands. It is useful for both interactive administration and scripting automated database maintenance tasks.

## Syntax

```bash
mysqladmin [options] command [command-options]
```

## Parameters

- `command`: The administrative operation to perform.

## Common Options

- `-u user`, `--user=user`: MySQL user to connect as.
- `-p`, `--password`: Prompt for a password. Can also specify `-ppassword` (no space).
- `-h host`, `--host=host`: Connect to the MySQL server on the specified host.
- `-P port`, `--port=port`: Port number (default 3306).
- `-S socket`, `--socket=socket`: Unix socket file path.
- `-r`, `--relative`: Show relative (delta) values for extended status.
- `-i seconds`, `--sleep=seconds`: Repeat the command at intervals.
- `-c count`, `--count=count`: Number of times to repeat the command.
- `-v`, `--verbose`: Verbose output.

## Commands

- `create dbname`: Create a new database.
- `drop dbname`: Delete a database (and all its tables).
- `status`: Show short server status.
- `extended-status`: Show full server status variables.
- `variables`: Show server system variables.
- `processlist`: Show current server threads/connections.
- `kill id[,id...]`: Kill a connection thread.
- `password newpass`: Change the user's password.
- `ping`: Check if the server is alive.
- `reload`: Reload authorization tables (flush privileges).
- `refresh`: Flush all tables and close log files.
- `flush-privileges`: Reload the grant tables.
- `flush-tables`: Flush all tables.
- `flush-logs`: Flush all log files.
- `flush-hosts`: Flush the host cache.
- `shutdown`: Shut down the MySQL server.
- `version`: Show server version info.
- `start-slave`: Start replication slave.
- `stop-slave`: Stop replication slave.

## Examples

```bash
mysqladmin -u root -p status
```

Check the server status.

```bash
mysqladmin -u root -p create myapp
```

Create a new database called `myapp`.

```bash
mysqladmin -u root -p ping
```

Check if the MySQL server is running.

```bash
mysqladmin -u root -p extended-status
```

Show all server status variables.

```bash
mysqladmin -u root -p processlist
```

Show active connections.

```bash
mysqladmin -u root -p kill 123 456
```

Kill connection threads with IDs 123 and 456.

```bash
mysqladmin -u root -p shutdown
```

Shut down the MySQL server.

```bash
mysqladmin -u root -p -i 5 extended-status | grep Threads_connected
```

Monitor `Threads_connected` every 5 seconds.

## Practical Notes

- Always use a password with `-p`; storing passwords in scripts is a security risk. Use `~/.my.cnf` with restricted permissions instead.
- The `processlist` command frequently shows `Sleep` connections that may be idle connection pools.
- Run `mysqladmin -u root -p flush-hosts` if you see `Host '...' is blocked` errors (too many connection errors).
- For MariaDB-specific features, `mariadb-admin` is the equivalent command.

