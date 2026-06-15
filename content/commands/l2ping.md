---
name: l2ping
summary: Send L2CAP echo requests to Bluetooth devices.
category: Network
tags: bluetooth, ping, l2cap, device, connectivity
popular: false
---

## Additional Notes

`l2ping` sends L2CAP (Logical Link Control and Adaptation Protocol) echo requests to a Bluetooth device and measures the response time. It is similar to the ICMP ping command but operates at the Bluetooth L2CAP layer.

It is used to test connectivity to Bluetooth devices, measure round-trip latency, and verify that a remote Bluetooth device is reachable and responding. The target is specified by the Bluetooth MAC address of the remote device.

## Syntax

```bash
l2ping [options] <bdaddr>
```

## Parameters

- `bdaddr`: The Bluetooth MAC address of the target device, formatted as `XX:XX:XX:XX:XX:XX`.

## Common Options

- `-c count`: Send exactly `count` echo requests and stop.
- `-f`: Flood ping; send requests as fast as possible.
- `-i`: Wait for a response before sending the next request (interactive mode).
- `-s size`: Set the size of the data payload in bytes.
- `-t timeout`: Set the timeout in seconds for each response.
- `-r`: Reverse ping; the device echoes back reversed data.

## Examples

```bash
l2ping -c 4 00:11:22:33:44:55
```

Send 4 L2CAP echo requests to the Bluetooth device at the given MAC address.

```bash
l2ping -s 100 -c 10 00:11:22:33:44:55
```

Send 10 requests with a 100-byte payload.

```bash
l2ping -f 00:11:22:33:44:55
```

Flood ping the device; use with caution as it may overwhelm the device.

## Practical Notes

- The Bluetooth device must be paired and within range. Use `bluetoothctl` to manage pairing.
- Some Bluetooth devices do not respond to L2CAP echo requests even when connected.
- Root privileges may be required, depending on system configuration.
- `l2ping` is part of the `bluez` package.

