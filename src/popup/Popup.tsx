// @ts-ignore
import PopupMini from '@tuya-miniapp/smart-ui/dist/popup/index';
import { useEffect, useState } from 'react';
import { withReactProps } from '../common/withReactProps';

const PopupComp = withReactProps(PopupMini as React.ElementType);
export default function Popup({ children, show, ...rest }) {
  const [isShowed, setIsShowed] = useState(show);
  useEffect(() => {
    if (!show) return;
    setIsShowed(show);
  }, [show]);
  return (
    <PopupComp show={show} {...rest}>
      {isShowed && children}
    </PopupComp>
  );
}
