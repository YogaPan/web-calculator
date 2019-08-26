FROM node:12.4.0-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install --production --no-optional \
  && npm install serve --global \
  && npm run build

EXPOSE 5000
CMD serve -s build -l 5000
