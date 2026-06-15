---
name: pkexec
summary: Execute a command as another user with PolicyKit.
category: Administration
tags: privileges, polkit, sudo, authentication, permissions
popular: false
---

## Additional Notes

`pkexec` allows an authorized user to execute commands as another user, typically root, using the PolicyKit authorization framework. It is an alternative to `sudo` and `su` that uses PolicyKit rules and actions to determine authorization.

PolicyKit (polkit) provides fine-grained authorization policies that can be configured through XML action files in `/usr/share/polkit-1/actions/`. Administrators can grant specific users or groups the ability to run specific commands without full root access. `pkexec` is often used in graphical environments where it prompts for authentication via a dialog window.

## Syntax

```bash
pkexec [options] command [arguments]
```

## Parameters

- `command`: The command to execute.
- `arguments`: Arguments to pass to the command.

## Common Options

- `--user username`: Execute the command as a specific user (default: root).
- `--disable-internal-agent`: Do not use the built-in authentication agent.
- `--help`: Show help and exit.
- `--version`: Show version information.
- `--keep-cwd`: Run the command in the current working directory.
- `--no-exit-code`: Do not propagate the command's exit code.

## Examples

```bash
pkexec apt update
```

Run apt update with elevated privileges using PolicyKit authentication.

```bash
pkexec --user www-data id
```

Run `id` as the `www-data` user.

```bash
pkexec /usr/sbin/gparted
```

Launch GParted with root privileges. On graphical systems, this shows an auth dialog.

```bash
pkexec bash
```

Start a root shell using PolicyKit.

## Practical Notes

- PolicyKit actions are defined in XML files under `/usr/share/polkit-1/actions/`. Each action has an identifier like `org.freedesktop.udisks2.filesystem-mount`.
- Custom authorization rules are written in JavaScript and placed in `/etc/polkit-1/rules.d/` or `/usr/share/polkit-1/rules.d/`.
- Unlike `sudo`, `pkexec` does not require the user to be in the `sudoers` file. Instead, policy is determined by the PolicyKit rules.
- `pkexec` may not work in all terminal environments. Some GUI applications use PolicyKit implicitly through D-Bus service activation.
- On many desktop systems, `pkexec` prompts with a graphical dialog. Use `--disable-internal-agent` if you need a terminal-based password prompt.
- For server environments, `sudo` is generally preferred over `pkexec` because it is simpler to configure and more widely used.
