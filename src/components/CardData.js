import React from 'react';  // rcc
import { withStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const CardData = ({ name, classes, imag }) => {
    return (
        <Card className={classes.item}>
            <CardContent>
                <Typography component="p" variant="h6">{name}</Typography>
            </CardContent>
            <CardMedia className={classes.media} image={imag} />
        </Card>
    )
}

export default withStyles({
    item: {
        minWidth: "300px",
        margin: "2em",
        boxSizing: "border-box",
        backgroundColor: "lightblue"
    },
    media: {
        minHeight: "150px"
    }
})(CardData);