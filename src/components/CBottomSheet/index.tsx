import Image from 'next/image';
import Sheet from 'react-modal-sheet';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type CModalProps = {
  isModalOpen: boolean;
  className?: string;
  headerClass?: string;
  contentClass?: string;
  setIsModalOpen: (_: boolean) => void;
  children: React.ReactNode;
  headerImage?: string | StaticImport;
  headerClassName?: string;
  detent?: 'full-height' | 'content-height';
  isSticky?: boolean;
};

const CBottomSheet = ({
  isModalOpen,
  children,
  setIsModalOpen,
  className,
  headerClass,
  contentClass,
  headerImage,
  headerClassName,
  detent = 'content-height',
  isSticky,
}: CModalProps) => {
  const closeModal = () => {
    if (!isSticky) {
      setIsModalOpen(false);
    }
  };

  return (
    <Sheet
      isOpen={isModalOpen}
      onClose={closeModal}
      detent={detent}
      className={className}
      disableScrollLocking
    >
      <Sheet.Container className="!rounded-t-[20px]">
        <Sheet.Header className={headerClass}>
          {headerImage && (
            <div className={headerClassName}>
              <Image src={headerImage} alt="header" />
            </div>
          )}
        </Sheet.Header>
        <Sheet.Content className={contentClass}>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeModal} />
    </Sheet>
  );
};

export default CBottomSheet;
