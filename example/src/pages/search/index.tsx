import React, { useState } from 'react';
import { showToast, View } from '@ray-js/ray';
import { Search, Icon } from '@ray-js/smart-ui';
import TriangleDown from '@tuya-miniapp/icons/dist/svg/TriangleDown';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [value, setValue] = useState('');

  const onSearch = event => {
    if (value) {
      showToast({
        title: `${Strings.getLang('searchText')}：${value}`,
        icon: 'none',
      });
    }
  };
  const onChange = event => {
    setValue(event.detail);
  };

  const onCancel = event => {
    console.log('Cancel');
  };

  const onClick = event => {
    console.log('____');
  };

  const onClear = event => {
    setValue('');
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Search
          value={value}
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          onSearch={onSearch}
          onChange={onChange}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('simpleStyle')} padding>
        <Search
          value={value}
          shape="round"
          customClass={styles.easyDemo}
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          searchText={Strings.getLang('searchText')}
          onSearch={onSearch}
          onChange={onChange}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('eventListener')} padding>
        <Search
          value={value}
          showAction
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          searchText={Strings.getLang('searchText')}
          actionText={Strings.getLang('cancel')}
          onChange={onChange}
          onSearch={onSearch}
          onCancel={onCancel}
          onClear={onClear}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('alignSearchBoxContent')} padding>
        <Search
          value={value}
          inputAlign="center"
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          onChange={onChange}
          onSearch={onSearch}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableSearchBox')} padding>
        <Search
          value={value}
          disabled
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          onChange={onChange}
          onSearch={onSearch}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customButton')} padding>
        <Search
          value={value}
          label={Strings.getLang('address')}
          shape="round"
          useActionSlot
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          onSearch={onSearch}
          onChange={onChange}
          slot={{
            action: (
              <View onClick={onClick} className={styles.searchAction}>
                {Strings.getLang('searchText')}
              </View>
            ),
          }}
        />
        <Search
          value={value}
          shape="round"
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
          onSearch={onSearch}
          onChange={onChange}
          slot={{
            searchButton: <View onClick={onClick}>{Strings.getLang('searchText')}</View>,
            label: (
              <View>
                {Strings.getLang('address')}
                <Icon className={styles.icon} name={TriangleDown} size="12px" />
              </View>
            ),
          }}
        />
      </DemoBlock>
    </>
  );
}
