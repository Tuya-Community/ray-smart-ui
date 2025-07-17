import React from 'react';
import { View } from '@ray-js/ray';
import { Cell, CellGroup, Tag, Icon, Stepper, Switch, Checkbox } from '@ray-js/smart-ui';
import SunIcon from '@tuya-miniapp/icons/dist/svg/Sun';
import CheckmarkIcon from '@tuya-miniapp/icons/dist/svg/Checkmark';
import { DemoBlock } from '@/components';
import './index.less';
import Strings from '../../i18n';

export default function Demo() {
  const onNavTo = React.useCallback(() => {
    ty.openInnerH5({ url: 'https://www.tuya.com', title: 'Tuya' });
  }, []);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CellGroup>
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} isLink />
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} label={Strings.getLang('descriptionInformation')} border={false} isLink />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('cardStyle')}>
        <CellGroup inset>
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} isLink />
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} label={Strings.getLang('descriptionInformation')} border={false} isLink />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showIcon')}>
        <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} icon={SunIcon} border={false} isLink />
        <Cell
          title={Strings.getLang('customIcon')}
          value={Strings.getLang('content')}
          border={false}
          isLink
          slot={{
            icon: <Icon className="demo-cell-icon" name={SunIcon} size="24px" color="#3678E3" />,
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('otherDisplay')}>
        <Cell title="Title" value="Label" />
        <Cell title="Title" isLink />
        <Cell title="Title" border={false}>
          <Stepper value={1} step={0.1} />
        </Cell>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('pageRedirection')}>
        <Cell title={Strings.getLang('urlJumpNavigateTo')} isLink url="/pages/home/index" />
        <Cell title={Strings.getLang('urlRedirectionRedirectTo')} isLink url="/pages/home/index" linkType="redirectTo" />
        <Cell title={Strings.getLang('openH5ContainerOpenInnerH5')} isLink onClick={onNavTo} border={false} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('groupTitle')}>
        <CellGroup title={Strings.getLang('group1')}>
          <Cell title={Strings.getLang('cell')} isLink border={false} />
        </CellGroup>
        <CellGroup title={Strings.getLang('group2')}>
          <Cell title={Strings.getLang('cell')} isLink border={false} />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('otherTypes')}>
        <Cell title="Title">
          <Switch checked size="24px" />
        </Cell>
        <Cell title="Title">
          <Icon name={CheckmarkIcon} color="#3678E3" size="28px" />
        </Cell>
        <Cell title="Title">
          <Checkbox value={false} shape="square" />
        </Cell>
        <Cell title="Title">
          <Checkbox value={false} />
        </Cell>
        <Cell
          title="Title"
          label="Bedroom"
          isLink
          border={false}
          slot={{
            icon: (
              <Icon
                className="demo-cell-icon"
                name="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
                size="50px"
              />
            ),
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useSlots')}>
        <Cell
          value={Strings.getLang('content')}
          icon={CheckmarkIcon}
          isLink
          slot={{
            title: (
              <View>
                <View className="demo-cell-title">{Strings.getLang('cell')}</View>
                <Tag type="danger">{Strings.getLang('label')}</Tag>
              </View>
            ),
          }}
        />
        <Cell title={Strings.getLang('cell')} border={false} slot={{ rightIcon: <Icon name={CheckmarkIcon} /> }} />
      </DemoBlock>
    </>
  );
}
