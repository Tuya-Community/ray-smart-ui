import React from 'react';
import { View } from '@ray-js/ray';
import { Collapse, CollapseItem, Toast, Icon } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
// import styles from './index.module.less';

export default function Demo() {
  const [state, setState] = React.useState({
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: Strings.getLang('title1'),
    title2: Strings.getLang('title2'),
    title3: Strings.getLang('title3'),
    content1: Strings.getLang('codeIsWrittenForHumansToReadAndIncidentallyForMachinesToExecute'),
    content2: Strings.getLang('codeIsWrittenForHumansToReadAndIncidentallyForMachinesToExecute'),
    content3: Strings.getLang('codeIsWrittenForHumansToReadAndIncidentallyForMachinesToExecute'),
  });

  const onChange = event => {
    const { key } = event.currentTarget.dataset;
    setState(v => ({
      ...v,
      [key]: event.detail,
    }));
  };

  const onOpen = event => {
    Toast({
      context: this,
      message: `${Strings.getLang('expand')}: ${event.detail}`,
    });
  };

  const onClose = event => {
    Toast({
      context: this,
      message: `${Strings.getLang('close')}: ${event.detail}`,
    });
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Collapse value={state.active1} data-key="active1" onChange={onChange}>
          <CollapseItem title={state.title1}>{state.content1}</CollapseItem>
          <CollapseItem title={state.title2}>{state.content2}</CollapseItem>
          <CollapseItem title={state.title3} disabled>
            {state.content3}
          </CollapseItem>
        </Collapse>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('accordion')}>
        <Collapse value={state.active2} data-key="active2" accordion onChange={onChange}>
          <CollapseItem title={state.title1}>{state.content1}</CollapseItem>
          <CollapseItem title={state.title2}>{state.content2}</CollapseItem>
          <CollapseItem title={state.title3}>{state.content3}</CollapseItem>
        </Collapse>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('eventListener')}>
        <Collapse
          value={state.active3}
          data-key="active3"
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
        >
          <CollapseItem title={state.title1}>{state.content1}</CollapseItem>
          <CollapseItem title={state.title2}>{state.content2}</CollapseItem>
          <CollapseItem title={state.title3}>{state.content3}</CollapseItem>
        </Collapse>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customTitleContent')}>
        <Collapse value={state.active4} data-key="active4" onChange={onChange}>
          <CollapseItem
            slot={{
              title: (
                <View>
                  {state.title1}
                  <Icon name="question-o" custom-class="smart-icon-question" />
                </View>
              ),
            }}
          >
            {state.content1}
          </CollapseItem>
          <CollapseItem title={state.title2} value={Strings.getLang('content')} icon="shop-o">
            {state.content2}
          </CollapseItem>
        </Collapse>
      </DemoBlock>

      <Toast id="smart-toast" />
    </>
  );
}
