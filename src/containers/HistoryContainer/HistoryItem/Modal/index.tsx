import React from 'react';
import Image from 'next/image';

import LabelValue from './labelValue';
// import ProgressBar from './progressBar';
import CModal from '@/components/CModal';
import CMethods from '@/components/CMethods';
import CStatusCard, { StatusType } from '@/components/CStatusCard';
import CTokenLabel from '@/components/CTokenLabel';

import { formatDate } from '@/utils/formatDate';
import { ITransaction, MethodType } from '@/constants/types';
import shortenAddress from '@/utils/shortenAddress';

interface IDetailProps {
  data: ITransaction;
  isOpen: boolean;
  onClose: () => void;
}

const HistoryDetailsModal = ({ isOpen, onClose, data }: IDetailProps) => {
  const Title = (
    <span className="inline-flex gap-1">
      Payment{' '}
      <span className="text-[#A8A8A8] font-normal select-text">#{data.order._id.slice(0, 6)}</span>
    </span>
  );

  return (
    <CModal title={Title} isOpen={isOpen} onClose={onClose}>
      {data.order.products && data.order.products[0] && (
        <LabelValue label="Product name">
          <div className="inline-flex whitespace-nowrap gap-3 items-center">
            <>
              <Image
                src={data.order.products[0].logo}
                alt={data.order.products[0].name}
                className="rounded-[50px]"
                width={30}
                height={30}
              />
              <span className="mobile:w-full text-darkBlue text-base">
                {data.order.products[0].name}
              </span>
            </>
          </div>
        </LabelValue>
      )}
      <LabelValue label="Amount" value={`$${data.order.amount}`} />
      <LabelValue label="Method">
        <CMethods
          method={data.method as MethodType}
          className="!text-base w-full flex justify-end !text-darkBlue"
          fill="#101828"
        />
      </LabelValue>
      <LabelValue label="Token">
        <CTokenLabel symbol={data.token.symbol} rounded />
      </LabelValue>
      <LabelValue label="Status">
        <CStatusCard status={data.order.status as StatusType} />
      </LabelValue>
      <LabelValue label="Sender" value={shortenAddress(data.payerAddress, 4)} />
      <LabelValue
        label="Date & Time"
        value={formatDate(data.submittedAt)}
        className="text-cadetBlue"
      />
      {/* {data.cancellableAfter && (
        <LabelValue
          label="Cancelable After"
          value={formatDate(data.cancellableAfter)}
          className="text-cadetBlue"
        />
      )} */}
      {/* {data.progress && (
        <LabelValue label="Progress">
          <ProgressBar progress={data.progress} />
        </LabelValue>
      )} */}
    </CModal>
  );
};

export default HistoryDetailsModal;
