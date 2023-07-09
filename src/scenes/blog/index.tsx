import { motion } from 'framer-motion';
import { BlogType } from '../../shared/types';
import Blog from './Blog';

const blogs: Array<BlogType> = [
  {
    title: 'ALUxpress',
    cover: 'public/challenge1.jpg',
    description:
      'Huddle up with the team as they brainstorm solutions together, unlocking uncharted territories of creative thinking.',
  },
  {
    title: 'Hunt for Treasure',
    cover: 'public/challenge5.JPG',
    description:
      'Huddle up with the team as they brainstorm solutions together, unlocking uncharted territories of creative thinking.',
  },
];

type Props = {};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const container = {
  hidden: {},
  visible: {
    transition: {duration:5.3, ease:"ease-in-out",staggerChildren: 0.2 },
  },
};
function Blogs({}: Props) {
  return (
    <div className="bg-black sm:px-10 py-10">
      {/* BLOG LIST */}
      <motion.div
        className="flex gap-6  justify-center mt-20 xs:block px-5 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay:0.2}}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {blogs.map((blog: BlogType) => (
          <Blog
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
