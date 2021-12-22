// --default-account-background-color: #25252b;
// --default-account-text-color: #e3e3e3;

// --default-background-color: #4d4d54;
// --default-text-color: #fc6161;

// --default-menu-background-color: #0d0d0f;
// --default-menu-button-color: #1d1e22;
// --default-menu-button-hover-color: #18191d;

// --default-toggle-background-off-color: #6d6767;
// --default-toggle-background-on-color: #fc6161;

const accountLogoStyle = {
  marginTop: "15px",
  height: "calc(25% - 15px)",
  objectFit: "cover",
};

const moduleImage = {
  position: "absolute",
  width: "95%",
  height: "95%",
  transform: "translate(-50%, -50%)",
  left: "50%",
  top: "50%",
  border: "0px",
  pointerEvents: "none",
};

const moduleShortcutImage = {
  position: "absolute",
  width: "95%",
  height: "70%",
  left: "50%",
  transform: "translateX(-50%)",
  top: "2.5%",
  border: "0px",
  pointerEvents: "none",
};

const moduleText = {
  position: "absolute",
  margin: "0 0",
  width: "95%",
  height: "95%",
  transform: "translate(-50%, -50%)",
  left: "50%",
  top: "50%",
  textAlign: "start",
  wordBreak: "break-word",
  overflow: "hidden",
  fontFamily: "Montbold",
};

const moduleShortcutText = {
  position: "absolute",
  height: "20%",
  width: "95%",
  margin: "0 0",
  left: "50%",
  transform: "translateX(-50%)",
  top: "77.5%",
  textAlign: "center",
  wordBreak: "break-word",
  overflow: "hidden",
  fontFamily: "Montbold",
};

const exports = { accountLogoStyle, moduleImage, moduleShortcutImage, moduleText, moduleShortcutText };
export default exports;
