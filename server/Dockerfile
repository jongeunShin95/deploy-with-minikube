# node (nodejs)
FROM node:15.7.0-alpine as builder
WORKDIR /app

COPY . /app
RUN npm install
CMD ["npm", "start"]