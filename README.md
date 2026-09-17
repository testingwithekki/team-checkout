# Checkout team sample

Three small, deterministic Playwright tests provide a workload for the shared CI runner. The tests use in-memory pages so a separate demo application and external website do not affect CI results.

Publish this folder as a **private** repository named `team-checkout` under `testingwithekki`. If you choose a different organization name, update the workflow reference first.

Run locally with `npm ci`, `npx playwright install chromium`, and `npm test`. If the browser download is unavailable but Chrome is installed, set `PLAYWRIGHT_USE_INSTALLED_CHROME=1` for the local test command.
