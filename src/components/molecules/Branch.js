import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from "nanoid";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Meaning from "../molecules/Meaning";
import TextArray from '../atoms/TextArray';

// renders Branch based on props props.branchObj

const useStyles = makeStyles((theme) => ({
  branchitem: {
    paddingTop: theme.spacing(1),
  },
  branchheader: {
    paddingRight: theme.spacing(1),
  }
}));

export default function Branch(props) {
  const classes = useStyles();

  //if the object passed is a meaning, call meaning directly
  if(props.branchObj.type === 'meaning') {
    return(<Meaning key={nanoid()} meaningObj={props.branchObj} />);
  }

  // otherwise render the branch
  else if(props.branchObj.type === 'branch') {
    let branchRender = [];

    props.branchObj.data.forEach(function(branchData, index) {

      // render the branch itself as a ListSubheader
      // these two renders of the ListSubHeader could be unified
      if(branchData.type === 'textArray') {
        branchRender.push(
          <ListSubheader key={nanoid()} className={classes.branchitem}>
            <Typography 
              key={nanoid()} 
              className={classes.branchheader} 
              variant="h6" 
              display="inline"
            >
              {props.branchObj.head}
            </Typography>
            <TextArray key={nanoid()} textArrayObj={branchData} display="inline" />
          </ListSubheader>
        );
      }

      // render each component meaning as meaning.
      else if(branchData.type === 'meaning') {
        if(index===0) {
          branchRender.push(
            <ListSubheader key={nanoid()} className={classes.branchitem}>
              <Typography 
                key={nanoid()} 
                className={classes.branchheader} 
                variant="h6" 
              >
                {props.branchObj.head}
              </Typography>
            </ListSubheader>
          );
        }
        branchRender.push(
          <Meaning 
            key={nanoid()} 
            meaningObj={branchData} 
          />
        );
      } 
      else {
        console.log("Something else in branch!");
      }
    });

    return branchRender;
  }

  else {
    console.log("not meaning or branch in definition!");
  }
}