import React from "react";
import HelpButton from "../HelpButton/HelpButton";
import { Container, Box } from "@material-ui/core";
const GuessWord = ({
  maskArray,
  proposalLetter,
  word,
  setNbError,
  nbError,
  clue,
  setWin,
  setFail,
  win,
}) => {
  return (
    <Container>
      <Box>
        {[...word].map((letter, indexLetter) => {
          if (proposalLetter === word[indexLetter]) {
            maskArray[indexLetter] = letter;
          }
          if (maskArray.indexOf("_") === -1) {
            setWin(true);
          }
          if (nbError === 7) {
            setFail(true);
          }
          return (
            <span key={indexLetter} className="crypted-word">
              {maskArray[indexLetter]}
            </span>
          );
        })}
      </Box>
      {win !== true && (
        <HelpButton setNbError={setNbError} nbError={nbError} clue={clue} />
      )}
    </Container>
  );
};

export default GuessWord;
