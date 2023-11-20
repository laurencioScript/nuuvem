FROM node:16 AS development

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install glob rimraf
RUN npm install -g nodemon
RUN npm install && npm cache clean --force


COPY . .
