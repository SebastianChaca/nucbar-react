import { useState } from 'react';
import { Heading, Flex, Grid, Text, Box } from '@chakra-ui/layout';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';

const Section = () => {
  const [showBtn, setShowBtn] = useState(false);
  const sarasa = [1, 2, 3, 4, 5];
  const lastSarasa = sarasa[sarasa.length - 1] - 1;

  return (
    <Flex alignContent="center" mx="20px" my="20px" flexDir="column">
      <Heading mb="15px">Whisky</Heading>

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
            />
          );
        })}
      </Grid>
      <Box m="auto">
        <Link>Ver todos</Link>
      </Box>
    </Flex>
  );
};

export default Section;
