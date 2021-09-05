import React, { useEffect } from 'react';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import Section from '../../Components/Section/Section';
import Gallery from '../../Components/Ui/Gallery/Gallery';
export const Home = () => {
  const { loading, response, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData('get', `${url}/products`, fetchProducts);
  }, [fetchData]);

  return (
    <>
      <Gallery />
      <Section loading={loading} />
      <Section loading={loading} />
    </>
  );
};
export default Home;
