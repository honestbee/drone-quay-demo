IMAGE ?= $(shell basename $(PWD))

build:
	docker build -t $(IMAGE) .

run: build
	docker run -it --rm -p 3000:3000 $(IMAGE)
