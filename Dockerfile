FROM node:10

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000
EXPOSE 8080