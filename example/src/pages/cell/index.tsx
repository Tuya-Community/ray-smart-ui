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
    // @ts-ignore
    ty.openInnerH5({ url: 'https://www.tuya.com', title: 'Tuya' });
  }, []);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CellGroup>
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} isLink />
          <Cell
            title={Strings.getLang('cell')}
            value={Strings.getLang('content')}
            label={Strings.getLang('descriptionInformation')}
            isLink
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('cardStyle')}>
        <CellGroup inset insetBorderRadius={12}>
          <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} isLink />
          <Cell
            title={Strings.getLang('cell')}
            value={Strings.getLang('content')}
            label={Strings.getLang('descriptionInformation')}
            isLink
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showIcon')}>
        <CellGroup>
          <Cell
            title={Strings.getLang('cell')}
            value={Strings.getLang('content')}
            icon={SunIcon}
            isLink
          />
          <Cell
            title={Strings.getLang('customIcon')}
            value={Strings.getLang('content')}
            isLink
            slot={{
              icon: <Icon className="demo-cell-icon" name={SunIcon} size="24px" color="#3678E3" />,
            }}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('otherDisplay')}>
        <CellGroup>
          <Cell title="Title" value="Label" />
          <Cell title="Title" isLink />
          <Cell title="Title">
            <Stepper value={1} step={0.1} />
          </Cell>
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('pageRedirection')}>
        <CellGroup>
          <Cell title={Strings.getLang('urlJumpNavigateTo')} isLink url="/pages/home/index" />
          <Cell
            title={Strings.getLang('urlRedirectionRedirectTo')}
            isLink
            url="/pages/home/index"
            linkType="redirectTo"
          />
          <Cell title={Strings.getLang('openH5ContainerOpenInnerH5')} isLink onClick={onNavTo} />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('groupTitle')}>
        <CellGroup title={Strings.getLang('group1')}>
          <Cell title={Strings.getLang('cell')} isLink />
        </CellGroup>
        <CellGroup title={Strings.getLang('group2')}>
          <Cell title={Strings.getLang('cell')} isLink />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('otherTypes')}>
        <CellGroup>
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
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useSlots')}>
        <CellGroup>
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
          <Cell
            title={Strings.getLang('cell')}
            slot={{ rightIcon: <Icon name={CheckmarkIcon} /> }}
          />
        </CellGroup>
      </DemoBlock>
    </>
  );
}
