export const HttpClient = {
  get: (options: RequestInfo) =>
    fetch(options).then((response) => response.json()),
};
