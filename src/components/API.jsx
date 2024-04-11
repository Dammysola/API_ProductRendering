import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'



const API = () => {
    const [Product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        FetchData()
    },[])

    const FetchData = async()=>{
        setLoading(true)
        try{
            await fetch ("https://fakestoreapi.com/products")
  
              .then(async (res)=>{
                  setProduct(await res.json())
                  setLoading(false);
              })
              console.log(Product);
        }
        catch{
            (err)=>{
                setLoading(false)
              return  console.log(err)
            }
        }
        
    }

    return(
        <>
            <div>
            <div id='Nav_bars'>
        <h2>DANGO</h2>
        <div id='Nav_middle'>
          
            <div className='Nav_link'>Home</div>
          
          {/* <div className='Nav_link'>Home</div> */}
          <div className='Nav_link'>Categories</div>
        </div>

        <div id='Nav_last'>
          <div className='Nav_link'><img className='Nav_image' src="./src/assets/account.png" alt="" /> Accounts</div>
          {/* <div className='Nav_link'><img className='Nav_image' src="./src/assets/help.png" alt="" /> Help</div> */}
          <div className='Nav_link'> <img className='Nav_image' src="./src/assets/blackCart.png" alt="" /> Cart</div>
        </div>

      </div>
                {
                    loading ? <p style={{textAlign:"center"}}>please wait, loading.... </p>:
                    <div id='API_mainDiv'>
                        {
                            Product.map((value)=>{
                                return(
                                    <Link to={'/product'} state={JSON.stringify (value)}>
                                        <Card value={value}/>
                                    </Link>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </>
    )

}

export default API