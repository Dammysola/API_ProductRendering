// import React, { useEffect, useState } from 'react'
// import ProductDetailsOne from './ProductDetails'



// const ProductDetails = () => {
//     const [Details, setDetails]= useState([])
//     useEffect(()=>{
//         ProductData()
//     })
//     const ProductData =async ()=>{
//         try{
//             await fetch ("https://fakestoreapi.com/products")

//             .then(async (ress)=>{
//                 setDetails(await ress.json())
//             })
//         }
//         catch{
//             (err)=>{
//                return console.log(err); 
//             }
//         }
        
//     }

//     return(
//         <>
//             <div>
//                 {
//                     Details.map((product)=>{
//                         <ProductDetailsOne key={product.id} Image={product.Image} title={title} description={description} price={price} category={category} rating={rating}/>
//                     })
//                 }
//             </div>
//         </>
//     )
  
// }

// export default ProductDetails