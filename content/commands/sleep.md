---
name: sleep
summary: Pause for a specified amount of time.
category: Shell
tags: delay, wait, script, time, loop
popular: false
---

## Additional Notes

`sleep` pauses execution for a given amount of time, then exits. It is commonly used in loops, retry waits, and scripts that must pace their actions.

Sleep time can be a plain number (seconds) or a number with a unit suffix such as `m` for minutes or `h` for hours.

## Syntax

```bash
sleep NUMBER[SUFFIX]...
```

## Parameters

- `NUMBER`: How long to sleep; may be a decimal.
- `SUFFIX`: Unit for the number.

## Time Suffixes

- `s`: Seconds (default when no suffix is given).
- `m`: Minutes.
- `h`: Hours.
- `d`: Days.

Multiple arguments are summed, so `sleep 1m 30s` sleeps 90 seconds.

## Examples

```bash
sleep 5
```

Pause for five seconds.

```bash
sleep 0.5
```

Pause for half a second.

```bash
sleep 2h
```

Pause for two hours.

```bash
sleep 1m 30s
```

Pause for one and a half minutes.

```bash
while true; do
  check-status
  sleep 1
done
```

Run a check every second in a loop.

```bash
until curl -sf https://example.com; do
  sleep 5
done
```

Wait five seconds between retries until a host responds.

## Practical Notes

- Decimals are allowed, such as `sleep 0.2` for short pacing.
- Combine units by passing several arguments; they are added together.
- Useful for rate-limiting loops, retry backoff, and scripted waits.
- A `Ctrl-c` interrupts `sleep` immediately.
