FROM node:19.0.0-slim as build-step

WORKDIR /app
COPY package*.json ./
RUN npm i -g nodemon
RUN npm install
COPY . .

CMD [ "nodemon", "run.js" ]