FROM node:16.1.0-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

# set npm script prepare as empty string to prevent husky install cause
# npm install fail.
RUN npm set-script prepare '' && \
  npm install --production --no-optional && \
  npm install serve

COPY . .
RUN npm run build

EXPOSE 8080
CMD npx serve -s build -l 8080
