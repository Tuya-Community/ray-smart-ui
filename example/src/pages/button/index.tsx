import './index.less';

import { DemoBlock } from '@/components';
import { View } from '@ray-js/ray';
import { Button, Col, Row } from '@ray-js/smart-ui';
import PlusCircleIcon from '@tuya-miniapp/icons/dist/svg/PlusCircle';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';

import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('buttonType')} padding>
        <View className="row">
          <Button type="info" className="demo-margin-right">
            {Strings.getLang('infermationButton')}
          </Button>
          <Button type="primary" className="demo-margin-right">
            {Strings.getLang('mainBUtton')}
          </Button>
          <Button className="demo-margin-right">{Strings.getLang('defaultButton')}</Button>
        </View>
        <Button type="danger" className="demo-margin-right">
          {Strings.getLang('dangerButton')}
        </Button>
        <Button type="warning">{Strings.getLang('warnButton')}</Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('primaryButton')} padding>
        <Button type="info" plain className="demo-margin-right">
          {Strings.getLang('primaryButton')}
        </Button>
        <Button type="primary" plain>
          {Strings.getLang('primaryButton')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('smallBorder')} padding>
        <Button type="info" plain hairline className="demo-margin-right">
          {Strings.getLang('smallBorderButton')}
        </Button>
        <Button type="primary" plain hairline>
          {Strings.getLang('smallBorderButton')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableStatus')} padding>
        <Button type="info" disabled className="demo-margin-right">
          {Strings.getLang('disableStatus')}
        </Button>
        <Button type="primary" disabled className="demo-margin-right">
          {Strings.getLang('disableStatus')}
        </Button>
        <Button disabled>{Strings.getLang('defaultButton')}</Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('loadingStatus')} padding>
        <Button
          loading
          type="info"
          loading-text={Strings.getLang('inloading')}
          className="demo-margin-right"
        />
        <Button loading type="info" className="demo-margin-right" />
        <Button loading type="primary" className="demo-margin-right" />
        <Button loading type="primary" loadingType="spinner" />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('buttonShape')} padding>
        <Button type="info" square className="demo-margin-right">
          {Strings.getLang('squareButton')}
        </Button>
        <Button type="primary" round>
          {Strings.getLang('circleButton')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('buttonFull')} padding>
        <Row gutter="10">
          <Col span="12">
            <Button type="info" square customClass="w-full">
              Button
            </Button>
          </Col>
          <Col span="12">
            <Button type="primary" round customClass="w-full">
              Button
            </Button>
          </Col>
        </Row>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('iconButton')} padding>
        <Button type="info" icon={PlusCircleIcon} className="demo-margin-right">
          {Strings.getLang('button')}
        </Button>
        <Button type="info" icon={PlusCircleIcon} className="demo-margin-right" />
        <Button type="primary" rightIcon={RightIcon} className="demo-margin-right">
          {Strings.getLang('button')}
        </Button>
        <View className="demo-margin-top">
          <Button plain type="primary" icon={PlusCircleIcon} className="demo-margin-right">
            {Strings.getLang('button')}
          </Button>
          <Button
            plain
            type="primary"
            icon="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
            className="demo-margin-right"
          >
            {Strings.getLang('button')}
          </Button>
        </View>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('buttonSize')} padding>
        <Button type="info" size="large" block className="demo-margin-bottom">
          {Strings.getLang('largeButton')}
        </Button>
        <Button type="info" className="demo-margin-right">
          {Strings.getLang('normalButton')}
        </Button>
        <Button type="info" size="small" className="demo-margin-right">
          {Strings.getLang('smallButton')}
        </Button>
        <Button type="info" size="mini">
          {Strings.getLang('miniButton')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('blockLevelElement')} padding>
        <Button type="primary" className="demo-margin-bottom">
          {Strings.getLang('normalButton')}
        </Button>
        <Button type="primary" block>
          {Strings.getLang('blockLevelElement')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')} padding>
        <Button color="#00BEE4" className="demo-margin-right">
          {Strings.getLang('monochromeButton')}
        </Button>
        <Button color="#3246FF" className="demo-margin-right" plain>
          {Strings.getLang('monochromeButton')}
        </Button>
        <Button color="linear-gradient(180deg, #0FB3FF 0%, #9DE0FF 100%)">
          {Strings.getLang('gradientButton')}
        </Button>
        <Button
          color="linear-gradient(98deg, #0FB3FF 0%, #9DE0FF 100%)"
          className="demo-margin-top"
          block
        >
          {Strings.getLang('diagonalGradient')}
        </Button>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('projection')} padding>
        <Button
          color="#006EDE"
          custom-style="box-shadow: 0px 6px 15px 0px rgba(0, 110, 222, 0.2);"
          block
        >
          {Strings.getLang('projection')}
        </Button>
      </DemoBlock>
    </>
  );
}
