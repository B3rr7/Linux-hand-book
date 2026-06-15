---
name: crontab
summary: Install, edit, list, or remove user cron jobs.
category: System
tags: cron, schedule, automation, jobs
popular: true
---

## Additional Notes

`crontab` manages scheduled recurring jobs for users. Cron jobs run commands at specified minutes, hours, days, months, or weekdays.

Use cron for repeated tasks such as backups, cleanup, reports, and maintenance scripts.

## Syntax

```bash
crontab [options]
crontab file
```

## Parameters

- `file`: File containing crontab entries to install.
- `options`: Edit, list, remove, and user controls.

## Common Options

- `-e`: Edit the current user's crontab.
- `-l`: List the current user's crontab.
- `-r`: Remove the current user's crontab.
- `-u USER`: Manage another user's crontab as root.
- `-i`: Prompt before removing with `-r` on some systems.

## Cron Time Format

- Field 1: Minute, 0-59.
- Field 2: Hour, 0-23.
- Field 3: Day of month, 1-31.
- Field 4: Month, 1-12.
- Field 5: Day of week, 0-7 where 0 and 7 often mean Sunday.

## Examples

```bash
crontab -l
```

List your scheduled jobs.

```bash
crontab -e
```

Edit your crontab.

```cron
0 2 * * * /usr/local/bin/backup.sh
```

Run a backup every day at 02:00.

```cron
*/15 * * * * /usr/local/bin/check-service.sh
```

Run a command every 15 minutes.

## Practical Notes

- Use absolute paths inside cron jobs.
- Cron has a smaller environment than your interactive shell.
- Redirect output to a log file when you need diagnostics.
- For complex system jobs, systemd timers may be easier to monitor.
