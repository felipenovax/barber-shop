// Carousel.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  HStack,
  IconButton,
  useBreakpointValue,
  VisuallyHidden,
  Circle,
  Button,
  Flex,
} from '@chakra-ui/react';
import { colors } from '../config/colors';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';

type CarouselProps = {
  children: React.ReactNode[];
  autoplayMs?: number | null;
  loop?: boolean;
  showArrows?: boolean;
  rounded?: string;
};

export function Carousel({
  children,
  autoplayMs = null,
  loop = true,
  showArrows = true,
  rounded = 'xl',
}: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [index, setIndex] = useState(0);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Infinity;
      itemRefs.current.forEach((node, i) => {
        if (!node) return;
        const box = node.getBoundingClientRect();
        const containerBox = el.getBoundingClientRect();
        const center =
          box.left - containerBox.left + box.width / 2 + el.scrollLeft;
        const dist = Math.abs(center - mid);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
      });
      setIndex(nearest);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // if (!autoplayMs) return;
    // const el = containerRef.current;
    // if (!el) return;
    // let id = setInterval(() => {
    //   goTo(index + 1);
    // }, autoplayMs);
    // const pause = () => clearInterval(id);
    // const resume = () => {
    //   id = setInterval(
    //     () => goTo((i) => (typeof i === 'number' ? i + 1 : index + 1)),
    //     autoplayMs,
    //   );
    // };
    // el.addEventListener('mouseenter', pause);
    // el.addEventListener('mouseleave', resume);
    // el.addEventListener('touchstart', pause, { passive: true });
    // el.addEventListener('touchend', resume);
    // return () => {
    //   clearInterval(id);
    //   el.removeEventListener('mouseenter', pause);
    //   el.removeEventListener('mouseleave', resume);
    //   el.removeEventListener('touchstart', pause);
    //   el.removeEventListener('touchend', resume);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayMs, index]);

  const normalizeIndex = (i: number) => {
    if (loop) {
      const n = slides.length;
      return ((i % n) + n) % n;
    }
    return Math.max(0, Math.min(i, slides.length - 1));
  };

  function goTo(next: number | ((i: number) => number)) {
    setIndex((prev) => {
      const val = typeof next === 'function' ? next(prev) : next;
      const target = normalizeIndex(val);
      const node = itemRefs.current[target];
      node?.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest',
      });
      return target;
    });
  }

  return (
    <Box position="relative" overflow="hidden" height="auto">
      <HStack
        ref={containerRef}
        padding="0"
        overflowX="auto"
        overflowY="hidden"
        scrollSnapType="x mandatory"
        scrollBehavior="smooth"
        style={{
          scrollbarWidth: 'none',
        }}
        height="100%"
        align="stretch"
        // p={isMobile ? 2 : 4}
      >
        {slides.map((child, i) => (
          <Box
            key={i}
            ref={(el: any) => (itemRefs.current[i] = el)}
            minW="100%"
            height="100%"
            scrollSnapAlign="center"
            position="relative"
            rounded={rounded}
            overflow="hidden"
          >
            {child}
          </Box>
        ))}
      </HStack>

      {showArrows && slides.length > 1 && (
        <Flex justifyContent="space-between" w="70%" margin="2rem auto">
          <Button
            onClick={() => goTo(index - 1)}
            color={colors.black}
            backgroundColor={colors.yellow}
          >
            <Box backgroundColor={colors.black} borderRadius="md">
              <LucideArrowLeft color={colors.yellow} />
            </Box>
            Voltar
          </Button>
          <Button
            onClick={() => goTo(index + 1)}
            color={colors.black}
            backgroundColor={colors.yellow}
          >
            Avançar
            <Box backgroundColor={colors.black} borderRadius="md">
              <LucideArrowRight color={colors.yellow} />
            </Box>
          </Button>
        </Flex>
      )}
    </Box>
  );
}
