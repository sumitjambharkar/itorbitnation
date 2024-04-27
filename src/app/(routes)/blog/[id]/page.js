import config from "@/config";


const page = async({params}) => {
   console.log(params.id,"ass");
  const res = await fetch(`${config}/api/blog/${params.id}`,{
    cache:'no-cache'
  })

  const blog = await res.json()
 

  return (
    <section className="hero-section">
    <div className="container">
      <div className="hero-content">
      <h1 className="hero-title">{blog.name}</h1>
         <div className="img_box">
         <img  src={blog.image}  className="hero-image"/>
         </div>
        <div className="text-content">
        
          <div
            dangerouslySetInnerHTML={{
            __html:blog.content,
          }}
          ></div>
        </div>
      </div>
    </div>
  </section>
  )
}


export default page



