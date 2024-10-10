'use client';

import React from 'react';
import { UserDataProps } from '@/models';
import CLoading from '@/components/CLoading';
import { useAppSelector } from '@/hooks/useRedux';
import { IApiRes, IUserInfo, ITransaction } from '@/constants/types';

const UserDataProvider = (props: { child: React.ComponentType<UserDataProps> }) => {
  const user = useAppSelector((state) => state.userApi.queries['getUser(undefined)']);
  const txs = useAppSelector((state) => state.userApi.queries['getTransactions(undefined)']);

  const isTxsPending = !txs || txs.status === 'pending';
  const isUserPending = !user || user.status === 'pending';

  const userData = user?.data as IApiRes<IUserInfo>;
  const txsData = txs?.data as IApiRes<ITransaction[]>;

  const isTxsHasValue = txsData?.result;
  const isUserHasValue = userData?.result;

  if ((isUserPending || isTxsPending) && (!isTxsHasValue || !isUserHasValue)) {
    return <CLoading />;
  }

  return <props.child user={userData.result as IUserInfo} txs={txsData.result as ITransaction[]} />;
};

export default UserDataProvider;
