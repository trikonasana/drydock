FROM node:slim

WORKDIR /tmp

RUN npm install -g mocha
RUN npm install nightmare \
  mocha-json-singleline \
  mocha-generators \
  chai

RUN apt-get update && \
  apt-get install -y libgtk2.0-0 \
  libgconf-2-4 \
  libasound2 \
  libxtst6 \
  libxss1 \
  libnss3 \
  libnotify-dev \
  xvfb

ADD test.js .

# ENV DEBUG="nightmare:*,electron:*"

CMD /usr/bin/xvfb-run --server-args="-screen 0 1024x768x24" /usr/local/bin/mocha -R spec .
