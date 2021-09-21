import React from 'react'
import {Grid} from "@material-ui/core";
import HighlightCard from './HighlinghtCart';
 const Highlight = ({summary}) => {
     
    return (
       <Grid container spacing={3}>
           {
             summary.map((data) => (
                <Grid item sm={4} xs={12}>
             <HighlightCard 
             title={data.title}
             count={data.count}
             type={data.type}/>
             </Grid>
             ))}
       </Grid>
    )
}
export default Highlight;