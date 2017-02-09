FROM library/node:4.6

ENV NODE_ENV production
ENTRYPOINT ["/usr/local/bin/pm2"]
CMD ["start", "--no-daemon", "--name", "ghost", "index.js"]

RUN npm install -g pm2

WORKDIR /usr/local/src/app
COPY package.json .
RUN npm install --unsafe-perm --production \
	&& npm cache clean

COPY . .

