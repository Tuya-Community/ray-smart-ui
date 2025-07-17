import React from 'react';
import { showToast } from '@ray-js/ray';
import { Field, Button, CellGroup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [value] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password] = React.useState('');
  const [username2] = React.useState('');
  const [username3] = React.useState('');
  const [message] = React.useState('');
  const [phone] = React.useState('');
  const [sms] = React.useState('');
  const onClickIcon = React.useCallback(() => {
    return showToast({
      icon: 'none',
      title: Strings.getLang('clickTheIcon'),
    });
  }, []);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CellGroup>
          <Field
            value={value}
            placeholder={Strings.getLang('pleaseEnterUsername')}
            border={false}
            clearable
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customType')}>
        <CellGroup>
          <Field
            value={username}
            label={Strings.getLang('username')}
            placeholder={Strings.getLang('pleaseEnterYourUsername')}
            clearable
            rightIcon="question-o"
            rightIconClass="custom-icon"
            required
            onClickIcon={onClickIcon}
          />
          <Field
            value={password}
            type="password"
            label={Strings.getLang('password')}
            placeholder={Strings.getLang('pleaseEnterPassword')}
            required
            border={false}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableInputField')}>
        <CellGroup>
          <Field
            value={Strings.getLang('inputBoxIsDisabled')}
            label={Strings.getLang('username')}
            leftIcon="contact"
            disabled
            border={false}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('errorPrompt')}>
        <CellGroup>
          <Field
            value={username2}
            label={Strings.getLang('username')}
            placeholder={Strings.getLang('pleaseEnterUsername')}
            error
          />
          <Field
            value={phone}
            label={Strings.getLang('phoneNumber')}
            placeholder={Strings.getLang('pleaseEnterYourPhoneNumber')}
            errorMessage={Strings.getLang('invalidPhoneNumberFormat')}
            border={false}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('contentAlignment')}>
        <CellGroup>
          <Field
            value={username3}
            label={Strings.getLang('username')}
            placeholder={Strings.getLang('pleaseEnterYourUsername')}
            inputAlign="right"
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('highlyAdaptive')}>
        <CellGroup>
          <Field
            value={message}
            label={Strings.getLang('message')}
            type="textarea"
            placeholder={Strings.getLang('pleaseEnterYourMessage')}
            rows="1"
            autosize
            border={false}
          />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('insertButton')}>
        <CellGroup>
          <Field
            value={sms}
            center
            clearable
            label={Strings.getLang('smsVerificationCode')}
            placeholder={Strings.getLang('pleaseEnterTheSmsVerificationCode')}
            use-button-slot
            border={false}
          >
            <Button slot="button" size="small" type="primary" customClass="button">
              {Strings.getLang('sendVerificationCode')}
            </Button>
          </Field>
        </CellGroup>
      </DemoBlock>
    </>
  );
}
