FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# For production
#CMD ["npm", "start"]

CMD ["npm", "run", "dev"]