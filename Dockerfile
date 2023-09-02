# entrypoint for local development
FROM node:lts
WORKDIR /app
ENTRYPOINT [ "npm", "run", "dev"]
