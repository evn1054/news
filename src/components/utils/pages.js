export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  if (totalPages > 10) {
    totalPages = 10;
  }
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
