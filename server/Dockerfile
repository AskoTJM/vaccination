FROM node:14

WORKDIR /server
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
EXPOSE 5000
CMD ["npm","run","start"]

