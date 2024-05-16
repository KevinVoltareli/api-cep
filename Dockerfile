FROM node:latest

WORKDIR /api-cep

COPY . .

RUN rm -rf node_modules

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000