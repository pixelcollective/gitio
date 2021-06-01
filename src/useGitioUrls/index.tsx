import { useEffect, useState } from "react";
import { axios } from "./axios";
import { Format } from "./Format";
import qs from "qs";

const shortenUrl = async (inputUrl: string): Promise<Url> => {
  const url: Url = {
    full: Format.github(inputUrl),
    short: null,
  };

  const response: GithubResponse = await axios({
    url: "create",
    data: qs.stringify({ url: url.full }),
    headers: {
      "Content-Length": url.full.length,
    },
  });

  url.short = Format.gitio(response.data);

  return url;
};

const shortenUrls = async (urls: string[]) => {
  return await Promise.all(
    urls.map(async (url: string): Promise<Url> => {
      return await shortenUrl(url);
    })
  );
};

const useGitioUrls = (input: Url["full"][]): [Url[], string[]] => {
  const [urls, setUrls] = useState<Url[]>([]);
  const [err, setErr] = useState();
  useEffect(() => {
    try {
      (async () => {
        if (!input) return;
        const result = await shortenUrls(input);

        setUrls(result);
      })();
    } catch (err) {
      setErr(err);
    }
  }, [input]);

  return [urls, err];
};

export { useGitioUrls, shortenUrl, shortenUrls };
