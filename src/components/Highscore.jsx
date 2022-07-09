import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

const Highscore = ({ scores, parameter }) => {
  return (
    <List>
      {scores.map((score) => (
        <ListItem key={score.name}>
          <ListItemAvatar>
            <Avatar>{score.name[0]}</Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={score.name}
            secondary={
              score.gamePoints ? parameter + " " + score.gamePoints : ""
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

Highscore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gamePoints: PropTypes.number,
    }).isRequired
  ).isRequired,
  parameter: PropTypes.string,
};

export default Highscore;
