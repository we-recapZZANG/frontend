import DetailLayout from '../../layout/DetailLayout';

const Consent = () => {
  return (
    <DetailLayout>
      <div className="text-stone-600 h-screen text-sm flex flex-col gap-2 bg-white border-none rounded-lg p-3 ">
        <h3 className=" text-[15px]  text-stone-600 font-semibold ">
          1. 수집 목적
        </h3>
        <ul>
          <li>① 회원 가입 및 관리</li>
          <li>
            ② 서비스 제공 (보호자 음성 송출, 홈캠 영상 분석, 콘텐츠 저장 등)
          </li>
          <li>
            ③ 보호자의 음성 데이터를 AI로 변환 하여 아동에게 송출하기 위한 음성
            녹음 수집
          </li>
        </ul>
        <h3 className=" mt-5 text-[15px] text-stone-600 font-semibold">
          2. 수집 항목
        </h3>
        <p>사용자 이름, 이메일(ID), 비밀번호</p>
        <p>
          보호자 음성(녹음된 동화책/편지 낭독 파일) 텍스트 콘텐츠, 영상 정보 등
        </p>
        <h3 className="mt-5 font-semibold  text-[15px] ">
          3. 보유 및 이용 기간
        </h3>
        회원 탈퇴 시까지
        <p>※ 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간까지 보관</p>
        <p className="font-semibold">
          민감정보(음성 녹음) 수집에 대한 별도 동의
        </p>
        <p>
          ‘혼자서도 잘 자요’는 보호자의 음성을 녹음하고, 이를 AI로 변환하여
          아동에게 송출하는 서비스를 제공합니다.
        </p>
        <p>
          이 과정에서 사용자의 음성은 녹음되어 서버에 저장 및 처리 되며, 정서적
          안정을 위한 목적으로만 사용됩니다.
        </p>
      </div>
    </DetailLayout>
  );
};

export default Consent;
