'use client';
import { Box, Card, Image, Stack } from '@chakra-ui/react';
import NextImage from 'next/image';
import barber from '@/app/assets/barber.svg';
import { colors } from '../config/colors';
import { GooglePlayIcon } from './google-play-icon';
import { AppleStoreIcon } from './apple-store-icon';
import { useDeviceType } from '../config/matchMedia';

export const HeroSection = () => {
  const { isMobile, isTable } = useDeviceType();

  return (
    <Box margin={{ base: 'unset', md: '2rem', lg: '4rem' }} id="hero-section">
      <Card.Root
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: '50% 50%' }}
        gap={{ md: '1rem', lg: '2rem' }}
        overflow="hidden"
        bg={colors.yellow}
        border="none"
        borderTopRadius={{ base: 'unset', md: '2xl', lg: '4xl' }}
        borderBottomRadius={{ base: '2xl', lg: '4xl' }}
        width="100%"
        height="auto"
        padding={{ base: 'unset', md: '1.75rem' }}
      >
        <Box>
          <Card.Body
            padding={{ base: '1rem 1.5rem', md: '1rem', lg: '1.5rem' }}
          >
            <Card.Description
              width="100%"
              fontSize={{ base: '1.68rem', md: '2rem', lg: '3.5rem' }}
              fontWeight="bold"
              lineHeight="1.2"
              color={colors.title}
            >
              Barber Home, o seu barbeiro delivery. Na sua casa ou na barbearia.
            </Card.Description>
          </Card.Body>
          {/* mobile */}
          <Box
            width="100%"
            justifyContent="center"
            display={{ base: 'flex', md: 'none' }}
          >
            <Image asChild width="45%">
              <NextImage src={barber} alt="Logo" />
            </Image>
          </Box>
          <Card.Footer
            gap="2rem"
            mt="1rem"
            justifyContent={{ base: 'center', md: 'unset' }}
            padding={{ base: undefined, md: '0', lg: undefined }}
          >
            <GooglePlayIcon scale={isMobile ? 100 : isTable ? 120 : 200} />
            <AppleStoreIcon scale={isMobile ? 100 : isTable ? 120 : 200} />
          </Card.Footer>
        </Box>
        <Box
          display={{ base: 'none', md: 'flex' }}
          justifyContent={{ base: 'unset', md: 'flex-end' }}
          alignItems="center"
        >
          <Image asChild width={{ base: '50%', md: '100%', lg: '95%' }}>
            <NextImage src={barber} alt="Logo" />
          </Image>
        </Box>
      </Card.Root>
    </Box>
  );
};
