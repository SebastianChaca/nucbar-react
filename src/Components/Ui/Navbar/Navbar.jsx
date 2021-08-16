import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Flex,
  Box,
  Spacer,
  Image,
  Button,
  Container,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { TextHover, LogBtn } from '../../Shared/SharedComponents';
import Logo from '../../../Assets/505b8c8ade6d4e23a00131abe9b1537c.png';
import Sidebar from './Sidebar/Sidebar';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const containerResponsive = {
    base: 'none',
    sm: 'none',
    md: 'flex',
    lg: 'flex',
    xl: 'flex',
  };
  return (
    <div>
      <Flex
        as="nav"
        p="20px"
        display="flex"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
          onClick={onOpen}
          background="none"
        >
          <GiHamburgerMenu style={{ fontSize: 30 }} />

          <Sidebar isOpen={isOpen} onClose={onClose} />
        </Button>
        <TextHover children={'Logo Home'} display={containerResponsive} />
        <Flex>
          <TextHover
            mt={{ sm: 0, md: '5px', lg: '5px' }}
            children={<FaShoppingCart />}
          />
          <LogBtn display={containerResponsive} />
        </Flex>
      </Flex>
    </div>
  );
};

export default NavBar;
