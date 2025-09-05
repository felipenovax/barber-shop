'use client';
import { Card, Flex, Stack, Text } from '@chakra-ui/react';
import { colors } from '../config/colors';
import { StoreButtonCard } from '../ui/store-button-card';

export const DownloadBanner = () => {
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
      padding="2rem"
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        padding={{ base: '0', md: '0 2rem' }}
        alignItems="center"
        gap={{ base: '2rem', md: '0' }}
      >
        <Text
          fontSize={{ base: 'xl', md: '5xl' }}
          fontWeight="bold"
          lineHeight="1"
          color="white"
        >
          Aproveite o que é de melhor
          <br /> no app. Baixe agora!
        </Text>
        <Stack gap="1rem" direction={{ base: 'row', md: 'column' }}>
          <StoreButtonCard type="apple" />
          <StoreButtonCard type="google" />
        </Stack>
      </Flex>
    </Card.Root>
  );
};
