import React from "react";
import { Container } from "@material-ui/core";

const Letters = ({ setProposalLetter, word, nbError, setNbError }) => {
  /* Method for manage letter proposal, if it match or not */
  const proposal = (e) => {
    if (word) {
      if (word.indexOf(e.currentTarget.value) === -1) {
        setNbError(nbError + 1);
      }
      setProposalLetter(e.currentTarget.value);
    }
    e.currentTarget.disabled = true;
  };
  /* An array of the letters of the alphabet */
  const letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <Container>
      {letterArray.map((letter, index) => {
        return (
          <button
            className="letters"
            variant="contained"
            color="primary"
            value={letter}
            onClick={(e) => proposal(e)}
            key={index}
          >
            {letter}
          </button>
        );
      })}
    </Container>
  );
};

export default Letters;
