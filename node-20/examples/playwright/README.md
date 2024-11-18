# Playwright Example

## Build

```sh
docker build . -t lambda-chromium-node-playwright
```

## Run container

```sh
docker run -p 8080:8080 lambda-chromium-node-playwright
```

## Execute

```sh
curl http://localhost:8080/2015-03-31/functions/function/invocations -d '{}'
```

output:

```json
{
  "statusCode": 200,
  "body": "{\"title\":\"Example Domain\"}"
}
```
