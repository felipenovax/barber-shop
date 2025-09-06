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
    <Stack
      id="quote-section"
      backgroundColor={colors.yellow}
      padding={{ base: '1rem', md: '4rem 2rem' }}
      borderRadius={{ base: 'lg', md: '3xl' }}
      width={{ base: '100%', md: '90%' }}
      gap="2rem"
      margin="auto"
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
            fontSize={{ base: '1.125rem', md: '2.125rem' }}
            fontWeight="bold"
            lineHeight="1.2"
            width="60%"
            margin="auto"
          >
            {slides[currentIndex].description}
          </Text>
          <Text
            fontSize={{ base: '1rem', md: '1.875rem' }}
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

      <Flex justifyContent="space-between" width="70%" margin="auto">
        <Flex gap="1rem" alignItems="center">
          <IconButton
            onClick={prevSlide}
            borderRadius="2xl"
            size={{ base: 'sm', md: 'md' }}
          >
            <LucideArrowLeft />
          </IconButton>
          <Text
            fontSize="2xl"
            fontWeight="normal"
            display={{ base: 'none', md: 'flex' }}
          >
            Anterior
          </Text>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Text
            fontSize="2xl"
            fontWeight="normal"
            display={{ base: 'none', md: 'flex' }}
          >
            Próximo
          </Text>
          <IconButton
            onClick={nextSlide}
            borderRadius="2xl"
            size={{ base: 'sm', md: 'md' }}
          >
            <LucideArrowRight />
          </IconButton>
        </Flex>
      </Flex>
    </Stack>
    // <Stack padding="0" gap="4" marginY="5rem">
    //   <SectionTitle
    //     title="Quem usa"
    //     description="O que nossos usuários dizem sobre nosso app?"
    //   />
    //   <Box
    //     width="90%"
    //     margin="auto"
    //     marginTop={{ base: '1rem', md: '1.25rem' }}
    //     padding={{ base: '1rem', md: '5rem 0 3rem 0' }}
    //     bg={colors.yellow}
    //     borderRadius={{ base: 'lg', md: '3xl' }}
    //   >
    //     <Box w="80%" h="100%" margin="auto" marginTop="4rem">
    //       <Blockquote.Root
    //         variant="plain"
    //         colorPalette="teal"
    //         margin={{ base: '0', md: 'auto' }}
    //         w="80%"
    //         gap="2rem"
    //         position="relative"
    //       >
    //         <Blockquote.Icon
    //           position="absolute"
    //           top="-10"
    //           left="-5"
    //           color="#fff"
    //           boxSize="20"
    //         />
    //         <Blockquote.Content
    //           fontSize={{ base: 'lg', md: '3xl' }}
    //           fontWeight="bold"
    //           margin={{ base: '0', md: '0 2rem' }}
    //           textAlign="center"
    //           lineHeight="1.2"
    //           color={colors.black}
    //         >
    //           {slides[currentIndex].description}
    //         </Blockquote.Content>
    //         <Blockquote.Caption w="100%">
    //           <Text
    //             w="100%"
    //             fontSize={{ base: 'sm', md: 'xl' }}
    //             fontWeight="bold"
    //             textAlign="center"
    //             color={colors.black}
    //           >
    //             {slides[currentIndex].author}
    //           </Text>
    //         </Blockquote.Caption>
    //         <Blockquote.Icon
    //           position="absolute"
    //           bottom="5"
    //           right="-5"
    //           color="#fff"
    //           boxSize="20"
    //           rotate="180deg"
    //         />
    //       </Blockquote.Root>
    //     </Box>

    //     <Flex
    //       mt={{ base: '1rem', md: '4rem' }}
    //       justifyContent="space-around"
    //       alignItems="center"
    //     >
    //       <Button
    //         backgroundColor={colors.yellow}
    //         color="black"
    //         fontSize="2xl"
    //         onClick={prevSlide}
    //       >
    //         <Box backgroundColor="black" borderRadius="l2" p={1}>
    //           <LucideArrowLeft color={colors.yellow} />
    //         </Box>
    //         Voltar
    //       </Button>
    //       <Button
    //         backgroundColor={colors.yellow}
    //         color="black"
    //         fontSize="2xl"
    //         onClick={nextSlide}
    //       >
    //         Avançar
    //         <Box backgroundColor="black" borderRadius="l2" p={1}>
    //           <LucideArrowRight color={colors.yellow} />
    //         </Box>
    //       </Button>
    //     </Flex>
    //   </Box>
    // </Stack>
  );
};
