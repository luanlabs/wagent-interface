'use client';

import { BluxProvider, networks } from '@bluxcc/react';

import { BLUX_APP_ID } from '@/config/env';

type BluxGateProps = {
  children: React.ReactNode;
};

const bluxConfig = {
  appId: BLUX_APP_ID,
  appName: 'Wagent',
  networks: [networks.testnet],
  defaultNetwork: networks.testnet,
  isPersistent: true,
  loginMethods: ['wallet', 'email', 'google', 'passkey'] as const,
  appearance: {
    accentColor: '#2AC18D',
    textColor: '#101828',
    background: '#ffffff',
    fieldBackground: '#F9FAFB',
    borderColor: '#D0D5DD',
    borderRadius: '12px',
    logo: '/images/wagentLogo.svg',
  },
};

const BluxGate = ({ children }: BluxGateProps) => {
  return <BluxProvider config={bluxConfig}>{children}</BluxProvider>;
};

export default BluxGate;
