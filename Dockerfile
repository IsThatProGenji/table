# Use Node.js 22 as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Install Yarn (ensure compatibility with Node.js 22)
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Copy the package.json and yarn.lock files into the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application files into the container
COPY . .

# Build the application
RUN yarn build

# Install PM2 to manage the process
RUN yarn global add pm2

# Expose the application port
EXPOSE 3000

# Use PM2 to start the app and ensure it always restarts
CMD ["pm2-runtime", "start", "yarn", "--name", "app", "--", "start"]
