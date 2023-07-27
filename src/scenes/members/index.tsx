import Member from './member';
import { MemberType } from '../../shared/types';

type Props = {};
const members: Array<MemberType> = [
  {
    name: 'Ireymika Edun',
    description: 'Team lead and Content Creator',
    picture: '/ireymika.jpg',
  },
  {
    name: 'Dean Daryl MURENZI',
    description: 'Tech and Design lead',
    picture: '/dean.jpg',
  },
  {
    name: 'Inema Rita',
    description: 'Translator and Team Lead Assistant ',
    picture: '/rita.jpg',
  },

  {
    name: 'Nicholas Eke',
    description: 'Content Writer',
    picture: '/nicholas.jpg',
  },
  {
    name: 'Benjamin Kagiraneza',
    description: 'Photographer',
    picture: '/ben.jpg',
  },
];
function Members({}: Props) {
  return (
    <div className="bg-primary-300">
      {/* TITLE */}
      <h3 className="text-secondary-400 text-[40px] ml-20">Meet the Team</h3>
      {/* TEAM MEMBERS LIST */}
      <div className=" mx-2 my-10 h-[480px] overflow-x-auto overflow-y-hidden xs:mx-0 ">
        <ul className=" p-10 w-[1500px] whitespace-nowrap xs:p-0">
          {members.map((member: MemberType) => (
            <Member
              name={member.name}
              description={member.description}
              picture={member.picture}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Members;
