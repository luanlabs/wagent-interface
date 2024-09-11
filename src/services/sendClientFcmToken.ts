import request from '@/utils/request';

type requestProps = {
  fcmToken: string;
  data: {
    title: string;
    body: string;
  };
};

const sendClientFcmToken = async ({ fcmToken, data }: requestProps) => {
  await request('https://api.wagent.app/services/send-notification', {
    method: 'POST',
    body: {
      token: fcmToken,
      title: data.title,
      body: data.body,
    },
  });
};

export default sendClientFcmToken;
