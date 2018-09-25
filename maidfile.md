## prepublish

do this before pushing to make sure everything is fine.

Run tasks `test`, `lint:fix`, and `documentation` after this.

## travis

Travis CI runs this.

Run tasks `test`, `lint`, and `documentation` after this.

## lint

lints everything that can be linted

Run tasks `lint:html`, `lint:css`, and `lint:js` after this.

## lint:fix

Lints everything that can be linted.
Fixes everything that can be fixed.

Run tasks `lint:html`, `lint:css:fix`, and `lint:js:fix` after this.

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
eslint js*(/*)/*.js blocks*(/*)/*.js -c config/eslint.json
```

## lint:js:fix

lints all files in the js directory and tries to fix problems

```bash
eslint js*(/*)/*.js blocks*(/*)/*.js -c config/eslint.json --fix
```

## documentation

creates documentation and pushes it to the wiki. Only works in Travis CI.

Run tasks `documentation:clonegit`, `documentation:generate`, and `documentation:push` after this.

## documentation:generate

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

## documentation:clonegit

initialize git repository of the documentation so that changes can be commited later on

```bash
if [ ! -d docs ]; then
  mkdir -p docs;
fi

cd docs
git config --global user.name "deployment script via Travis CI"
git clone https://${GH_TOKEN}@github.com/goldst/ein-web.wiki.git .
cd ..
```

## documentation:push

push changes to the wiki. Only works in travis.

```bash
cd docs
git add .
git commit -m "Travis CI deployment: documentation update for build $TRAVIS_BUILD_NUMBER"

git push -u origin master
```

## test

generates and runs js tests for the js directory

Run tasks `test:generate`, and `test:run` after this.

## test:generate

generates tests for the js directory

```bash
ALL=""

for F in $(find js/ -type f); do
    DIR=$(dirname "${F}")
    mkdir -p test/${DIR}/;
    node jsdocexample2mochajs/bin "${F}" > "test/${F}.test.js"
    ALL+="require('./${F}.test.js');\n"
done

echo -e "${ALL}" | tee "test/test.js" >/dev/null
```

## test:run

Runs tests for js files. Only outputs errors.

```bash
mocha --require babel-core/register
```

## test:run:loud

runs tests for js files with outputs fur passing tests

```bash
mocha --require babel-core/register
```
