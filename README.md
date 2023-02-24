# Leonard Goldstein Online 
[![Build Status](https://travis-ci.com/goldst/goldst.github.io.svg?token=LoKS6SaGaZPsK3WPmufe&branch=master)](https://travis-ci.com/goldst/ein-web) [![CodeFactor](https://www.codefactor.io/repository/github/goldst/goldst.github.io/badge?s=066bb56c72b702a7ddc1f6599bda42473ca77254)](https://www.codefactor.io/repository/github/goldst/goldst.github.io)

These are the files for my old website (aka v1), currently located at [goldst.dev/v1](https://goldst.dev/v1). The current version can be found at [l.goldst.dev](https://goldst.dev).

## Contributing

This is a personal project, that's why I'll only accept your commits if they only contain minor changes. Probably, it's best to always open an issue first. If you find any bugs or have suggestions, feel free to open an issue too. 

However, you can fork and reuse as much as you want (see [License](#License)). I'd love to hear from you and how you use my code at 𝕝𝕖𝕠𝕟𝕒𝕣𝕕-𝕘𝕠𝕝𝕕𝕤𝕥𝕖𝕚𝕟@𝕠𝕦𝕥𝕝𝕠𝕠𝕜.𝕕𝕖.

Before contributing, please run

```
> npx maid prepublish
```
in the project directory to make sure there are no errors and all documentation is generated.

### Coding Style
lint with `npx maid lint` or `npx maid lint:fix`.

| Language   | Style                                                                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Javascript | <ul><li>ES6 classes &amp; modules</li><li>`ClassName`, `functionName`</li><li>4 spaces</li><li>Run eslint to check style:<br/>`npx maid lint:js`</li></ul> |
| HTML       | <ul><li>4 spaces</li><li>no `id`s except for `link-to` block</li><li>`class` names: BEM</li><li>Run htmllint to check style:<br/>`npx maid lint:html`</li></ul>                       |
| CSS        | <ul><li>4 spaces</li><li>BEM syntax for `class`es, `@keyframe` names and variables<ul><li>folder for each block</li></ul></li></ul>                        |

## License
[MIT](https://opensource.org/licenses/MIT)
