# Use node version 20
FROM node:20

# Set working directory in container
WORKDIR /

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy code into container
COPY . .

# Expose the port
EXPOSE 8080

# Run the app
CMD ["npm", "run", "local"]