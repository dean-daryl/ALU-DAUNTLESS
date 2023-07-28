/* eslint-disable no-irregular-whitespace */
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
  const handleClick = (content: string) => {
    const section = document.getElementById(`${content}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const description = 'text-secondary-400 font-instrument text-[20px] ';
  return (
    <div>
      {/* NAVBAR */}
      <div className="bg-primary-100  flex flex-col">
        <div>
          <ul className="flex justify-center font-instrument pt-[80px] gap-[440px] xs:gap-[50px] sm:gap-[200px]">
            <li
              className="cursor-pointer"
              onClick={() => {
                handleClick('blogs');
              }}
            >
              Blogs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                handleClick('challenges');
              }}
            >
              Challenges
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                handleClick('our_team');
              }}
            >
              Our Team
            </li>
          </ul>
        </div>
        <div className="flex">
          <p className="mx-auto pb-[70px] text-[140px] xs:text-[40px] sm:text-[90px]">
            DAUNTLESS
          </p>
        </div>
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
      <div id="blogs">
        <Blogs />
      </div>
      {/* CHALLENGES */}
      <div id="challenges">
        <Challenges />
      </div>
      {/* MEET THE TEAM */}
      <div id="our_team">
        <Members />
      </div>
      {/* CONCLUSION */}
      <motion.div
        className="text flex xs:block sm:block "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className=" py-10 px-10 ml-10 w-fit-content xs:ml-5 xs:px-2 ">
          <p className="text-white py-5 text-[40px] xs:ml-0 xs:text-[30px]">
            Are You Ready for Adventure?
          </p>
          <p className="text-blue-20 font-instrument w-[500px] xs:w-[300px] ">
            Are you ready to embark on an awe-inspiring journey like no other?
            Welcome to THE DAUNTLESS’ E-Lab odyssey, where five remarkable
            students have faced mind-blowing challenges and unforgettable
            experiences. From deciphering enigmatic puzzles to engineering
            awe-inspiring creations, these E-Lab crusaders know no bounds in
            achieving their goals.
          </p>
          <p className="text-blue-20 font-instrument w-[500px]  mt-5 xs:w-[300px]">
            Like legendary past explorers, THE DAUNTLESS embraces the spirit of
            adventure, daring to push their limits and surpass expectations.
            Each student brings unique skills and insights to tackle the
            challenges, creating a melting pot of cutting-edge strategies and
            solutions.
          </p>
          <p className="text-blue-20 font-instrument w-[500px]  xs:w-[300px]">
            <br />
            Join us, fellow adventurists, as we immerse ourselves in THE
            DAUNTLESS’ E-Lab Journey. Get amazed, inspired, and thoroughly
            entertained by their marvellous exploits. Hold on tight, for the
            adventure of a lifetime awaits!
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nfs6wAL1zL0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-[500px] h-[300px]  relative top-[150px] xs:w-screen xs:px-5 xs:top-0 sm:px-8 sm:top-0 sm:ml-12 "
        ></iframe>
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
