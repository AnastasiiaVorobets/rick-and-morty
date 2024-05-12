export const paginateList = (currentPage: number, itemsPerPage: number, list: any[]): any[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return list.slice(startIndex, endIndex);
};
