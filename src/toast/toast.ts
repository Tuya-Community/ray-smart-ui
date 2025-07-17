// @ts-ignore
import Toast from '@tuya-miniapp/smart-ui/lib/toast/index';
// @ts-ignore
import ToastInstance from '@tuya-miniapp/smart-ui/lib/toast/toast';
import { withReactProps } from '../common/withReactProps';

export default withReactProps(Toast as React.ElementType);

export { ToastInstance };
