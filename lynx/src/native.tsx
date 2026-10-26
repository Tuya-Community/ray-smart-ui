import React from 'react';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawIcon from '@tuya/miniapp-smart-ui-lynx/dist/icon/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawImage from '@tuya/miniapp-smart-ui-lynx/dist/image/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawLoading from '@tuya/miniapp-smart-ui-lynx/dist/loading/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawSwitch from '@tuya/miniapp-smart-ui-lynx/dist/switch/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawGrid from '@tuya/miniapp-smart-ui-lynx/dist/grid/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawGridItem from '@tuya/miniapp-smart-ui-lynx/dist/grid-item/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawOverlay from '@tuya/miniapp-smart-ui-lynx/dist/overlay/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawToast from '@tuya/miniapp-smart-ui-lynx/dist/toast/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawPicker from '@tuya/miniapp-smart-ui-lynx/dist/picker/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawDateTimePicker from '@tuya/miniapp-smart-ui-lynx/dist/datetime-picker/index';
// @ts-ignore -- MiniApp component import handled by Ray.
import RawDialog from '@tuya/miniapp-smart-ui-lynx/dist/dialog/index';
import type {
  SmartIcon,
  SmartImage,
  SmartLoading,
  SmartSwitch,
  SmartGrid,
  SmartGridItem,
  SmartOverlay,
  SmartToastOptions,
  SmartPicker,
  SmartDateTimePicker,
  SmartDialog,
} from './types';
import { withReactProps } from './common/withReactProps';
import { NativeSlider, NativeSliderCore } from './NativeSlider';

export const Icon = withReactProps(RawIcon) as React.FC<SmartIcon>;
export const Image = withReactProps(RawImage) as React.FC<SmartImage>;
export const Loading = withReactProps(RawLoading) as React.FC<SmartLoading>;
export const Switch = withReactProps(RawSwitch) as React.FC<SmartSwitch>;
export const Grid = withReactProps(RawGrid) as React.FC<SmartGrid>;
export const GridItem = withReactProps(RawGridItem) as React.FC<SmartGridItem>;
export const Overlay = withReactProps(RawOverlay) as React.FC<SmartOverlay>;
export const Toast = withReactProps(RawToast) as React.FC<SmartToastOptions>;
export const Picker = withReactProps(RawPicker) as React.FC<SmartPicker>;
export const DateTimePicker = withReactProps(RawDateTimePicker) as React.FC<SmartDateTimePicker>;
export const Dialog = withReactProps(RawDialog) as React.FC<SmartDialog>;
export { NativePopup as Popup, NativeActionSheet as ActionSheet } from './NativePopup';
export { Calendar } from './NativeCalendar';
export { DateTimePicker as DatetimePicker };
export const Slider = Object.assign(NativeSlider, { RangeSlider: NativeSliderCore });
// @ts-ignore
export { default as ToastInstance } from '@tuya/miniapp-smart-ui-lynx/dist/toast/toast';
// @ts-ignore
export { default as DialogInstance } from '@tuya/miniapp-smart-ui-lynx/dist/dialog/dialog';
export type {
  SmartIcon,
  SmartImage,
  SmartLoading,
  SmartSwitch,
  SmartGrid,
  SmartGridItem,
  SmartOverlay,
  SmartToastOptions,
  SmartPicker,
  SmartDateTimePicker,
  SmartDialog,
} from './types';
