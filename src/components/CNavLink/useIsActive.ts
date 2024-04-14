import { usePathname } from 'next/navigation';

const useIsActive = (url: string) => {
  const pathname = usePathname();
  return pathname === url;
};

export default useIsActive;
