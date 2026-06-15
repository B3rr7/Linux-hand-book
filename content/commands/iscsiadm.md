---
name: iscsiadm
summary: Manage iSCSI connections and targets.
category: Network
tags: iscsi, storage, san, network, target
popular: false
---

## Additional Notes

`iscsiadm` is the command-line interface for the Open-iSCSI initiator, which connects Linux systems to iSCSI storage targets over a network. It handles discovery, login, logout, session management, and configuration of iSCSI connections.

iSCSI (Internet Small Computer System Interface) allows a system to access remote block storage devices as if they were local disks. The `iscsiadm` command manages the iSCSI initiator on the client side, communicating with the kernel's iSCSI subsystem and the `iscsid` daemon. It supports discovery of targets via SendTargets, iSNS, and static configuration.

## Syntax

```bash
iscsiadm [options] operation [target-parameters]
```

## Parameters

- `operation`: The action to perform (e.g., `--mode discovery`, `--mode node --login`, `--mode session`).

## Common Options and Operations

- `-m discovery`, `--mode discovery`: Discover available targets.
- `-m node`, `--mode node`: Operate on stored target records.
- `-m session`, `--mode session`: Manage active sessions.
- `-m iface`, `--mode iface`: Manage iSCSI interfaces.
- `-m host`, `--mode host`: Manage iSCSI host adapters.
- `-t type`, `--type type`: Discovery type (`sendtargets`, `slp`, `isns`).
- `-p ip:port`, `--portal ip:port`: Specify the target portal address.
- `-l`, `--login`: Log in to the target.
- `-u`, `--logout`: Log out from the target.
- `-o operation`, `--op operation`: Database operation (`new`, `delete`, `update`, `show`).
- `-T target-name`, `--targetname target-name`: Specify the iSCSI target name (IQN or EUI).
- `-n name`, `--name name`: Specify a record or field name for configuration.
- `-v value`, `--value value`: Set the value for a configuration field.
- `-I iface-name`, `--interface iface-name`: Use a specific iSCSI interface binding.
- `-P level`, `--print level`: Set the print verbosity level (0-4).

## Examples

```bash
sudo iscsiadm -m discovery -t sendtargets -p 192.168.1.100
```

Discover available iSCSI targets on the portal at `192.168.1.100`.

```bash
sudo iscsiadm -m node -T iqn.2023-01.com.example:storage.target01 -p 192.168.1.100 -l
```

Log in to a specific iSCSI target.

```bash
sudo iscsiadm -m session
```

Show all active iSCSI sessions.

```bash
sudo iscsiadm -m node -u
```

Log out from all logged-in targets.

```bash
sudo iscsiadm -m node -o delete -T iqn.2023-01.com.example:storage.target01
```

Remove a target's record from the node database.

```bash
iscsiadm -m session -P 3
```

Show detailed session information including connections and parameters.

## Practical Notes

- The `iscsid` daemon must be running for `iscsiadm` to function. Start it with `systemctl start iscsid`.
- After logging in to an iSCSI target, the block devices appear as `/dev/sd*`, `/dev/mapper/*`, etc.
- Use `lsblk` or `fdisk -l` to identify new disks after login.
- To make iSCSI connections persistent, set `node.startup = automatic` with `iscsiadm -m node -T TARGET -o update -n node.startup -v automatic`.
- iSCSI targets are identified by IQN (iSCSI Qualified Name) format: `iqn.YEAR-MONTH.reverse.domain:identifier`.
- The configuration database is stored in `/etc/iscsi/` and can be manually edited if needed.
- For multipath iSCSI, use `device-mapper-multipath` together with `iscsiadm`.
