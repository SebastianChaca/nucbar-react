import React, { useEffect } from 'react';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import Section from '../../Components/Section/Section';
export const Home = () => {
  const { loading, response, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData('get', `${url}/products`, fetchProducts);
  }, [fetchData]);

  // if (loading) {
  //   return <h1>LOADING</h1>;
  // }

  return (
    <>
      <Section />
      <Section />
    </>
  );
};
export default Home;
