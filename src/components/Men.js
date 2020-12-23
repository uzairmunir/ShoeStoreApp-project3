import React from 'react'
import Shoes from '../data.json'
import {Grid,Card,CardContent,CardMedia,Typography,Button} from '@material-ui/core'
import styles from '../App.css'
import {Link} from 'react-router-dom'

const Men = () => {
    return (
        <div>
            <h1 id="h1">WIDE VARIETY OF MEN'S FOOTWEAR</h1>
            <Grid container spacing={1}>
                {
                    Object.keys(Shoes).slice(6,12).map(keyName=>{
                        return(
                            <Grid item xs={12} sm={6} md={4}>
                                <Link to={`/men/${keyName}`}  className="link-deco">
                                <Card className="card">
                                    <CardMedia  component="img"
                                        image={Shoes[keyName].img} 
                                    height={300} />
                                  <CardContent>
                                  <Typography variant="h4" color="textSecondary">
                                        {Shoes[keyName].name}
                                    </Typography><hr/><br/>
                                    <Typography variant="h4" color="textSecondary">
                                        {Shoes[keyName].price}
                                    </Typography><hr/><br/>
                                    <Button variant="contained" color="primary">
                                       Buy Now
                                 </Button><br/>
                                  </CardContent>
                                </Card>
                                </Link>
                                </Grid>
                        )
                    })
                }

            </Grid>
            <footer>
           shoe-store-app@copyrightsbyuzairmunir
         </footer>
        </div>
    )
}

export default Men
