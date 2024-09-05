import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Edit } from '@/assets';
import CModal from '@/components/CModal';
import CInput from '@/components/CInput';
import CSelect from '@/components/CSelect';
import CButton from '@/components/CButton';
import CButtonGroup from '@/components/CButtonGroup';
import { forceInputNumber } from '@/utils/forceInputNumber';

import { allTokensList, methodTabs } from '@/constants/mockLists';
import { TokensType } from '@/constants/types';
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
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSelectedMethod = (value: string[]) => {
    setSelectedMethod(value);
  };

  const handleSelectChange = (e: MultiSelectType) => {
    setSelectedTokens(e);
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = () => {
    if (
      productName &&
      selectedMethod.length > 0 &&
      selectedTokens &&
      selectedTokens.length > 0 &&
      amount &&
      image
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
        image: URL.createObjectURL(image),
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
      setImage(null);
      setImagePreview(null);
    }
  }, [isOpen]);

  return (
    <CModal title="Add Product" isOpen={isOpen} onClose={onClose}>
      <div className={`transition-opacity duration-300 ${errorText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-red-600 text-[14px]">{errorText}</p>
      </div>

      <div className="relative">
        <p className="text-sm select-none font-normal text-offBlack mb-[6px]">Product Image</p>

        {imagePreview ? (
          <div className="relative w-20 h-20 rounded-[10px] border border-[#D0D5DD]">
            <Image
              src={imagePreview}
              alt="Product"
              width={0}
              height={0}
              className="w-full h-full object-cover rounded-[10px]"
            />
            <label className="cursor-pointer absolute bottom-0 right-0 left-[65px] top-[65px]">
              <div>
                <Edit />
              </div>
              <input type="file" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        ) : (
          <div className="relative w-20 h-20 border border-[#D0D5DD] rounded-[10px]">
            <label className="cursor-pointer absolute bottom-0 right-0 left-[65px] top-[65px]">
              <div>
                <Edit />
              </div>
              <input type="file" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        )}
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
          options={allTokensList}
          onChange={handleSelectChange}
          value={selectedTokens}
          isCloseModal={!isOpen}
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
