import { useState } from 'react';
import { Heading, Flex, Grid, Text, Box, Skeleton } from '@chakra-ui/react';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';

const Section = ({ loading }) => {
  const [showBtn, setShowBtn] = useState(false);
  const sarasa = [1, 2, 3, 4, 5];
  const lastSarasa = sarasa[sarasa.length - 1] - 1;

  return (
    <Flex alignContent="center" mx="20px" my="20px" flexDir="column">
      <Skeleton
        h="40px"
        w="130px"
        mb="15px"
        startColor="pink.500"
        endColor="orange.500"
        isLoaded={!loading}
      >
        <Heading mb="15px">Whisky</Heading>
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
        {sarasa.map((sa, index) => {
          return (
            <Card
              index={index}
              showBtn={showBtn}
              setShowBtn={setShowBtn}
              lastElement={lastSarasa}
              loading={loading}
            />
          );
        })}
      </Grid>
      {!loading && (
        <Box m="auto">
          <Link>Ver todos</Link>
        </Box>
      )}
    </Flex>
  );
};

export default Section;
