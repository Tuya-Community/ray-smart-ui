export type WechatOpenType =
  /**
   * 打开客服会话，如果用户在会话中点击消息卡片后返回小程序
   *
   * 可以从 `bindcontact` 回调中获得具体信息
   *
   * （*小程序插件中不能使用*）
   */
  | 'contact'

  /**
   * 触发用户转发
   */
  | 'share'

  /**
   * 获取用户手机号
   *
   * 可以从 `bindgetphonenumber` 回调中获取到用户信息
   *
   * （*小程序插件中不能使用*）
   */
  | 'getPhoneNumber'

  /**
   * 获取用户信息
   *
   * 可以从 `bindgetuserinfo` 回调中获取到用户信息
   *
   * （*小程序插件中不能使用*）
   */
  | 'getUserInfo'

  /**
   * 打开 `APP`
   *
   * 以通过 `app-parameter` 属性设定向APP传的参数
   */
  | 'launchApp'

  /**
   * 打开授权设置页
   */
  | 'openSetting'

  /**
   * 打开“意见反馈”页面
   */
  | 'feedback'

  /**
   * 获取用户头像，可以从 `bindchooseavatar` 回调中获取到头像信息
   */
  | 'chooseAvatar';

export interface SmartOpenTypeProps {
  /**
   * 打开 `APP` 时，向 `APP` 传递的参数
   *
   * @requires `'launchApp'`
   */
  appParameter?: string;

  /**
   * 指定返回用户信息的语言
   *
   * @requires `'getUserInfo'`
   *
   * `zh_CN` 简体中文
   *
   * `zh_TW` 繁体中文
   *
   * `en` 英文
   *
   * @default 'en'
   */
  lang?: 'zh_CN' | 'zh_TW' | 'en';

  /**
   * 会话来源
   *
   * @requires `'contact'`
   */
  sessionFrom?: string;

  /**
   * 客服消息子商户 `id`
   *
   * @requires `'contact'`
   */
  businessId?: number;

  /**
   * 会话内消息卡片标题
   *
   * @requires `'contact'`
   *
   * @default 当前标题
   */
  sendMessageTitle?: string;

  /**
   * 会话内消息卡片点击跳转小程序路径
   *
   * @requires `'contact'`
   *
   * @default 当前分享路径
   */
  sendMessagePath?: string;

  /**
   * sendMessageImg
   *
   * @requires `'contact'`
   *
   * @default '截图'
   */
  sendMessageImg?: string;

  /**
   * 显示会话内消息卡片
   *
   * @requires `'contact'`
   *
   * @default false
   */
  showMessageCard?: string;
}

export interface SmartOpenTypeCamelCaseProps {
  appParameter?: SmartOpenTypeProps['appParameter'];
  lang?: SmartOpenTypeProps['lang'];
  sessionFrom?: SmartOpenTypeProps['sessionFrom'];
  businessId?: SmartOpenTypeProps['businessId'];
  sendMessageTitle?: SmartOpenTypeProps['sendMessageTitle'];
  sendMessagePath?: SmartOpenTypeProps['sendMessagePath'];
  sendMessageImg?: SmartOpenTypeProps['sendMessageImg'];
  showMessageCard?: SmartOpenTypeProps['showMessageCard'];
}

export interface SmartOpenTypeEvents {
  /**
   * 用户点击该按钮时，会返回获取到的用户信息，
   * 从返回参数的`detail`中获取到的值同`wx.getUserInfo`
   *
   * @platform WeChat only
   */
  onGetuserinfo?: (event: WechatMiniprogram.ButtonGetUserInfo) => void;

  /**
   * 客服消息回调
   *
   * @platform WeChat only
   */
  onContact?: (event: WechatMiniprogram.ButtonContact) => void;
  /**
   * 获取用户手机号回调
   *
   * @platform WeChat only
   */
  onGetphonenumber?: (event: WechatMiniprogram.ButtonGetPhoneNumber) => void;

  /**
   * 当使用开放能力时，发生错误的回调
   *
   * @platform WeChat only
   */
  onError?: (event: WechatMiniprogram.ButtonError) => void;

  /**
   * 在打开授权设置页后回调
   *
   * @platform WeChat only
   */
  onOpensetting?: (event: WechatMiniprogram.ButtonOpenSetting) => void;

  /**
   * 打开 APP 成功的回调
   *
   * `openType="launchApp"`时有效
   *
   * @platform WeChat only
   */
  onLaunchapp?: (event: WechatMiniprogram.ButtonLaunchApp) => void;
}
