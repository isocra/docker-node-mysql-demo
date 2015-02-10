FROM dockerfile/nodejs

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

WORKDIR /opt/project

EXPOSE 80

CMD make