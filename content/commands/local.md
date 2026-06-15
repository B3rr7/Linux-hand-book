---
name: local
summary: Declare a local variable in a shell function or script.
category: Shell
tags: shell, variable, function, scope, bash
popular: false
---

## Additional Notes

`local` is a Bash shell built-in that declares a variable with local scope inside a function. Variables declared with `local` are visible only within that function and any functions it calls; they do not affect variables of the same name in the caller scope.

Using `local` prevents accidental variable name collisions and side effects between functions. It is considered a best practice to use `local` for all variables inside shell functions.

## Syntax

```bash
local [name[=value] ...]
local -option [name[=value] ...]
```

## Parameters

- `name`: The variable name to declare as local.
- `=value`: Optional initial value assignment.

## Common Options

- `-a`: Declare the variable as an indexed array.
- `-A`: Declare the variable as an associative array.
- `-i`: Declare the variable as an integer.
- `-l`: Declare the variable in lowercase (Bash 4+).
- `-u`: Declare the variable in uppercase (Bash 4+).
- `-r`: Declare the variable as read-only.
- `-x`: Export the local variable to child processes.

## Examples

```bash
myfunc() {
  local count=0
  local name
  name="Alice"
  echo "$count $name"
}
```

Declare and use local variables inside a function.

```bash
myfunc() {
  local -i total=0
  for i in {1..5}; do
    total+=i
  done
  echo $total
}
```

Use local integer arithmetic.

```bash
myfunc() {
  local -a fruits=("apple" "banana" "cherry")
  echo "${fruits[1]}"
}
```

Declare a local indexed array.

```bash
myfunc() {
  local -A capitals=(["France"]="Paris" ["Japan"]="Tokyo")
  echo "${capitals[France]}"
}
```

Declare a local associative array.

## Practical Notes

- Always use `local` for variables inside functions to avoid polluting the global namespace.
- `local` can only be used inside a function; using it outside a function causes an error.
- The `typeset` command is a synonym for `local` in many shells but `local` is preferred for clarity.
- In POSIX `sh`, `local` is not standard; use it only in Bash, Zsh, or Ksh.

