'use client';

import { Container, IconButton } from '@chakra-ui/react';
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
      <HeaderNav />
      <HeroSection />
      <StepsSection />
      <QuoteCarousel />
      <FaqSection />
      <DownloadBanner />

      <IconButton
        display={{ base: 'none', md: 'flex' }}
        backgroundColor={colors.yellow}
        position="fixed"
        bottom="2rem"
        shadow="lg"
        size="xl"
        right="6rem"
      >
        <LucideArrowUp size={48} color={colors.black} />
      </IconButton>
    </Container>
  );
}
