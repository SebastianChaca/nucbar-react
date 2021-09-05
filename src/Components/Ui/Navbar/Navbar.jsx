import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { TextHover, LogBtn } from '../../Shared/SharedComponents';
import Logo from '../../../Assets/logo1.png';
import Portada from '../../../Assets/portada.jpg';
import Sidebar from '../Sidebar/Sidebar';
import NavContainer from './NavContainer';
import { containerResponsive } from '../../../Utils/responsives';
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const HamburguerBtn = () => {
    return (
      <Button
        display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
        onClick={onOpen}
        background="none"
      >
        <GiHamburgerMenu style={{ fontSize: 30 }} color="#ffff" />

        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Button>
    );
  };
  const RightBtns = () => {
    return (
      <Flex>
        <LogBtn display={containerResponsive} />
        <Flex mr="10px" position="relative">
          <FiShoppingCart color="#fff" fontSize="20px" />
          <Box
            position="absolute"
            color="nucba.form"
            bottom={{ base: '15px', sm: '15px', md: '22px', lg: '22px' }}
            left="17px"
          >
            <Text fontSize="11px">0</Text>
          </Box>
        </Flex>
      </Flex>
    );
  };
  return (
    <>
      <NavContainer>
        <HamburguerBtn />
        <Box display={containerResponsive}>
          <Image src={Logo} objectFit="contain" boxSize="80px" />
        </Box>
        <RightBtns />
      </NavContainer>
      <Image src={Portada} w="100%" h="360px" objectFit="cover" />
    </>
  );
};

export default NavBar;
