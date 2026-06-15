---
name: beep
summary: Play a tone through the PC speaker when supported.
category: System
tags: sound, alert, terminal, speaker
popular: false
---

## Additional Notes

`beep` plays a simple tone using the PC speaker or system support for terminal beeps. It is useful for audible notifications in scripts, long-running jobs, and local terminals.

Many modern systems disable PC speaker access by default, so the command may require permissions or may not work at all.

## Syntax

```bash
beep [options]
```

## Parameters

- `options`: Frequency, length, repeat, delay, and melody controls.

## Common Options

- `-f FREQ`: Frequency in hertz.
- `-l MS`: Length in milliseconds.
- `-r NUM`: Repeat count.
- `-d MS`: Delay between repeats.
- `-n`: Start a new beep segment.

## Examples

```bash
beep
```

Play the default tone.

```bash
beep -f 1000 -l 200
```

Play a short 1000 Hz tone.

```bash
make && beep -f 1200 -l 150 || beep -f 300 -l 500
```

Use different tones for success and failure.

## Practical Notes

- This often requires local hardware support and permissions.
- On desktop systems, notification tools may be more reliable.
- Avoid using loud or repeated beeps on shared machines.
