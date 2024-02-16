FROM node:node:19.0.0-slim as build-step

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run start