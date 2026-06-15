---
name: wait
summary: Wait for background processes to finish.
category: Processes
tags: process, wait, background, shell, builtin
popular: false
---

## Additional Notes

`wait` is a shell builtin that pauses execution until one or more background processes complete. It is used in shell scripts to synchronize parallel tasks launched with `&`. Without arguments, it waits for all background processes to finish. With a process ID or job spec, it waits for a specific process.

The exit status of `wait` is the exit status of the waited-for process, which allows scripts to check whether background jobs succeeded. This is essential for robust parallelism in shell scripting.

## Syntax

```bash
wait [process_id...] [job_spec...]
```

## Parameters

- `process_id`: A numeric PID to wait for.
- `job_spec`: A job specification like `%1` (first background job) or `%+` (current job).

## Examples

```bash
sleep 5 &
wait
echo "Background job finished"
```

Wait for all background processes.

```bash
gcc -o program program.c &
pid=$!
wait $pid
echo "Compilation finished with status $?"
```

Save the PID of a background process and wait for it specifically.

```bash
sleep 3 &
sleep 5 &
wait -n
echo "One of the sleep commands finished"
```

Wait for the next background job to finish (bash 4.3+).

```bash
job1 &
job2 &
wait %1 %2
echo "Both jobs done"
```

Wait for specific job specs.

## Practical Notes

- Without arguments, `wait` waits for all background processes created in the current shell.
- The special variable `$!` holds the PID of the most recently started background process.
- `wait -n` (bash 4.3+) waits for the next job to complete, useful for managing parallel pools.
- If a process has already exited, `wait` returns immediately (the exit status is still available).
- `wait` is a shell builtin; the external `/usr/bin/wait` may exist but behaves differently.
