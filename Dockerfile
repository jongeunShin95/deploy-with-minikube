# node
FROM node:15.7.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
RUN npm run build

# nginx
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]