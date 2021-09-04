import { useEffect, useState } from "react";

export default function usePagination(data, pageLimit, dataLimit) {
  const [pages, setPages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let dataLength = data.length;
    const remainder = data.length % dataLimit;
    if (remainder !== 0) dataLength = data.length + (dataLimit - remainder);

    setPages(Math.round(dataLength / dataLimit));
  }, [data]);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = ({ target }) => {
    const pageNumber = Number(target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return { pages, currentPage, setCurrentPage, getPaginatedData, getPaginationGroup, goToNextPage, goToPreviousPage, changePage };
}
