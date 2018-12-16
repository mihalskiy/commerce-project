# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY package*.json ./
RUN npm install -qy
COPY  . .
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=client /usr/app/client/build /var/www
COPY nginx /etc/nginx/nginx.conf
COPY dhparam.pem /etc/ssl/certs/dhparam.pem
COPY ctr.ctr /etc/ssl/certs/ctr.ctr
COPY nginx-selfsigned.key /etc/ssl/private/nginx-selfsigned.key
EXPOSE 80
