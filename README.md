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

permet de générer des props à passer au composant
`export async function getStaticProps() {
  const posts = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=4").then(r=> r.json())
  return {
    props:{
      posts
    }
  }
}
`

### getStaticPaths()

permet de générer des paths en fonction des id par exemple 






