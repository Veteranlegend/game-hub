import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  searchText: string;
}

const NavBar = ({ onSearch, searchText }: Props) => {
  return (
    <HStack padding="10px" spacing={5}>
      <Image src={logo} boxSize="60px" />

      <Box flex="1">
        <SearchInput onSearch={onSearch} searchText={searchText} />
      </Box>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;