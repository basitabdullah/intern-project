import {
  Button,
  Container,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { GiBrokenBottle } from 'react-icons/gi';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '..';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import SearchedItems from './SearchedItems';

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [Loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`${server}beers?page=2&per_page=24`);
        setLoading(false);
        setItems(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchItems();
  }, []);
  useEffect(() => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    console.log(`Search clicked with term: ${searchTerm}`);
  };
  if (error) {
    return <ErrorComponent />;
  }
  return (
    <>
      <Container
        
        maxW={'full'}
        minH={'60vh'}
        bgImage={
          'https://images.unsplash.com/photo-1581211613046-9a0b6240ea31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'
        }
        bgPosition={'center'}
        textAlign={'center'}
      >
        <Text fontSize={'7xl'} fontWeight={'bold'} color={'white'}>
          Get Ready to Become Dizzy
        </Text>
        <Stack direction={'row'} justifyContent={'center'} mt={'10'}>
          <Input
            onChange={handleSearchChange}
            focusBorderColor="transparent"
            borderRadius={'none'}
            mr={'-2'}
            border={'none'}
            w={'20vw'}
            type={'search'}
            placeholder="search drinks . . ."
            bgColor={'white'}
            padding={'7'}
          ></Input>
          <Button
            bgColor={'white'}
            border={'none'}
            borderRadius={'none'}
            padding={'7'}
            onClick={handleSearchClick}
          >
            <GiBrokenBottle size={'30'} />
          </Button>
        </Stack>
      </Container >
      {Loading ? (
        <Loader />
      ) : (
       
        <HStack wrap={'wrap'} justifyContent={"center"} overflow={"hidden"} gap={"10"} p={"30"}>
          {filteredItems.map((i) => (
            <SearchedItems
              key={i.id}
              id={i.id}
              name={i.name}
              image={i.image_url}
              tagLine={i.tagline}
              brewed={i.first_brewed}
            />
          ))}
        </HStack>
      )}
    </>
  );
};

export default Home;
