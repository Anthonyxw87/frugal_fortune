# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Expose the port 8080
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
