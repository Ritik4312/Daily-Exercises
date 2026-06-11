import { Card,CardContent, Typography } from '@mui/material';
function ProductCard(props){
    return(
        <Card key={props.pId} sx={{ width: 250,boxShadow:3 }}>
                        <CardContent>
                              <Typography variant = 'h5'>Product Name :{props.pName}</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant = 'body'>ID:{props.pId}</Typography>
                        </CardContent>
                        
                        <CardContent>  
                            <Typography variant = 'body'> Price :{props.pPrice}</Typography></CardContent>
                    </Card>
    )
}
export default ProductCard;