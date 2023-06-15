FROM node:lts
ENV REACT_APP_SERVER=server
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000