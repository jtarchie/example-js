interface Options {
  uri: string;
  paths: string[];
}

class GitWrapper {
  check(): string {
    return "";
  }
}

function git(_options: Options): GitWrapper {
  return new GitWrapper();
}

export { git };
