import React from 'react';
import { Card, CardContent, Typography, makeStyles } from"@material-ui/core";
import CountUp from 'react-countup';

const useStyles = makeStyles({
    wrapper:(props) =>{
        if(props.type === 'confirmed') return {borderTop: '5px solid #c9302c', color: '#c9302c'};
        if(props.type === 'recovered') return {borderTop: '5px solid #28a745', color: '#28a745'};
        else return {borderTop: '5px solid black'};
    },
    title:{
        fontSize: 25,
        marginBottom: 10,

    },
    count:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default function HighlinghtCart({title, count,type}) {
    const styles = useStyles({type})
        return (
        <Card className={styles.wrapper}>
        <CardContent>
            <Typography component="p" variant="body2" className={styles.title}>
               {title}
            </Typography>
            <Typography component="span" variant="body2" className={styles.count}>
               <CountUp
               start={0}
               end={count}
               duration={2}
               separator=","
               />
            </Typography>
       </CardContent>
   </Card>
    )
}
