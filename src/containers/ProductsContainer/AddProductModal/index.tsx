import { useState, useEffect } from 'react';

import CInput from '@/components/CInput';
import CModal from '@/components/CModal';
import CSelect from '@/components/CSelect';
import CButton from '@/components/CButton';
import CButtonGroup from '@/components/CButtonGroup';

import { forceInputNumber } from '@/utils/forceInputNumber';
import { TokensType } from '@/constants/types';

import { methodTabs, tokensList } from '@/constants/mockLists';
import { MultiSelectType } from '@/models';

interface ProductModalProps {
  onClose: () => void;
  isOpen: boolean;
  onAddProduct: (product: any) => void;
}

const AddProductModal = ({ isOpen, onClose, onAddProduct }: ProductModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState(['single']);
  const [selectedTokens, setSelectedTokens] = useState<MultiSelectType>(null);
  const [amount, setAmount] = useState('');
  const [productName, setProductName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleSelectedMethod = (value: string[]) => {
    setSelectedMethod(value);
  };

  const handleSelectChange = (e: MultiSelectType) => {
    setSelectedTokens(e);
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setProductName(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAddProduct = () => {
    if (
      productName &&
      selectedMethod.length > 0 &&
      selectedTokens &&
      selectedTokens.length > 0 &&
      amount
    ) {
      const newProduct = {
        title: productName,
        method: selectedMethod,
        id: '1',
        tokens: selectedTokens.map((e: TokensType) => ({
          value: e.value,
          label: e.label,
          logo: e.logo,
        })),
        amount: `${amount}`,
        image: '/public/images/hoodie.png',
      };
      onAddProduct(newProduct);
      onClose();
    } else {
      setErrorText('Please fill in all fields.');
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedMethod(['single']);
      setSelectedTokens(null);
      setAmount('');
      setProductName('');
      setErrorText('');
    }
  }, [isOpen]);

  return (
    <CModal title="Add Product" isOpen={isOpen} onClose={onClose}>
      <div className={`transition-opacity duration-300 ${errorText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-red-600 text-[14px]">{errorText}</p>
      </div>
      <CInput
        border
        placeholder="Purple hoodie"
        label="Product name"
        onChange={handleProductNameChange}
        value={productName}
        maxLength={11}
      />
      <div>
        <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Method</p>
        <CButtonGroup
          value={methodTabs}
          defaultValue={['single']}
          selectedMethod={selectedMethod}
          onChange={handleSelectedMethod}
        />
      </div>
      <div>
        <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Tokens</p>
        <CSelect
          placeholder="Select tokens"
          options={tokensList}
          onChange={handleSelectChange}
          value={selectedTokens}
        />
      </div>
      <CInput
        border
        placeholder="$15"
        label="Amount"
        onChange={handleAmountChange}
        value={amount}
        onKeyPress={forceInputNumber}
      />
      <CButton variant="add" text="Add product" onClick={handleAddProduct} />
    </CModal>
  );
};

export default AddProductModal;
