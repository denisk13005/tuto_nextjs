import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
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

//méthode avec next et getStaticProps : on va créer une fonction qui va faire le fetch et retourner un objet contenant les posts qu'on passera en props a la fonction Home
export async function getStaticProps() {
  const posts = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json())
  return {
    props:{
      posts
    }
  }
}
