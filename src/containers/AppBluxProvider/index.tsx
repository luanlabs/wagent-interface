'use client';

import { useEffect, useState, type ComponentType, type ReactNode } from 'react';

import Loading from '@/app/loading';

type BluxGateProps = {
  children: ReactNode;
};

type AppBluxProviderProps = {
  children: ReactNode;
};

const AppBluxProvider = ({ children }: AppBluxProviderProps) => {
  const [Gate, setGate] = useState<ComponentType<BluxGateProps> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import('./gate')
      .then((mod) => {
        if (!cancelled) {
          setGate(() => mod.default);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) {
    return (
      <div className="w-screen h-screen flex items-center justify-center px-6 text-center">
        <p className="text-base text-darkGreen">
          Blux failed to load. Refresh the page and try again.
        </p>
      </div>
    );
  }

  if (!Gate) {
    return <Loading />;
  }

  return <Gate>{children}</Gate>;
};

export default AppBluxProvider;
