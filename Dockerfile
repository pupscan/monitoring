FROM kkarczmarczyk/node-yarn:latest
MAINTAINER thibaut.mottet@pupscan.fr

ENV REFRESH_INTERVAL_S 600
ENV API_BASE_URL http://api.metric.pupscan.com/

RUN yarn global add http-server

WORKDIR /workspace
COPY . .
RUN yarn install
RUN yarn add --force node-sass #Fix problem node-sass not working during build phase
RUN yarn build

EXPOSE 8080

CMD http-server -g -c31536000 /workspace/dist
