FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod -R 755 node_modules

EXPOSE 3000

CMD ["npm","run","dev","--","--host","0.0.0.0"]