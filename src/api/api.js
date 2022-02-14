const items = [
    {   id:1 ,
        title:"Adi Power 2.0",
        description: "Paddle",
        price: 45000 ,
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/pala-adidas-adipower-20201-2e91fe2c6fe3f4d44815911134891838-1024-1024.jpg'
    },
    {   id:2 ,
        title:"Adi Power Ctrl 2.0",
        description: "Paddle",
        price: 47000 ,
        pictureUrl:'http://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/pala-adidas-adipower-control-20201-a6df7a466e310f8c8315911138512031-640-0.jpg'
    },
    {   id:3 ,
        title:"Precision Pro",
        description: "Paddle",
        price: 43000 ,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_705985-MLA32718612189_102019-O.jpg'
    },
];



function getItems () {
    return new Promise((resolve, reject) => {
   
        setTimeout(() => {
            resolve (items);
        }, 2000);
    });
}

export {
    getItems,
}