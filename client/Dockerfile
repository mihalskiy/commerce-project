# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY package*.json ./
RUN npm install -qy
COPY  . .
RUN npm run build
