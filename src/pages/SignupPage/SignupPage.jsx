// import { UserForm1 } from 'components/UserForm/UserForm';
import { UserForm1 } from 'components/UserForm/UserForm';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom';
import { signup, signin } from 'redux/user/authOperations';
import { selectIsLogin } from 'redux/user/authSelectors';

const SignupPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  console.log('isLoagin', isLogin);

  if (isLogin) return <Navigate to="/main" />;

  // const res = {
  //   incomes: {
  //     total: 12000,
  //     incomesData: {
  //       'З/П': {
  //         total: 12000,
  //         Аванс: 5000,
  //         Основная: 7000,
  //       },
  //     },
  //   },
  //   expenses: {
  //     total: 5200,
  //     incomesData: {
  //       Транспорт: {
  //         total: 4000,
  //         СТО: 3500,
  //         Мойка: 500,
  //       },
  //       'Всё для дома': {
  //         total: 1200,
  //         Вазон: 150,
  //         'Шкаф-купе': 1050,
  //       },
  //     },
  //   },
  // };

  // const incomes = Object.entries(res.incomes.incomesData);
  // const expences = Object.entries(res.expenses.incomesData);

  // const inc = incomes.map(item => (
  //   <li>
  //     <b>{item[0]}</b>
  //     <p>{item[1].total}</p>
  //   </li>
  // ));

  // const exp = expences.map(item => (
  //   <li>
  //     <b>{item[0]}</b>
  //     <p>{item[1].total}</p>
  //   </li>
  // ));

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  const handleSubmitLogin = data => {
    dispatch(signin(data));
  };

  return (
    <>
      <UserForm1
        onSubmitHandler={handleSubmit}
        onSubmitLoginHandler={handleSubmitLogin}
      />
      {/* <ul>{inc}</ul>
      <ul>{exp}</ul> */}
    </>
  );
};

export default SignupPage;
