---
name: hcitool
summary: Configure and query Bluetooth devices.
category: Network
tags: bluetooth, wireless, device, hci, scan
popular: false
---

## Additional Notes

`hcitool` is a command-line tool for managing Bluetooth devices using the Host Controller Interface (HCI). It can scan for nearby Bluetooth devices, inquire about remote device capabilities, configure local Bluetooth adapters, and establish connections.

It provides low-level access to the Bluetooth stack and is useful for diagnostics, scripting Bluetooth operations, and troubleshooting connectivity issues. Many operations require root privileges. The command is part of the BlueZ protocol stack, the reference Bluetooth implementation on Linux.

## Syntax

```bash
hcitool [options] command [arguments]
```

## Parameters

- `command`: The HCI operation to perform (e.g., `scan`, `dev`, `info`, `con`, `inq`).

## Common Commands

- `dev`: Show local Bluetooth devices.
- `scan`: Scan for nearby Bluetooth devices and display their addresses and names.
- `inquiry`: Perform a Bluetooth device inquiry and show discovered addresses.
- `name dev-address`: Query the friendly name of a remote Bluetooth device.
- `info dev-address`: Show detailed information about a remote device (features, version, clock).
- `con`: Show active Bluetooth connections.
- `cc dev-address`: Create a connection to a remote device.
- `dc dev-address handle`: Disconnect a Bluetooth connection.
- `auth dev-address`: Request authentication with a remote device.
- `enc dev-address enable`: Enable or disable encryption on a connection.
- `key dev-address`: Change the link key for a connection.
- `class`: Get or set the local device class.
- `rssi dev-address`: Display the signal strength of a connection.
- `lq dev-address`: Show the link quality of a connection.
- `tpl dev-address`: Show the transmit power level.
- `afh`: Show AFH (Adaptive Frequency Hopping) status.
- `clock dev-address`: Show the Bluetooth clock of a remote device.
- `lescan`: Scan for Bluetooth Low Energy (BLE) devices.
- `levl`: Show LE (Low Energy) connection parameters.

## Common Options

- `-i dev`, `--hci dev`: Specify the HCI device (e.g., `hci0`).

## Examples

```bash
hcitool dev
```

List local Bluetooth adapters.

```bash
hcitool scan
```

Scan for nearby Bluetooth devices.

```bash
hcitool -i hci1 scan
```

Scan using the second Bluetooth adapter.

```bash
hcitool info 12:34:56:78:90:AB
```

Show detailed information about a remote device.

```bash
hcitool lescan
```

Scan for Bluetooth Low Energy devices.

## Practical Notes

- Most `hcitool` commands require root privileges. Use `sudo` when needed.
- The local Bluetooth adapter must be powered on and not blocked. Use `rfkill` to unblock Bluetooth if needed.
- For higher-level Bluetooth operations (pairing, sending files, connecting to audio devices), use `bluetoothctl`, `obexctl`, or desktop Bluetooth managers.
- The `hci0` device corresponds to the first Bluetooth adapter. Use `hciconfig` to get detailed adapter information.
- The BlueZ stack includes `bluetoothd` as the system daemon; `hcitool` communicates with it through the kernel HCI layer.
