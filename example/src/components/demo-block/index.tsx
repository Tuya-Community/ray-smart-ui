/* eslint-disable react/require-default-props */
import React from 'react';
import { View } from '@ray-js/ray';
import './index.less';

interface Props {
  title?: string;
  padding?: boolean;
  card?: boolean;
}

export const DemoBlock: React.FC<Props> = ({ title, padding, card, children }) => {
  return (
    <View
      className={`custom-class demo-block smart-clearfix ${padding ? 'demo-block--padding' : ''}`}
    >
      {!!title && <View className="demo-block__title">{title}</View>}
      {card ? <View className="demo-block__card">{children}</View> : children}
    </View>
  );
};
