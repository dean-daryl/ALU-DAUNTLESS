import { ChallengeType } from '../../shared/types';
import { motion } from 'framer-motion';
import Challenge from './Challenge';

type Props = {};
const challenges: Array<ChallengeType> = [
  {
    name: 'Challenge 1: ALUxpress',
    date: 'Jun. 2, 2023',
    grade: "1050/1500",
  },

  {
    name: 'Challenge 2: Introduction',
    date: 'Jun. 14, 2023',
    grade: "1000/1000",
  },
  {
    name: 'Challenge 3: Discover Africa',
    date: 'Jun. 21, 2023',
    grade: "1500/1500",
  },
  {
    name: 'Challenge 4: HELP-LAB',
    date: 'Jun. 28, 2023',
    grade: "?/2000",
  },
  {
    name: 'Challenge 5: Hunt for Treasure',
    date: 'Jul. 4, 2023',
    grade: "?/2000",
  },
];
function Challenges({}: Props) {
  return (
    <div className="flex flex-row justify-center mt-20 xs:justify-start">
      {/* CHALLENGE LIST */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {challenges.map((challenge: ChallengeType) => (
          <Challenge
            name={challenge.name}
            date={challenge.date}
            grade={challenge.grade}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Challenges;
