import _Dialog, { DialogInstance as _DialogInstance } from './Dialog';
import type { SmartDialog, SmartDialogInstance } from './PropTypes';

const Dialog = _Dialog as React.FC<SmartDialog>;
const DialogInstance = _DialogInstance as SmartDialogInstance;

export { Dialog, DialogInstance };

export {
  SmartDialog,
  SmartDialogProps,
  SmartDialogInstance,
  SmartDialogOptions,
} from './PropTypes';
