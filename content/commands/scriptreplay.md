---
name: scriptreplay
summary: Replay terminal sessions recorded by script.
category: Text
tags: terminal, replay, typescript, timing, session
popular: false
---

## Additional Notes

`scriptreplay` replays a terminal session that was recorded by `script` with timing information. It reads two files: the session output file (typically `typescript`) and the timing file (produced by `script --timing`). The replay happens at the original speed, showing output as it appeared during the recording.

This is useful for demonstrations, training, sharing troubleshooting steps, or verifying command sequences. The replay can be sped up or slowed down to focus on specific parts.

## Syntax

```bash
scriptreplay [options] [-t timingfile] [typescript]
```

## Parameters

- `timingfile`: The timing data file created by `script -t`.
- `typescript`: The recorded session file. Defaults to `typescript`.

## Common Options

- `-t`, `--timing timingfile`: Specify the timing file to use.
- `-s`, `--typescript typescript`: Specify the typescript file to replay.
- `-d`, `--divisor num`: Speed up playback by dividing the timing delay. For example, `-d 2` plays at double speed.
- `-m`, `--maxdelay num`: Set a maximum delay in seconds between output characters.
- `-c`, `--cr-mode`: Handle carriage returns in the recorded data.
- `-V`, `--version`: Show version information.

## Examples

```bash
scriptreplay -t timing.log session.log
```

Replay a recorded session at original speed.

```bash
scriptreplay -t timing.log session.log -d 2
```

Replay at double speed.

```bash
scriptreplay -t timing.log session.log -d 0.5
```

Replay at half speed (slower).

```bash
scriptreplay -t timing.log -s typescript
```

Replay using the default typescript filename with a custom timing file.

## Practical Notes

- `scriptreplay` requires both a typescript file and a timing file recorded by `script --timing`.
- The terminal size during replay should match the original recording size for best results.
- Use `-d 10` for very fast skim-through of long recordings.
- If the replay looks garbled, the terminal dimensions may not match the original session.
- `scriptreplay` is part of the `util-linux` package.
