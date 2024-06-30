'use client';
import React from 'react';
import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';
import { ErrorType } from '@/models';

type SetError = (error: ErrorType | null) => void;

const handleError = (setError: SetError) => {
  setError({ title: 'Error', message: 'An unexpected error occurred' });
};

const ErrorContainer = () => {
  return (
    <CPageCard borderStatus="bordered" title="Dashboard" showError={handleError}>
      sss
      <CButton variant="confirm">dsssdfsdfdfdsf</CButton>
    </CPageCard>
  );
};

export default ErrorContainer;
