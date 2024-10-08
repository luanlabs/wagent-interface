import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import CInput from '@/components/CInput';
import CModal from '@/components/CModal';
import CSelect from '@/components/CSelect';
import CButton from '@/components/CButton';
import CButtonGroup from '@/components/CButtonGroup';

import { allTokensList, methodTabs } from '@/constants/mockLists';
import { Edit } from '@/assets';
import { IProductItemCard } from '@/constants/types';
import { MultiSelectType } from '@/models';

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
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const initialValuesLengthRef = useRef<number>(0);

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

  const handleSave = () => {
    if (productName && selectedMethod.length && selectedTokens?.length && amount && image) {
      const updatedProduct = {
        ...product,
        method: selectedMethod,
        title: productName,
        tokens: selectedTokens,
        amount,
        image: URL.createObjectURL(image),
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
      initialValuesLengthRef.current = product.tokens.length;
      setImagePreview(
        typeof product.image === 'string' ? product.image : product.image?.src || null,
      );
      setImage(null);
    } else {
      setSelectedMethod([]);
      setSelectedTokens(null);
      setAmount('');
      setProductName('');
      setErrorText('');
      initialValuesLengthRef.current = 0;
      setImage(null);
      setImagePreview(null);
    }
  }, [product]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedTokens((prevTokens) => {
        initialValuesLengthRef.current = prevTokens?.length || 0;
        return prevTokens;
      });
    }
  }, [isOpen]);

  return (
    <CModal title="Edit Product" isOpen={isOpen} onClose={onClose}>
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
            <label className="cursor-pointer">
              <div className="absolute bottom-0 right-0 left-[65px] top-[65px]">
                <Edit />
              </div>
              <input type="file" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        ) : (
          <div className="relative w-20 h-20 border border-gray-300">
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
        placeholder="Product name"
        label="Product name"
        onChange={handleProductNameChange}
        value={productName}
        maxLength={13}
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
          initialValuesLength={initialValuesLengthRef.current}
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
