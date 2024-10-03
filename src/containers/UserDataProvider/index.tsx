'use client';

import CLoading from '@/components/CLoading';
import { ISettingData, ITransaction } from '@/constants/types';
import { useAppSelector } from '@/hooks/useRedux';
import { UserDataProps } from '@/models';
import React from 'react';

const UserDataProvider = (props: { child: React.ComponentType<UserDataProps> }) => {
  let user = useAppSelector((state) => state.userApi.queries['getUser(undefined)']);
  let txs = useAppSelector((state) => state.userApi.queries['getTransactions(undefined)']);

  const isTxsPending = !txs || txs.status === 'pending';
  const isUserPending = !user || user.status === 'pending';

  const userData = user?.data as any;
  const txsData = txs?.data as any;

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
