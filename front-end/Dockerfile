FROM node:8

WORKDIR /usr/src/app

COPY . .

RUN npm install --only=production && npm install -g pm2

EXPOSE 4444

CMD [ "pm2-runtime", "start", "app.js", "-i", "max" ]