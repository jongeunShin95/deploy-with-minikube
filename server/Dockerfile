# node (nodejs)
FROM node:15.7.0-alpine as builder
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
CMD ["npm", "start"]