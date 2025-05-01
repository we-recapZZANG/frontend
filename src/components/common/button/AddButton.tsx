import { useNavigate } from 'react-router-dom';

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-end pr-2">
      <button
        onClick={() => {
          navigate('/add');
        }}
      >
        <img src="/icon/addButton.svg" width={15} height={15} />
      </button>
    </div>
  );
};

export default AddButton;
