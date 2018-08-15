FROM node
ADD . .
RUN yarn && yarn build
CMD yarn start