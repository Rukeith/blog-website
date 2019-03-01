FROM node:alpine
LABEL PROJECT="blog" \
      SERVICE="website"
ENV PORT=80 \
    NODE_ENV="production" \
    START_COMMAND="start" \
    API_ENTRY="https://blog-server"
COPY . .
RUN yarn && yarn build
CMD yarn ${START_COMMAND}
