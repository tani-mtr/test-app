FROM node:20-slim

WORKDIR /app

COPY sample1/package*.json ./
RUN npm install

COPY sample1/. .

EXPOSE 8080
CMD [ "node", "index.js" ]
