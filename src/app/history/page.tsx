import { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import { history } from '@/constants/mockLists';
import CHistoryItemCard from '@/components/CHistoryItemCard';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

export const HistoryListHeader = () => (
  <ul className="flex w-full justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
    <li className="text-black whitespace-nowrap w-[37.5%]">Product name</li>
    <li className="mobile:hidden w-1/4">Method</li>
    <li className="mobile:hidden w-1/4 pl-1">Status</li>
    <li className="mobile:hidden w-1/4">Date & Time</li>
    <li className="mobile:hidden w-1/4">Token</li>
    <li className="text-right mobile:mr-[10px] w-1/6">Amount</li>
  </ul>
);

const History = () => {
  return (
    <CPageCard title="History" className="h-full relative overflow-hidden">
      <HistoryListHeader />
      <div className="space-y-2 mobile:space-y-[6px] pb-3 max-h-[calc(100vh-200px)] desktopMax:max-h-[calc(100vh-270px)] w-full overflow-hidden overflow-y-auto">
        {history.map((item) => (
          <CHistoryItemCard
            key={item.id}
            title={item.title}
            method={item.method}
            status={item.status}
            token={item.token}
            date={item.date}
            amount={item.amount}
            image={item.image}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default History;
