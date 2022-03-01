import { getDocs, collection} from 'firebase/firestore';
import { db } from '../firebase';


/*const items = [
    {   id:1 ,
        title:"Adi Power 2.0",
        description: "Paddle",
        price: 45000 ,
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/pala-adidas-adipower-20201-2e91fe2c6fe3f4d44815911134891838-1024-1024.jpg',
        category: 'paletas',
    },
    {   id:2 ,
        title:"Cubre Grip Lisos",
        description: "Paddle",
        price: 7000 ,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_838299-MLA45851689032_052021-O.webp',
        category: 'accesorios',
    },
    {   id:3 ,
        title:"Bolso Adidas",
        description: "Paddle",
        price: 43000 ,
        pictureUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/692/686/products/601877-mla31465630020_072019-o-9affc5d0eadf84ea9415692487294630-640-0.jpg',
        category: 'bolsos',
    },
];*/

//funcion que va a llamar al backend

function getItems () {
    return new Promise((resolve, reject) => {
   

            const itemsCollection =  collection(db, "items");
            getDocs(itemsCollection)
            .then(snapshot => {
                const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
                resolve(products)
                console.log(products)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    
    });
}



export {
    getItems,
}