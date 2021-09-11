import { Box, Text, Image, Flex, Skeleton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Img from '../../Assets/chupi2.png';
import { Btn } from '../Section/Btn';
export const Card = ({
  index,
  showBtn,
  setShowBtn,
  lastElement,
  loading,
  product,
}) => {
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
      <Flex justifyContent="center" my="20px" position="relative">
        <Box
          w="220px"
          h="340px"
          bg="#ffffff"
          borderRadius="2px"
          py="10px"
          mr={{ md: '20px', lg: '20px' }}
          boxShadow="sm"
          _hover={{ boxShadow: '5px 5px 17px 1px rgba(181,78,159,0.36)' }}
        >
          <Image
            m="auto"
            boxSize="220px"
            objectFit="contain"
            src={
              product
                ? product.image
                  ? product.image.url
                  : product.imageFromDash
                : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
            }
            mb="5px"
          />
          <hr />
          <Box mt="5px" mb="10px">
            <Text textAlign="center" fontSize="18px">
              {product && product.title}
            </Text>
            <Box ml="15px">
              <Flex alignItems="baseline">
                <Text fontSize="16px" fontWeight="500">
                  $
                  {product && product.descuento
                    ? product?.price * 0.9
                    : product?.price}
                </Text>
                {product && product.descuento && (
                  <Text fontSize="10px" as="s" color="gray.500" mx="5px">
                    ${product && product.price}
                  </Text>
                )}
                {product && product.descuento && (
                  <Text fontSize="13px" color="pink.500" fontWeight="500">
                    10% Off
                  </Text>
                )}
              </Flex>
              {/* <Box>
                {product && product.descuento && (
                  <Text fontSize="10px" as="s" color="gray.400">
                    ${product && product.price}
                  </Text>
                )}
              </Box> */}

              <Text fontSize="sm" color="gray.500" mt="2px">
                {product && product.shortDescription}
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
