# gitio

CLI tool for generating git.io shortlinks

## Install

```sh
yarn add @tinypixelco/gitio
```

## Usage

Pass either the full url or URI

```sh
yarn gitio https://github.com/pixelcollective/gitio

🔗 pixelcollective/gitio   https://git.io/JTNxu
```

```sh
yarn gitio pixelcollective/gitio

🔗 pixelcollective/gitio   https://git.io/JTNxu
```

Separate URLs with a space to run a batch:

```sh
yarn gitio sindresorhus/cli-spinners/blob/master/spinners.json roots/bud-support

🔗 sindresorhus/cli-spinners/blob/master/spinners.json   https://git.io/JTN9G
🔗 roots/bud-support                                     https://git.io/JTNQ9
```

Get JSON with `--json` flag:

```sh
yarn gitio sindresorhus/cli-spinners/blob/master/spinners.json roots/bud-support --json

[{"full":"https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json","short":"https://git.io/JTN9G"},{"full":"https://github.co
m/roots/bud-support","short":"https://git.io/JTNQ9"}]
```

## Programmatic usage

Use the `shortenUrl` function exported by this package.

```ts
import { shortenUrl } from "@tinypixelco/gitio";

(async () => {
  const url = await shortenUrl("pixelcollective/gitio");
  console.log(url);
})();
```

You can also shorten in bulk with `shortenUrls`:

```ts
import { shortenUrls } from "@tinypixelco/gitio";

(async () => {
  const urls = await shortenUrls([
    "pixelcollective/gitio",
    "sindresorhus/cli-spinners",
  ]);
  console.log(urls);
})();
```

This also exports a React hook:

```ts
import React from "react";
import { useGitioUrls } from "@tinypixelco/gitio";

const Component = ({requests: string[]}) => {
  const [urls, err] = useGitioUrls(requests);

  if (!err && !urls) return null

  return err ? err : urls
};
```

## License

MIT © Tiny Pixel Collective
