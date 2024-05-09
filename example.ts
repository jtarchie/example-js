import { git } from "./resources";
import { get, job, serial, task } from "./pipeline";

const repo = git({
  uri: "file://~/workspace/my-repo",
  paths: ["openapi.yaml"],
});

const buildTask = job(
  "build latest",
  serial(
    // this only triggers if new version detected
    // the library would persist versions that had run
    get(repo, {
      version: "latest",
      trigger: true,
    }),
    // run a script with from the repo
    task("build binary", {
      script: "repo/ci/build.sh",
      inputs: { repo: repo },
      cache: ["cli"],
    }),
  ),
);

export default buildTask;
