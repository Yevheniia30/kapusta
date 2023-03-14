import { instance } from './userApi';

export const getExpense = async () => {
  const { data } = await instance.get('/transaction/expense');
  return data;
};
export const getIncome = async () => {
  const { data } = await instance.get('/transaction/income');
  return data;
};
export const postExpense = async () => {};
export const postIncome = async () => {};
export const removeTransaction = async () => {};
export const getExpenseCtgr = async () => {};
export const getIncomeCtgr = async () => {};
export const getTransactionsForPeriod = async () => {};
