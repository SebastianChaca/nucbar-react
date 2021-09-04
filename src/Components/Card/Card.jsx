import React from 'react';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Img from '../../Assets/chupi2.png';
export const Card = () => {
  return (
    <Flex justifyContent="center">
      <Link>
        <Box
          w="225px"
          bg="#ffffff"
          borderRadius="5px"
          py="10px"
          boxShadow="lg"
          _hover={{
            boxShadow: '2xl',
          }}
          mr="30px"
          mb="20px"
        >
          <Image
            m="auto"
            boxSize="200px"
            objectFit="contain"
            src={Img}
            p="5px"
          />
          <hr />
          <Box m="10px">
            <Text textAlign="center" fontSize="xl">
              Título
            </Text>
            <Text fontSize="lg" fontWeight="500">
              $5000
            </Text>
            <Text fontSize="sm" color="gray.500">
              Descripcion sarasasasasas
            </Text>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
};
