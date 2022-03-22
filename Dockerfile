FROM node:17-alpine
WORKDIR /app
COPY . .
RUN npm install 
RUN npm start
EXPOSE 3000