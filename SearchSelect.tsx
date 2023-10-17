import * as React from 'react';
import Container from './Container';

interface Props {
  disabled?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (key: string, value: string) => void;
  placeholder: string;
  value?: string;
  searchResults?: SelectOption[];
}

export interface SelectOption {
  key: string;
  value: string;
}

const SearchSelect = (props: Props) => {
  const onResultClicked = (key: string, value: string) => {
    props.onSelect(key, value);
  };

  const results = props.searchResults?.map((result) => (
    <Container.Container
      key={result.key}
      onClick={() => onResultClicked(result.key, result.value)}
      className="cursor-pointer px-2 py-3 hover:bg-gray-100 rounded-lg"
    >
      <span>{result.value}</span>
    </Container.Container>
  ));

  return (
    <div className={`${props.className} relative`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-brand"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        disabled={props.disabled}
        type="search"
        className="block w-full p-4 pl-10 text-sm text-text border border-gray-300 rounded-lg bg-gray-50 focus:ring-brand focus:border-brand focus-visible:outline-none"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
      {results && (
        <Container.FlexCols className="absolute bg-white text-text w-full rounded-lg z-10">
          {results}
        </Container.FlexCols>
      )}
    </div>
  );
};

export default SearchSelect;
