import React from 'react'
import Shoes from '../data.json'
import { useParams, Link } from 'react-router-dom'
import styles from '../App.css'
import { Button, Card, CardContent, Typography } from '@material-ui/core'
const KidsItem = () => {
    const { id } = useParams();
    const shoe = Shoes[id];
    if (!shoe) {
        return (<h1>Error 404 Page Not Found</h1>)
    }
    const clickEvent = (e) => {
        e.preventDefault();
        alert("Successfully Done")
    }
    return (
        <div className="item-container">
            <Card>
                <CardContent>
                    {<img src={shoe.img} height={360} />}
                    <Typography variant="h4" color="textSecondary">
                        <h2>{shoe.name}</h2>
                        <Button variant="contained" color="primary" onClick={clickEvent}>
                            <Link to="/kids" className="link-btn">Buy Now</Link>
                        </Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default KidsItem
