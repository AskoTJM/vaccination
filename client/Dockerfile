FROM node:14

WORKDIR /client
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

EXPOSE 3000
CMD ["npm","run","start"]
