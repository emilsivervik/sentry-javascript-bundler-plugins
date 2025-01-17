import fs from "fs";
import path from "path";

const fixturePaths = fs
  .readdirSync(path.join(__dirname, "..", "fixtures"))
  .map((fixtureDir) => path.join(__dirname, "..", "fixtures", fixtureDir));

fixturePaths.forEach((fixturePath) => {
  const setupScriptPath = path.join(fixturePath, "setup.ts");
  if (fs.existsSync(setupScriptPath)) {
    require(setupScriptPath);
  }
});
