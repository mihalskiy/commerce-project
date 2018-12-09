# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY package*.json ./
RUN npm install -qy
COPY  . .
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=client /usr/app/client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
