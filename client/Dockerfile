# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY package*.json ./
RUN npm install -qy
COPY  . .
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=client /usr/app/client/build /var/www
COPY googlea2b3e30329b65561.html /var/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
