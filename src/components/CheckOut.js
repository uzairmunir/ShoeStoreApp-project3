import React from 'react'
import styles from '../App.css'
import {Button ,Card,CardContent,CardMedia,Grid,Typography} from '@material-ui/core'
import {useParams,Link} from 'react-router-dom'
import Shoes from '../data.json'

const CheckOut = () => {
    const {id} =useParams();
    const shoe=Shoes[id];
    if(!shoe){
        return(<h1>Error 4040 Page Not Fount</h1>)
    }
    const clickEvent=(e)=>{
        e.preventDefault();
        alert("Successfully Done")
    }
   
    return (
        <div className="checkout-container">
            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
            <Card >
                <CardMedia component="img"
                image={shoe.img} height={300} />
                <CardContent>
                    <Typography variant="h4" color="textPrimary">
                        {shoe.name}
                    </Typography><br/><hr/>
                    <Typography variant="h4" color="textPrimary">
                        {shoe.price}
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            </Grid>
            <div className="form">
                 <form>
                 <label>Enter Email</label><br/>
                     <input type="text" required /><br/>
                     <label>Enter Password</label><br/>
                     <input type="text" required /><br/>
                     <label>Enter Card Number</label><br/>
                     <input type="number" required /><br/>
                     <Button variant="contained" color="primary" onClick={clickEvent} >
                            <Link to="/" className="link-btn">Buy Now</Link>
                                 </Button><br/>
                 </form>
            </div>
        </div>
    )
}

export default CheckOut
