/* eslint-disable react/require-default-props */
import React from 'react';
import { View, Text } from '@ray-js/ray';
import './index.less';

interface Props {
  className?: string;
  title?: string;
  padding?: boolean;
  card?: boolean;
}

export const DemoBlock: React.FC<Props> = ({ className = '', title, padding, card, children }) => {
  // @ts-ignore
  const { callTxpApi } = ty;
  const isInWeb = typeof callTxpApi === 'function';
  const clickBlock = () => {
    if (!isInWeb) return;
    callTxpApi({
      __from: 'web://hashchange',
      data: { title },
    });
  };
  return (
    <View
      onClick={clickBlock}
      className={`${className} custom-class demo-block smart-clearfix ${
        padding ? 'demo-block--padding' : ''
      }`}
    >
      {!!title && (
        <View className="demo-block__title">
          {title}
          {isInWeb && <Text className="demo-block-web-tips">(点击聚焦文档)</Text>}
        </View>
      )}
      {card ? <View className="demo-block__card">{children}</View> : children}
    </View>
  );
};
