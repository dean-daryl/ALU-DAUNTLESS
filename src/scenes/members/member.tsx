
type Props = {
  name: string;
  description?: string;
  picture: string;
  handle: string;
};

const Member = ({ name, description, picture, handle }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[400px] w-[400px] flex-col items-center justify-center
  whitespace-normal bg-secondary-400 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90 `;
  const handleClick = (handle: string) => {
    window.open(`https://www.instagram.com/${handle}/`);
  };
  return (
    <li className=" relative mx-5 inline-block h-[400px] w-[400px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>

        <p className="mt-5 cursor-pointer" onClick={()=>handleClick(handle)}>
          @{handle}
        </p>
      </div>
      <img
        className="w-[400px] h-[400px] object-cover"
        alt={`${picture}`}
        src={picture}
      />
    </li>
  );
};

export default Member;
