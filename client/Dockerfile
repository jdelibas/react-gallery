FROM mhart/alpine-node:8.2.1

RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY src /app/src
COPY package.json /app
COPY .babelrc /app
COPY webpack.config.js /app

RUN npm install --log-level=silent

CMD ["npm", "run", "start"]