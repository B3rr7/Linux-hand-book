---
name: pssh
summary: Parallel SSH for executing commands on multiple hosts.
category: Network
tags: ssh, parallel, remote, execution, cluster, administration
popular: false
---

## Additional Notes

`pssh` (Parallel SSH) runs SSH commands on multiple remote hosts simultaneously. It connects to a list of hosts, executes a command on each, and collects the output. Results are displayed as each host completes, optionally organized by host.

`pssh` is invaluable for system administrators managing multiple servers. Common uses include deploying configuration files, checking system status across a fleet, running package updates, restarting services, and gathering logs from many machines. The `pssh` suite includes several companion tools: `pscp` (parallel copy), `prsync` (parallel rsync), `pnuke` (parallel kill), and `pslurp` (parallel download).

## Syntax

```bash
pssh [options] command
```

## Parameters

- `command`: The command to run on each remote host.

## Common Options

- `-h file`, `--hosts file`: Read hostnames from a file (one per line).
- `-H host`, `--host host`: Specify a single host. Can be used multiple times.
- `-l user`, `--user user`: SSH username for all hosts.
- `-p N`, `--par N`: Run N SSH processes in parallel (default 32).
- `-o dir`, `--outdir dir`: Save standard output of each host to files in this directory.
- `-e dir`, `--errdir dir`: Save error output of each host to files in this directory.
- `-i`: Display standard output and error for each host inline.
- `-t timeout`, `--timeout timeout`: Set connection timeout in seconds.
- `-x options`, `--extra-args options`: Pass extra SSH command-line options.
- `-X option`: Pass a single SSH option.
- `-O option=value`: Set an SSH configuration option.
- `-A`, `--askpass`: Prompt for a password (use SSH keys instead when possible).
- `-I`, `--inline`: Read input from stdin and send it to each ssh process.
- `-v`, `--verbose`: Verbose output.
- `--hosts-file file`: Alternate name for `-h`.

## Examples

```bash
pssh -h hosts.txt "uptime"
```

Run `uptime` on all hosts listed in `hosts.txt`.

```bash
pssh -H web1.example.com -H web2.example.com "systemctl status nginx"
```

Check nginx status on two web servers.

```bash
pssh -h servers.txt -l root -i "df -h"
```

Run `df -h` as root on all servers with output shown inline.

```bash
pssh -h hosts.txt -o /tmp/output "uname -r"
```

Save kernel version output for each host to `/tmp/output/`.

```bash
pscp -h hosts.txt /etc/hosts /etc/hosts
```

Copy `/etc/hosts` to all hosts in parallel.

```bash
pnuke -h hosts.txt nginx
```

Kill all nginx processes on all hosts in parallel.

```bash
prsync -h hosts.txt -l /etc/nginx/ /etc/nginx/
```

Synchronize the nginx configuration directory to all hosts.

```bash
pssh -h servers.txt -t 10 "apt update && apt upgrade -y"
```

Run package updates with a 10-second timeout per host.

## Practical Notes

- Use SSH key-based authentication for passwordless operation. Set `pssh` will prompt for passwords with `-A`, but keys are strongly preferred.
- The host file format is one host per line, optionally with `:port` suffix (e.g., `server.example.com:2222`).
- Control the parallelism with `-p`. Start with `-p 10` for network-friendly behavior and increase as needed.
- Output files in `-o` are named by hostname. Combine with `grep` to search across results: `grep -l "error" /tmp/output/*`.
- `pssh` is also known as `parallel-ssh`. Install with `sudo apt install pssh` on Debian/Ubuntu.
- For modern alternatives, consider `ansible` (push-based configuration management), `pdsh` (parallel distributed shell), or `clusterssh` (interactive multi-terminal).
- The environment variable `PSSH_NODENUM` is set in each parallel process, allowing per-host index-based logic.
