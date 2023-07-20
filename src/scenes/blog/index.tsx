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
  },
  {
    id: 2,
    title: 'Hunt for Treasure',
    cover: '/challenge5.jpg',
    description:
      'Huddle up with the team as they brainstorm solutions together, unlocking uncharted territories of creative thinking.',
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
