'use client';
import { useState } from 'react';
import {
  Bleed,
  Box,
  Collapsible,
  Flex,
  Grid,
  IconButton,
  Show,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { colors } from '../config/colors';
import { LucideMinus, LucidePlus } from 'lucide-react';
import NextImage from 'next/image';
import inboxIcon from '@/app/assets/direct-inbox.png';
import { SectionTitle } from './section-title';

const faq = [
  {
    id: '1',
    title: 'O aplicativo é pago?',
    description:
      '100% gratuito e sempre será. Criado unicamente para você agendar com o seu barbeiro mais próximo de você.',
  },
  {
    id: '2',
    title: 'Por que devo usar o app Barber Home?',
    description:
      'Após instalar o aplicativo, basta seguir as instruções de uso para controlar as despesas',
  },
  {
    id: '3',
    title: 'Posso adicionar conteúdos ao aplicativo?',
    description:
      'Com o App rodando é só começar a usar e adicionando a suas depesas fixas e variáveis.',
  },
  {
    id: '4',
    title: 'Existe uma versão Web do aplicativo? ',
    description:
      'Com o App rodando é só começar a usar e adicionando a suas depesas fixas e variáveis.',
  },
  {
    id: '5',
    title: 'Quero contribuir em melhorar o app, como faço?',
    description:
      'Com o App rodando é só começar a usar e adicionando a suas depesas fixas e variáveis.',
  },
];

export const FaqSection = () => {
  const [questionVisible, setQuestionVisible] = useState('');

  const handleChangeQuestion = (id: string) => {
    setQuestionVisible(id === questionVisible ? '' : id);
  };

  return (
    <>
      <SectionTitle
        display={{ base: 'flex', md: 'none' }}
        title="As perguntinhas mais frequentes"
        description="Ficou com alguma duvida?"
      />
      <Bleed height="2rem" display={{ base: 'flex', md: 'none' }} />
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        padding={{ base: '1rem', md: '2rem 4rem' }}
        css={{ flexDirection: 'row-reverse' }}
        mt={{ base: '0', md: '6rem' }}
      >
        {/* Coluna esquerda */}
        <Stack
          order={{ base: 2, md: 1 }}
          gap="2rem"
          flexDirection={{ base: 'row', md: 'column' }}
          alignItems={{ base: 'center', md: 'unset' }}
          justifyContent={{ base: 'space-between', md: 'unset' }}
        >
          <Stack display={{ base: 'none', md: 'flex' }}>
            <Text
              color={colors.yellow}
              fontWeight="bold"
              fontSize={{ base: 'sm', md: 'xs', lg: 'md' }}
            >
              As perguntinhas mais frequentes
            </Text>
            <Text
              color="white"
              width="270px"
              fontSize={{ base: 'md', md: 'md', lg: '3xl' }}
              fontWeight="bold"
            >
              Ficou com alguma duvida?
            </Text>
          </Stack>
          <Flex
            gap="2"
            mt={{ base: 7, md: 0.75 }}
            alignItems="center"
            onClick={() =>
              window.open('mailto:contato@barberhome.com', '_blank')
            }
          >
            <Image asChild width="22px" height="22px">
              <NextImage src={inboxIcon} alt="Logo" />
            </Image>
            <Text color="white" fontSize={{ base: 'xs', md: 'xs', lg: 'md' }}>
              Envie um e-mail
            </Text>
          </Flex>
          <Text
            color="white"
            mt={3}
            display={{ base: 'none', md: 'flex' }}
            fontSize={{ base: 'xs', md: 'xs', lg: 'md' }}
          >
            Acompanhe nas redes
          </Text>
          <Flex gap="3" mt={{ base: 7, md: 0 }}>
            <IconButton
              backgroundColor={colors.yellow}
              borderRadius="lg"
              size="md"
              onClick={() =>
                window.open('https://instagram.com/barber-shop', '_blank')
              }
            >
              {/* Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </IconButton>
            <IconButton
              backgroundColor={colors.yellow}
              size="md"
              borderRadius="lg"
              onClick={() =>
                window.open('https://linkedin.com/in/barber-shop', '_blank')
              }
            >
              {/* LinkedIn */}
              <svg
                fill="white"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
              </svg>
            </IconButton>
          </Flex>
        </Stack>

        {/* Coluna direita */}
        <Stack
          order={{ base: 1, md: 2 }}
          gap={{ base: '1.75rem', md: '0.75rem', lg: '1.75rem' }}
        >
          {faq.map((question) => (
            <Collapsible.Root
              key={question.id}
              marginTop="-0.5rem"
              open={questionVisible === question.id}
              onOpenChange={() => handleChangeQuestion(question.id)}
            >
              <Collapsible.Trigger
                paddingY="3"
                display="flex"
                gap="3"
                textAlign="-webkit-auto"
                fontSize={{ base: '1.125rem', md: 'xs', lg: 'xl' }}
                fontWeight="bold"
                color="white"
              >
                <Show
                  when={questionVisible === question.id}
                  fallback={<LucidePlus color={colors.yellow} />}
                >
                  <LucideMinus color={colors.yellow} />
                </Show>
                {question.title}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box
                  padding="0rem 2rem"
                  fontSize={{ base: 'md', md: 'xs', lg: 'xl' }}
                  fontWeight="thin"
                  color="white"
                >
                  {question.description}
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>
          ))}
        </Stack>
      </Grid>
    </>
  );
};
