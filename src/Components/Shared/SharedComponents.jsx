import React from 'react';
import { Text, Button, useToast, Box, Spinner } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

export const TextHover = ({ children, link, mt, display }) => {
  return (
    <Link to={link}>
      <Text
        mt={mt}
        mx="10px"
        display={display}
        fontSize="2xl"
        _hover={{
          color: 'teal.500',
        }}
      >
        {children}
      </Text>
    </Link>
  );
};
export const TextHoverDrawer = ({ children, link, onClose }) => {
  const history = useHistory();
  return (
    <Button
      variant="unstyled"
      textAlign="left"
      onClick={() => {
        onClose();
        history.push(link);
      }}
    >
      <Text
        mr="40px"
        fontSize="2xl"
        _hover={{
          color: 'teal.500',
        }}
      >
        {children}
      </Text>
    </Button>
  );
};
export const LogBtn = ({ display }) => {
  return (
    <Button colorScheme="teal" boxShadow="lg" pb="4px" display={display}>
      <Link to="/login">Ingresar</Link>
    </Button>
  );
};
export const FormBtn = ({ children, isValid, isDirty, isLoading }) => {
  return (
    <Button
      mt={4}
      colorScheme="teal"
      isLoading={isLoading}
      type="submit"
      disabled={!isValid || !isDirty}
      width="full"
      boxShadow="lg"
    >
      {children}
    </Button>
  );
};
export const useCustomToast = () => {
  const toast = useToast();
  const customToast = (status, description) => {
    toast({
      status: status,
      isClosable: true,
      variatn: 'top-accent',
      duration: 3000,
      description: description,
    });
  };

  return [customToast];
};
export const LoadingSpinner = () => {
  return (
    <Box textAlign="center" mt="50px" display="block">
      <Text mb="20px">Cargando...</Text>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="teal"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export const EmptyData = () => {
  return (
    <Box m="auto" textAlign="center">
      <Text fontSize="xl" my="30px">
        No se encontraron operaciones
      </Text>
      <Link to="/crear">
        <Button colorScheme="teal">Realizar una operación</Button>
      </Link>
    </Box>
  );
};
export const ErroData = ({ children }) => {
  return (
    <Text textAlign="center" fontSize="2xl" mt="30px">
      {children}
    </Text>
  );
};
