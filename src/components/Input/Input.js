import React from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";

const Input = ({
  wordType,
  clueType,
  setWordType,
  setWord,
  setClueType,
  setClue,
  setMaskArray,
}) => {
  const cryptWord = (word) => {
    const newArray = [];
    if (word) {
      [...word].map((item) => {
        return newArray.push("_");
      });
    }
    setMaskArray(newArray);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setWord(
      wordType
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
    setClue(clueType);
    setWordType("");
    setClueType("");
    cryptWord(wordType.toUpperCase());
  };
  return (
    <Container>
      <Box m={2}>
        <TextField
          m={2}
          label="Le mot à deviner"
          type="password"
          autoComplete="off"
          size="small"
          value={wordType}
          onChange={(e) => setWordType(e.target.value)}
          margin="dense"
        />
      </Box>
      <Box m={2}>
        <TextField
          label="Donner un indice ?"
          type="password"
          autoComplete="off"
          size="small"
          value={clueType}
          onChange={(e) => setClueType(e.target.value)}
          margin="dense"
        />
      </Box>
      <Box m={2}>
        <Button
          className="mt-1"
          variant="contained"
          color="primary"
          onClick={handleForm}
        >
          Valider
        </Button>
      </Box>
    </Container>
  );
};

export default Input;
