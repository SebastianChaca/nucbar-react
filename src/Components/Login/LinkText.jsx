import { Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const LinkText = ({ loginMode, handleMode }) => {
  return (
    <Text textAlign="center" mt="10px" mb="20px">
      {loginMode ? '¿ No estas registrado ?' : '¿ Estas registrado ?'}
      <Box onClick={handleMode} cursor="pointer">
        {loginMode ? <strong>Registrate.</strong> : <strong>Ingresá.</strong>}
      </Box>
    </Text>
  );
};
