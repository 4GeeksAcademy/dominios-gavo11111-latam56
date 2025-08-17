//import "bootstrap";
//import "./style.css";


//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'greatest', 'magic'];
let noun = ['jogger', 'racoon', 'flash', 'batman'];
let domain = ['.com', '.net', '.us', '.io'];



for (let i = 0; i <= 3; i++) {
  let domainName = pronoun[i];
  for (let j = 0; j <= 3; j++) {
    let domainAdj = adj[j];
    for (let k = 0; k <= 3; k++) {
      let domainNoun = noun[k];
      for (let m = 0; m <= 3; m++) {
        let domainDomain = domain[m];
        console.log(` ${domainName}${domainAdj}${domainNoun}${domainDomain} `); 
      }
    }
  }
  
}


