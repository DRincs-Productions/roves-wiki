export const appName = "Roves";
export const tagline = "A Servo-based native shell for web-built games — any framework, Vite included.";

export const gitConfig = {
  user: "DRincs-Productions",
  repo: "roves",
};

export const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;
export const rovesApiRepoUrl = `https://github.com/${gitConfig.user}/roves-api`;
export const rovesActionRepoUrl = `https://github.com/${gitConfig.user}/roves-action`;
export const servoWikiUrl = "https://servo.org";

// Filled in once Discussions + the giscus GitHub App are enabled on the
// `roves` repo — see https://giscus.app, which generates these two IDs from
// the repo/category you pick. Comments are simply not rendered (see
// components/giscus-comments.tsx) until both are set to real values.
export const giscusConfig = {
  repo: `${gitConfig.user}/roves` as `${string}/${string}`,
  repoId: "",
  category: "Docs comments",
  categoryId: "",
};
