FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# For production
#CMD ["npm", "start"]

CMD ["npm", "run", "dev"]