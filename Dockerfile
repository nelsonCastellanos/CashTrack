FROM public.ecr.aws/docker/library/node:18.17.1-slim as builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM public.ecr.aws/docker/library/node:18.17.1-slim as runner
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.0 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=3000 NODE_ENV=production NPM_CONFIG_CACHE=/tmp/.npm
ENV AWS_LWA_ENABLE_COMPRESSION=false
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN ln -s /tmp/cache ./.next/cache

ENTRYPOINT ["node", "server.js"]
