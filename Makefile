.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: install
install:
	pnpm i

.PHONY: reinstall
reinstall: clean install

.PHONY: reinstall
dev: reinstall
	pnpm dev

.PHONY: preview
preview: reinstall
	pnpm build:preview
	pnpm preview

.PHONY: prod
prod: reinstall
	pnpm build
	pnpm preview

.PHONY: check
check: reinstall
	pnpm ts:check
	pnpm lint:fix
