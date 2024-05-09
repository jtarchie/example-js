import { Step } from "./step";

class Serial {
  execute(): boolean {
    return true;
  }
}

function serial(..._steps: Step[]): Serial {
  return new Serial();
}

export { serial };
