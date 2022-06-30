#NextJS tuto grafikart
## installation
`npx create-next-app`

### Lancement 
`npm run dev` sur localhost:3000

### build
`npm run build`
construit les ressources et choisi le rendu approprié en fonction du code

### export 
`npx next export`  
 génère un dossier out et construit les fichiers html pour le rendu 

les routes se générent en fonctions des dossiers et des fichiers placés dans le dossier pages 

### getStaticProps()

permet de générer des props à passer au composant <br/>
```
export async function getStaticProps() {
  const posts = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json())
  return {
    props:{
      posts
    }
  }
}
```

### getStaticPaths()

permet de générer des paths en fonction des id par exemple <br/>

// va construire toutes les urls possible en fonction du nombre d'article <br/>
```
export async function getStaticPaths() {
  const posts = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=4`).then(r=>r.json())
  return {
    paths : posts.map(post => ({
      params : {id: post.id.toString()}// mettre to string pour éviter une erreur 
    })),
    fallback : false

  }
```
### Link 
la balise link de 'next/link permet de naviguer entre les pages,c'est elle qui contient le href vers lequel elle pointe,  elle doit avoir en enfant direct la balise <a> '

### !! info !!! ###

Pour que la naviguation soit rapide il faut build le projet afin de générer les pages html statiques créer le dossier out avec ` npx next export ` pour pouvoir l'héberger sur githubPage par ex !





