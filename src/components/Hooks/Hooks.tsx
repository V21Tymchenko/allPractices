import { FC, useState } from "react";

const MyHooks: FC = () => {
  const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);

    return { isOpen, open, close, toggle };
  };
  return <div>Хук внитри функции</div>;
};

export default MyHooks;
