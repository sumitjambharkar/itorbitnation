import config from "@/config"

export async function generateMetadata({ params }) {
    const id = params.id
   
    const result = await fetch(`${config}/api/resume/${id}`)
    const data = await result.json()
    return {
      title: data.seoTitle,
      description: data.seoDescription,
      date:data.createdAt,
      author:"sumkesh jambharkar"
      
    }
  }
   

  
export default function Layout ({children}) {
  return <>{children}</>
}