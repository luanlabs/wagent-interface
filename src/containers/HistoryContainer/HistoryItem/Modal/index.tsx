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

interface IDetailProps {
  data: IHistoryResponse;
  isOpen: boolean;
  onClose: () => void;
}

const HistoryDetailsModal = ({ isOpen, onClose, data }: IDetailProps) => {
  const Title = (
    <span className="inline-flex gap-1">
      Payment <span className="text-[#A8A8A8] font-normal select-text">#{data.id}</span>
    </span>
  );

  return (
    <CModal title={Title} isOpen={isOpen} onClose={onClose}>
      <LabelValue label="Product name">
        <div className="inline-flex whitespace-nowrap gap-3 items-center">
          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              className="rounded-[50px]"
              width={30}
              height={30}
            />
          )}
          <span className="mobile:w-full text-darkBlue text-base">{data.title}</span>
        </div>
      </LabelValue>
      <LabelValue label="Status" value={CStatusCard(data.status)} />
      <LabelValue label="Method">
        <CMethods method={data.method} className="!text-base" />
      </LabelValue>
      <LabelValue label="Date & Time" value={formatDate(data.date)} className="text-cadetBlue" />
      {data.cancellableAfter && (
        <LabelValue
          label="Cancelable After"
          value={formatDate(data.cancellableAfter)}
          className="text-cadetBlue"
        />
      )}
      <LabelValue label="Token">
        <CTokenLabel symbol={data.token.value} logo={data.token.logo} />
      </LabelValue>
      <LabelValue label="Sender" value={data.sender} />
      {data.progress && (
        <LabelValue label="Progress">
          <ProgressBar progress={data.progress} />
        </LabelValue>
      )}
      <LabelValue label="Amount" value={data.amount} />
    </CModal>
  );
};

export default HistoryDetailsModal;
