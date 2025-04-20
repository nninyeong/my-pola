type UserEmailFieldProps = {
  email: string;
};

const UserEmailField = ({ email }: UserEmailFieldProps) => {
  return (
    <div className='flex flex-col gap-[7px] mb-[61px]'>
      <h3 className='font-semibold leading-[35px]'>이메일</h3>
      <p className='flex items-center w-full h-[46px] border border-neutral-300 rounded-[10px] text-neutral-400 pl-[16px]'>
        {email}
      </p>
    </div>
  );
};

export default UserEmailField;
