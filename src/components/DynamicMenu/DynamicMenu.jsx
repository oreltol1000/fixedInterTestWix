import { useEffect, useState } from "react";
import OptionMenu from "../OptionMenu/OptionMenu";

const DynamicMenu = ({ allData, menuData, setMenuData }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openOptionsMenu, setOpenOptionsMenu] = useState(false);
  console.log("alll", allData);
  const fatherMenu = () => {
    return menuData.map((item) => {
      return (
        <div key={item.id}>
          <h1
            onClick={() => setOpenSubMenu(true)}
            onContextMenu={(e) => {
              e.preventDefault();
              setOpenOptionsMenu(true);
            }}
          >
            {item.name}
          </h1>
          {openSubMenu && item.children.length > 0 && (
            <DynamicMenu
              allData={allData}
              menuData={item.children}
              setMenuData={setMenuData}
            />
          )}
          {openOptionsMenu && (
            <OptionMenu
              allData={allData}
              menuNode={item}
              setMenuData={setMenuData}
              setOpenOptionsMenu={setOpenOptionsMenu}
            />
          )}
        </div>
      );
    });
  };

  return <div className="DynamicMenu">{menuData && fatherMenu()}</div>;
};

export default DynamicMenu;
