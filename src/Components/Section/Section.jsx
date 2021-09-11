import { useState } from 'react';
import {
  Heading,
  Flex,
  Grid,
  Text,
  Box,
  Skeleton,
  Button,
} from '@chakra-ui/react';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';

const Section = ({ loading, section, products }) => {
  const [showBtn, setShowBtn] = useState(false);
  const skeletonCards = [1, 2, 3, 4, 5];
  // const lastSarasa = sarasa[sarasa.length - 1] - 1;

  return (
    <Flex alignContent="center" mx="30px" my="30px" flexDir="column">
      <Skeleton
        h="40px"
        w="130px"
        mb="15px"
        startColor="pink.500"
        endColor="orange.500"
        isLoaded={!loading}
      >
        <Heading mb="20px" w="200px">
          {section?.titulo}
        </Heading>
      </Skeleton>

      <Grid
        templateColumns={{
          base: 'repeat(1, 250px)',
          sm: 'repeat(5, 250px)',
          md: 'repeat(5, 250px)',
          lg: 'repeat(5, 250px)',
          xl: 'repeat(5, 250px)',
        }}
        justifyContent="center"
      >
        {products
          ? products.map((product, index) => {
              return (
                <Card
                  index={index}
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  product={product}
                  // lastElement={lastSarasa}
                />
              );
            })
          : skeletonCards.map((c, index) => {
              return <Card loading={loading} index={index} />;
            })}
      </Grid>
      {!loading && (
        <Box m="auto">
          <Link>
            <Button
              color="nucba.form"
              bg="nucba.primary"
              _focus={{ outline: 'none' }}
              _hover={{ bg: 'nucba.hover' }}
              mt="20px"
            >
              Ver Todos
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Section;
