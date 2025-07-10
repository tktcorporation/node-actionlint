import { glob } from "./glob";
import { readFiles } from "./read-files";
import { runLintForFiles } from "./run-lint";
import { getLintLog } from "./get-lint-log";

export async function run(pattern: string) {
  const filePaths = await glob(pattern);

  if (filePaths.length === 0) {
    console.log("No workflow files found to lint");
    return;
  }

  console.log(`Checking ${filePaths.length} workflow file(s)...`);

  const files = await readFiles(filePaths);
  const results = await runLintForFiles(files);
  const text = getLintLog(results);

  if (text) {
    console.log(text);
    process.exit(1);
  } else {
    console.log(`✓ All workflow files passed lint checks`);
  }
}
