import request from '@/utils/request';

type requestProps = {
  fcmToken: string;
  data: {
    title: string;
    body: string;
  };
};

const sendClientFcmToken = async ({ fcmToken, data }: requestProps) => {
  await request('https://api2.wagent.app/services/send-notification', {
    method: 'POST',
    body: JSON.stringify({
      token: fcmToken,
      title: data.title,
      body: data.body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default sendClientFcmToken;
