# Colimobis

## Build and run with Docker
1. Build and start the app :
```sh
$ docker-compose up --build
```

This command will build the Docker image, install dependencies and start the ionic development server.

2. Access the app :
Open http://localhost:8100 in your browser, or replace 8100 with your configured port if customized.

You can configure the host and port by creating a .env file in the project root with the following variables : 

```txt
HOST=0.0.0.0   # Custom host
PORT=8100      # Custom port
```