#da imagem (node:18-alpine) para o target (base)
FROM node:18-alpine as base

WORKDIR /app
# COPY . .
ENV TZ=America/Sao_Paulo
COPY src .
COPY test .
COPY .env .
COPY package*.json .
COPY tsconfig*.json .
COPY nest-cli.json .
RUN npm i -g @nestjs/cli
RUN sed 's/DATABASE_HOST=localhost/DATABASE_HOST=database/g' .env

FROM base as production
ENV NODE_ENV=production
RUN npm install
RUN npm ci --production
# CMD ["node","dist/main.js"]
CMD ["npm","run", "start"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
CMD ["npm", "run", "start:dev"]