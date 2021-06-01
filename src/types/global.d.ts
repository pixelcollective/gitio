interface GithubResponse {
  data: string;
}

interface Url {
  short: string;
  full: string;
}

interface State {
  requests: string[];
  format: "json" | "string";
}

abstract class IFormat {
  public static gitio(uri: string): string;
  public static github(uri: string): string;
}
