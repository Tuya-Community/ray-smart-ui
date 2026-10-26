import React from 'react';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Icon as WebIcon } from '@ray-js/smart-ui/lib/icon';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeIcon from '@tuya/miniapp-smart-ui-lynx/dist/icon/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Image as WebImage } from '@ray-js/smart-ui/lib/image';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeImage from '@tuya/miniapp-smart-ui-lynx/dist/image/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Loading as WebLoading } from '@ray-js/smart-ui/lib/loading';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeLoading from '@tuya/miniapp-smart-ui-lynx/dist/loading/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Switch as WebSwitch } from '@ray-js/smart-ui/lib/switch';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeSwitch from '@tuya/miniapp-smart-ui-lynx/dist/switch/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Grid as WebGrid } from '@ray-js/smart-ui/lib/grid';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeGrid from '@tuya/miniapp-smart-ui-lynx/dist/grid/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { GridItem as WebGridItem } from '@ray-js/smart-ui/lib/grid-item';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeGridItem from '@tuya/miniapp-smart-ui-lynx/dist/grid-item/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Popup as WebPopup } from '@ray-js/smart-ui/lib/popup';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Overlay as WebOverlay } from '@ray-js/smart-ui/lib/overlay';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeOverlay from '@tuya/miniapp-smart-ui-lynx/dist/overlay/index';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { ActionSheet as WebActionSheet } from '@ray-js/smart-ui/lib/action-sheet';
// @ts-ignore -- resolved by the consumer peer package or local source alias.
import { Toast as WebToast, ToastInstance as WebToastInstance } from '@ray-js/smart-ui/lib/toast';
// @ts-ignore -- MiniApp component import is handled by Ray.
import NativeToast from '@tuya/miniapp-smart-ui-lynx/dist/toast/index';
// Instance calls must select the same renderer as their mounted Toast host.
// @ts-ignore
import NativeToastInstance from '@tuya/miniapp-smart-ui-lynx/dist/toast/toast';

// @ts-ignore -- peer package/local alias.
import { Picker as WebPicker } from '@ray-js/smart-ui/lib/picker';
// @ts-ignore -- Ray MiniApp component import.
import RawPicker from '@tuya/miniapp-smart-ui-lynx/dist/picker/index';
// @ts-ignore -- peer package/local alias.
import { DateTimePicker as WebDateTimePicker } from '@ray-js/smart-ui/lib/datetime-picker';
// @ts-ignore -- Ray MiniApp component import.
import RawDateTimePicker from '@tuya/miniapp-smart-ui-lynx/dist/datetime-picker/index';
// @ts-ignore -- peer package/local alias.
import {
  Dialog as WebDialog,
  DialogInstance as WebDialogInstance,
} from '@ray-js/smart-ui/lib/dialog';
// @ts-ignore -- Ray MiniApp component import.
import RawDialog from '@tuya/miniapp-smart-ui-lynx/dist/dialog/index';
// @ts-ignore
import { Calendar as WebCalendar } from '@ray-js/smart-ui/lib/calendar';
// @ts-ignore
import NativeDialogInstance from '@tuya/miniapp-smart-ui-lynx/dist/dialog/dialog';
// @ts-ignore -- original peer wrapper/local alias.
import { Slider as WebSlider } from '@ray-js/smart-ui/lib/slider';
import { Calendar as NativeCalendar } from './NativeCalendar';
import type {
  SmartPicker,
  SmartDateTimePicker,
  SmartCalendar,
  SmartDialog,
  SmartIcon,
  SmartImage,
  SmartLoading,
  SmartSwitch,
  SmartGrid,
  SmartGridItem,
  SmartPopup,
  SmartOverlay,
  SmartActionSheet,
  SmartToastOptions,
} from './types';
import { withReactProps } from './common/withReactProps';
import {
  NativePopup as NativePopupLazy,
  NativeActionSheet as NativeActionSheetLazy,
} from './NativePopup';
import { NativeSlider, NativeSliderCore } from './NativeSlider';
import type { SliderProps } from './NativeSlider';

export type RenderMode = 'webview' | 'lynx';
export interface RendererProps {
  renderMode?: RenderMode;
}
export const SmartUIRendererContext = React.createContext<RenderMode>('webview');
function select<P>(WebView: React.ComponentType<P>, Native: React.ComponentType<P>) {
  function Component({ renderMode, ...props }: P & RendererProps) {
    const inheritedMode = React.useContext(SmartUIRendererContext);
    const mode = renderMode || inheritedMode;
    const Target = mode === 'lynx' ? Native : WebView;
    return React.createElement(
      SmartUIRendererContext.Provider,
      { value: mode },
      React.createElement(Target, props as P)
    );
  }
  Component.defaultProps = { renderMode: undefined };
  return Component;
}
export const Icon = select<SmartIcon>(
  WebIcon,
  withReactProps(NativeIcon) as React.ComponentType<SmartIcon>
);
export const Image = select<SmartImage>(
  WebImage,
  withReactProps(NativeImage) as React.ComponentType<SmartImage>
);
export const Loading = select<SmartLoading>(
  WebLoading,
  withReactProps(NativeLoading) as React.ComponentType<SmartLoading>
);
export const Switch = select<SmartSwitch>(
  WebSwitch,
  withReactProps(NativeSwitch) as React.ComponentType<SmartSwitch>
);
export const Grid = select<SmartGrid>(
  WebGrid,
  withReactProps(NativeGrid) as React.ComponentType<SmartGrid>
);
export const GridItem = select<SmartGridItem>(
  WebGridItem,
  withReactProps(NativeGridItem) as React.ComponentType<SmartGridItem>
);
export const Popup = select<SmartPopup>(WebPopup, NativePopupLazy);
export const Overlay = select<SmartOverlay>(
  WebOverlay,
  withReactProps(NativeOverlay) as React.ComponentType<SmartOverlay>
);
export const ActionSheet = select<SmartActionSheet>(WebActionSheet, NativeActionSheetLazy);
export const Toast = select<SmartToastOptions>(
  WebToast,
  withReactProps(NativeToast) as React.ComponentType<SmartToastOptions>
);
export const getToastInstance = (renderMode: RenderMode = 'webview') =>
  renderMode === 'lynx' ? NativeToastInstance : WebToastInstance;
export const Picker = select<SmartPicker>(
  WebPicker,
  withReactProps(RawPicker) as React.ComponentType<SmartPicker>
);
export const DateTimePicker = select<SmartDateTimePicker>(
  WebDateTimePicker,
  withReactProps(RawDateTimePicker) as React.ComponentType<SmartDateTimePicker>
);
export const Dialog = select<SmartDialog>(
  WebDialog,
  withReactProps(RawDialog) as React.ComponentType<SmartDialog>
);
export const DatetimePicker = DateTimePicker;
export const Calendar = select<SmartCalendar>(WebCalendar, NativeCalendar);
export const getDialogInstance = (
  renderMode: RenderMode = 'webview'
): typeof NativeDialogInstance | typeof WebDialogInstance =>
  renderMode === 'lynx' ? NativeDialogInstance : WebDialogInstance;
export const Slider = Object.assign(select<SliderProps>(WebSlider, NativeSlider), {
  RangeSlider: select<React.ComponentProps<typeof WebSlider.RangeSlider>>(
    WebSlider.RangeSlider,
    NativeSliderCore
  ),
});
