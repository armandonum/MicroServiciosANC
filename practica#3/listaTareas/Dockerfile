From node:24.5.0-alpine

workdir /app

copy package*.json ./


run npm install
copy . .

expose 5000


CMD ["node","app.js"]