'use client';
import { Box, Card, Flex, Show, Span, Stack, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import arrow from '@/app/assets/arrow.svg';
import arrowUpsidedown from '@/app/assets/arrow-upsidedown.svg';
import { colors } from '../config/colors';
import { SectionTitle } from './section-title';
import { useDeviceType } from '../config/matchMedia';

const steps = [
  {
    id: '01',
    title: 'Baixe o aplicativo',
    description:
      'É gratuíto e sempre será. Baixe pela Apple Store ou Google Play.',
  },
  {
    id: '02',
    title: 'Instale o aplicativo',
    description:
      'Após instalar o aplicativo, basta seguir as instruções de uso para controlar as despesas',
  },
  {
    id: '03',
    title: 'Pronto!',
    description:
      'Com o App rodando é só começar a usar e adicionando a suas depesas fixas e variáveis.',
  },
];

export const StepsSection = () => {
  const { isMobile } = useDeviceType();

  return (
    <Stack padding="0" gap="4" marginY="5rem" id="steps-section">
      <SectionTitle
        title="Como baixar"
        description={`É bem simples, basta seguir as<br /> instruções abaixo.`}
      />
      <Flex
        gap="4"
        width="100%"
        position="relative"
        marginY={{ base: '2rem', md: '3rem' }}
        alignItems={{ base: 'center', md: 'unset' }}
        padding={{ base: '0', md: '0 8rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Show when={!isMobile} fallback={null}>
          <NextImage
            style={{ position: 'absolute', left: '20%', top: '-3rem' }}
            src={arrow}
            width={190}
            height={78}
            alt="Arrow"
          />
        </Show>
        {steps.map((step) => (
          <Card.Root
            flex="1"
            key={step.id}
            width="320px"
            backgroundColor="transparent"
            border="none"
          >
            <Card.Body gap="2" padding={{ base: '1rem', md: 'unset' }}>
              <Box
                backgroundColor="white"
                padding={{ base: '0.25rem', md: '0' }}
                borderRadius={{ base: 'md', md: '2xl' }}
                width={{ base: '2rem', md: '3.25rem' }}
                height={{ base: '2rem', md: '3.25rem' }}
              >
                <Span
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  height="100%"
                  color={colors.black}
                  fontWeight="bolder"
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  {step.id}
                </Span>
              </Box>
              <Stack gap="1">
                <Card.Title
                  mt="2"
                  color="white"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bolder"
                >
                  {step.title}
                </Card.Title>
                <Card.Description
                  color="white"
                  fontSize={{ base: 'sm', md: 'lg' }}
                  fontWeight={{ base: 'thin', md: 'light' }}
                >
                  {step.description}
                </Card.Description>
              </Stack>
            </Card.Body>
          </Card.Root>
        ))}
        <Show when={!isMobile} fallback={null}>
          <NextImage
            style={{ position: 'absolute', left: '55%', bottom: '-5rem' }}
            src={arrowUpsidedown}
            width={190}
            height={78}
            alt="Arrow"
          />
        </Show>
      </Flex>
    </Stack>
  );
};
