import CButton from '@/components/CButton';
import CItemCard from '@/components/CItemCard';
import CPageCard from '@/components/CPageCard';
import { products } from '@/constants/productsList';

const Products = () => {
  const pageTitle = (
    <div className="flex justify-between items-center w-full">
      <h1>Product</h1>
      <CButton variant="add" text="Add product" className="!w-[145px] text-base" />
    </div>
  );

  return (
    <CPageCard
      borderStatus="bordered"
      title={pageTitle}
      className="h-[100%] relative overflow-hidden"
    >
      <h1 className="text-2xl py-4 font-medium">Products list</h1>
      <ul className="flex justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
        <li className="text-black">Product name</li>
        <li className="mobile:hidden">Method</li>
        <li className="mobile:hidden">ID</li>
        <li className="w-1/5 mobile:hidden">Token</li>
        <li>Amount</li>
      </ul>
      <div className="space-y-3 pb-3 max-h-[calc(100vh-350px)] desktopMax:max-h-[calc(100vh-330px)] w-full overflow-hidden overflow-y-auto">
        {products.map((item) => (
          <CItemCard
            key={item.id}
            title={item.title}
            method={item.method}
            id={item.id}
            token={item.token}
            amount={item.amount}
            image={item.image}
            variant="product"
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default Products;
