---
name: sosreport
summary: Collect system configuration and diagnostic information.
category: Administration
tags: diagnostics, support, system, report, troubleshooting
popular: false
---

## Additional Notes

`sosreport` collects detailed system configuration and diagnostic information into a compressed archive for support and troubleshooting purposes. It gathers data about the system's hardware, kernel, services, networking, storage, packages, logs, and installed software. The generated archive can be attached to support tickets for distribution vendors or used for local forensic analysis.

The tool uses plugins to collect specific types of data. Each plugin targets a subsystem (e.g., networking, storage, kernel, Apache, Docker, etc.). Plugins can be enabled, disabled, or tuned via configuration files. The output is typically a `.tar.gz` or `.tar.xz` archive with a descriptive filename.

## Syntax

```bash
sosreport [options]
```

## Parameters

- `options`: Flags that change how `sosreport` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a`, `--alloptions`: Enable all options for all plugins (may collect sensitive data).
- `-k plugin.option=value`: Pass an option to a specific plugin.
- `-n plug1,plug2`, `--skip-plugins`: Skip the specified plugins.
- `-o plug1,plug2`, `--only-plugins`: Run only the specified plugins.
- `-e plug1,plug2`, `--enable-plugins`: Enable plugins that are normally disabled.
- `--list-plugins`: List all available plugins and their status.
- `-l`, `--log-size size`: Limit individual log file collection to `size` (default: 25 MB).
- `--all-logs`: Collect all available log versions (including rotated logs).
- `-t CASE_ID`, `--ticket-number CASE_ID`: Associate the report with a support ticket number.
- `--batch`: Run in batch mode (non-interactive).
- `-z type`: Compression type (`auto`, `gzip`, `xz`, `bzip2`).
- `-v`, `--verbose`: Show verbose plugin output.
- `--quiet`: Suppress non-essential output.
- `--tmp-dir dir`: Specify a temporary directory for building the report.
- `--build`: Only build the report without archiving (for debugging).

## Examples

```bash
sosreport
```

Collect all standard diagnostic information interactively.

```bash
sosreport --batch --ticket-number 12345
```

Collect diagnostics in batch mode with a ticket number.

```bash
sosreport -n network,storage
```

Collect all data except the networking and storage plugins.

```bash
sosreport -e docker -k docker.allimages=on
```

Enable the Docker plugin and collect all Docker images.

```bash
sosreport --list-plugins
```

List all available plugins and their current enable/disable status.

```bash
sosreport --all-logs -z xz
```

Collect all log files (including rotated) and compress with xz.

## Practical Notes

- The generated archive may contain sensitive information (IP addresses, hostnames, config files). Review before sharing.
- `sosreport` typically prompts for a support case number; use `--batch` to skip prompts.
- The archive is saved to `/var/tmp/` by default with a filename like `sosreport-hostname-date.tar.xz`.
- Plugin names map to system components: `kernel`, `networking`, `storage`, `filesys`, `apache`, `docker`, `yum`, etc.
- On Red Hat-based systems, `sosreport` is the primary tool for preparing data for Red Hat Support.
- The `sos` package provides both `sosreport` and `sos` (a more modern CLI) commands.
