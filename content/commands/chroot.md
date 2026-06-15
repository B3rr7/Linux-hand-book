---
name: chroot
summary: Run a command with a different root directory.
category: System
tags: root, filesystem, rescue, isolation
popular: false
---

## Additional Notes

`chroot` runs a command with a chosen directory treated as `/`. It is commonly used for rescue work, installing or repairing systems, and building minimal filesystem environments.

It is not strong security isolation by itself. For containers and sandboxing, use container runtimes, namespaces, seccomp, and other controls.

## Syntax

```bash
chroot new-root [command [arguments...]]
```

## Parameters

- `new-root`: Directory that should become the apparent root directory.
- `command`: Command to run inside the chroot. Defaults often to a shell.
- `arguments`: Arguments for the command.

## Common Options

- `--userspec=USER:GROUP`: Run as a specific user and group when supported.
- `--groups=GROUPS`: Set supplementary groups.
- `--skip-chdir`: Do not change directory to `/` inside the chroot when supported.

## Examples

```bash
sudo chroot /mnt/rescue /bin/bash
```

Enter a mounted rescue system.

```bash
sudo mount --bind /dev /mnt/rescue/dev
sudo mount --bind /proc /mnt/rescue/proc
sudo mount --bind /sys /mnt/rescue/sys
sudo chroot /mnt/rescue /bin/bash
```

Prepare common virtual filesystems before a rescue chroot.

```bash
sudo chroot /srv/miniroot /usr/bin/env
```

Run a command inside a minimal root.

## Practical Notes

- The new root must contain the command and required libraries.
- Bind mounts may be needed for rescue tasks.
- Do not treat `chroot` as a complete security boundary.
