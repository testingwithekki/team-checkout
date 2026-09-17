# Create team sample

Three small Playwright tests cover adding tasks in [Playwright's TodoMVC demo](https://demo.playwright.dev/todomvc/). They provide one workload for the shared CI runner.

This is a **public** repository under `testingwithekki`. Its workflow calls the shared workflow in [`ci-platform`](https://github.com/testingwithekki/ci-platform), which targets the organization's `qa-playwright` runner. Self-hosted jobs run only on trusted `main` pushes or manual dispatch; the workflow has no pull-request trigger.

Run locally with `npm ci`, `npx playwright install chromium`, and `npm test`. If the browser download is unavailable but Chrome is installed, set `PLAYWRIGHT_USE_INSTALLED_CHROME=1` for the local test command.
