const githubEndpoint = "https://api.github.com";

export async function getRepos() {
  return fetch(`${githubEndpoint}/repositories`, {
    method: "GET",
    headers: { Accept: "application/vnd.github.v3+json" },
  }).then(
    (response) => response.json(),
    (err) => console.log(err)
  );
}
