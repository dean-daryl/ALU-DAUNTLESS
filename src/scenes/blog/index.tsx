import { motion } from 'framer-motion';
import { BlogType } from '../../shared/types';
import Blog from './Blog';
const blogs: Array<BlogType> = [
  {
    id: 1,
    title: 'ALUxpress',
    cover: '/challenge1.jpg',
    description:
      'Huddle up with the team as they brainstorm solutions together, unlocking uncharted territories of creative thinking.',
    content: ` Join the exciting adventure of the "Hunt for Treasure" with our innovative platform. With its captivating title and thrilling challenges, this is an opportunity for teams to come together and unleash their creativity.

  The "Hunt for Treasure" platform brings teams closer as they collaborate and brainstorm ideas. By encouraging team members to huddle up and engage in problem-solving, it unlocks uncharted territories of creative thinking. The power of collective intelligence enables the team to explore innovative solutions and overcome obstacles along the way.

  Our platform offers a visually appealing and user-friendly interface that immerses teams in the hunt for treasure. With the captivating cover image of the challenge, team members are inspired to dive into the adventure head-on.

  The "Hunt for Treasure" provides a space for teams to think outside the box and tackle challenges together. By fostering open communication and encouraging diverse perspectives, the platform creates an environment where breakthrough ideas can be discovered. Through collaborative brainstorming and exploration, teams can unravel hidden treasures of innovative solutions.

  Don't miss out on this exciting opportunity to embark on the "Hunt for Treasure." Unleash your team's potential and conquer the challenges that await. Together, let's dive into the depths of creativity and unlock the treasures of success.`,
  },
  {
    id: 2,
    title: 'Hunt for Treasure',
    cover: '/challenge5.jpg',
    description:
      'Huddle up with the team as they brainstorm solutions together, unlocking uncharted territories of creative thinking.',
    content: `  Join the exciting adventure of the "Hunt for Treasure" with our innovative platform. With its captivating title and thrilling challenges, this is an opportunity for teams to come together and unleash their creativity.

  The "Hunt for Treasure" platform brings teams closer as they collaborate and brainstorm ideas. By encouraging team members to huddle up and engage in problem-solving, it unlocks uncharted territories of creative thinking. The power of collective intelligence enables the team to explore innovative solutions and overcome obstacles along the way.

  Our platform offers a visually appealing and user-friendly interface that immerses teams in the hunt for treasure. With the captivating cover image of the challenge, team members are inspired to dive into the adventure head-on.

  The "Hunt for Treasure" provides a space for teams to think outside the box and tackle challenges together. By fostering open communication and encouraging diverse perspectives, the platform creates an environment where breakthrough ideas can be discovered. Through collaborative brainstorming and exploration, teams can unravel hidden treasures of innovative solutions.

  Don't miss out on this exciting opportunity to embark on the "Hunt for Treasure." Unleash your team's potential and conquer the challenges that await. Together, let's dive into the depths of creativity and unlock the treasures of success.`,
  },
];

type Props = {};

function Blogs({}: Props) {
  return (
    <div className="bg-black sm:px-10 py-10">
      {/* BLOG LIST */}
      <motion.div
        className="flex gap-6  justify-center mt-20 xs:block px-5 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {blogs.map((blog: BlogType) => (
          <Blog
            id={blog.id}
            title={blog.title}
            cover={blog.cover}
            description={blog.description}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Blogs;
