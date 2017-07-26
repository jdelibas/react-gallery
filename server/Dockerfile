FROM mhart/alpine-node:8.2.1

RUN mkdir -p /app
WORKDIR /app

COPY src /app/src
COPY package.json /app/package.json

RUN npm install --log-level=silent

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "run", "start"]