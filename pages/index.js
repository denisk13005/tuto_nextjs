import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts, date}) {
  // méthode avec react qui utilise un fetch normal

  // const [posts,setPosts] =useState([])
  // useEffect(() => {
  //   const datas = fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json()).then(setPosts)
    
  
    
  // }, [])
  return (
   <>
    <Head>
      <title>Mon super blog</title>
    </Head>
    <h1>{date}</h1>
    <ul>

      {posts.map(post=> <li key={post.id}>
        {/* balise link qui va s'occuper de la navigation  */}
        <Link href={`/blog/${post.id}`}> 
          <a>
             <h3>{post.id}--{post.title}</h3>
          </a>
        </Link>
      </li>)}
    </ul>
   </>
  )
}

//méthode avec next et getStaticProps : on va créer une fonction qui va faire le fetch et retourner un objet contenant les posts qu'on passera en props a la fonction Home Va générer des fichiers statiques rendu coté client
export async function getStaticProps() {
  const posts = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json())
  return {
    props:{
      posts,
      date : (new Date()).toString() // sert juste à voir le rendu ISR
    },
    revalidate:5, // recalculera le rendu de cette page toutes les 5 secondes
  }
}

// ******************SSR********************** 
//à utiliser uniquement si les données relatives au site change souvent, cette méthose nécessite du nodeJs, fait appel au server à chaque rendu et est plus complexe à héberger 

// export async function getServerSideProps() {
//   const posts = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json())
//   return {
//     props:{
//       posts
//     }
//   }
// }
