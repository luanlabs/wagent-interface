import React from 'react';
import Image from 'next/image';

import LabelValue from './labelValue';
import ProgressBar from './progressBar';
import CModal from '@/components/CModal';
import CMethods from '@/components/CMethods';
import CStatusCard from '@/components/CStatusCard';
import CTokenLabel from '@/components/CTokenLabel';

import { formatDate } from '@/utils/formatDate';
import { IHistoryResponse } from '@/constants/types';

interface IDetailProps extends IHistoryResponse {
  isOpen: boolean;
  onClose: () => void;
}

const HistoryDetailsModal = ({
  id,
  date,
  title,
  token,
  image,
  method,
  status,
  isOpen,
  amount,
  sender,
  onClose,
  progress,
  cancellableAfter,
}: IDetailProps) => {
  const Title = (
    <span className="inline-flex gap-1">
      Payment <span className="text-[#A8A8A8] font-normal select-text">#{id}</span>
    </span>
  );

  return (
    <CModal title={Title} isOpen={isOpen} onClose={onClose}>
      <LabelValue label="Product name">
        <div className="inline-flex whitespace-nowrap gap-3 items-center">
          {image && (
            <Image src={image} alt={title} className="rounded-[50px]" width={30} height={30} />
          )}
          <span className="mobile:w-full text-darkBlue text-base">{title}</span>
        </div>
      </LabelValue>
      <LabelValue label="Status" value={CStatusCard(status)} />
      <LabelValue label="Method">
        <CMethods method={method} className="!text-base" />
      </LabelValue>
      <LabelValue label="Date & Time" value={formatDate(date)} className="text-cadetBlue" />
      {cancellableAfter && (
        <LabelValue
          label="Cancelable After"
          value={formatDate(cancellableAfter)}
          className="text-cadetBlue"
        />
      )}
      <LabelValue label="Token">
        <CTokenLabel symbol={token.symbol} logo={token.logo} />
      </LabelValue>
      <LabelValue label="Sender" value={sender} />
      {progress && (
        <LabelValue label="Progress">
          <ProgressBar progress={progress} />
        </LabelValue>
      )}
      <LabelValue label="Amount" value={amount} />
    </CModal>
  );
};

export default HistoryDetailsModal;
