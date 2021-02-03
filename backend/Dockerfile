FROM node:lts

ENV PORT 3333

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package*.json /usr/src/api/

RUN npm install

COPY . /usr/src/api
RUN npm run build

EXPOSE 3333

CMD [ "npm", "start" ]

