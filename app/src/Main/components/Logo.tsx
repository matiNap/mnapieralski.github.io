import React from "react";
import CSS from "csstype";
import palette from "../../theme/palette";

export default () => {
  return (
    <div style={styles.container}>
      <p style={styles.mainText}>Mateusz Napieralski</p>
      <div style={styles.divider} />
      <p style={styles.subText}>Mobile developer</p>
    </div>
  );
};

const styles: { [key: string]: CSS.Properties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "15vw",
    marginLeft: "2vw",
  },
  divider: {
    backgroundColor: palette.text.primary,
    width: "100%",
    alignSelf: "center",
    display: "flex",
    height: "3px",
    borderRadius: "3px",
  },
  mainText: {
    color: palette.text.primary,
    padding: 0,
    margin: 0,
    fontSize: "1.5rem",
    alignSelf: "center",
    display: "flex",
    marginBottom: "5px",
  },
  subText: {
    color: palette.text.primary,
    padding: 0,
    margin: 0,
    fontSize: "1.3rem",
    alignSelf: "center",
    display: "flex",
    marginTop: "5px",
  },
};
