import { Context } from '@vue-storefront/core';
import changeCustomerAccountPassword from './defaultMutation';

const changePassword = async (
  context: Context,
  params: {
    accountId: number;
    unlockAccount: boolean;
    userId: string;
    passwordInfoInput: {
      oldPassword: string;
      newPassword: string;
    };
  }
): Promise<boolean> => {
  return await context.client.mutate({
    mutation: changeCustomerAccountPassword,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default changePassword;