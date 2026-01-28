// @ts-ignore
import ActionSheetMini from '@tuya-miniapp/smart-ui/dist/action-sheet/index';
import { useEffect, useState } from 'react';
import { withReactProps } from '../common/withReactProps';

const ActionSheetComp = withReactProps(ActionSheetMini as React.ElementType);
export default function ActionSheet({ children, show, ...rest }) {
  const [isShowed, setIsShowed] = useState(show);
  useEffect(() => {
    if (!show) return;
    setIsShowed(show);
  }, [show]);
  return (
    <ActionSheetComp show={show} {...rest}>
      {isShowed && children}
    </ActionSheetComp>
  );
}
