FROM ubuntu:18.04

RUN apt-get update && apt-get install -y && \
	apt-get upgrade -y && \
	apt-get install git -y && \
	apt-get install curl wget -y && apt-get install -y && \
	apt-get install gnupg -y && \
	apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
	apt-get install -y nodejs

ENV EMBERVERSION 3.4.4

RUN npm update && \
	npm install -g ember-cli@${EMBERVERSION}

WORKDIR /app

LABEL bp-components-ui.version=0.2.0

RUN git clone https://github.com/PharbersDeveloper/BP-Components-UI.git && \
	git clone https://github.com/PharbersDeveloper/BP-Components.git

WORKDIR /app/BP-Components

RUN git checkout -b frank origin/frank && \
	npm install && \
	npm link

WORKDIR /app/BP-Components-UI

RUN rm -rf node_modules && \
	npm cache clear --force && \
	npm install && \
	npm link bp-components

RUN ember b --environment production

EXPOSE 8080

ENTRYPOINT ["ember", "s", "--live-reload=false"]