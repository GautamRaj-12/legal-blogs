// Post.tsx
interface PostProps {
  imgsrc: string;
  category: string;
  blogTitle: string;
  date: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { imgsrc, blogTitle, date } = props;

  return (
    <div className='mb-2'>
      <div className='h-[300px] max-w-[250px]'>
        <img src={imgsrc} alt='' className='h-[100%] w-[100%]' />
      </div>
      <p className='category text-[#ce8460] uppercase font-[Lora] tracking-[1px]'>
        Law
      </p>
      <p className='blog-title font-[Unna] text-2xl font-semibold'>
        {blogTitle}
      </p>
      <p className='date tracking-[3px] text-slate-400'>{date}</p>
    </div>
  );
};

export default Post;
