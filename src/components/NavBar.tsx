import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Searchinput";

interface Props {
    onSearch : (searchText : string ) => void; 
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px" spacing={5}>
      <Image src={logo} boxSize="60px" />

      <Box flex="1">
        <SearchInput onSearch={onSearch}/>
      </Box>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;