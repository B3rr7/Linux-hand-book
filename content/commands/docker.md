---
name: docker
summary: Manage containers, images, networks, and volumes.
category: Development
tags: container, virtualization, deploy, image, registry
popular: true
---

## Additional Notes

`docker` manages lightweight, portable containers that package applications with their dependencies. It provides commands for building images, running containers, managing storage, configuring networking, and orchestrating multi-container workflows. Docker uses a client-server architecture where the `docker` CLI communicates with the `dockerd` daemon.

Containers are created from images stored in registries such as Docker Hub. Images are built using `Dockerfile` instructions in a layered format, allowing efficient reuse and distribution. Docker is widely used for development environments, CI/CD pipelines, microservices, and production deployment.

## Syntax

```bash
docker [command] [options] [arguments]
```

## Parameters

- `command`: A subcommand such as `run`, `build`, `pull`, `ps`, `stop`, `rm`, `exec`, or `logs`.

## Common Global Options

- `-D`, `--debug`: Enable debug mode.
- `-H`, `--host`: Daemon socket to connect to (e.g., `unix:///var/run/docker.sock` or `tcp://...`).
- `-v`, `--version`: Print version information.

## Common Commands

- `docker run [options] IMAGE [command]`: Create and start a container from an image.
- `docker ps [options]`: List running containers. Use `-a` to show all containers.
- `docker images`: List available images.
- `docker pull IMAGE`: Download an image from a registry.
- `docker build -t NAME .`: Build an image from a `Dockerfile` in the current directory.
- `docker stop CONTAINER`: Gracefully stop a running container.
- `docker rm CONTAINER`: Remove a stopped container.
- `docker rmi IMAGE`: Remove an image.
- `docker exec -it CONTAINER command`: Run a command in a running container.
- `docker logs CONTAINER`: Fetch the logs of a container.
- `docker compose up`: Start services defined in `compose.yaml`.

## Container Run Options

- `-d`, `--detach`: Run the container in the background.
- `-it`: Run interactively with a terminal (combine `-i` and `-t`).
- `-p HOST:CONTAINER`: Publish a container port to the host.
- `-v HOST:CONTAINER`: Mount a volume or host directory.
- `--name NAME`: Assign a name to the container.
- `--restart POLICY`: Set the restart policy (`no`, `always`, `on-failure`, `unless-stopped`).
- `-e KEY=VALUE`: Set environment variables.
- `--rm`: Automatically remove the container when it exits.
- `--network NETWORK`: Connect the container to a network.

## Examples

```bash
docker run -it ubuntu bash
```

Start an interactive Ubuntu container with a bash shell.

```bash
docker run -d -p 80:80 --name web nginx
```

Start Nginx as a background container, mapping host port 80 to container port 80.

```bash
docker build -t myapp .
```

Build an image named `myapp` from a Dockerfile in the current directory.

```bash
docker ps -a
```

List all containers, including stopped ones.

```bash
docker exec -it myapp sh
```

Open a shell inside a running container named `myapp`.

```bash
docker logs -f myapp
```

Follow the log output of a container in real time.

```bash
docker compose up -d
```

Start all services defined in `compose.yaml` in the background.

## Practical Notes

- Running `docker` requires the daemon (`dockerd`) to be running. Use `systemctl start docker` or enable it with `systemctl enable docker`.
- To run `docker` without `sudo`, add your user to the `docker` group, then log out and back in.
- Images are versioned by tags. `docker pull ubuntu:22.04` pulls a specific release.
- Use `docker system prune` to clean up unused containers, images, and networks.
- Data in a container is lost when the container is removed unless stored in a volume.
- For orchestration across multiple hosts, use Docker Swarm or Kubernetes.
- Docker Compose files (`compose.yaml` or `docker-compose.yml`) define multi-container applications.
