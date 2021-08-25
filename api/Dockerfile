# User a Docker image as a base
FROM node:alpine
WORKDIR "/app"

# Download and Install dependencies
COPY ./package.json ./
RUN apk add --no-cache bash git openssh
RUN npm install
COPY . .
CMD ["npm", "run", "start"]