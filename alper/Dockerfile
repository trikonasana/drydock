FROM ruby:2.2.2

RUN mkdir /app
WORKDIR /app
RUN gem update

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock

RUN bundle install

RUN apt-get update
RUN apt-get install -y --fix-missing iceweasel
RUN apt-get install -y --fix-missing xvfb
RUN apt-get install -y --fix-missing unzip

#ENV DEBUG="geckodriver:*,cucumber:*"

ENV   GECKODRIVER_VERSION v0.13.0
RUN   echo $GECKODRIVER_VERSION
RUN   mkdir -p /opt/geckodriver_folder
RUN   wget -O /tmp/geckodriver_linux64.tar.gz https://github.com/mozilla/geckodriver/releases/download/$GECKODRIVER_VERSION/geckodriver-$GECKODRIVER_VERSION-linux64.tar.gz
RUN   tar xf /tmp/geckodriver_linux64.tar.gz -C /opt/geckodriver_folder
RUN   rm /tmp/geckodriver_linux64.tar.gz
RUN   chmod +x /opt/geckodriver_folder/geckodriver
RUN   ln -fs /opt/geckodriver_folder/geckodriver /usr/local/bin/geckodriver

ADD /app/features /app/features