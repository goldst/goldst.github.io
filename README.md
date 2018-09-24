# Leonard Goldstein Online [![Build Status](https://travis-ci.com/goldst/ein-web.svg?token=LoKS6SaGaZPsK3WPmufe&branch=master)](https://travis-ci.com/goldst/ein-web)

## About this project

These are the files for my website.

## How it works

Attention! High end technology. Not designed or tested with older browsers in mind. Stuff could be and will be broken.
For further information, look at the esdoc-generated [documentation](/docs/index.html).

## Contributing

This is a personal project, that's why I'll only accept your commits if they only contain minor changes. If you find any bugs or have suggestions, feel free to open an issue. 

However, you can fork and reuse as much as you want (see [License](#License)). I'd love to hear from you and how you use my code at [leonard-goldstein@outlook.de](mailto:leonard-goldstein@outlook.de).

Before contributing, please run

```bash
# node 5.2 or newer:
npx maid prepublish

# older versions of npm:
./node_modules/.bin/maid prepublish
```
in the project directory to make sure there are no errors and all documentation is generated.

### Coding Style
lint with `npx maid lint` or `npx maid lint:fix`.

| Language   | Style                                                                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Javascript | <ul><li>ES6 classes &amp; modules</li><li>`ClassName`, `functionName`</li><li>4 spaces</li><li>Run eslint to check style:<br/>`npx maid lint:js`</li></ul> |
| HTML       | <ul><li>4 spaces</li><li>no `id`s</li><li>`class` names: BEM</li><li>Run htmllint to check style:<br/>`npx maid lint:html`</li></ul>                       |
| CSS        | <ul><li>4 spaces</li><li>BEM syntax for `class`es, `@keyframe` names and variables<ul><li>folder for each block</li></ul></li></ul>                        |

## License

### Project
Released under the [MIT license](https://opensource.org/licenses/MIT)

### External components (included node modules)
#### [maid](https://github.com/egoist/maid)
Released under the [MIT license](https://github.com/egoist/maid/blob/master/LICENSE)
#### [eslint](https://github.com/eslint/eslint)
Released under the [MIT license](https://github.com/eslint/eslint/blob/master/LICENSE)
#### [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown)
Released under the [MIT license](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/LICENSE)
#### [htmllint](https://github.com/htmllint/htmllint) & [htmllint-cli](https://github.com/htmllint/htmllint-cli)
Released under the [ISC license](https://github.com/htmllint/htmllint/blob/master/LICENSE)
