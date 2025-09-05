'use client';
import { Box, Card, Image, Stack } from '@chakra-ui/react';
import NextImage from 'next/image';
import barber from '@/app/assets/barber.svg';
import { StoreButtonCard } from '../ui/store-button-card';
import { colors } from '../config/colors';

export const HeroSection = () => {
  return (
    <Box margin={{ base: 'unset', md: '4rem' }}>
      <Card.Root
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap="2rem"
        overflow="hidden"
        bg={colors.yellow}
        border="none"
        borderTopRadius={{ base: 'unset', md: '4xl' }}
        borderBottomRadius={{ base: '2xl', md: '4xl' }}
        width="100%"
        height="auto"
        padding={{ base: 'unset', md: '1.75rem' }}
      >
        <Box>
          <Card.Body padding={{ base: '1rem 1.5rem', md: '1.5rem' }}>
            <Card.Description
              fontSize={{ base: '1.68rem', md: '2rem', lg: '3.5rem' }}
              fontWeight="bold"
              lineHeight="1.2"
              color={colors.title}
            >
              Barber Home, o seu barbeiro delivery. Na sua casa ou na barbearia.
            </Card.Description>
          </Card.Body>
          <Box
            width="100%"
            justifyContent="center"
            display={{ base: 'flex', md: 'none' }}
          >
            <Image asChild width="45%">
              <NextImage src={barber} alt="Logo" />
            </Image>
          </Box>
          <Card.Footer gap="2rem" mt="1rem">
            <StoreButtonCard type="apple" />
            <StoreButtonCard type="google" />
          </Card.Footer>
        </Box>
        <Box
          width="100%"
          display={{ base: 'none', md: 'flex' }}
          justifyContent={{ base: 'unset', md: 'flex-end' }}
        >
          <Image asChild width={{ base: '50%', md: '95%' }}>
            <NextImage src={barber} alt="Logo" />
          </Image>
        </Box>
      </Card.Root>
    </Box>
  );
};
