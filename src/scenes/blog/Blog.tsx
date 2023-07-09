import { motion } from 'framer-motion';

type Props = {
  title: string;
  cover: string;
  description: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
function Blog({ title, cover, description }: Props) {
  return (
    <motion.div variants={childVariant} className=" ">
      {/* BLOG CARD */}
      <div>
        {/*  COVER IMAGE */}
        <div>
          <img src={cover} alt="" className=" w-1/1 h-[490px] aspect-square " />
        </div>
        {/* TITLE */}
        <div>
          <p className="text-blue-20 font-instrument mt-5 mb-2">{title}</p>
        </div>
        {/* DESCRIPTION */}
        <div>
          <p className="text-secondary-400 font-instrument text-[12px] w-[300px] mb-5 xs:mb-8">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
