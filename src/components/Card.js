import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { colors } from "@material-ui/core";

const useStyles = makeStyles({
  root: (props) => {
    return {
      //minWidth: '50%',
      borderBottom: `10px solid ${props.bcolor}`,
      //backgroundColor: 'green',
       width: '250px',
       height: '180px',
       textAlign: 'left',
       alignContent: 'center',
       borderRadius:'8%',
       boxShadow: '8px 8px 5px grey',
       paddingRight: '50px',
       color: 'white',
       backgroundColor: 'black',
    //   marginTop: '20px',
    //   marginLeft: '50px',
    };

  },
});

export default function OutlinedCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" elevation={0} >{props.title}</Typography>
        <Typography variant="h3" elevation={0}>{props.data}</Typography>
        <Typography>{props.btext}</Typography>
      </CardContent>
    </Card>
  );
}
