import { useForm } from 'react-hook-form';
import CardWrapper from '../../common/card/Card';
import { Checkbox } from '../../components/ui/checkbox';
import TextField from '../../common/textField/TextField';

const SignUp = () => {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: { userid: '', password: '', username: '' },
  });

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl " style={{ color: '#5a5a5a' }}>
          회원가입
        </h2>
        <p className="text-sm text-stone-500 mb-2">
          회원가입에 필요한 정보를 정확히 입력해주세요.
        </p>
      </div>

      <CardWrapper size="large">
        <form className="space-y-4">
          <TextField
            id="userid"
            register={register('userid', {
              required: '아이디는 필수 입력 사항입니다.',
              maxLength: {
                value: 20,
                message: '아이디는 20글자를 넘길 수 없습니다.',
              },
              minLength: {
                value: 6,
                message: '6~20글자의 영문자를 입력해주세요.(숫자 포함)',
              },
              validate: (value) =>
                !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(value) ||
                '아이디는 영어로 입력해주세요.',
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
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 20글자를 넘길 수 없습니다.',
              },
              validate: (value) =>
                !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(value) ||
                '비밀번호는 영어로 입력해주세요.',
            })}
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
            error={errors.password?.message}
            isDisabled={isSubmitting}
            isRequired
          />

          <TextField
            id="username"
            register={register('username', {
              required: '이름은 필수 입력 사항입니다.',
            })}
            placeholder="이름을 입력하세요"
            label="이름"
            error={errors.username?.message}
            isDisabled={isSubmitting}
            isRequired
          />

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-stone-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                [필수] 개인정보 수집 및 이용 동의
              </label>
            </div>
            <div>
              <button className="text-xs  text-stone-500 font-bold">
                전문보기
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full h-[50px] bg-pink-400  text-white py-2 px-4 rounded-xl hover:bg-pink-300 transition-colors duration-200"
            >
              회원 가입
            </button>
          </div>
        </form>
      </CardWrapper>
    </>
  );
};

export default SignUp;
