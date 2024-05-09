import { Step } from "./step";

class Job {}

function job(_name: string, _step: Step): Job {
  return new Job();
}

export { job };
