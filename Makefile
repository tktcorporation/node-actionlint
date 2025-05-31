build: main.wasm

install: wasm_exec.js

wasm_exec.js:
	cp $(shell go env GOROOT)/lib/wasm/wasm_exec.js .

main.wasm: main.go go.mod
	GOOS=js GOARCH=wasm go build -o main.wasm

.PHONY: build install
