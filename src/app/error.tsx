'use client';

import CError from '@/components/CError';

export default function Error({ error }: any) {
  return <CError error={error} />;
}
