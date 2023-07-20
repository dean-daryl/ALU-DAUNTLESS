import { Link, useParams } from 'react-router-dom';
import { BlogType } from '../../shared/types';

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

const SingleBlog = () => {
  const { id } = useParams();
  const idAsNumber = parseInt(id, 10);
  const formatContentAsParagraphs = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => <p className="font-instrument px-[100px] py-[5px]" key={index}>{paragraph}</p>);
  };
  return (
    <div>
      {/* NAVBAR */}
      <div className="bg-primary-500 h-10 w-screen">
        <Link to="/">
          <h4 className="text-black font-instrument pl-5 pt-2">Back</h4>
        </Link>
      </div>
      {blogs.map((blog: BlogType) => (
        <div key={blog.id} className="text-white flex justify-center">
          {blog.id === idAsNumber ? (
            <div className="">
              {/* COVER IMAGE */}
              <div className="py-3 flex justify-center ">
                <img
                  src={blog.cover}
                  alt="cover image"
                  className=" w-[1000px] h-[500px] aspect-square object-cover"
                />
              </div>
              {/* TITLE */}
              <div className="">
                <h1 className="text-blue-20 text-[45px] flex justify-center">
                  {blog.title}
                </h1>
              </div>

              <div className="text-secondary-400 px-10 py-8">
                {formatContentAsParagraphs(blog.content)}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SingleBlog;
