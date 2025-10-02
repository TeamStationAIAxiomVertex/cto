import { execSync } from "child_process";

function safe(cmd) {
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch {
    console.log(`⚠️ Retrying: ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
  }
}

safe("npm ci --no-audit --no-fund");
safe("npm run typecheck");
safe("npm run lint");
safe("npm run build");
