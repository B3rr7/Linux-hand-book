---
name: neofetch
summary: Display system information in the terminal with an ASCII logo.
category: System
tags: system, info, fetch, ascii, logo, screenfetch
popular: true
---

## Additional Notes

`neofetch` is a command-line system information tool that displays details about your operating system, kernel, hardware, and desktop environment alongside an ASCII art logo of your distribution. It is commonly used to share system specs in forums, IRC, or social media, or simply as a quick system overview.

Neofetch is highly customizable through command-line flags and configuration files. You can control which information is displayed, the logo style, colors, and formatting. It supports many operating systems beyond Linux, including macOS, BSD, and Windows (via WSL).

## Syntax

```bash
neofetch [options]
```

## Parameters

- `options`: Flags that change how `neofetch` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--help`: Show help and all available options.
- `--version`: Show version information.
- `--info "line1 line2 ..."`: Customize the order and content of displayed lines.
- `--ascii_distro distro`: Force a specific distribution logo.
- `--ascii file`: Use a custom ASCII art from a file.
- `--ascii_colors N N ...`: Set the ASCII logo colors (color numbers).
- `--color_blocks on/off`: Enable or disable color blocks.
- `--cpu_display mode`: CPU display mode (`info`, `bar`, `infobar`, `off`).
- `--memory_display mode`: Memory display mode.
- `--disk_display mode`: Disk display mode.
- `--backend backend`: Image backend for displaying images (`ascii`, `kitty`, `sixel`, `caca`, `chafa`, etc.).
- `--off`: Disable all ASCII art (text only).
- `--scrot`: Take a screenshot after displaying (experimental).
- `--loop`: Continuously update every 3 seconds (monitoring mode).
- `--stdout`: Print info without any ASCII art or colors (for scripts).
- `--config file`: Use a custom configuration file.
- `--config off`: Disable the configuration file.

## What Neofetch Displays

Typical output includes:

- **OS**: Distribution name and version.
- **Host**: Device model (laptops often show the model name).
- **Kernel**: Linux kernel version.
- **Uptime**: How long the system has been running.
- **Packages**: Number of installed packages (varies by package manager).
- **Shell**: Current shell and version.
- **Resolution**: Display resolution(s).
- **DE**: Desktop Environment (GNOME, KDE, etc.).
- **WM**: Window Manager.
- **WM Theme**: Window Manager theme.
- **Theme**: GTK/icon theme.
- **Icons**: Icon theme.
- **Terminal**: Terminal emulator.
- **Terminal Font**: Terminal font.
- **CPU**: Processor model and sometimes usage.
- **GPU**: Graphics card model.
- **Memory**: Used/total memory.

## Examples

```bash
neofetch
```

Display system information with the distribution logo.

```bash
neofetch --off
```

Display system information as text only, without ASCII art.

```bash
neofetch --ascii_distro arch
```

Force the Arch Linux logo regardless of the actual distribution.

```bash
neofetch --cpu_display bar --memory_display bar
```

Show CPU and memory usage as horizontal bars.

```bash
neofetch --stdout
```

Print info text without any ASCII art or colors (pipe-friendly).

```bash
neofetch --loop
```

Continuously update the display every 3 seconds.

## Customization

Create or edit `~/.config/neofetch/config.conf` to:

- Change the order of displayed lines.
- Add or remove specific info lines.
- Change colors, spacing, and ASCII logo.
- Set custom disk and memory thresholds for colorization.

## Practical Notes

- Neofetch is no longer actively maintained upstream as of 2024. Successors include `fastfetch` and `fetch`.
- The ASCII logo is selected automatically based on `/etc/os-release` or similar files.
- For better performance and more accurate detection, consider `fastfetch` as a modern alternative.
- Some information (like GPU model) may require `lspci` or `glxinfo` to be installed.

