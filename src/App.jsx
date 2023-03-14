import { Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import ReportPage from 'pages/ReportPage';
import SignupPage from 'pages/SignupPage';
import Layout from 'components/Layout/Layout';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   // fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignupPage />} />
          <Route path="/main" element={<MainPage />} />

          <Route path="/report" element={<ReportPage />} />
        </Route>
      </Routes>
    </div>
  );
};
