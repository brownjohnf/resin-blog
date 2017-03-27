IMAGE=localhost/blog:latest

build:
	docker build -t ${IMAGE} .

run: build
	docker run -it --rm \
		-p 2368:2368 \
		--env-file .dockerenv \
		${IMAGE}

shell: build
	docker run -it --rm \
		-p 2368:2368 \
		--env-file .dockerenv \
		--entrypoint /bin/bash \
		${IMAGE}

exec:
	docker exec -it $$(docker ps | grep "${IMAGE}" | cut -f 1 -d ' ') /bin/bash

