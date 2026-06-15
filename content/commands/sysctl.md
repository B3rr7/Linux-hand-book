---
name: sysctl
summary: Configure kernel parameters at runtime.
category: System
tags: kernel, parameters, sysctl, system, configuration
popular: false
---

## Additional Notes

`sysctl` reads and modifies kernel parameters at runtime. It interfaces with the `/proc/sys/` virtual filesystem, where each file corresponds to a kernel parameter. Parameters control a wide range of kernel behavior: networking (IP forwarding, buffer sizes), virtual memory (swappiness, dirty page ratios), security (kernel pointers, core dumps), filesystems, and more.

Changes made with `sysctl` are immediate but do not persist across reboots unless written to `/etc/sysctl.conf` or a file under `/etc/sysctl.d/`. The `sysctl -p` command loads settings from configuration files. The kernel parameter namespace uses a dotted notation corresponding to the filesystem path (e.g., `net.ipv4.ip_forward` maps to `/proc/sys/net/ipv4/ip_forward`).

## Syntax

```bash
sysctl [options] [parameter[=value] ...]
```

## Parameters

- `parameter`: The name of a kernel parameter to read (e.g., `net.ipv4.ip_forward`).
- `parameter=value`: Set a kernel parameter to the specified value.

## Common Options

- `-a`, `--all`: Display all currently available kernel parameters.
- `-A`: Display all parameters in a table format (like `-a` but with more detail).
- `-n`, `--values`: Print only the values, not the parameter names.
- `-e`, `--ignore`: Ignore errors about unknown parameters.
- `-N`, `--names`: Print only the parameter names, not the values.
- `-q`, `--quiet`: Suppress output when setting parameters.
- `-w`, `--write`: Enable writing a value to a parameter.
- `-p file`, `--load=file`: Load settings from a file (default: `/etc/sysctl.conf`).
- `-r`, `--pattern pattern`: Apply operations only to parameters matching the regular expression.
- `--system`: Load settings from all system sysctl configuration files.
- `-b`, `--binary`: Print values in binary form (for parameters with binary data).

## Examples

```bash
sysctl -a
```

Display all kernel parameters and their current values.

```bash
sysctl net.ipv4.ip_forward
```

Check whether IP forwarding is enabled.

```bash
sysctl -w net.ipv4.ip_forward=1
```

Enable IP forwarding (routing) immediately.

```bash
sysctl -w vm.swappiness=10
```

Reduce the kernel's tendency to swap (lower = less swapping).

```bash
sysctl -p
```

Load settings from `/etc/sysctl.conf`.

```bash
sysctl --system
```

Load all sysctl configuration files from `/etc/sysctl.d/`, `/run/sysctl.d/`, `/usr/lib/sysctl.d/`.

```bash
sysctl -n kernel.hostname
```

Show only the hostname value (not the parameter name).

```bash
sysctl -w fs.file-max=100000
```

Increase the maximum number of open file descriptors system-wide.

## Common Parameters

- `net.ipv4.ip_forward`: Enable IP forwarding (for routers/VPNs).
- `net.ipv4.conf.all.rp_filter`: Enable reverse path filtering.
- `net.ipv4.tcp_syncookies`: Enable SYN cookies (DoS protection).
- `vm.swappiness`: Tendency to swap (0-100, default 60).
- `vm.dirty_ratio`: Percentage of memory that can be dirty before blocking.
- `vm.dirty_background_ratio`: Percentage of dirty memory before background writeback.
- `kernel.hostname`: System hostname.
- `kernel.core_uses_pid`: Append PID to core dump filenames.
- `fs.file-max`: Maximum number of open file handles system-wide.
- `net.core.somaxconn`: Maximum listen backlog.
- `net.ipv4.tcp_keepalive_time`: TCP keepalive interval.

## Practical Notes

- `sysctl -a` output can be very long; pipe to `less` or `grep` for filtering.
- Persistent settings go in `/etc/sysctl.conf` or `/etc/sysctl.d/*.conf`.
- The `--system` flag loads files in alphanumeric order from multiple directories.
- Boolean parameters use `0` (false/off) and `1` (true/on).
- Changing some parameters (like network buffers) can significantly impact performance.
- Some kernel parameters are read-only and cannot be modified at runtime.
- Rule of thumb: set `vm.swappiness=10` for desktops/servers to reduce unnecessary swapping.
- In containers, some sysctl parameters may be restricted for security reasons.
