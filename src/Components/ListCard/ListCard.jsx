import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ListCard = ({ product, index }) => {
  return (
    <Flex justifyContent="right" mr="60px" mb="2px" mt={index === 0 && '50'}>
      <Box
        bg="nucba.form"
        w="60%"
        p="20px"
        borderRadius={index === 0 && '5px 5px 0px 0px'}
        lineHeight="19px"
      >
        <Flex>
          <Image
            boxSize="180px"
            objectFit="contain"
            src={
              product
                ? product.image
                  ? product.image.url
                  : product.imageFromDash
                : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
            }
          />
          <Box position="relative" ml="8%">
            <Text fontSize="23px" fontWeight="100" mb="18px" mt="15px">
              {product?.title}
            </Text>
            {product?.descuento && (
              <Text fontSize="12px" as="s" color="gray.500">
                ${product?.price}
              </Text>
            )}
            <Flex alignItems="center">
              <Text fontSize="23px" fontWeight="500" mr="10px">
                $
                {product && product.descuento
                  ? product?.price * 0.9
                  : product?.price}
              </Text>
              {product?.descuento && (
                <Text fontSize="13px" color="pink.500" fontWeight="500">
                  10% OFF
                </Text>
              )}
              <Flex
                justifyContent="left"
                w="100px"
                position="absolute"
                left="230px"
              >
                {[...Array(product.rate).keys()].map((item, index) => {
                  return (
                    <Box mx="1px" color="nucba.primary">
                      <FaStar />
                    </Box>
                  );
                })}
                {[...Array(5 - product.rate).keys()].map((item, index) => {
                  return (
                    <Box mx="1px" color="nucba.primary">
                      <FaRegStar />
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
            <Text fontSize="sm" color="gray.500" mt="15px">
              {product && product.shortDescription}
            </Text>
            {product?.price >= 5000 && (
              <Text fontSize="13px" color="pink.500" fontWeight="700" mt="10px">
                Envío gratis
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ListCard;
