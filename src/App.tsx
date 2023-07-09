import Blogs from './scenes/blog';
import Challenges from './scenes/challenges';
import Members from './scenes/members';
import { motion } from 'framer-motion';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg';

type Props = {};

function App({}: Props) {
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/thedauntless2023/', '_blank');
  };
  const handleYoutubeClick = () => {
    window.open(
      'https://www.youtube.com/@TheDauntless-elabalu/featured',
      '_blank',
    );
  };
  const description = 'text-secondary-400 font-instrument text-[20px] ';
  return (
    <div>
      {/* NAVBAR */}
      <div className=" bg-primary-100 flex">
        <p className="mx-auto py-[70px] text-[140px] ">DAUNTLESS</p>
      </div>

      {/* JOURNEY */}

      {/* INTRO */}
      <div className="bg-black w-full px-20 py-[70px] xs:px-5">
        {/* TITLE */}
        <div>
          <h2 className="text-secondary-400 text-[45px] xs:text-[40px]">
            Embarking on the E-lab
            <br />
            Adventure
          </h2>
        </div>
        {/* CONTENT */}
        <div className="flex mt-10 gap-7 xs:block">
          <p className={description}>
            Welcome to THE DAUNTLESS’ E-Lab Portfolio, where a group of five
            audacious students takes on the challenges presented by the E-Lab
            Course. Dive into their action-packed journey, as they conquer each
            task with their unique skills, wit, and teamwork.
          </p>
          <p className={description}>
            E-Lab is a one-of-a-kind experience that pushes the limits of
            creativity, innovation, and hands-on learning. The seven challenges
            tackled by THE DAUNTLESS represent a true testament to their
            analytical prowess and problem-solving abilities. Witness the
            chronicles of their quest, unfolding one challenge at a time.
          </p>
        </div>
      </div>
      {/* BLOGS */}
      <div>
        <Blogs />
      </div>
      {/* CHALLENGES */}
      <div>
        <Challenges />
      </div>
      {/* MEET THE TEAM */}
      <div>
        <Members />
      </div>
      {/* CONCLUSION */}
      <motion.div
        className="text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-white  ml-10 px-10 text-[40px] xs:ml-0 xs:text-[30px]">
          Are You Ready for Adventure?
        </p>
        <div className=" py-10 px-10 ml-10 w-fit-content xs:ml-5 xs:px-2 ">
          <p className="text-blue-20 font-instrument w-[500px] xs:w-[300px] ">
            Dive headfirst into THE DAUNTLESS’ epic journey and discover the
            mind-blowing challenges and unforgettable experiences these five
            students have faced. From decoding enigmatic puzzles to engineering
            awe-inspiring creations, these E-Lab crusaders know no bounds in
            achieving their goals.
          </p>
          <p className="text-blue-20 font-instrument w-[500px]  mt-8 xs:w-[300px]">
            Just like the legendary explorers of the past, THE DAUNTLESS
            embraces the spirit of adventure, daring to push their limits and
            surpass expectations. Each student brings their unique skills and
            insights to tackle the challenges, creating a melting pot of
            cutting-edge strategies and solutions.
          </p>
          <p className="text-blue-20 font-instrument w-[500px] mt-5 xs:w-[300px]">
            <br />
            So join us, fellow adventurists, as we embark on THE DAUNTLESS’
            E-Lab Journey. We guarantee that their marvelous exploits will
            astound, inspire, and above all, entertain you to no end. Hold on
            tight, for the adventure of a lifetime awaits!
          </p>
        </div>
      </motion.div>
      {/* FOOTER */}
      <div className="my-5">
        {/* ICONS */}
        <div className="flex mt-5 justify-center">
          <img
            className="w-[50px] cursor-pointer"
            src={instagram}
            alt=""
            onClick={handleInstaClick}
          />
          <img
            className="mt-1 cursor-pointer"
            src={youtube}
            alt=""
            onClick={handleYoutubeClick}
          />
        </div>
        {/* COPYRIGHT */}
        <div className=" flex justify-center">
          <p className="text-white text-[10px] font-instrument ">
            © 2023 THE DAUNTLESS - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
