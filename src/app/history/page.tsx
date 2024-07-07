import { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';

import { history } from '@/constants/mockLists';

import FilterHistory from '@/containers/FilterHistory';
import HistoryItemCard from '@/containers/HistoryItemCard';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

export const HistoryListHeader = () => (
  <ul className="flex w-full justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
    <li className="text-black whitespace-nowrap w-[40%]">Product name</li>
    <li className="mobile:hidden w-1/4">Method</li>
    <li className="mobile:hidden w-1/4 pl-1">Status</li>
    <li className="mobile:hidden w-1/4">Date & Time</li>
    <li className="mobile:hidden w-1/4 ml-2">Token</li>
    <li className="text-right w-1/6">Amount</li>
  </ul>
);

const pageTitle = (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>History</h1>
    <FilterHistory />
  </div>
);

const History = () => {
  return (
    <CPageCard title={pageTitle} className="h-full relative overflow-hidden">
      <HistoryListHeader />

      <div className="space-y-2 mobile:space-y-[6px] pb-3 max-h-[calc(100vh-200px)] desktopMax:max-h-[calc(100vh-265px)] w-full overflow-hidden overflow-y-auto">
        {history.map((item) => (
          <HistoryItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            method={item.method}
            status={item.status}
            token={item.token}
            date={item.date}
            amount={item.amount}
            image={item.image}
            sender={item.sender}
            progress={item.progress}
            cancellableAfter={item.cancellableAfter}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default History;
