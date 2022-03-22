FROM node:17-alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY . .
RUN npm install 
CMD [ "node", "src/index.js"]
EXPOSE 3000