'use client';
import { Stack, Text } from '@chakra-ui/react';
import { colors } from '../config/colors';
import type { StackProps } from '@chakra-ui/react';

interface SectionTitleProps extends StackProps {
  title: string;
  description: string;
}

export const SectionTitle = ({
  title,
  description,
  display,
}: SectionTitleProps) => {
  return (
    <Stack
      mt="0.5rem"
      gap="0.5rem"
      maxWidth={{ base: '70%', md: '800px' }}
      width="100%"
      margin="auto"
      display={display}
    >
      <Text
        fontSize={{ base: 'lg', md: '3xl' }}
        fontWeight="bold"
        color={colors.yellow}
        textAlign="center"
        lineHeight="1"
      >
        {title}
      </Text>
      <Text
        dangerouslySetInnerHTML={{ __html: description }}
        fontSize={{ base: 'lg', md: '3rem' }}
        fontWeight="bold"
        color="white"
        textAlign="center"
        lineHeight="1.1"
      ></Text>
    </Stack>
  );
};
