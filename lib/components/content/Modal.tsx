import React, { useState } from "react";

interface ModalProps extends React.ComponentPropsWithoutRef<"div"> {
  header?: React.ReactNode;
  hideHeader?: boolean;
  closeButtonComponent?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  header,
  hideHeader,
  isOpen,
  onClose,
  children,
  className,
  closeButtonComponent,
  ...rest
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose && onClose();
  };

  if (!isModalOpen) return null;

  const _closeButtonComponent = closeButtonComponent || (
    <a
      onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }}
      href="#"
    >
      <span className="sr-only">Close</span>
      &#x2715;
    </a>
  );

  const _header = <div className="flex-grow">{header}</div>;

  return (
    <div
      className={`fixed inset-0 bg-dark bg-opacity-50 overflow-y-auto top-0 left-0 min-h-full ${className}`}
      onClick={handleClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {!hideHeader && (
          <div className="flex justify-between items-center text-lg font-bold">
            {_header}
            {_closeButtonComponent}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
