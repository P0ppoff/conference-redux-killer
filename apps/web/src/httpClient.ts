export const HttpClient = {
  get: (options: RequestInfo) =>
    fetch(options).then((response) => response.json()),
  post: <T = unknown>(url: string, options: RequestInit) =>
    fetch(url, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json() as T),
};
