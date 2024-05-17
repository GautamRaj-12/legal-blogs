import Card from "../Card/Card";

const Posts = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-headerTwo text-dark mt-4 text-center border-b-primary border-b-4 pb-1 italic">
          Posts
        </h2>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <Card
          postImg={
            "https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          postTitle={"Title goes here"}
          postDesc={"Description Goes here"}
          postDate={"time goes here"}
        />
        <Card
          postImg={
            "https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          postTitle={"Title goes here"}
          postDesc={"Description Goes here"}
          postDate={"time goes here"}
        />
        <Card
          postImg={
            "https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          postTitle={"Title goes here"}
          postDesc={"Description Goes here"}
          postDate={"time goes here"}
        />
        <Card
          postImg={
            "https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          postTitle={"Title goes here"}
          postDesc={"Description Goes here"}
          postDate={"time goes here"}
        />
      </div>
      <button className="text-buttonText uppercase font-roboto py-3 px-6 mt-2 rounded-full bg-secondary flex mx-auto">
        Browse More
      </button>
    </>
  );
};

export default Posts;
