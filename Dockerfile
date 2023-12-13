FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install rollup
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "preview" ]