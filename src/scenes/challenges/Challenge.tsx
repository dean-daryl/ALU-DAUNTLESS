import React from 'react'

type Props = {
    name:string;
    date:string;
    grade:number;
}

function Challenge({name,date,grade}: Props) {
    const challengeText = 'font-instrument text-[20px] xs:text-[10px]';
  return (
    <div className="flex space-x-[20px] pb-2 my-5 border-b-[0.1px] border-gray-100 xs:space-x-[0px] xs:px-2">
      {/* DATE */}
      <div>
        <p className={`${challengeText} text-red-20 w-[200px] xs:w-[100px]`}>{date}</p>
      </div>
      {/* NAME */}
      <div>
        <p className={`${challengeText} text-secondary-400 w-[400px] mr-[100px] sm:mr-0 xs:mr-10 xs:w-[120px]`}>
          {name}
        </p>
      </div>
      {/* GRADE */}
      <div className="border-b-1 ">
        <p className={`${challengeText} text-secondary-400 w-[200px] sm:w-[100px] xs:w-[10px]`}>
          {grade}
        </p>
      </div>
    </div>
  );
}

export default Challenge