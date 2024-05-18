const SingleBlog = () => {
  const date = new Date();
  return (
    <>
      <section className="mt-4 mx-auto w-[60%]">
        <div className="w-full h-[30rem]">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1701086170584/dc9c64ff-4314-421c-ab21-dd6ce38fb8bb.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="blog post cover image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-dark text-headerTwo text-center mt-4 ">
          Object.keys(), Object.values() and Object.entries() - in Depth
        </h1>
        <div className="text-subtitle text-grey flex justify-center mt-10 uppercase gap-6">
          <p>Gautam Raj</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
        <div className="mt-10 text-[#333333] text-paraTwo">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            cupiditate hic, voluptatibus pariatur quidem rerum sunt. Repudiandae
            excepturi asperiores repellendus nesciunt ratione deserunt,
            reprehenderit labore ut? Reprehenderit natus, magnam asperiores,
            ipsum molestiae incidunt necessitatibus veritatis quaerat voluptatum
            explicabo assumenda, voluptates nam autem! Aliquid nobis quibusdam
            et, repellendus reprehenderit a enim aut ab corporis corrupti
            tempore cupiditate. Explicabo officia nostrum voluptas doloribus
            perspiciatis dignissimos, aspernatur nihil eos, adipisci alias
            quidem ex aliquam odit vero? Fugiat, harum. Ex illo numquam sit
            eligendi repellendus perferendis alias, nesciunt ea quibusdam vero
            architecto harum magnam consectetur. Aliquid itaque recusandae,
            nihil autem eligendi tempore saepe similique eaque, quos odit quia
            ipsa distinctio doloribus. Autem praesentium voluptatem molestiae,
            voluptas quam temporibus eligendi ipsum, velit harum amet odio
          </p>
          <br />
          <p>
            repellendus saepe, minima eos omnis. Maxime eligendi, perferendis
            molestias culpa, optio sit eaque ex exercitationem illo quod
            reiciendis hic quam sed, sunt vero eos facilis aspernatur? Fugit
            praesentium molestias laudantium qui magnam soluta, dolore ut
            eveniet culpa placeat distinctio repellat nulla non amet? Quo
            suscipit temporibus distinctio aspernatur dolorum voluptatibus.
            Sapiente, id totam eum vel dolore fugiat neque doloremque ipsam, aut
            omnis, autem voluptatum saepe. Nostrum laborum ratione optio,
            architecto qui illum officia corrupti voluptas veritatis nemo ad
            quisquam explicabo magnam ipsum earum tenetur nisi labore
            voluptatibus? Natus quis veritatis est, dolor sequi numquam officia
            ipsam perspiciatis fugit voluptas sunt praesentium dolorem, nulla
            sit quasi molestias. Recusandae, odit quibusdam odio consequatur
            assumenda quisquam cum officia deleniti est corrupti in velit
            repellat! Aliquam deleniti, officiis rem iste quod debitis
            consequatur omnis nulla ipsam ratione ipsum pariatur assumenda
            provident in laborum cupiditate sunt sed quibusdam dolorum! Vitae
            iure quod accusantium cumque dolorum officiis id quasi veniam odio
            suscipit praesentium, minus tempore rem iusto. Tempore, iste porro.
            Officia molestiae non, numquam pariatur, nobis sit laboriosam sint
            dolorum corporis illum possimus recusandae! Et enim possimus eius?
            Modi, repellat praesentium illo consequatur autem quis, fugit atque
            soluta quibusdam officia quos harum ex libero odit nesciunt dolorem
            nobis quisquam. In repellendus sapiente inventore, maiores
            praesentium eaque provident corporis recusandae eius ratione nisi ut
            quis alias eligendi autem, amet obcaecati! Magni asperiores dolorem
            animi id nostrum, soluta voluptatum, amet sunt accusantium
            praesentium aperiam neque eaque quia iusto vitae accusamus fugiat
            fuga nam ut velit ea, officia impedit cupiditate? Ad deserunt modi
            veniam sequi, est culpa quo magni illo. Facere nobis optio eum totam
            porro aliquid odit autem, beatae modi, obcaecati corrupti maxime.
            Tempora aliquam eaque molestias perferendis? Totam delectus, debitis
            animi dolores rem dolore iure nobis fugiat rerum saepe sint, nihil
            nemo nesciunt expedita perferendis, tempore esse veritatis error.
            Quam, voluptatibus nostrum? Tenetur, corporis? Earum necessitatibus
            eaque ea nobis temporibus esse dolorum rem impedit facere
          </p>
          <br />
          laboriosam, atque animi quidem nam debitis sunt optio expedita aliquam
          quibusdam magni voluptatem. Laboriosam minima molestias blanditiis
          quis similique fugit placeat culpa expedita possimus, odio voluptatem
          labore perspiciatis ab quod, explicabo nihil minus facere ipsum
          consequatur reprehenderit voluptate. Fugit quos mollitia minus
          deserunt amet consectetur incidunt veniam, ullam nam odit natus nulla
          ipsa vero maxime. Ipsam dignissimos voluptatem debitis et maiores
          modi, suscipit voluptatum deleniti. Sunt nulla perferendis laborum ex,
          deleniti nam nesciunt nemo temporibus, voluptate quas unde magnam
          doloribus! Perferendis consequuntur nobis quia magnam, facilis
          reprehenderit delectus alias eum quam fugiat dolorem maiores
          dignissimos dicta suscipit voluptatibus vel ullam incidunt libero,
          deserunt tempore iure? Tenetur nihil sed dolores
          <br />
          <p>
            provident fugiat porro, doloremque dolorum exercitationem laborum
            iure soluta maiores magni eligendi explicabo, esse sint aspernatur
            quae, magnam ullam unde harum quasi minus iste odit! Maxime earum
            omnis ex veritatis eum at velit tempore nulla, corporis tenetur iure
            porro nam assumenda ut enim fugiat itaque ipsum totam quasi ducimus
            eaque esse cumque. Earum.
          </p>
        </div>
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
