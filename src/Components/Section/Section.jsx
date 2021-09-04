import { useState } from 'react';
import { Box, Heading, Flex, SimpleGrid, Grid } from '@chakra-ui/layout';
import { Card } from '../Card/Card';
import { Btn } from './Btn';

const Section = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleShowBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        alignContent="center"
        mx="20px"
        my="20px"
        flexDir="column"
        onMouseEnter={() => {
          setShowBtn(true);
        }}
        onMouseOut={() => {
          setShowBtn(false);
        }}
      >
        <Heading mb="15px">Whisky</Heading>

        <Grid
          templateColumns={{
            base: 'repeat(1, 250px)',
            sm: 'repeat(2, 250px)',
            md: 'repeat(3, 250px)',
            lg: 'repeat(4, 250px)',
            xl: 'repeat(5, 250px)',
          }}
          gap={1}
          justifyContent="center"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Flex>
      {showBtn && <Btn left />}
      {showBtn && <Btn />}
    </>
  );
};

export default Section;
