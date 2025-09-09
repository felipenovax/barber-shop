'use client';

import { Box, Container, IconButton, Separator } from '@chakra-ui/react';
import { colors } from './config/colors';
import { LucideArrowUp } from 'lucide-react';
import { HeaderNav } from './ui/header-nav';
import { HeroSection } from './ui/hero-section';
import { StepsSection } from './ui/steps-section';
import { FaqSection } from './ui/faq-section';
import { DownloadBanner } from './ui/download-banner';
import { QuoteCarousel } from './ui/quote-carousel';

export default function Home() {
  return (
    <Container
      maxWidth="1455px"
      height="auto"
      margin="0 auto"
      padding="0"
      paddingBottom="2rem"
    >
      <Box id="top-element" />
      <HeaderNav />
      <HeroSection />
      <Separator display={{ base: 'block', md: 'none' }} marginY="2rem" />
      <StepsSection />
      <Separator display={{ base: 'block', md: 'none' }} marginBottom="2rem" />
      <QuoteCarousel />
      <Box id="faq-section">
        <FaqSection />
      </Box>
      <DownloadBanner />

      <IconButton
        display={{ base: 'none', md: 'flex' }}
        backgroundColor={colors.yellow}
        position="fixed"
        bottom="2rem"
        shadow="xl"
        size="xl"
        right={{ md: '1rem', lg: '6rem' }}
        onClick={() => {
          const element = document.getElementById('top-element');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <LucideArrowUp size={48} color={colors.black} />
      </IconButton>
    </Container>
  );
}
