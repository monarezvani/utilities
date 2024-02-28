import { useMemo } from "react";

interface PaginationProps {
  siblingCount: number;
  isMobile: boolean;
  totalCount:number;
  pageSize:number;
  currentPageNumber:number
}
export const DOTS = "...";

export const usePagination = ({
  siblingCount = 1,
  isMobile,
  totalCount,
  pageSize,
  currentPageNumber
}: PaginationProps) => {

  const totalPageCount = Math.ceil(totalCount / pageSize);
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    const range = (start: number, end: number) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPageNumber - siblingCount, 1);

    const rightSiblingIndex = Math.min(
      currentPageNumber + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      if (isMobile) {
        leftItemCount = 2 * siblingCount;
        leftRange = range(1, leftItemCount);
      }
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount;
      let rightRange;
      if (isMobile) {
        rightItemCount = 2 * siblingCount;
        rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

        return [firstPageIndex, DOTS, ...rightRange];
      } else {
        rightItemCount = 3 + 2 * siblingCount;
        rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
        return [firstPageIndex, DOTS, ...rightRange];
      }
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [currentPageNumber, siblingCount, totalPageCount, isMobile]);

  return paginationRange;
};
