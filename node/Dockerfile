FROM node:7.10.1

MAINTAINER Trina Lu

RUN npm install pm2 -g

WORKDIR  /src
COPY . /src

EXPOSE 8080

CMD ["pm2-docker", "process.yml"]