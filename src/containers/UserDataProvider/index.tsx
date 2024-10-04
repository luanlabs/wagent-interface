'use client';

import CLoading from '@/components/CLoading';
import { IApiRes, ISettingData, ITransaction } from '@/constants/types';
import { useAppSelector } from '@/hooks/useRedux';
import { UserDataProps } from '@/models';
import React from 'react';

const UserDataProvider = (props: { child: React.ComponentType<UserDataProps> }) => {
  const user = useAppSelector((state) => state.userApi.queries['getUser(undefined)']);
  const txs = useAppSelector((state) => state.userApi.queries['getTransactions(undefined)']);

  const isTxsPending = !txs || txs.status === 'pending';
  const isUserPending = !user || user.status === 'pending';

  const userData = user?.data as IApiRes<ISettingData>;
  const txsData = txs?.data as IApiRes<ITransaction[]>;

  const isTxsHasValue = txsData?.result;
  const isUserHasValue = userData?.result;

  if ((isUserPending || isTxsPending) && (!isTxsHasValue || !isUserHasValue)) {
    return <CLoading />;
  }

  return (
    <props.child user={userData.result as ISettingData} txs={txsData.result as ITransaction[]} />
  );
};

export default UserDataProvider;
