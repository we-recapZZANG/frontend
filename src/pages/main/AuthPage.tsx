import { useParams } from 'react-router-dom';
import Login from '../../components/main/user/Login';
import SignUp from '../../components/main/user/SignUp';

const AuthPage = () => {
  const { mode } = useParams();

  console.log(mode);

  return (
    <div className="w-full flex align-items justify-center">
      <main className="relative w-full h-screen md:w-1/2 md:h-screen items-center justify-center bg-pink flex flex-col px-6 py-10">
        {mode === 'signup' ? <SignUp /> : <Login />}
      </main>
    </div>
  );
};

export default AuthPage;
