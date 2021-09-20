import React from 'react'
import {Grid, Card, CardContent, Typography} from "@material-ui/core";
import CountUp from 'react-countup';
 const Highlight = () => {
    return (
       <Grid container spacing={3}>
           <Grid item sm={4} xs={12}>
               <Card>
                   <CardContent>
                       <Typography component="p" variant="body2">Total Case</Typography>
                       <Typography component="span" variant="body2">
                           <CountUp
                           start={0}
                           end={100000000}
                           duration={2.5}
                           separator=","
                           />
                        </Typography>
                   </CardContent>
               </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
            <Card>
                 <CardContent>
                    <Typography component="p" variant="body2">Recovered Case</Typography>
                    <Typography component="span" variant="body2">
                    <CountUp
                           start={0}
                           end={100000000}
                           duration={2.5}
                           separator=","
                           />
                    </Typography>
                   </CardContent>
            </Card>

            </Grid>
            <Grid item sm={4} xs={12}>
            <Card>
                 <CardContent>
                    <Typography component="p" variant="body2">Death Case</Typography>
                    <Typography component="span" variant="body2">
                    <CountUp
                           start={0}
                           end={100000000}
                           duration={2.5}
                           separator=","
                           />
                    </Typography>
                   </CardContent>
            </Card>
            </Grid>
       </Grid>
    )
}
export default Highlight;