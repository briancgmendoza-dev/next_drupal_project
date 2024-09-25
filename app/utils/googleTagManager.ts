import TagManager from "react-gtm-module"

type TCommonMoEngageProps = {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
}

type TOnCustomTagProps = TCommonMoEngageProps & {
  custom_attribute: string;
}

export const TagManagerService = {
  initialize: () => {
    TagManager.initialize({ gtmId: process.env.GTM_CONTAINER_ID as string })
  },
  onLogin: ({ user_id, username, first_name, last_name }: TCommonMoEngageProps) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'onLogin',
        user_id,
        username,
        first_name,
        last_name
      }
    })
  },
  onCustomTag: ({ user_id, custom_attribute }: TOnCustomTagProps) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'onCustomTag',
        user_id,
        custom_attribute
      }
    })
  }
}
