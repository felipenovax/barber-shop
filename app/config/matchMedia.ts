import { useState, useEffect } from 'react';

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTable, setIsTable] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      setIsTable(window.matchMedia('(max-width: 1024px)').matches);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobile, isTable, isDesktop: !isMobile && !isTable };
}
