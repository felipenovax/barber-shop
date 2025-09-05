import { Card, Text } from '@chakra-ui/react';
import React from 'react';

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
  if (type === 'google') return <Google />;

  return <Apple />;
};
