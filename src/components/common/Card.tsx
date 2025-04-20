type CardWrapperProps = {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const CardWrapper = ({ size = 'medium', children }: CardWrapperProps) => {
  const sizeClasses = {
    small: 'w-[80px] h-[80px] p-2 rounded-2xl flex items-center',
    medium: 'w-[155px] h-[120px] p-4 rounded-2xl',
    large: 'w-full h-[300px] p-6 rounded-2xl',
  };

  return (
    <div
      style={{
        boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.05)',
      }}
      className={`gap-4 bg-white border border-gray-100 ${sizeClasses[size]} flex flex-col cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
