// @ts-ignore
import Toast from '@tuya-miniapp/smart-ui/dist/toast/index';
// @ts-ignore
import ToastInstance from '@tuya-miniapp/smart-ui/dist/toast/toast';
import { withReactProps } from '../common/withReactProps';

export default withReactProps(Toast as React.ElementType);

export { ToastInstance };
