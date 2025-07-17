import _Toast, { ToastInstance as _ToastInstance } from './toast';
import type { ToastInstance, SmartToastOptions } from './PropTypes';

const Toast = _Toast as React.FC<SmartToastOptions>;

const ToastInstance = _ToastInstance;

export { Toast, ToastInstance };

export * from './PropTypes';
