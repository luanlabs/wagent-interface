import CButton from '@/components/CButton';
import CInput from '@/components/CInput';
import CModal from '@/components/CModal';
import CTokenLabel from '@/components/CTokenLabel';

import ethLogo from 'public/images/tokens/eth.svg';
import usdtLogo from 'public/images/tokens/usdt.svg';

interface ProductModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const AddProductModal = ({ isOpen, onClose }: ProductModalProps) => {
  return (
    <CModal title="Add Product" isOpen={isOpen} onClose={onClose}>
      <CInput border placeholder="Purple hoodie" label="Product name" />
      <div>
        <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Tokens</p>

        <div
          className="border border-gray text-darkGray hover:bg-offWhite space-x-2  placeholder-mutedBlue
            rounded-lg text-base w-full h-[42px] px-1
            flex justify-start items-center outline-none
            transition-colors duration-300"
        >
          <CTokenLabel symbol="eth" logo={ethLogo} />
          <CTokenLabel symbol="usdt" logo={usdtLogo} />
        </div>
      </div>

      <CInput border placeholder="$15" label="Amount" />
      <CButton variant="add" text="Add product" />
    </CModal>
  );
};

export default AddProductModal;
