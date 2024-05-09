import { Resource } from "./resource";

interface Options {
  version: "latest" | "every";
  trigger: boolean;
}

class Get {
  execute(): boolean {
    return true
  }
}

function get(_resource: Resource, _options: Options): Get {
  return new Get();
}

export { get };
