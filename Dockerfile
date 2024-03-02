FROM node:21-alpine as build

WORKDIR app
ADD . .
RUN npm ci
RUN npm run build

FROM nginx:1-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
