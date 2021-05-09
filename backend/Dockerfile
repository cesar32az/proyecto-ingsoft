FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# copy project
COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]