import { Card, Text, Image } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';
import { colors } from '../config/colors';

import appleLogo from '@/app/assets/apple.png';
import googleLogo from '@/app/assets/google-play.png';

const Apple = () => {
  return (
    <Card.Root
      color="white"
      fontSize="lg"
      fontWeight="bold"
      width={{ base: '50%', md: '250px' }}
      padding="0.75rem 0.25rem"
      border="none"
      borderRadius="xl"
      backgroundColor="#18181b"
      cursor="pointer"
    >
      <Card.Body
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="0.5rem"
        padding="0"
      >
        <Text
          color="white"
          width="150px"
          textAlign="center"
          fontWeight="normal"
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Baixe agora na <strong>Apple Store</strong>
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

const Google = () => {
  return (
    <Card.Root
      color="white"
      fontSize="lg"
      fontWeight="bold"
      width={{ base: '50%', md: '250px' }}
      padding="0.75rem 0.25rem"
      border="none"
      borderRadius="xl"
      backgroundColor="#18181b"
      cursor="pointer"
    >
      <Card.Body
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="0.5rem"
        padding="0"
      >
        <Text
          color="white"
          width="150px"
          textAlign="center"
          fontWeight="normal"
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Baixe agora no <strong>Google Play</strong>
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export const StoreButtonCard = ({ type }: { type: 'google' | 'apple' }) => {
  return (
    <Card.Root
      color="white"
      fontSize="lg"
      fontWeight="bold"
      width={{ base: '50%', md: '250px' }}
      padding="0.75rem 1rem"
      border="none"
      borderRadius="xl"
      backgroundColor="#18181b"
      cursor="pointer"
    >
      <Card.Body
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={{ base: '0.5rem', md: '0.5rem' }}
        padding="0"
      >
        <Image
          asChild
          width={{ base: '17px', md: '42px', lg: '56px' }}
          height="auto"
        >
          <NextImage
            src={type === 'apple' ? appleLogo : googleLogo}
            alt="Logo"
          />
        </Image>
        <Text
          color="white"
          width={{ base: '100px', md: '150px' }}
          textAlign={{ base: 'flex-start', md: 'center' }}
          fontWeight="normal"
          fontSize={{ base: 'x-small', md: 'md' }}
        >
          Baixe agora{' '}
          <strong>
            {type === 'apple' ? 'na Apple Store' : 'no Google Play'}
          </strong>
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
