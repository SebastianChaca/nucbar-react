import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Img from '../../Assets/chupi2.png';
import { Btn } from '../Section/Btn';
export const Card = ({ index, showBtn, setShowBtn, lastElement }) => {
  return (
    <Link>
      <Flex justifyContent="center" mb="20px" position="relative">
        <Box
          w="220px"
          h="100%"
          bg="#ffffff"
          borderRadius="2px"
          py="10px"
          mr={{ md: '20px', lg: '20px' }}
        >
          <Image
            m="auto"
            boxSize="230px"
            objectFit="contain"
            src={Img}
            mb="5px"
          />
          <hr />
          <Box mt="5px" mb="10px">
            <Text textAlign="center" fontSize="18px">
              Título
            </Text>
            <Box ml="15px">
              <Text fontSize="15px" fontWeight="500">
                $5000
              </Text>
              <Text fontSize="sm" color="gray.500">
                Descripcion sarasasasasas
              </Text>
            </Box>
          </Box>
        </Box>
        {/* {showBtn && (index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
        {/* {(index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
      </Flex>
    </Link>
  );
};
