# Use official Node.js 18 image as base
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including Playwright)
RUN npm install

# Copy rest of the app source code
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Run tests by default (optional)
CMD ["npx", "playwright", "test"]
