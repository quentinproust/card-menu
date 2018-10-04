import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const styles = {
};

function CardBoard({
    menu,
    onChangeMeat,
    onChangeCereals,
    onChangeVegetables,
    spacing = 40,
    classes,
}) {
    return (
        <Grid container className={classes.demo} justify="center" spacing={spacing}>
            <Grid item>
                <Card 
                    foodName={menu.meat.name}
                    foodImgSrc={menu.meat.image}
                    onChange={onChangeMeat}
                />
            </Grid>
            <Grid item>
                <Card 
                    foodName={menu.cereal.name}
                    foodImgSrc={menu.cereal.image}
                    onChange={onChangeCereals}
                />
            </Grid>
            <Grid item>
                <Card 
                    foodName={menu.vegetables.name}
                    foodImgSrc={menu.vegetables.image}
                    onChange={onChangeVegetables}
                />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(CardBoard);