import { useNavigate } from 'react-router-dom';
import CardWrapper from '../../common/card/Card';
import { useForm } from 'react-hook-form';
import TextField from '../../common/textField/TextField';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: { userid: '', password: '', username: '' },
  });

  return (
    <div className="flex flex-col gap-3 w-full flex items-center justify-center ">
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
        <form className="space-y-4">
          <TextField
            id="userid"
            register={register('userid', {
              required: '아이디는 필수 입력 사항입니다.',
            })}
            placeholder="아이디를 입력하세요"
            label="아이디"
            error={errors.userid?.message}
            isDisabled={isSubmitting}
            isRequired={true}
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
