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
