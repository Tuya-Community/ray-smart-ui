import React from 'react';
import { Row, Col } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Row>
          <Col span="8" customClass={styles.dark}>
            span: 8
          </Col>
          <Col span="8" customClass={styles.light}>
            span: 8
          </Col>
          <Col span="8" customClass={styles.dark}>
            span: 8
          </Col>
        </Row>

        <Row>
          <Col span="4" customClass={styles.dark}>
            span: 4
          </Col>
          <Col span="10" offset="4" customClass={styles.light}>
            offset: 4, span: 10
          </Col>
        </Row>

        <Row>
          <Col offset="12" span="12" customClass={styles.dark}>
            offset: 12, span: 12
          </Col>
        </Row>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('increaseSpacingBetweenColumnElements')} padding>
        <Row gutter="20">
          <Col span="8" customClass={styles.dark}>
            span: 8
          </Col>
          <Col span="8" customClass={styles.light}>
            span: 8
          </Col>
          <Col span="8" customClass={styles.dark}>
            span: 8
          </Col>
        </Row>
      </DemoBlock>
    </>
  );
}
