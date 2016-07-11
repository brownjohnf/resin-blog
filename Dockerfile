FROM library/node:4.2

EXPOSE 2368

WORKDIR /usr/src/app

COPY package.json ./.
COPY core ./core
RUN npm install --unsafe-perm \
	&& npm cache clean

COPY . .

ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["start", "--development"]
