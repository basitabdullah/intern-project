import {
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchedItems = ({ id, name, image, tagLine, brewed }) => {
  return (
   
      <Card
       
        mt={'10'}
        bgColor={"ButtonFace"}
        minWidth={'xl'}
        maxH={"35vh"}
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        shadow={"dark-lg"}
        variant="filled"
        transition={'all 0.5s'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          mt={10}
          ml={10}
          w={'30'}
          h={'40'}
          objectFit="contain"
          maxW={{ base: '100%', sm: '200px' }}
          src={image}
        />

        <Stack ml={'10'}>
        <CardBody textAlign={'center'} maxW={'30vw'} mt={'3'}>
          <Heading size="md">{name}</Heading>
          <Text fontWeight={'medium'} p={2}>
            {tagLine}
          </Text>
          <Text fontWeight={'light'} fontSize={'small'} p={2}>
            First Brewed :{brewed}
          </Text>
        </CardBody>

          <CardFooter>
            <Link to={`/details/${id}`}>
              <Button
                variant="solid"
                bgGradient={[
                  'linear(to-tr, teal.100, yellow.400)',
                  'linear(to-t, blue.200, teal.500)',
                  'linear(to-b, orange.100, purple.300)',
                ]}
              >
                Details
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
 
  );
};

export default SearchedItems;
