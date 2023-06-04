import classes from './CustomPagination.module.scss';

interface IPaginationProps {
  totalItems: number,
  itemsOnPage: number,
  currentPage: number,
  leftRight?: number,
  setPage: (page: number) => void
}

interface IPaginationPage {
  page: number,
  setPage?: (page: number) => void,
  isCurrent?: boolean,
}

const PaginationItem = ({ page, setPage, isCurrent = false } :IPaginationPage): JSX.Element => (
  <li className={isCurrent ? classes.currentPage : ''}>
    <button
      onClick={() => {
        setPage?.(Number(page));
      }}
    >
      <span>{page}</span>
    </button>
  </li>
);

export const CustomPagination = ({
  totalItems, itemsOnPage, currentPage, leftRight = 2, setPage }: IPaginationProps): JSX.Element => {
  const totalPages = totalItems % itemsOnPage ? (totalItems / itemsOnPage) + 1 : totalItems / itemsOnPage;
  const leftEdge = currentPage - leftRight;
  const rightEdge = currentPage + leftRight;
  const itemsToRender = leftRight * 2 + 1;

  const getMiddle = (): number[] => {
    const result: number[] = [];
    for (let i = leftEdge; i <= rightEdge; i += 1) {
      result.push(i);
    }

    return result;
  };

  const list = getMiddle();

  const extraItemsBefore = list.reduce((acc, item) => {
    if (item < 1) acc += 1;

    return acc;
  }, 0);

  for (let i = 0; i < extraItemsBefore; i += 1) {
    list.push(list[list.length - 1] + 1);
    list.shift();
  }

  const extraItemsAfter = list.reduce((acc, item) => {
    if (item > totalPages) acc += 1;

    return acc;
  }, 0);

  for (let i = 0; i < extraItemsAfter; i += 1) list.pop();

  if (list.length < itemsToRender && list[0] > 1) {
    const missingItems = itemsToRender - list.length;
    if (missingItems === 1) list.unshift(list[0] - 1);
    if (missingItems > 1) {
      for (let i = 0; i < missingItems; i += 1) {
        if (list[0] !== 1) list.unshift(list[0] - 1);
      }
    }
  }

  return (
    <div className={classes.pagination}>
      <ul>
        <li>
          <button
            disabled={list[0] === currentPage}
            type="button"
            onClick={() => {
              setPage(currentPage - 1);
            }}
          >
            <span>{'<'}</span>
          </button>
        </li>
        {list.map((item) => <PaginationItem key={item} page={item} setPage={setPage} isCurrent={item === currentPage} />)}
        <li>
          <button
            disabled={list[list.length - 1] === currentPage}
            type="button"
            onClick={() => {
              setPage(currentPage + 1);
            }}
          >
            <span>{'>'}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
