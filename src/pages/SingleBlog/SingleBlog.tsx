import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [postDate, setPostDate] = useState(new Date());

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/post/${id}`
        );
        console.log(res);
        setTitle(res?.data?.data?.title);
        setDesc(res?.data?.data?.desc);
        setPostImage(res?.data?.data?.coverImage);
        setOwner(res?.data?.data?.username);
        setPostDate(res?.data?.data?.createdAt);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  });
  return (
    <>
      <section className="mt-4 mx-auto w-[60%]">
        <div className="w-full h-[30rem]">
          <img src={postImage} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-dark text-headerTwo text-center mt-4 ">{title}</h1>
        <div className="text-subtitle text-grey flex justify-center mt-10 uppercase gap-6">
          <p>{owner}</p>
          <p>
            {new Date(postDate)?.toLocaleDateString("en-In", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div
          className="mt-10 text-[#333333] text-postText"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
        <div className="mt-4 flex gap-6">
          {/* Like svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#333333"
          >
            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
          </svg>
          {/* Comment svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#333333"
          >
            <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
          </svg>
          {/* Share svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#333333"
          >
            <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
