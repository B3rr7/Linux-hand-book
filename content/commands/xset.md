---
name: xset
summary: Set X server user preferences.
category: System
tags: x11, preferences, screensaver, dpms, bell, repeat
popular: false
---

## Additional Notes

`xset` configures various X server preferences that affect the user's interactive experience. It can control the screen saver timeout, the display power management system (DPMS), keyboard repeat rate and delay, the bell volume/pitch/duration, the mouse speed, and font search paths.

Changes made with `xset` are immediate but temporary — they revert when the X server restarts or the session ends. Persistent configuration should be done through desktop environment settings or by adding `xset` commands to startup scripts like `~/.xinitrc` or `~/.xprofile`.

## Syntax

```bash
xset [options] [setting] [value...]
```

## Common Settings

- `s` (screensaver): `xset s <timeout> <cycle>`, `xset s on/off/blank/noblank`, `xset s activate/reset`.
- `dpms` (power management): `xset dpms <standby> <suspend> <off>`, `xset dpms force on/off/standby/suspend`.
- `b` (bell): `xset b <volume> <pitch> <duration>`, `xset b on/off`.
- `r` (repeat): `xset r <rate> <delay> <repeat>`, `xset r on/off`.
- `m` (mouse): `xset m <acceleration> <threshold>`.
- `fp` (font path): `xset fp+ path` (add), `xset fp- path` (remove), `xset fp rehash` (refresh).
- `q` (query): Show current settings.

## Parameters

- `options`: Flags that change how `xset` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
xset q
```

Display all current X server settings.

```bash
xset s 300 600
```

Set screensaver timeout to 300 seconds, cycle interval to 600 seconds.

```bash
xset s off
```

Disable the screensaver.

```bash
xset dpms 600 900 1200
```

Set DPMS: standby after 10 min, suspend after 15 min, off after 20 min.

```bash
xset dpms force off
```

Immediately turn off the display (as far as the X server allows).

```bash
xset r rate 250 30
```

Set keyboard repeat: 250ms delay, 30 characters per second.

```bash
xset b 50 500 100
```

Set bell volume to 50%, pitch 500 Hz, duration 100 ms.

```bash
xset m 2 4
```

Set mouse acceleration to 2, threshold to 4 pixels.

## Practical Notes

- `xset q` is a quick diagnostic tool to check all current X settings.
- Screen saver settings in modern desktop environments may override `xset`.
- DPMS control is hardware-dependent and may not work with all monitors or graphics drivers.
- The bell (`xset b`) controls the audible or visual terminal bell; on modern systems it is often disabled by default.
- Font path manipulation with `xset fp` is less relevant today due to fontconfig.
- On Wayland, `xset` only applies to XWayland clients and has limited effect.
