import React from 'react'
import Shoes from '../data.json'
import {Grid,Card,CardContent,Typography,CardMedia,Button} from '@material-ui/core'
import styles from '../App.css'
import {Link} from 'react-router-dom'

const Home = () => {
    console.log(Shoes);
    return (
        <div>
         <h1 id="h1">Kids</h1><br/><br/>
         <Grid container spacing={1}>
         {
              Object.keys(Shoes).slice(13,16).map(keyName=>{
                  return(
                   <Grid items xs={12} md={4} key={keyName}>
                      <Link to={`/${keyName}`} className="link-deco">
                     <Card className="card">
                       <CardMedia
                         component="img"
                         image={Shoes[keyName].img}
                           height={250} />
                           <CardContent>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].name}
                          </Typography><hr/><br/>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].price}
                          </Typography><hr/><br/>
                          <Button variant="contained" color="secondary">
                             Buy Now
                                 </Button>
                           </CardContent>

                     </Card>
                   </Link>
                     </Grid>
                  )
              })
          }
         </Grid><br/><br/>
         
         <h1 id="h1">Men</h1><br/><br/>
         <Grid container spacing={1}>
         {
              Object.keys(Shoes).slice(6,9).map(keyName=>{
                  return(
                   <Grid items xs={12} md={4}  key={keyName}>
                      <Link to={`/${keyName}`} className="link-deco" >
                     <Card className="card">
                       <CardMedia
                         component="img"
                         image={Shoes[keyName].img}
                           height={250} />
                           <CardContent>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].name}
                          </Typography><hr/><br/>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].price}
                          </Typography><hr/><br/>
                          <Button variant="contained" color="secondary">
                             Buy Now
                                 </Button>
                           </CardContent>

                     </Card>
                     </Link>
                     </Grid>
                   
                  )
              })
          }
         </Grid>

        <br/><br/>
         <h1 id="h1">WoMen</h1><br/><br/>
         <Grid container spacing={1}>
         {
              Object.keys(Shoes).slice(2,5).map(keyName=>{
                  return(
                   <Grid items xs={12} md={4}  key={keyName}>
                      <Link to={`/${keyName}`} className="link-deco" >
                     <Card className="card">
                       <CardMedia
                         component="img" id="img"
                         image={Shoes[keyName].img}
                           height={320} />
                           <CardContent>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].name}
                          </Typography><hr/><br/>
                          <Typography variant="h4" color="textSecondary">
                            {Shoes[keyName].price}
                          </Typography><hr/><br/>
                          <Button variant="contained" color="secondary">
                             Buy Now
                                 </Button>
                           </CardContent>

                     </Card>
                     </Link>
                     </Grid>
                  )
              })
          }
         </Grid>

         <h1 id="h1">WHO WE ARE</h1>
         <p>Here at SHOEZONE.com, we realize that style and prosperity begin with the correct shoes. We likewise understand that effectively finding the size and style to meet your requirements is vital to your web based shopping knowledge. Since beginning our web based business website in 2009, we’ve been endeavoring to present to you that perfect shopping experience. We pride ourselves on conveying hard-to-discover styles, sizes and widths since we realize that each individual’s needs contrast. Regardless of whether you’re experiencing issues looking over our vast determination of different shoes or you have a straightforward inquiry, our client benefit group is prepared and willing to help.</p>
         <footer>
           shoe-store-app@copyrightsbyuzairmunir
         </footer>
         
        </div>
    )
}

export default Home
