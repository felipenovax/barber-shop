'use client';
import { Fragment, useRef, useState } from 'react';
import {
  Grid,
  Flex,
  Stack,
  Button,
  Separator,
  Box,
  IconButton,
  Drawer,
  Portal,
  Accordion,
  Text,
  AbsoluteCenter,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import logo from '@/app/assets/Barber Home.svg';
import { colors } from '../config/colors';
import { LucideAlignJustify, LucideX } from 'lucide-react';
import { Show } from '@chakra-ui/react';

const menu = [
  { id: '01', title: 'Home', href: '/' },
  { id: '02', title: 'Como baixar', href: '/como-baixar' },
  { id: '03', title: 'Quem usa', href: '/quem-usa' },
  { id: '04', title: 'Dúvidas', href: '/duvidas' },
];

export const HeaderNav = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Grid
        display={{ base: 'none', md: 'grid' }}
        templateColumns="auto 1fr auto"
        padding="1.75rem"
        alignItems="center"
        position="sticky"
        top="0"
        zIndex="10"
        backgroundColor={colors.black}
      >
        <NextImage src={logo} height={75} alt="Logo" />
        <Flex justifyContent="center" alignItems="center">
          {menu.map((item, index) => (
            <Fragment key={item.id}>
              <Stack gap="0">
                <Button
                  variant="plain"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="bold"
                >
                  {item.title}
                </Button>
                <Box borderBottom="3px solid #FBD072" margin="0 1rem" />
              </Stack>
              {index < menu.length - 1 && (
                <Separator orientation="vertical" height="6" />
              )}
            </Fragment>
          ))}
        </Flex>

        <Button
          variant="solid"
          color="white"
          size="xl"
          fontWeight="bold"
          padding="1rem 1.5rem"
          borderRadius="l3"
          backgroundColor={colors.yellow}
        >
          Fale conosco
        </Button>
      </Grid>
      <Accordion.Root
        display={{ base: 'flex', md: 'none' }}
        spaceY="4"
        variant="plain"
        collapsible
        width="100%"
        defaultValue={['']}
        onValueChange={() => setMenuOpen(!menuOpen)}
      >
        <Accordion.Item value="menu" padding="1rem 1.5rem" width="100%">
          <Accordion.ItemTrigger display="flex" justifyContent="space-between">
            <Box>
              <Show
                fallback={<LucideAlignJustify color={colors.yellow} />}
                when={menuOpen}
              >
                <LucideX color="white" />
              </Show>
            </Box>
            <NextImage src={logo} height={50} width={50} alt="Logo" />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody width="100%">
              <Stack alignItems="center" justifyContent="center">
                {menu.map((item) => (
                  <Button
                    key={item.id}
                    variant="plain"
                    color="white"
                    fontSize="1.25rem"
                    fontWeight="bold"
                  >
                    {item.title}
                  </Button>
                ))}
              </Stack>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};
