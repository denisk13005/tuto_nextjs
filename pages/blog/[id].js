const Post = ({post}) => {
  return <>
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  </>
}

export default Post

// va récupérer l'article correspondant par rapport a son id
export async function getStaticProps({params}){
  console.log({});
  const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`).then(r => r.json())
  return {
    props:{
      post
    }
  }
}

// va construire toutes les urls possible en fonction du nombre d'article
export async function getStaticPaths() {
  const posts = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=4`).then(r=>r.json())
  return {
    paths : posts.map(post => ({
      params : {id: post.id.toString()}// mettre to string pour éviter une erreur 
    })),
    fallback : false

  }
}
