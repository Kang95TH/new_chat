FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5174

CMD [ "yarn", "dev" ]