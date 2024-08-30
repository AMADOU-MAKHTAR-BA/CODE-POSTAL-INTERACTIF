
var div = document.createElement('div');
      div.id = 'div';
  div.style.margin = '10px 0 0 0'
document.body.appendChild(div);


const cp = document.querySelector('#cp');

cp.addEventListener('input', function(){
  if (this.value.length == 5) {
    let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre` ;

fetch(url).then(response=>response.json()
.then(données => {
  console.log(données);
     
     let affichage = '<ul>';
        
 for(let donnée of données){
   affichage += `<li><strong>${donnée.nom}</strong>  - ${donnée.population} habitants</li>`
 }
        affichage +='</ul>'
  div.innerHTML = affichage;
      })).catch(erreur =>
  div.innerHTML = 'VEILLEZ S\'IL VOUS PLAÎT VÉRIFIER VOTRE CONNEXION INTERNET' 
      )
      
    
  }
  else{
    div.innerHTML = '';
  }
});

   // console.log('76370');

 
   

