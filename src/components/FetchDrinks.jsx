import { Container, HStack} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { server } from '..';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';


const FetchDrinks = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const { data } = await axios.get(`${server}beers?page=2&per_page=24`);
        console.log(data);
        setLoading(false);
        setItems(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchDrinks();
  }, []);
  if (error) {
    return <ErrorComponent />;
  }
  return (
    <Container maxW={"container.xl"}  >
    {
      Loading ? <Loader/> : <>
           <HStack
          wrap={'wrap'}
          w={'full'}
          justifyContent={'center'}
          gap={"10"}
          marginTop={6}
          textAlign={'center'}
          pb={"10"}
        >
          {items.map(i => (
            <ProductCard
              key={i.id}
              id={i.id}
              name={i.name}
              image={i.image_url}
              tagLine={i.tagline}
              brewed={i.first_brewed}
            />
          ))}
        </HStack>
      
      </>
     }
    </Container>
  );
};

export default FetchDrinks;
