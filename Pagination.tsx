import * as React from 'react';

interface Props {
  page: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

interface PageBtnProps {
  children: React.ReactNode;
  selected?: boolean;
}

const PageBtn = (props: PageBtnProps) => (
  <a
    className={`flex items-center justify-center px-6 w-auto h-10 leading-tight text-gray-700 ${
      props.selected ? 'bg-gray-200' : 'bg-white'
    } border border-gray-300 hover:bg-gray-200 hover:text-gray-800`}
  >
    {props.children}
  </a>
);

const Pagination = (props: Props) => {
  const pages = Array.from(
    { length: props.max - props.min + 1 },
    (_, i) => i + props.min,
  ).map((i) => (
    <li key={i} onClick={() => props.onChange(i)}>
      <PageBtn selected={props.page === i}>{i}</PageBtn>
    </li>
  ));

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        <li key="prev" onClick={props.onPrev}>
          <PageBtn>
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </PageBtn>
        </li>
        {pages}
        <li key="next" onClick={props.onNext}>
          <PageBtn>
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </PageBtn>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
