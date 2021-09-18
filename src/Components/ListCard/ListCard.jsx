import { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { OrderByDropDown } from '../OrderByDropDown/OrderByDropDown';

const ListCard = ({ product, index }) => {
  const [show, setShow] = useState(false);
  const setShowEnter = () => {
    setShow(true);
  };
  const setShowLeave = () => {
    setShow(false);
  };

  return (
    <Box mb="2px" justifyContent="right" mr="60px">
      {/* <Flex
        justifyContent="right"
        mr="60px"
        mb="2px"
        mt={index === 0 && '20px'}
        position="relative"
        zIndex={100}
      > */}
      <Box
        onMouseEnter={() => setShowEnter()}
        onMouseLeave={() => setShowLeave()}
        bg="nucba.form"
        w="850px"
        p="20px"
        borderRadius={index === 0 && '5px 5px 0px 0px'}
        lineHeight="19px"
        position="relative"
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
      {show && (
        <Button
          position="absolute"
          m="10px"
          color="nucba.primary"
          _hover={{ color: 'nucba.hoverElement' }}
          bg="transparent"
          left="51%"
        >
          <AiOutlineHeart />
        </Button>
      )}
    </Box>
  );
};

export default ListCard;
