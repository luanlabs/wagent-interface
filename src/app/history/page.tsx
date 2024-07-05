import { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import { history } from '@/constants/mockLists';
import CHistoryItemCard from '@/components/CHistoryItemCard';

export const metadata: Metadata = {
  title: 'Wagent - History',
};

const History = () => {
  return (
    <CPageCard title="History" className="h-full relative overflow-hidden">
      <h1 className="text-2xl mb-4 font-medium">Recent transactions</h1>

      <ul className="flex w-full justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
        <li className="text-black whitespace-nowrap w-[26.5%]">Product name</li>
        <li className="mobile:hidden w-1/6 min-w-[170px]">Method</li>
        <li className="mobile:hidden w-1/6">Status</li>
        <li className="mobile:hidden w-1/6">Date & Time</li>
        <li className="mobile:hidden w-1/6">Token</li>
        <li className="text-right mobile:mr-[10px] w-1/6">Amount</li>
      </ul>

      <div className="space-y-3 max-h-[calc(100vh-350px)] desktopMax:max-h-[calc(100vh-320px)] w-full overflow-hidden overflow-y-auto">
        {history.map((item) => (
          <CHistoryItemCard
            key={item.id}
            title={item.title}
            method={item.method}
            status={item.status}
            tokens={item.tokens}
            date={item.date}
            amount={item.amount}
            image={item.image}
          />
        ))}
      </div>

      <div className="absolute -bottom-1 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default History;
