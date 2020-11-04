# gitio

CLI tool for generating git.io shortlinks

## Install

```sh
yarn global add @tinypixelco/gitio
```

## Usage

```sh
$ gitio https://github.com/pixelcollective/gitio

/pixelcollective/gitio   https://git.io/JTNxu
```

Separate URLs with a space to run a batch:

```sh
$ gitio https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json https://github.com/roots/bud-support

sindresorhus/cli-spinners/blob/master/spinners.json   https://git.io/JTN9G

roots/bud-support   https://git.io/JTNQ9

```

## License

MIT © Tiny Pixel Collective
