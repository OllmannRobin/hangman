import React from "react";
import { Container } from "@material-ui/core";
const HangedPicture = ({ nbError }) => {
  return (
    <Container>
      <img src={require("../../images/hangman" + nbError + ".png")} alt='hangmandrawing' />
    </Container>
  );
};

export default HangedPicture;
