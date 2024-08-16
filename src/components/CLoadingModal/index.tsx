import { Failed, Loading, MailBox, Success } from '@/assets';
import CModal from '../CModal';

interface CLoadingModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  success?: boolean;
  verifyEmail?: boolean;
  failed?: boolean;
  onClose: () => void;
  className?: string;
}

const CLoadingModal = ({
  isOpen,
  onClose,
  success,
  failed,
  title,
  verifyEmail,
  description,
  className,
}: CLoadingModalProps) => {
  let loadingStatus = <Loading fill="#101828" />;

  if (success) {
    loadingStatus = <Success />;
  }
  if (verifyEmail) {
    loadingStatus = <MailBox />;
  } else if (failed) {
    loadingStatus = <Failed />;
  }

  return (
    <CModal isOpen={isOpen} onClose={onClose} className={className}>
      <div className="flex flex-col justify-center items-center w-full space-y-5 py-4">
        <div className="transition">{loadingStatus}</div>
        <div className="text-center space-y-3 w-full">
          <h3 className="text-darkBlue text-[18px] font-medium">{title}</h3>
          <p className="text-smokyBlue text-[14px] text-center px-4">{description}</p>
        </div>
      </div>
    </CModal>
  );
};

export default CLoadingModal;
