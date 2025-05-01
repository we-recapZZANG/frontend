type CardWrapperProps = {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CardWrapper = ({
  size = 'medium',
  children,
  onClick,
}: CardWrapperProps) => {
  const sizeClasses = {
    small: 'w-[80px] h-[80px] p-2 rounded-2xl flex items-center',
    medium: 'w-[155px] h-[120px] p-4 rounded-2xl',
    large: 'w-full  p-6 rounded-2xl',
  };

  return (
    <div
      style={{
        boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
      }}
      className={`gap-4 bg-white border border-gray-100 ${sizeClasses[size]} flex flex-col cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
