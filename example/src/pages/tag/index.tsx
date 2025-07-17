import React, { useState } from 'react';
import { Tag } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Tag className="demo-margin-right" type="primary">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" type="success">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" type="danger">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" type="warning">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('roundedCornerStyle')} padding>
        <Tag className="demo-margin-right" round type="primary">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" round type="success">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" round type="danger">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" round type="warning">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('markingStyle')} padding>
        <Tag className="demo-margin-right" mark type="primary">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" mark type="success">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" mark type="danger">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" mark type="warning">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('hollowStyle')} padding>
        <Tag className="demo-margin-right" plain type="primary">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" plain type="success">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" plain type="danger">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" plain type="warning">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')} padding>
        <Tag className="demo-margin-right" color="#f2826a">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" color="#7232dd">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" color="#7232dd" plain>
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" color="#ffe1e1" textColor="#ad0000">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('labelSize')} padding>
        <Tag className="demo-margin-right" type="danger">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" type="danger" size="medium">
          {Strings.getLang('label')}
        </Tag>
        <Tag className="demo-margin-right" type="danger" size="large">
          {Strings.getLang('label')}
        </Tag>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('closableTab')} padding>
        {showPrimary && (
          <Tag
            className="demo-margin-right"
            type="primary"
            size="medium"
            closeable
            id="primary"
            onClose={() => setShowPrimary(false)}
          >
            {Strings.getLang('label')}
          </Tag>
        )}
        {showSuccess && (
          <Tag
            className="demo-margin-right"
            type="success"
            size="medium"
            closeable
            id="success"
            onClose={() => setShowSuccess(false)}
          >
            {Strings.getLang('label')}
          </Tag>
        )}
      </DemoBlock>
    </>
  );
}
