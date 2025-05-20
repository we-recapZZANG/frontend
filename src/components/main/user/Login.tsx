import { useNavigate } from 'react-router-dom';
import CardWrapper from '../../common/card/Card';
import { useForm } from 'react-hook-form';
import TextField from '../../common/textField/TextField';
import { authenticatedApi, publicApi } from '../../../api/base';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await authenticatedApi.post('/api/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data.name));
        console.log(JSON.stringify(response.data.name));

        alert('로그인 성공!');

        navigate('/');
      }
    } catch (err: any) {
      const errorData = err?.response?.data;

      if (errorData?.code === 'MEMBER_ID_NOT_FOUND') {
        alert('올바르지 않은 아이디입니다.');
      } else {
        alert('로그인에 실패했습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full flex items-center justify-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <img
          src="/icon/sleepMoon.png"
          width={50}
          height={50}
          alt="sleepMoon-next-title"
        />
        <h2 className="text-2xl " style={{ color: '#5a5a5a' }}>
          혼자서도, 잘자요
        </h2>
      </div>

      <CardWrapper size="large">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            id="email"
            register={register('email', {
              required: '이메일는 필수 입력 사항입니다.',
            })}
            placeholder="이메일을 입력하세요"
            label="이메일"
            error={errors.email?.message}
            isDisabled={isSubmitting}
            isRequired
          />

          <TextField
            id="password"
            register={register('password', {
              required: '비밀번호는 필수 입력 사항입니다.',
            })}
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
            error={errors.password?.message}
            isDisabled={isSubmitting}
            isRequired
          />

          <div>
            <button
              type="submit"
              className="w-full h-[50px] bg-pink-400  text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
              disabled={isSubmitting}
            >
              로그인
            </button>
          </div>
        </form>
      </CardWrapper>

      <button
        className="text-stone-500"
        onClick={() => {
          navigate('/user/signup');
        }}
      >
        아직 회원이 아니신가요?
      </button>
    </div>
  );
};

export default Login;
