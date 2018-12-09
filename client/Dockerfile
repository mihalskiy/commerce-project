FROM node:9.4.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 80

CMD ["npm", "start"]
