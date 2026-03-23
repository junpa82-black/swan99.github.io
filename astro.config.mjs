import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repoName.endsWith(".github.io");
const base = isUserPage || !repoName ? "/" : `/${repoName}`;

export default defineConfig({
  site: "https://junpa82-black.github.io/swan99.github.io",
  base,
  output: "static",
});
