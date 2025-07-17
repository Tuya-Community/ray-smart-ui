import { withReactProps } from '../common/withReactProps';
// @ts-ignore
import _Dialog from '@tuya-miniapp/smart-ui/lib/dialog/index';
// @ts-ignore
import DialogInstance from '@tuya-miniapp/smart-ui/lib/dialog/dialog';
import { SmartDialogProps } from './PropTypes';

export default withReactProps(_Dialog as React.ElementType) as React.FC<SmartDialogProps>;

export { DialogInstance };
