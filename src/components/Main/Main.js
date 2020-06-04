import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import Header from "../Header/Header";
import Input from "../Input/Input";
import HangedPicture from "../HangedPicture/HangedPicture";
import GuessWord from "../GuessWord/GuessWord";
import Letters from "../Letters/Letters";
import Footer from "../Footer/Footer";
const Main = () => {
  //using of hooks to get inputs values on change
  const [wordType, setWordType] = useState("");
  const [clueType, setClueType] = useState("");
  //using of hooks to get inputs values on submit
  const [word, setWord] = useState("");
  const [clue, setClue] = useState("");
  //using an other array with '_' to compare to the real word array and fill it.
  const [maskArray, setMaskArray] = useState("");
  //Proposal letter get in a hook to compare and fill the '_' newArray
  const [proposalLetter, setProposalLetter] = useState("");
  //An counter of error
  const [nbError, setNbError] = useState(0);
  /* Fail and win Hook to change design  */
  const [fail, setFail] = useState(false);
  const [win, setWin] = useState(false);

  /* -------------------------------------------------------------------- */

  const initGame = () => {
    setWordType("");
    setClueType("");
    setWord("");
    setClue("");
    setNbError(0);
    setMaskArray("");
    setProposalLetter("");
    setFail("");
    setWin("");
  };

  return (
    <div className="container">
      <Box>
        <Header />
        {word === "" && (
          <Input
            setWordType={setWordType}
            wordType={wordType}
            setWord={setWord}
            clueType={clueType}
            setClueType={setClueType}
            setClue={setClue}
            setMaskArray={setMaskArray}
          />
        )}
        {word && fail !== true && (
          <>
            <HangedPicture nbError={nbError} />
            <GuessWord
              maskArray={maskArray}
              proposalLetter={proposalLetter}
              word={word}
              setNbError={setNbError}
              nbError={nbError}
              clue={clue}
              setWin={setWin}
              setFail={setFail}
              win={win}
            />

            {win !== true && (
              <Letters
                setProposalLetter={setProposalLetter}
                proposalLetter={proposalLetter}
                word={word}
                nbError={nbError}
                setNbError={setNbError}
                maskArray={maskArray}
                setFail={setFail}
              />
            )}
          </>
        )}
        {win && (
          <Box m={2}>
            {nbError <= 0
              ? "Vous avez gagné en faisant un sans faute"
              : "Vous avez gagné en faisant " + nbError + " faute"}
            {nbError <= 1 ? " !" : "s !"}
          </Box>
        )}
        {fail && (
          <Box m={2}>
            <HangedPicture nbError={nbError} />
            Vous avez perdu le mot a trouver était {word} .
          </Box>
        )}
        {win || fail ? (
          <Button
            m={2}
            variant="contained"
            color="primary"
            onClick={() => initGame()}
          >
            Rejouer ?
          </Button>
        ) : (
          ""
        )}
        <Footer />
      </Box>
    </div>
  );
};

export default Main;
