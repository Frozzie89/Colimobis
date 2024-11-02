FROM node:22.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @ionic/cli
RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=8100

EXPOSE ${PORT}

CMD ["sh", "-c", "ionic serve --host=${HOST} --port=${PORT} --disableHostCheck"]
