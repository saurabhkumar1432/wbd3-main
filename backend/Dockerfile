FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./server.js ./server.js
RUN npm install 
EXPOSE 9000
CMD ["node", "server.js"]

# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 5000

# Define the command to run the app
CMD [ "npm", "start" ]
