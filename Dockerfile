# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /dockerDirectory

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the API to listen on
EXPOSE 3000

# Start the API when the Docker container starts
CMD ["npm", "start"]
