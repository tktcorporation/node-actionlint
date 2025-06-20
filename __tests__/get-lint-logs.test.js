import chalk from "chalk";
import { getLintLog } from "../build/get-lint-log";
import { runLint } from "../build/run-lint";
import { describe, it, expect } from "vitest";

describe("get linting log", () => {
  it("returns log text from linting errors", async () => {
    const invalidWorkflowCode = `hogehoge  `;
    const results = (await runLint(invalidWorkflowCode, "test.yml")).map(
      (result) => {
        return {
          path: "test.yml",
          data: invalidWorkflowCode,
          ...result,
        };
      },
    );
    const text = getLintLog(results);
    //     console.log(`${text}`);
    expect(text).toBe(
      chalk.yellow("test.yml") +
        chalk.gray(":") +
        1 +
        chalk.gray(":") +
        1 +
        " " +
        chalk.bold.white(
          "workflow is scalar node but mapping node is expected",
        ) +
        " " +
        chalk.gray("[ syntax-check ]") +
        "\n" +
        "> 1 | hogehoge  \n" +
        "    | ^\n" +
        chalk.yellow("test.yml") +
        chalk.gray(":") +
        1 +
        chalk.gray(":") +
        1 +
        " " +
        chalk.bold.white('"on" section is missing in workflow') +
        " " +
        chalk.gray("[ syntax-check ]") +
        "\n" +
        "> 1 | hogehoge  \n" +
        "    | ^\n" +
        chalk.yellow("test.yml") +
        chalk.gray(":") +
        1 +
        chalk.gray(":") +
        1 +
        " " +
        chalk.bold.white('"jobs" section is missing in workflow') +
        " " +
        chalk.gray("[ syntax-check ]") +
        "\n" +
        "> 1 | hogehoge  \n" +
        "    | ^\n",
    );
  });
});
