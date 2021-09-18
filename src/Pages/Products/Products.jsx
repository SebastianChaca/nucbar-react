import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useArray from '../../Hooks/useArray';
import ListCard from '../../Components/ListCard/ListCard';
import Banner from '../../Components/Banner/Banner';
import OrderByDropDown from '../../Components/OrderByDropDown/OrderByDropDown';
import Breadcrumb from '../../Components/BreadCrumb/Breadcrumb';
import { Flex, Box } from '@chakra-ui/react';
import SwitcherCard from '../../Components/SwitcherCard/SwitcherCard';
import { FaFileExcel } from 'react-icons/fa';

const Products = () => {
  const { category } = useParams();
  const { products } = useSelector(state => state.products);

  const filteredProducts = products?.filter(p => p.categoria === category);

  if (!products) {
    return <h1>No Hay productos</h1>;
  }
  const items = ['Bebidas Alcoholicas', 'Whiskys'];
  return (
    <>
      <Banner category={category} />
      <Box p="15px 25px 10px 25px">
        <Flex alignItems="center" justifyContent="space-between" mb="20px">
          <Breadcrumb items={items} />
          <OrderByDropDown />
        </Flex>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box>
            <SwitcherCard text={'Envío gratis'} />
            <SwitcherCard text={'Desde 10% OFF'} discount />
          </Box>
          <Box>
            {filteredProducts.map((product, index) => {
              return <ListCard product={product} index={index} />;
            })}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Products;
