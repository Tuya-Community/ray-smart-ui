import React, { useState } from 'react';
import { showToast, View } from '@ray-js/ray';
import { Search } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [value, setValue] = useState('');

  const onSearch = event => {
    if (value) {
      showToast({
        title: `${Strings.getLang('search')}：${value}`,
        icon: 'none',
      });
    }
  };
  const onChange = event => {
    setValue(event.detail);
  };

  const onCancel = event => {};

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

      <DemoBlock title={Strings.getLang('eventListener')} padding>
        <Search
          value={value}
          showAction
          placeholder={Strings.getLang('pleaseEnterSearchKeywords')}
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

      <DemoBlock title={Strings.getLang('customBackgroundColor')} padding>
        <Search
          value={value}
          shape="round"
          background="#4fc08d"
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
        >
          <View slot="action" onClick={onClick} className={styles.searchAction}>
            {Strings.getLang('search')}
          </View>
        </Search>
      </DemoBlock>
    </>
  );
}
