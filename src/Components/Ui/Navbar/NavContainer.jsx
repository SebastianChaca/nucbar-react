import { Flex } from '@chakra-ui/react';

const NavContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      p="20px"
      display="flex"
      borderBottom="1px"
      borderColor="gray.300"
      justifyContent="space-between"
      alignItems="center"
      bg="nucba.primary"
    >
      {children}
    </Flex>
  );
};

export default NavContainer;
