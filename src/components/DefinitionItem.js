import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { nanoid } from "nanoid";
import TextArray from './TextArray';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

// this component takes an arbitrary part of a definition (branch, meaning, submeaning)
// and displays it in a Box (flex) with text

// It receives as props:
// meaningHead (string) (e.g. 1, 2, 3, " ")
// submeaningHead (string) (e.g. a, b, c)
// subSubmeaningHead (string) (e.g. α, β, γ)
// text (TextArrayObj)
// if head is " ", the components nests at that level

// and returns a ListItem

const useStyles = makeStyles((theme) => ({
    listitem: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
      flexGrow: 1,
    },
    headnumber: {
      // hacky, imperfect attempt to align number;
      // consider alternative approach at https://stackoverflow.com/questions/61954501/material-ui-grid-baseline-alignment-for-button-buttongroup-and-typography
      minWidth: "1em",
    }
  }));

export default function DefinitionItem(props) {
  const classes = useStyles();

  function renderHead(head) {
    return (
      <Typography key={nanoid()} variant='subtitle2' className={classes.headnumber}>
        {head}
      </Typography>
    );
  }
  let renderMeaningHead, renderSubmeaningHead, renderSubSubmeaninghead, renderIndentSubSubmeaning;

  if(props.meaningHead) renderMeaningHead = renderHead(props.meaningHead);
  if(props.submeaningHead) renderSubmeaningHead = renderHead(props.submeaningHead);
  if(props.subSubmeaningHead) renderSubSubmeaninghead = renderHead(props.subSubmeaningHead);
  if(props.indentSubSubmeaning) renderIndentSubSubmeaning = renderHead(props.indentSubSubmeaning);

  return(
    <ListItem 
      align-items="flex-start" 
      className={classes.listitem}
    >
      {renderMeaningHead}
      {renderSubmeaningHead}
      {renderSubSubmeaninghead}
      {renderIndentSubSubmeaning}
      <ListItemText className={classes.listitem}>
        <TextArray textArrayObj={props.textArrayObj} variant="body1" />
      </ListItemText>
    </ListItem>
  );
}