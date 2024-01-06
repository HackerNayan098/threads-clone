import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";

const Card = ({ post }: any) => {
  return (
    <div className="mx-auto w-full lg:p-6 p-4 bg-white text-black rounded-2xl ">
      <section className="flex items-start gap-4">
        <div className="rounded-full w-12 h-12 bg-blue-500"></div>
        <div>
          <div className="font-bold">{post.author.username}</div>
          <div>{post.text.slice(0, 24)}...</div>
        </div>
      </section>
      <div className="h-[480px] bg-gray-300 my-6 rounded-2xl"></div>
      <section className="flex gap-4 my-2">
        <IoMdHeartEmpty size={28} />
        <IoChatbubbleEllipsesOutline size={28} />
        <PiShareFatLight size={28} />
      </section>
    </div>
  );
};

export default Card;
