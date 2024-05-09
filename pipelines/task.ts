import { Resource } from "./resource";

interface Options {
  script: string;
  inputs: { [key: string]: Resource };
  cache: string[];
}

class Task {
  execute(): boolean {
    return true
  }
}

function task(_name: string, _options: Options): Task {
  return new Task();
}

export { task };
