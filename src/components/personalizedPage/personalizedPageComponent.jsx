import React from "react";

import PhpModule from "./moduleComponent/phpModule";

import Menu from "./menu/menu.jsx";

import EditMenu from "./menu/editMenu.jsx";

export default function PersonalizedPageComponent() {
  const [menu, menuToggle] = React.useState(false);
  const [modulesList, setModulesList] = React.useState([{ moduleid: 1, text: "test" }])
  const [currentModule, setCurrentModule] = React.useState(null)
  const [editMenu, setEditMenu] = React.useState(false);
  const [imageCheck, setImageCheck] = React.useState(false);
  const [textCheck, setTextCheck] = React.useState(false);
  const [shortcutMode, setShortcutMode] = React.useState(false);

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
    editMenu: editMenu,
    currentModule: currentModule,
    saveCurrentModuleData: (data) => {
      console.log(data);
      console.log(modulesList[0].moduleid == data.moduleid, modulesList[0].moduleid, data, data.moduleid);
      setModulesList(modulesList.map((module) => module.moduleid == data.moduleid ? { ...module, ...data } : null))
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
        {modulesList[0].text = "Tester"}
        {modulesList.map((moduleData) => <PhpModule {...moduleData} onClickFunction={() => setCurrentModule(moduleData)} />)}
      </div>
    </>
  );
}
