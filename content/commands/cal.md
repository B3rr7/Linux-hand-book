---
name: cal
summary: Display a calendar in the terminal.
category: System
tags: calendar, date, terminal, time
popular: false
---

## Additional Notes

`cal` prints a simple calendar. It can show the current month, a specific month, or a full year depending on arguments and implementation.

Use it for quick date lookup in a terminal.

## Syntax

```bash
cal [month] [year]
cal [options]
```

## Parameters

- `month`: Month number, usually 1 through 12.
- `year`: Year to display.
- `options`: Layout and calendar controls.

## Common Options

- `-3`: Show previous, current, and next month on many systems.
- `-y`: Show the whole current year.
- `-m MONTH`: Show a specific month on some implementations.
- `-A NUM`: Show NUM months after the current month on some implementations.
- `-B NUM`: Show NUM months before the current month on some implementations.

## Examples

```bash
cal
```

Show the current month.

```bash
cal 6 2026
```

Show June 2026.

```bash
cal -y
```

Show the current year.

```bash
cal -3
```

Show three months around the current month when supported.

## Practical Notes

- Option support varies between util-linux and BSD implementations.
- Use `date` for formatted current date/time output.
- Some systems also provide `ncal` for alternate calendar layouts.
