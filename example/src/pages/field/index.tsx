import React from 'react';
import { Image } from '@ray-js/ray';
import { Field, Button, CellGroup, Icon } from '@ray-js/smart-ui';
import Sun from '@tuya-miniapp/icons/dist/svg/Sun';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import styles from './index.module.less';

export default function Demo() {
  const [value, setValue] = React.useState('');
  const [value2] = React.useState('12345');
  const [num] = React.useState(2000);
  const [password] = React.useState('');
  const [message] = React.useState('');

  const onChange = (event: any) => {
    console.log(event, '--event');
    const { value } = event.detail;
    const showValue = `test${value.slice(-1)[0]}`;
    event.detail.callback({ value: showValue });
    setValue(showValue);
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CellGroup>
          <Field
            value={value}
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
          />
          <Field value={value} hiddenLabel placeholder={Strings.getLang('pleaseEnter')} />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('modifyInputContent')}>
        <CellGroup>
          <Field
            value={value}
            extraEventParams
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            onChange={onChange}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customType')}>
        <CellGroup>
          <Field
            value={password}
            type="password"
            label={Strings.getLang('password')}
            placeholder={Strings.getLang('pleaseEnterThePassword')}
          />
          <Field
            value={num}
            cardMode
            type="number"
            label={Strings.getLang('title')}
            subLabel={Strings.getLang('subTitle')}
            placeholder={Strings.getLang('pleaseEnter')}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableInputField')}>
        <CellGroup>
          <Field
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            disabled
          />
          <Field
            cardMode
            subLabel={Strings.getLang('subTitle')}
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            disabled
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('displayIcon')}>
        <CellGroup>
          <Field
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            slot={{
              leftIcon: <Icon name={Sun} color="#3678E3" size="22" />,
            }}
          />
          <Field
            value={num}
            cardMode
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            slot={{
              leftIcon: (
                <Image
                  style={{ height: '50px', width: '50px' }}
                  src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img"
                />
              ),
            }}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('errorPrompt')}>
        <CellGroup>
          <Field
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            errorMessage={Strings.getLang('pleaseEnterYourUsername')}
            interError
            required
          />
          <Field
            value={value2}
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            errorMessage={Strings.getLang('formatError')}
            required
          />
          <Field
            value={num}
            cardMode
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnter')}
            errorMessage={Strings.getLang('formatError')}
            subLabel={Strings.getLang('subTitle')}
            required
            slot={{
              leftIcon: (
                <Image
                  style={{ height: '50px', width: '50px' }}
                  src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img"
                />
              ),
            }}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('insertButton')} className={styles.btn}>
        <CellGroup>
          <Field
            type="number"
            input-align="left"
            label={Strings.getLang('title')}
            placeholder={Strings.getLang('pleaseEnterTheSmsVerificationCode')}
            slot={{
              button: (
                <Button type="info" customClass="button">
                  {Strings.getLang('sendVerificationCode')}
                </Button>
              ),
            }}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('message')}>
        <Field
          type="textarea"
          value={message}
          label={Strings.getLang('matter')}
          placeholder={Strings.getLang('pleaseEnterAMessage')}
          maxlength={200}
          showWordLimit
        />
      </DemoBlock>
    </>
  );
}
