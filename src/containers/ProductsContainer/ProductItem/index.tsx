import CItemCard from '@/components/CItemCard';
import CMethods from '@/components/CMethods';
import CTokenLabel from '@/components/CTokenLabel';

import { IProductItemCard } from '@/constants/types';
import humanizeAmount from '@/utils/humanizeAmount';

const ProductItem = ({ title, image, id, tokens, amount, method }: IProductItemCard) => {
  const mapTokens = tokens.map((item) => (
    <div key={item.value}>
      <CTokenLabel
        symbol={item.value.toUpperCase()}
        logo={require(`/public/images/tokens/${item.value.toLowerCase()}.svg`)}
        rounded
      />
    </div>
  ));

  return (
    <CItemCard title={title} image={image}>
      <div className="w-full flex">
        <div className="w-[65%] max-w-[35%] mobile:hidden">
          <CMethods method={method} />
        </div>
        <p className="w-[20%] max-w-[14%] mobile:hidden overflow-x-auto">
          <span className="text-cadetBlue">#</span>
          <span>{id}</span>
        </p>
        <span className="w-[60%] mobile:hidden flex justify-start space-x-1">{mapTokens}</span>
        <span className="w-[10%] mobile:w-full mobile:px-3 text-right">
          ${humanizeAmount(amount)}
        </span>
      </div>
    </CItemCard>
  );
};

export default ProductItem;
