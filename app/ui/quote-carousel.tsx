import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import quote from '@/app/assets/quote-icon.png';
import { colors } from '../config/colors';
import {
  Box,
  Blockquote,
  Text,
  Button,
  Flex,
  Stack,
  IconButton,
  Grid,
  Image,
  Bleed,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { SectionTitle } from './section-title';

const slides = [
  {
    description:
      'Sou suspeito em falar desse aplicativo, ele foi construído de usuário para usuário. A facilidade de chamar um barbeiro no meu conforto e sem igual.',
    author: 'Dione Moreira',
  },
  {
    description:
      'A experiência foi fantástica! Nunca mais vou querer marcar barbeiro de outro jeito. Muito prático e rápido.',
    author: 'Carlos Ferreira',
  },
  {
    description:
      'Finalmente encontrei um app que resolve meu problema. Recomendo para todos!',
    author: 'Lucas Andrade',
  },
];

export const QuoteCarousel = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(nextSlide, 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(nextSlide, 10000);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 10000);
    return () => clearInterval(timerRef.current!);
  }, []);

  return (
    <Stack padding="0" gap="4" marginY="5rem">
      <SectionTitle
        title="Quem usa"
        description="O que o nossos usuários dizem sobre o nosso app?"
      />
      <Bleed height={{ base: '1rem', md: 'unset' }} />

      <Stack
        id="quote-section"
        margin="auto"
        backgroundColor={colors.yellow}
        padding={{ base: '1rem', md: '4rem 2rem' }}
        borderRadius="3xl"
        width="90%"
        gap="2rem"
      >
        <Grid templateColumns={{ base: '1fr', md: 'auto fit-content auto' }}>
          <Box width="70%" margin={{ base: 'auto 1rem', md: '-1rem auto' }}>
            <Image
              asChild
              position="relative"
              top={{ base: '2rem', md: 'unset' }}
            >
              <NextImage src={quote} alt="Logo" width={50} height={50} />
            </Image>
          </Box>

          <Stack
            gap="2rem"
            paddingLeft={{ base: 'unset', md: '3rem' }}
            paddingTop={{ base: '2rem', md: 'unset' }}
          >
            <Text
              fontSize={{ base: '1.125rem', md: 'md', lg: '2.125rem' }}
              fontWeight="bold"
              lineHeight="1.2"
              width="60%"
              margin="auto"
            >
              {slides[currentIndex].description}
            </Text>
            <Text
              fontSize={{ base: '1rem', md: 'md', lg: '1.875rem' }}
              fontWeight="bold"
              width="60%"
              textAlign="center"
              margin="auto"
            >
              {slides[currentIndex].author}
            </Text>
          </Stack>

          <Box
            width="70%"
            rotate="180deg"
            margin="-2rem auto"
            position="relative"
            top="-2rem"
          >
            <Image asChild position="relative" bottom="-3rem" left="-2rem">
              <NextImage src={quote} alt="Logo" width={50} height={50} />
            </Image>
          </Box>
        </Grid>

        <Flex justifyContent="space-between" width="80%" margin="auto">
          <Flex gap="1rem" alignItems="center">
            <IconButton
              onClick={prevSlide}
              borderRadius={{ base: 'l3', lg: '2xl' }}
              size={{ base: 'sm', md: 'md' }}
            >
              <LucideArrowLeft />
            </IconButton>
            <Text
              fontSize={{ base: 'sm', md: 'lg', lg: '2xl' }}
              fontWeight="normal"
              display={{ base: 'none', md: 'flex' }}
            >
              Anterior
            </Text>
          </Flex>
          <Flex gap="1rem" alignItems="center">
            <Text
              fontSize={{ base: 'sm', md: 'lg', lg: '2xl' }}
              fontWeight="normal"
              display={{ base: 'none', md: 'flex' }}
            >
              Próximo
            </Text>
            <IconButton
              onClick={nextSlide}
              borderRadius={{ base: 'l3', lg: '2xl' }}
              size={{ base: 'sm', md: 'md' }}
            >
              <LucideArrowRight />
            </IconButton>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};
