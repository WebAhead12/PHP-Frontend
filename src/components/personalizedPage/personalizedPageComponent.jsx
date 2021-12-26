import React from "react";

import PhpModule from "./moduleComponent/phpModule";

import Menu from "./menu/menu.jsx";

import EditMenu from "./menu/editMenu.jsx";

import Search from "./search/search.jsx";

import LogOut from "./logOut/logOut";

export default function PersonalizedPageComponent({ setLoggedIn }) {
  const [modulesList, setModulesList] = React.useState([]);
  const [currentModule, setCurrentModule] = React.useState({});
  const [editMenu, setEditMenu] = React.useState(false);
  //Edit menu toggle states
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageCheck, setImageCheck] = React.useState(false); //checks toggle image in editmenu
  const [textCheck, setTextCheck] = React.useState(false); //checks toggle text in editmenu
  const [shortcutMode, setShortcutMode] = React.useState(false); //checks toggle shortcut in editmenu
  const [deleteModule, setDeleteModule] = React.useState(false);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API + "/background", {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.body.style.backgroundImage = `url(${data.background})`;
      });

    fetch(process.env.REACT_APP_API + "/module", {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setModulesList(data.modules.map((module) => ({ ...module.module, moduleid: module.id })) || []);
      });
  }, []);

  React.useEffect(() => {
    setText(currentModule.text);
    setTextCheck(!!currentModule.text);
    setImageCheck(!!currentModule.image);
    setShortcutMode(!!currentModule.shortcutMode);
    console.log(currentModule);
  }, [currentModule]);

  React.useEffect(() => {
    setModulesList(modulesList.map((module) => (module.moduleid == currentModule.moduleid ? { ...module, text: text } : module)));
  }, [text]);

  React.useEffect(() => {
    if (!textCheck) setText("");
  }, [textCheck]);

  React.useEffect(() => {
    setModulesList(modulesList.map((module) => (module.moduleid == currentModule.moduleid ? { ...module, image: image } : module)));
  }, [image]);

  React.useEffect(() => {
    if (!imageCheck) setImage("");
  }, [imageCheck]);

  React.useEffect(() => {
    setModulesList(
      modulesList.map((module) => (module.moduleid == currentModule.moduleid ? { ...module, shortcutMode: shortcutMode, image: image } : module))
    );
  }, [shortcutMode]);

  React.useEffect(() => {
    if (!deleteModule) return;
    setDeleteModule(false);
    const indx = modulesList.findIndex((module) => module.moduleid == currentModule.moduleid);
    const tempid = currentModule.moduleid;
    console.log({ tempid, indx, modulesList });
    setCurrentModule({});
    fetch(process.env.REACT_APP_API + "/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
      body: JSON.stringify({ id: tempid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setModulesList((prev) => [...prev.slice(0, indx), ...prev.slice(indx + 1)]);
      });
  }, [deleteModule, modulesList]);

  document.body.style.backgroundColor = "#4D4D54";

  const editMenuObj = {
    text: text,
    setText: setText,
    image: image,
    setImage: setImage,
    editMenu: editMenu,
    currentModule: currentModule,
    shortcutMode: shortcutMode,
    setShortcutMode: setShortcutMode,
    imageCheck: imageCheck,
    setImageCheck: setImageCheck,
    textCheck: textCheck,
    setTextCheck: setTextCheck,
    setDeleteModule: setDeleteModule,
  };

  return (
    <div style={{ position: "relative", height: "98vh", width: "98vw" }}>
      <Menu
        createModule={(id) => {
          console.log(modulesList);
          setModulesList(modulesList.concat([{ moduleid: id }]));
        }}
        editMenu={editMenu}
        setEditMenu={setEditMenu}
      ></Menu>
      <Search></Search>
      <EditMenu {...editMenuObj}></EditMenu>
      <div
        style={{
          borderTop: "3px solid black",
          position: "absolute",
          zIndex: "1",
          top: "90px",
          width: "99.9vw",
          borderBottom: "3px solid black",
          height: "80vh",
        }}
      >
        {modulesList.map((moduleData) => {
          return (
            <PhpModule
              key={moduleData.moduleid}
              {...moduleData}
              editMode={editMenu}
              setModulesList={setModulesList}
              currentModule={currentModule}
              onClickFunction={() => setCurrentModule(moduleData)}
            />
          );
        })}
      </div>
      <LogOut setLoggedIn={setLoggedIn}></LogOut>
    </div>
  );
}
