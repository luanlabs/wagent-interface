import { useState, useEffect, useRef } from 'react';

import CInput from '@/components/CInput';
import CModal from '@/components/CModal';
import CSelect from '@/components/CSelect';
import CButton from '@/components/CButton';
import CButtonGroup from '@/components/CButtonGroup';

import { MultiSelectType } from '@/models';
import { allTokensList, methodTabs } from '@/constants/mockLists';
import { IProductItemCard } from '@/constants/types';

interface EditProductModalProps {
  onClose: () => void;
  isOpen: boolean;
  onSaveProduct: (product: any) => void;
  product: IProductItemCard;
}

const EditProductModal = ({ isOpen, onClose, onSaveProduct, product }: EditProductModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [selectedTokens, setSelectedTokens] = useState<MultiSelectType>(null);
  const [amount, setAmount] = useState('');
  const [productName, setProductName] = useState('');
  const [errorText, setErrorText] = useState('');

  const initialEditProductSelectedLengthRef = useRef<number>(0);

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

  const handleSave = () => {
    if (productName && selectedMethod.length && selectedTokens?.length && amount) {
      const updatedProduct = {
        ...product,
        method: selectedMethod,
        title: productName,
        tokens: selectedTokens,
        amount,
      };
      onSaveProduct(updatedProduct);
    } else {
      setErrorText('All fields are required');
    }
  };

  useEffect(() => {
    if (product) {
      setSelectedMethod(product.method);
      setSelectedTokens(product.tokens);
      setAmount(product.amount);
      setProductName(product.title);
      initialEditProductSelectedLengthRef.current = product.tokens.length;
    } else {
      setSelectedMethod([]);
      setSelectedTokens(null);
      setAmount('');
      setProductName('');
      setErrorText('');
      initialEditProductSelectedLengthRef.current = 0;
    }
  }, [product]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedTokens((prevTokens) => {
        initialEditProductSelectedLengthRef.current = prevTokens?.length || 0;
        return prevTokens;
      });
    }
  }, [isOpen]);

  return (
    <CModal title="Edit Product" isOpen={isOpen} onClose={onClose}>
      <div className={`transition-opacity duration-300 ${errorText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-red-600 text-[14px]">{errorText}</p>
      </div>
      <CInput
        border
        placeholder="Product name"
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
          options={allTokensList}
          onChange={handleSelectChange}
          value={selectedTokens}
          initialEditProductSelectedLength={initialEditProductSelectedLengthRef.current}
        />
      </div>
      <CInput
        border
        placeholder="$15"
        label="Amount"
        onChange={handleAmountChange}
        value={amount}
      />
      <CButton variant="add" text="Save changes" onClick={handleSave} />
    </CModal>
  );
};

export default EditProductModal;
