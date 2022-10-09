here := $(shell pwd)
img = klakegg/hugo
tag = 0.101.0-ext-ubuntu
CC = docker run --rm -it -v $(here):/src -p 1313:1313 $(img):$(tag)
build:
	$(CC)

run:
	$(CC) server