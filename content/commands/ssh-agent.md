---
name: ssh-agent
summary: SSH authentication agent for managing private keys.
category: Network
tags: ssh, agent, authentication, key, security
popular: false
---

## Additional Notes

`ssh-agent` is a program that holds private SSH keys in memory for use by SSH client programs. It runs in the background, either as a daemon or launched per-session, and provides key-based authentication without requiring repeated passphrase entry. Once a key is added via `ssh-add`, any SSH client can use it through the agent.

The agent communicates with SSH clients through a Unix domain socket, whose path is stored in the `SSH_AUTH_SOCK` environment variable. The `SSH_AGENT_PID` variable contains the process ID of the agent. When using agent forwarding (`ssh -A`), the local agent's socket is forwarded to remote sessions, allowing key-based authentication from remote hosts without storing keys there.

## Syntax

```bash
ssh-agent [options] [command [arguments...]]
ssh-agent -c | -s
```

## Parameters

- `options`: Flags that change how `ssh-agent` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`: Generate C-shell compatible output (setenv commands).
- `-s`: Generate Bourne shell compatible output (export commands).
- `-k`: Kill the current agent (using `SSH_AGENT_PID`).
- `-d`: Debug mode (run in foreground, show debug output).
- `-a bind_address`: Bind the agent socket to a specific address.
- `-t life`: Set a default maximum lifetime for loaded keys in seconds.
- `-E fingerprint_hash`: Specify the fingerprint hash algorithm (sha256, md5).
- `-x`: Lock the agent with a password (only for the lifetime of the agent).
- `-X`: Unlock the agent.

## Examples

```bash
eval $(ssh-agent)
```

Start the SSH agent and set environment variables for the current shell.

```bash
ssh-agent -s
```

Output Bourne shell commands for setting agent environment variables.

```bash
ssh-agent -c
```

Output C-shell commands for setting agent environment variables.

```bash
ssh-agent bash
```

Start an agent and launch a new bash shell that inherits its environment.

```bash
ssh-agent -k
```

Kill the current agent (requires `SSH_AGENT_PID` to be set).

```bash
ssh-agent -t 3600
```

Start an agent where all added keys expire after 1 hour.

## Practical Notes

- Always use `eval $(ssh-agent)` in Bourne shells to properly set environment variables.
- Many desktop environments automatically start `ssh-agent` at login.
- Use `ssh-add -l` to verify keys are loaded in the agent.
- Agent forwarding (`ssh -A`) should be used with caution; anyone with root on the intermediate host can use the forwarded agent.
- To avoid multiple agents, check if one is already running before starting a new one.
- `ssh-agent` is typically configured to run per-session in `~/.xsession`, `~/.bash_profile`, or via PAM.
