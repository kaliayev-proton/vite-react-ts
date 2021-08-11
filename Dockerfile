FROM node:alpine

WORKDIR '/home/node'

COPY package*.json ./
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

RUN npm run build


FROM nginx
EXPOSE 80
COPY --from=0 /home/node/build /usr/share/nginx/html