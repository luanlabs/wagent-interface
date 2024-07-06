import CItemCard from '../CItemCard';
import CMethods from '../CMethods';
import { IProductItemCard } from '@/constants/types';

const CProductItemCard = ({ title, image, id, tokens, amount, method }: IProductItemCard) => {
  const mapTokens = tokens.map((item) => (
    <div key={item.symbol}>
      <p>{item.symbol.toUpperCase()}</p>
    </div>
  ));

  return (
    <CItemCard title={title} image={image}>
      <div className="w-full flex">
        <span className="w-[35%] mobile:hidden">
          <CMethods method={method} />
        </span>
        <p className="w-[30%] mobile:hidden overflow-x-auto">
          <span className="text-cadetBlue">#</span>
          <span>{id}</span>
        </p>
        <span className="w-[41%] mobile:hidden flex space-x-2">{mapTokens}</span>
        <span className="w-[30%] mobile:w-full text-right">{amount}</span>
      </div>
    </CItemCard>
  );
};

export default CProductItemCard;
