declare const shortenUrl: (inputUrl: string) => Promise<Url>;
declare const shortenUrls: (urls: string[]) => Promise<Url[]>;
declare const useGitioUrls: (input: Url["full"][]) => [Url[], string[]];
export { useGitioUrls, shortenUrl, shortenUrls };
