export const generateUrlSearchParams = (url: string, params) => {
  const urlSearchParams = new URLSearchParams(params);
  return `${url}?${urlSearchParams}`;
};
