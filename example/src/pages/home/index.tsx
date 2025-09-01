import { View, Image, router, Text } from '@ray-js/ray';
import { Cell, CellGroup } from '@ray-js/smart-ui';
import Strings from 'example/src/i18n';
import { routeConfig } from '@/constant/routeConfig';
import styles from './index.module.less';

export function Home() {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Image
          className={styles.logo}
          src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo.png"
        />
        <Text className={styles.logoText}>Smart UI</Text>
      </View>

      {routeConfig.map(c => {
        return (
          <View key={c.groupName} className={styles.list}>
            <View className={styles.title}>{Strings.getLang(c.groupName)}</View>
            <CellGroup>
              {c.list.map((d, idx) => {
                return (
                  <Cell
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    title={Strings.getLang(d.title)}
                    isLink
                    border={c.list.length !== idx + 1}
                    onClick={() => router.push(d.path)}
                  />
                );
              })}
            </CellGroup>
          </View>
        );
      })}
    </View>
  );
}

export default Home;
