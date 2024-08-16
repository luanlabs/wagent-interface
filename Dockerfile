FROM node:20.12.2-slim

COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm ci

COPY . /app

RUN touch .env.production

RUN NEXT_PUBLIC_API=https://api.wagent.app >> .env.production

RUN rm .eslintrc.json
RUN npm run build

CMD ["npm", "run", "start"]
