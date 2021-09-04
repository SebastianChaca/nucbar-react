import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Flex, useDisclosure, Button } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { TextHover, LogBtn } from '../../Shared/SharedComponents';
import Logo from '../../../Assets/505b8c8ade6d4e23a00131abe9b1537c.png';
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
        <TextHover
          mt={{ sm: 0, md: '5px', lg: '5px' }}
          mr="15px"
          children={<FaShoppingCart color="#fff" />}
        />
        <LogBtn display={containerResponsive} />
      </Flex>
    );
  };
  return (
    <NavContainer>
      <HamburguerBtn />
      <TextHover
        link="/"
        children={'Logo Home'}
        display={containerResponsive}
      />
      <RightBtns />
    </NavContainer>
  );
};

export default NavBar;
