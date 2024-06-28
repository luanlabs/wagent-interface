import { StaticImageData } from 'next/image';

import CItemCard from '../CItemCard';
import { MethodType } from '../CMethods';

export type TokensType = {
  symbol: string;
  logo: string;
};

interface CProductItemCard {
  title: string;
  image: string | StaticImageData;
  id: string;
  tokens: TokensType[];
  amount: string;
  method: MethodType | MethodType[];
}

const CProductItemCard = ({ title, image, id, tokens, amount, method }: CProductItemCard) => {
  const mapTokens = tokens.map((item) => (
    <div key={item.symbol}>
      <p>{item.symbol.toUpperCase()}</p>
    </div>
  ));

  return (
    <CItemCard title={title} image={image} method={method}>
      <div className="w-full flex">
        <p className="w-[30%] mobile:hidden overflow-x-auto">
          <span className="text-cadetBlue">#</span>
          <span>{id}</span>
        </p>
        <span className="w-[41%] mobile:hidden flex space-x-2">{mapTokens}</span>
        <span className="w-[30%] mobile:w-full mobile:px-3 text-right">{amount}</span>
      </div>
    </CItemCard>
  );
};

export default CProductItemCard;
