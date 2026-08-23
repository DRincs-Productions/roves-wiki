export interface Contributor {
  login: string;
  avatar_url: string;
  contributions: number;
}

async function fetchContributors(owner: string, repo: string): Promise<Contributor[]> {
  try {
    const headers = new Headers();
    if (process.env.GITHUB_TOKEN) headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`, {
      headers,
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return [];

    const contributors = (await response.json()) as Contributor[];
    return contributors.filter((contributor) => !contributor.login.endsWith('[bot]'));
  } catch {
    return [];
  }
}

export async function fetchAllContributors(owner: string, repos: string[]): Promise<Contributor[]> {
  const results = await Promise.all(repos.map((repo) => fetchContributors(owner, repo)));

  const merged = new Map<string, Contributor>();
  for (const contributor of results.flat()) {
    const existing = merged.get(contributor.login);
    if (existing) {
      existing.contributions += contributor.contributions;
    } else {
      merged.set(contributor.login, { ...contributor });
    }
  }

  return Array.from(merged.values()).sort((a, b) => b.contributions - a.contributions);
}
