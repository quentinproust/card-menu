import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
        height: 300,
    },
};

function CardEl({
    foodName,
    foodImgSrc,
    onChange,
    classes
}) {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={foodImgSrc}
                    title={foodName}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {foodName}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onChange}>Change</Button>
            </CardActions>
        </Card>
    );
}

CardEl.propTypes = {
    foodName: PropTypes.string.isRequired,
    foodImgSrc: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(CardEl);