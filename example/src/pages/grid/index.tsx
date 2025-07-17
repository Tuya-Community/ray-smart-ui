import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import IconHandPoint from '@tuya-miniapp/icons/dist/svg/HandPoint';
import IconHome from '@tuya-miniapp/icons/dist/svg/Home';
import { Image, Grid, GridItem, Icon } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const array3 = [0, 1, 2];
  const array4 = [0, 1, 2, 3];
  const array6 = [0, 1, 2, 3, 4, 5];
  const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Grid>
          {array4.map((item, index) => (
            <GridItem icon={IconBubble} text={Strings.getLang('text')} key={`${index + 1}`} />
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColumnCount')} padding>
        <Grid columnNum={3}>
          {array6.map((item, index) => (
            <GridItem icon={IconBubble} text={Strings.getLang('text')} key={`${index + 1}`} />
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customContent')} padding>
        <Grid columnNum={3} border={false}>
          {array3.map((item, index) => (
            <GridItem useSlot text={Strings.getLang('text')} key={`${index + 1}`}>
              <Image
                width="90px"
                height="90px"
                fit="contain"
                src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
              />
            </GridItem>
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('squareGrid')} padding>
        <Grid square>
          {array8.map((item, index) => (
            <GridItem icon={IconBubble} text={Strings.getLang('text')} key={`${index + 1}`} />
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('gridSpacing')} padding>
        <Grid gutter="10px">
          {array8.map((item, index) => (
            <GridItem icon={IconBubble} text={Strings.getLang('text')} key={`${index + 1}`} />
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('contentArrangedHorizontally')} padding>
        <Grid direction="horizontal" columnNum={3}>
          {array3.map((item, index) => (
            <GridItem
              icon={IconBubble}
              text={Strings.getLang('text')}
              key={`${index + 1}`}
              textClass={styles.horizontalText}
            />
          ))}
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('pageRedirect')} padding>
        <Grid direction="horizontal" columnNum={2}>
          <GridItem
            icon={IconBubble}
            text={Strings.getLang('navigate')}
            url="/pages/home/index"
            textClass={styles.horizontalText}
          />
          <GridItem
            icon={IconHandPoint}
            url="/pages/home/index"
            text={Strings.getLang('reLaunchRedirect')}
            textClass={styles.horizontalText}
          />
        </Grid>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('logoPrompt')} padding>
        <Grid columnNum={2}>
          <GridItem icon={IconHome} text={Strings.getLang('text')} dot />
          <GridItem icon={IconHandPoint} text={Strings.getLang('text')} badge="99+" />
        </Grid>
        <Grid columnNum={2}>
          <GridItem
            slot={{
              icon: <Icon name={IconHome} color="#00f" />,
              text: <View style={{ color: '#00f' }}>{Strings.getLang('text')}</View>,
            }}
            dot
          />
          <GridItem icon={IconHandPoint} text={Strings.getLang('text')} badge="99+" />
        </Grid>
      </DemoBlock>
    </>
  );
}
