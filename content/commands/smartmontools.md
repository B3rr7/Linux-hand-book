---
name: smartmontools
summary: Monitor and control storage system S.M.A.R.T. data.
category: System
tags: smart, disk, monitoring, health, storage
popular: false
---

## Additional Notes

`smartmontools` is a package of utilities for monitoring storage device health using the S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) system. The two primary commands are `smartctl` (command-line query and control) and `smartd` (background daemon for proactive monitoring). S.M.A.R.T. is built into most modern ATA/SATA, SCSI/SAS, and NVMe drives.

S.M.A.R.T. monitors various drive attributes such as reallocated sector counts, spin-up time, temperature, error rates, and power-on hours. By tracking these attributes over time, imminent drive failures can often be predicted before data loss occurs. The daemon `smartd` can be configured to send email alerts or run scripts when thresholds are exceeded.

## Syntax

```bash
smartctl [options] device
smartd [options]
```

## Parameters

- `device`: The storage device path, e.g., `/dev/sda`, `/dev/nvme0`.

## Common Options (smartctl)

- `-i`, `--info`: Display device identity information (model, serial, firmware, version).
- `-H`, `--health`: Show a brief health status (PASSED or FAILED).
- `-A`, `--attributes`: Display all S.M.A.R.T. attributes and their values.
- `-a`, `--all`: Show all S.M.A.R.T. information for the device.
- `-l error`: Show the error log.
- `-l selftest`: Show the self-test log.
- `-t short`: Run a short self-test in background.
- `-t long`: Run a long/extended self-test in background.
- `-t conveyance`: Run a conveyance self-test (quick check after transport).
- `-c`, `--capabilities`: Show device S.M.A.R.T. capabilities and self-test status.
- `-s on/off`: Enable or disable S.M.A.R.T. on the device.
- `-x`, `--xall`: Show extensive information including vendor-specific details.
- `-d type`: Specify the device type (`ata`, `scsi`, `nvme`, `sat`, `usbprolific`, etc.).

## Common Options (smartd)

- `-d`, `--debug`: Run in debug mode (foreground, no daemonization).
- `-i`, `--interval N`: Set the check interval in seconds (default: 1800).
- `-A prefix`, `--attributelog prefix`: Log attribute changes to files.
- `-q`, `--quiet`: Suppress log messages during normal operation.
- `-p pidfile`: Specify a PID file location.
- `-s`, `--savestates prefix`: Save device states to files.

## Examples

```bash
smartctl -i /dev/sda
```

Show identity information for `/dev/sda`.

```bash
smartctl -H /dev/nvme0n1
```

Check the health status of an NVMe drive.

```bash
smartctl -A /dev/sda
```

Display all S.M.A.R.T. attributes for `/dev/sda`.

```bash
smartctl -a /dev/sdb > smart_sdb.txt
```

Save all S.M.A.R.T. information for `/dev/sdb` to a file.

```bash
smartctl -t long /dev/sda
```

Start a long self-test on `/dev/sda` (background, poll with `-l selftest`).

```bash
smartctl -l error /dev/sda
```

Show the error log, which records past read/write/seek errors.

```bash
smartd -d -i 3600
```

Run `smartd` in debug mode with a 1-hour check interval.

## Key S.M.A.R.T. Attributes

- `Reallocated_Sector_Ct`: Sectors that have been remapped to spare areas. Increasing values indicate a failing drive.
- `Current_Pending_Sector`: Sectors waiting to be remapped. A sign of instability.
- `Raw_Read_Error_Rate`: Frequency of read errors (varies by manufacturer interpretation).
- `Spin_Retry_Count`: Number of failed spin-up attempts.
- `Temperature_Celsius`: Drive temperature. Sustained high temperatures reduce drive lifespan.
- `Power_On_Hours`: Total hours the drive has been powered on.
- `Wear_Leveling_Count` (SSD/NVMe): Indicates remaining NAND flash lifetime for SSDs.

## Practical Notes

- S.M.A.R.T. can provide early warning of mechanical failure, but not all failures are predicted (e.g., sudden electronic failure).
- A "PASSED" health status does not guarantee the drive is healthy; it only means no critical thresholds have been crossed.
- Monitor `Reallocated_Sector_Ct` over time; any increase warrants investigation and backup.
- Run `smartctl -t long` on new drives to establish a baseline.
- `smartd` is configured via `/etc/smartd.conf`.
- Enabling S.M.A.R.T. usually requires `-s on` for ATA drives; most modern drives have it enabled by default.
- NVMe drives use a different health information format (accessed via NVMe commands).
- For SSDs, monitor `Media_Wearout_Indicator` and `Percent_Lifetime_Remaining` attributes.
