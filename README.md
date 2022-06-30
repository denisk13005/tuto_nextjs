#NextJS tuto grafikart
## installation
`npx create-next-app`

### Lancement 
`npm run dev` sur localhost:3000 en mode dev
`npm run start` en mode prod après un build 

### build
`npm run build`
construit les ressources et choisi le rendu approprié en fonction du code

#### rendu client 
génère les fichiers html pour un rendu immédiat lors de la connection au site et un meilleur réferencement SEO
#### rendu ssr
fait appel au server a chaque rendu (plus long), nécessite du node et est plus complexe à héberger
#### rendu hybride
rendu client qui sera rafraichi toutes les x secondes (choisi par le dev) permet de combiner les avantages des 2 méthodes précédentes

#### on peut mixer les 3 méthodes dans un même site au choix 

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

Pour que la naviguation soit rapide il faut build le projet afin de générer les pages html statiques créer le dossier out avec 
`npx next export`
pour pouvoir l'héberger sur githubPage par ex !

!!Tout ceci concerne le rendu statique, si le site change souvent on utilisera un rendu coté serveur SSR !!

# SSR 

pour faire du ssr il faut remplacer les fonction getStaticProps par getServerSideProps ce mode de rendu effectue un appel server à chaque rendu, cela est utile si votre site contient des données qui changent souvent mais est moins rapide qu'un rendu client et utilise nodeJs ce qui rend l'hébergement plus difficile 









