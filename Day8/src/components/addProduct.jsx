import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ProductCard from './productCard';

function addProduct() {
    //------------loaded the data on the load of Comp.-----------------
    useEffect(() =>{
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => {
             const tempMap = new Map();

        data.forEach((ele) => {
            tempMap.set(Number(ele.pId), {
                pId: Number(ele.pId),
                pName: ele.pName,
                pPrice: Number(ele.pPrice)
            });
        });
        setProducts(tempMap);
        })
        },[])
    const [p_id,setPid] = useState(0);
    const [p_name,setPName] = useState(" ");
    const [p_price,setPPrice] = useState(0);
    const [products,setProducts] = useState(new Map());
    const handleSubmit =() => {
       console.log(products);
        
        // -----------Created a local Map (Temp. Map)
        let tempMap = new Map(products);
        tempMap.set(Number(p_id), {
            pId: Number(p_id),
            pName: p_name,
            pPrice: Number(p_price)
        });
        //-----------------------remove old data and added new data on the same object of the orignal map
        setProducts(tempMap);

        fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               pId: Number(p_id),
               pName: p_name,
               pPrice: Number(p_price)    
            })
        })
        // cleaning the form
        setPid(0);
        setPName(" ");
        setPPrice(0)
    }
  return (
       <div>
            <br></br>
           
             <TextField
              required
              id="outlined-required"
              label="Product ID"
              value={p_id}
              onChange={(e) => setPid(Number(e.target.value))
              }
            />
            <br></br>
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Product Name"
              value={p_name}
              onChange={(e) => setPName(e.target.value)}
            />     
            <br></br>
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Product Price"
              value={p_price}
              onChange={(e) => setPPrice(Number(e.target.value))}
            />     
            <br></br>
            <br></br>
            
           <Button variant="outlined" onClick = {handleSubmit}>Submit</Button>
            <br/><br/> 
            <Box  sx={{ display: 'flex',gap:2, flexWrap: 'wrap', justifyContent: 'center' ,padding:3}}>
            
            {
                [...products.entries()].map(([key, ele]) =>(
                    <ProductCard key = {key} pId = {ele.pId} pName = {ele.pName} pPrice = {ele.pPrice}/>    
                ))
            }
            </Box>
           </div>
  )
}

export default addProduct
