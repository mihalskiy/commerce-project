# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY package*.json ./
RUN npm install -qy
COPY  . .
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=client /usr/app/client/build /var/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY dhparam.pem /etc/ssl/certs/dhparam.pem
COPY nginx-ctr.crt /etc/ssl/certs/nginx-ctr.crt
COPY nginx-key.key /etc/ssl/private/nginx-key.key
EXPOSE 80
