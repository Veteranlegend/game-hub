import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
  searchText: string;
}

const SearchInput = ({ onSearch, searchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(searchText);

  useEffect(() => {
    setInputValue(searchText);
  }, [searchText]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(inputValue.trim());
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;