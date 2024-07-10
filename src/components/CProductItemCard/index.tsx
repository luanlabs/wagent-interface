import { StaticImageData } from 'next/image';

import CItemCard from '../CItemCard';
import CMethods, { MethodType } from '../CMethods';
import CTokenLabel from '../CTokenLabel';

export type TokensType = {
  value: string;
  label: string;
  logo: string;
};

interface CProductItemCard {
  title: string;
  image: string | StaticImageData;
  id: string;
  tokens: TokensType[];
  amount: string;
  method: MethodType[];
}

const CProductItemCard = ({ title, image, id, tokens, amount, method }: CProductItemCard) => {
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
        <span className="w-[10%] mobile:w-full mobile:px-3 text-right">${amount}</span>
      </div>
    </CItemCard>
  );
};

export default CProductItemCard;
