'use client';
import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';

const ErrorContainer = () => {
  const handleError = (setError: (error: { title: string; message: string } | null) => void) => {
    setError({ title: 'Error', message: 'An unexpected error occurred' });
  };

  return (
    <CPageCard borderStatus="bordered" title="Dashboard" showError={handleError}>
      sss
      <CButton variant="confirm">dsssdfsdfdfdsf</CButton>
    </CPageCard>
  );
};

export default ErrorContainer;
