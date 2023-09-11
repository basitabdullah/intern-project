import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

const ItemDetails = () => {
  const prams = useParams();
  const [items, setItems] = useState([]);
  const [loading,setLoading]  = useState(true)

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const { data } = await axios.get(
          `https://api.punkapi.com/v2/beers/${prams.id}`
        );
        setItems(data);
        setLoading(false)
        
      } catch (error) {
        setError(true);
      }
    };
    fetchDrinks();
  }, [prams.id]);
  if (error) {
    return <ErrorComponent />;
  }

  return items.map(i => (
  loading ? <Loader/> : (
    <Box p={4} >
    <Flex flexDirection={['column', 'column', 'row']}>
      <Box mr={'40'}>
        <Image
          ml={20}
          src={i.image_url}
          alt={i.name}
          maxW={['100%', '100%', '160px']}
        />
      </Box>
      <Box alignSelf={"center"} maxHeight={"60vh"} border={'1px'} w={"50vw"} borderRadius={'2xl'} p={'10'}>
        <Heading as="h1" size="xl" mb={4} mt={30}>
          {i.name}
        </Heading>
        <Text
          letterSpacing={'4'}
          fontSize="lg"
          fontFamily={'cursive'}
          fontWeight="semibold"
          color={"blackAlpha.700"}
        >
          Tagline: {i.tagline}
        </Text>
        <Text letterSpacing={'wider'} fontSize="lg" fontFamily={'cursive'}  color={"blackAlpha.700"} >
          First Brewed: {i.first_brewed}
        </Text>
        <Text letterSpacing={'wider'} fontSize="lg" fontFamily={'cursive'}  color={"blackAlpha.700"}>
          ABV: {i.abv}%
        </Text>
        <Text
          letterSpacing={'wider'}
          fontSize="lg"
          fontFamily={"cursive"}
          color={"blackAlpha.700"}
          mt={4}
        >
          Description: {i.description}
        </Text>
      </Box>
    </Flex>
  </Box>
  )
  ));
};

export default ItemDetails;
