---
name: timedatectl
summary: Control system time, date, and timezone.
category: Administration
tags: time, date, timezone, ntp, systemd
popular: true
---

## Additional Notes

`timedatectl` is part of the systemd suite and manages the system clock, date, time zone, and NTP synchronization. It replaces traditional tools like `date`, `hwclock`, `tzselect`, and `ntpdate` for most administrative tasks on modern Linux systems.

It can query and set the system time, the real-time clock (RTC), the time zone, and enable or disable automatic NTP synchronization. Changes made with `timedatectl` persist across reboots and apply system-wide.

## Syntax

```bash
timedatectl [options] [command]
```

## Commands

- `(no command)`: Show current time, date, time zone, RTC status, and NTP status.
- `status`: Same as default, display current settings.
- `set-time "YYYY-MM-DD HH:MM:SS"`: Set the system time.
- `set-timezone TIMEZONE`: Set the system time zone.
- `set-local-rtc BOOL`: Control whether the RTC uses local time (`1`) or UTC (`0`).
- `set-ntp BOOL`: Enable (`1`) or disable (`0`) automatic NTP synchronization.
- `list-timezones`: List all available time zones.

## Parameters

- `options`: Flags that change how `timedatectl` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--no-pager`: Show output inline instead of using a pager.
- `-H`, `--host USER@HOST`: Operate on a remote host over SSH.
- `-M`, `--machine CONTAINER`: Operate on a local container.

## Examples

```bash
timedatectl
```

Display current time, date, time zone, and NTP status.

```bash
timedatectl list-timezones | grep -i "los_angeles"
```

Search for a specific time zone.

```bash
sudo timedatectl set-timezone America/New_York
```

Change the system time zone.

```bash
sudo timedatectl set-time "2026-06-09 14:30:00"
```

Manually set the system time (disables NTP).

```bash
sudo timedatectl set-ntp true
```

Enable automatic NTP synchronization.

```bash
sudo timedatectl set-local-rtc 1
```

Tell the system that the hardware clock uses local time (not recommended).

## Practical Notes

- Use `timedatectl set-ntp true` to enable NTP; `systemd-timesyncd` handles it automatically.
- Setting the time manually disables NTP. Re-enable it with `set-ntp true` afterward.
- The hardware clock (RTC) should generally use UTC (`set-local-rtc 0`). Using local time can cause issues with dual-boot and time zone changes.
- To configure a custom NTP server, edit `/etc/systemd/timesyncd.conf` and restart `systemd-timesyncd`.
- Always use `sudo` when changing time or date settings.
