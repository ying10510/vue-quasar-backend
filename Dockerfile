FROM node:lts-alpine3.15

# if not exit, auto create
WORKDIR /usr/src/quasar/web_backend

RUN yarn install && \
    yarn global add @quasar/cli 

