import { Box, Text, Image, Flex, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Img from '../../Assets/chupi2.png';
import { Btn } from '../Section/Btn';
export const Card = ({ index, showBtn, setShowBtn, lastElement, loading }) => {
  if (loading) {
    return (
      <Skeleton
        startColor="pink.500"
        endColor="orange.500"
        w="230px"
        h="335px"
        bg="#ffffff"
        borderRadius="2px"
        py="10px"
        mr={{ md: '20px', lg: '20px' }}
      />
    );
  }
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
          _hover={{ boxShadow: '5px 5px 17px 1px rgba(181,78,159,0.36)' }}
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
              <Flex>
                <Text fontSize="15px" fontWeight="500" mr="5px">
                  $5000
                </Text>
                {/* <Text fontSize="15px" as="s" color="gray.400">
                  $5000
                </Text> */}
                <Text fontSize="13px" color="pink.500" fontWeight="500">
                  10% Off
                </Text>
              </Flex>
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
