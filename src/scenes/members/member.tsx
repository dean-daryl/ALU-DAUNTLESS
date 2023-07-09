type Props = {
  name: string;
  description?: string;
  picture: string;
};

const Member = ({ name, description, picture }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[400px] w-[400px] flex-col items-center justify-center
  whitespace-normal bg-secondary-400 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90 `;

  return (
    <li className="  relative mx-5 inline-block h-[400px] w-[400px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="w-[400px] h-[400px] " alt={`${picture}`} src={picture} />
    </li>
  );
};

export default Member;