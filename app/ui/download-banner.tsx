'use client';
import { Card, Flex, Stack, Text } from '@chakra-ui/react';
import { colors } from '../config/colors';
import { StoreButtonCard } from '../ui/store-button-card';
import { useDeviceType } from '../config/matchMedia';
import { GooglePlayIcon } from './google-play-icon';
import { AppleStoreIcon } from './apple-store-icon';

export const DownloadBanner = () => {
  const { isMobile, isTable } = useDeviceType();
  return (
    <Card.Root
      gap="2rem"
      overflow="hidden"
      margin="auto"
      marginTop="2rem"
      bg={colors.yellow}
      border="none"
      borderRadius="xl"
      width="90%"
      height="auto"
      padding={{ base: '2rem 1.3125rem', md: '2rem' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        padding={{ base: '0', md: '0', lg: '0 2rem' }}
        alignItems="center"
        gap={{ base: '2rem', lg: '0' }}
      >
        <Text
          fontSize={{ base: '1.75rem', md: '1.5rem', lg: '5xl' }}
          fontWeight="bold"
          lineHeight="1"
          color="white"
        >
          Aproveite o que é de melhor no app. <br />
          Baixe agora!
        </Text>
        <Stack gap="1rem" direction={{ base: 'row', md: 'column' }}>
          <GooglePlayIcon scale={isMobile ? 100 : isTable ? 120 : 200} />
          <AppleStoreIcon scale={isMobile ? 100 : isTable ? 120 : 200} />
        </Stack>
      </Flex>
    </Card.Root>
  );
};
