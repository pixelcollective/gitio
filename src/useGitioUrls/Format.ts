class Format implements IFormat {
  public static gitio(uri: string): string {
    return !uri.startsWith("https://") ? `https://git.io/${uri}` : uri;
  }

  public static github(uri: string): string {
    return !uri.startsWith("https://") ? `https://github.com/${uri}` : uri;
  }
}

export { Format };
