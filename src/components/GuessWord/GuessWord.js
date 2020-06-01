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
  const compareLetter = (val1, val2) => {
    if (val1 === val2) {
      return true;
    } else return false;
  };
  return (
    <Container>
      <Box>
        {[...word].map((letter, indexLetter) => {
          if (compareLetter(proposalLetter, word[indexLetter])) {
            maskArray[indexLetter] = letter;
          }
          return (
            <span key={indexLetter} className="crypted-word">
              {maskArray[indexLetter]}
            </span>
          );
        })}
        {maskArray.indexOf("_") === -1 && setWin(true)}
        {nbError === 7 && setFail(true)}
      </Box>
      {win !== true && (
        <HelpButton setNbError={setNbError} nbError={nbError} clue={clue} />
      )}
    </Container>
  );
};

export default GuessWord;
