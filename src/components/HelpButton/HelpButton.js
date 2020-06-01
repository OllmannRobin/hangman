import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
const HelpButton = ({ setNbError, nbError, clue }) => {
  const helpClick = () => {
    setNbError(nbError + 1);
    setEnable(true);
    setShowClue(true);
  };
  const [enable, setEnable] = useState(false);
  const [showCLue, setShowClue] = useState(false);
  return (
    <Box m={1}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => helpClick()}
        value="indice"
        disabled={enable}
      >
        {showCLue ? clue : "Un indice ?"}
      </Button>
    </Box>
  );
};
export default HelpButton;
