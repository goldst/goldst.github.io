## prepublish

do this before publishing

```bash
maid test
maid lint:fix
maid documentation
```

## lint

lints everything that can be linted

```bash
maid lint:html
maid lint:css
maid lint:js
```

## lint:fix

Lints everything that can be linted.
Fixes everything that can be fixed.

```bash
maid lint:html
maid lint:css:fix
maid lint:js:fix
```

## lint:html

lints index.html

```bash
htmllint index.html --rc config/htmllint.json
```


## lint:css

lints all css files in blocks subdirectories

```bash
stylelint blocks/**/*.css --config config/stylelint.json
```

## lint:css:fix

lints all css files in blocks subdirectories and tries to fix problems

```bash
stylelint blocks/**/*.css --config config/stylelint.json --fix
```

## lint:js

lints all files in the js directory

```bash
eslint js/** blocks/** -c config/eslint.json
```

## lint:js:fix

lints all files in the js directory and tries to fix problems

```bash
eslint js/** blocks/** -c config/eslint.json --fix
```

## documentation

creates documentation for all files in the js directory

```bash
DOCS="# API documentation \n## JavaScript modules \n"

for F in $(find js/ -type f); do
    DIR=$(dirname "$F")
    mkdir -p docs/${DIR}/;
    jsdoc2md "$F" > "docs/${F}.md"
    DOCS+="* [${F}](/${F}.md) \n"
done

echo -e "${DOCS}" | tee "docs/index.md" >/dev/null
```

## test

generates and runs js tests for the js directory

```bash
maid test:generate
maid test:run
```

## test:generate

generates tests for the js directory

```bash
ALL=""

for F in $(find js/ -type f); do
    DIR=$(dirname "${F}")
    mkdir -p test/${DIR}/;
    node node_modules/jsdocexample2mochajs/bin "${F}" > "test/${F}.test.js"
    ALL+="require('./${F}.test.js');\n"
done

echo -e "${ALL}" | tee "test/test.js" >/dev/null
```

## test:run

Runs tests for js files. Only outputs errors.

```bash
mocha --require babel-core/register >/dev/null
```

## test:run:loud

runs tests for js files with outputs fur passing tests

```bash
mocha --require babel-core/register
```
