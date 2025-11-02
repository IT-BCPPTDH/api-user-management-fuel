FROM node:18-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --legacy-peer-deps --force

COPY . .

EXPOSE 9050

CMD ["node", "index.js"]

