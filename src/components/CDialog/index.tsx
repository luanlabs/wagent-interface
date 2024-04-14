import { Fragment } from 'react';
import Image from 'next/image';

import cn from 'classnames';
import { Dialog, Transition } from '@headlessui/react';

import close from 'public/images/close.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IModalProps {
  children: JSX.Element | React.ReactNode;
  title?: string;
  isOpen: boolean;
  setIsOpen: (_: boolean) => void;
  hasCloseButton?: boolean;
  className?: string;
  headerImage?: string | StaticImport;
  headerClassName?: string;
  width?: string;
  hidden?: boolean;
  isSticky?: boolean;
}

const CDialog = ({
  children,
  hidden,
  isSticky,
  title,
  isOpen,
  width,
  setIsOpen,
  className,
  hasCloseButton,
  headerImage,
  headerClassName,
}: IModalProps) => {
  const closeModal = () => {
    if (!isSticky) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className={`${hidden ? 'mobile:!hidden' : 'block'} fixed inset-0 overflow-y-auto`}>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={cn(
                    `transform overflow-hidden rounded-[20px] ${headerImage ? 'p-0' : 'p-6'}
                  bg-white text-left align-middle shadow-xl transition-all`,
                    className,
                  )}
                  style={{
                    width: width ? width : '574px',
                  }}
                >
                  {hasCloseButton && (
                    <Image
                      src={close}
                      alt="close"
                      onClick={() => closeModal()}
                      className="absolute top-[22px] right-[17px] cursor-pointer"
                    />
                  )}
                  {headerImage && (
                    <div className={headerClassName}>
                      <Image src={headerImage} alt="header" />
                    </div>
                  )}
                  <Dialog.Title
                    as="h3"
                    className="text-[28px] font-med text-darkGreen leading-6 flex justify-between mb-[14px]"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CDialog;
