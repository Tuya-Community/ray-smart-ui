// @ts-ignore
import BottomSheetMini from '@tuya-miniapp/smart-ui/dist/bottom-sheet/index';
import { useEffect, useState } from 'react';
import { withReactProps } from '../common/withReactProps';

const BottomSheetComp = withReactProps(BottomSheetMini as React.ElementType);
export default function BottomSheet({ children, show, ...rest }) {
  const [isShowed, setIsShowed] = useState(show);
  useEffect(() => {
    if (!show) return;
    setIsShowed(show);
  }, [show]);
  return (
    <BottomSheetComp show={show} {...rest}>
      {isShowed && children}
    </BottomSheetComp>
  );
}
