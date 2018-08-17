FROM node
COPY . .
RUN yarn && yarn build
CMD yarn ${START_COMMAND}