FROM node:12-buster

WORKDIR /usr/src/app
COPY . .

# RUN yarn set version berry

RUN yarn install --production=true

CMD [ "yarn", "start" ]
