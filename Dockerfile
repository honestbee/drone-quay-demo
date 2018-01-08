FROM node:9.3.0-alpine

RUN mkdir /app
COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm install

COPY server.js  /app

EXPOSE 3000

CMD ["node", "/app/server.js"]
