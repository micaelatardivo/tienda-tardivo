import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from 'firebase/firestore';

import { db } from '../firebase';


export const getItems = (categoryName) => {
    return new Promise((resolve, reject) => {
        if (categoryName) {
            const itemsCollection = query(
                collection(db, 'items'),
                where('category', '==', categoryName)
            );
            getDocs(itemsCollection)
                .then((snapshot) => {
                    const products = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    resolve(products);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        } else {
            const itemsCollection = collection(db, 'items');
            getDocs(itemsCollection)
                .then((snapshot) => {
                    const products = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    resolve(products);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        }
    });
};

export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        const itemRef = doc(db, 'items', itemId);
        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const item = { id: snapshot.id, ...snapshot.data() };
                    resolve(item);
                }
            })
            .catch((error) => {
                console.log(error);
                reject(error)
            });
    });
};


//funcion que va a llamar al backend

/*function getItems () {
    return new Promise((resolve, reject) => {
   

            const itemsCollection =  collection(db, "items");
            getDocs(itemsCollection)
            .then(snapshot => {
                const products = snapshot.docs.map( (doc) => ({ 
                    id: doc.id, 
                    ...doc.data() }))
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

*/

