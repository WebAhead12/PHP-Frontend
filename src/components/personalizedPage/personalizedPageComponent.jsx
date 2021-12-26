import React from "react";

import PhpModule from "./moduleComponent/phpModule";

import Menu from "./menu/menu.jsx";

import EditMenu from "./menu/editMenu.jsx";

export default function PersonalizedPageComponent() {
  const [menu, menuToggle] = React.useState(false);
  const [modulesList, setModulesList] = React.useState([{ moduleid: 1, text: "test" }]);
  const [currentModule, setCurrentModule] = React.useState({ moduleid: "", text: "", image: "" });
  const [editMenu, setEditMenu] = React.useState(false);
  //Edit menu toggle states
  const [text, setText] = React.useState(currentModule.text && "");
  const [imageCheck, setImageCheck] = React.useState(false); //checks toggle image in editmenu
  const [textCheck, setTextCheck] = React.useState(false); //checks toggle text in editmenu
  const [shortcutMode, setShortcutMode] = React.useState(false); //checks toggle shortcut in editmenu

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
  }, []);

  document.body.style.backgroundColor = "#4D4D54";

  const editMenuObj = {
    text: text,
    setText: setText,
    editMenu: editMenu,
    currentModule: currentModule,
    saveCurrentModuleData: (data) => {
      console.log(data);
      console.log(modulesList[0].moduleid == data.moduleid, modulesList[0].moduleid, data, data.moduleid);
      setModulesList(modulesList.map((module) => (module.moduleid == data.moduleid ? { ...module, ...data } : null)));
      console.log(modulesList);
    },
    shortcutMode: shortcutMode,
    setShortcutMode: setShortcutMode,
    imageCheck: imageCheck,
    textCheck: textCheck,
    setImageCheck: setImageCheck,
    setTextCheck: setTextCheck,
  };

  return (
    <>
      <Menu menu={menu} menuToggle={menuToggle} editMenu={editMenu} setEditMenu={setEditMenu}></Menu>
      <EditMenu {...editMenuObj}></EditMenu>
      <div>
        {/* {(modulesList[0].text = text)} */}
        {modulesList.map((moduleData, index) => {
          moduleData.text = text;
          return <PhpModule {...moduleData} onClickFunction={() => setCurrentModule(moduleData)} />;
        })}
      </div>
    </>
  );
}
