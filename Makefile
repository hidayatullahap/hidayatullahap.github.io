.PHONY: tailwind
tailwind:
	npx tailwindcss build -i ./src/index.css -o ./src/output.css --watch