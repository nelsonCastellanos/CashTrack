# Use an official Node.js image as the base image
FROM public.ecr.aws/lambda/nodejs:18.2023.08.02.09

# https://github.com/awslabs/aws-lambda-web-adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.0 /lambda-adapter /opt/extensions/lambda-adapter

# Set the working directory inside the container
WORKDIR /var/task

COPY . ${LAMBDA_TASK_ROOT}

# Install only production dependencies
RUN npm ci

# Set Node.js to production environment
ENV NODE_ENV=production

# Run the build script to compile the React frontend
RUN npm run build

EXPOSE 8080

ENV PORT 8080
ENV NPM_CONFIG_CACHE /tmp/.npm

# Run `npm start` when the container starts
ENTRYPOINT ["npm", "start"]