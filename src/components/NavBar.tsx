import { HStack, Image, space } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Searchinput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between" } padding ='10px'>
      <Image src={logo} boxSize = "60px" /> 
      <SearchInput /> 
     <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;