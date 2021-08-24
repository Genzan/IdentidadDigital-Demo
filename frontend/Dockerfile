# User a Docker image as a base
FROM node:alpine as builder
WORKDIR "/app"

# Download and Install dependencies
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 4080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html