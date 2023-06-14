import { useEffect, useState } from "react";
import OptionMenu from "../OptionMenu/OptionMenu";

const DynamicMenu = ({
  allData,
  menuData,
  setMenuData,
  openOptionsMenu,
  setOpenOptionsMenu,
}) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const fatherMenu = () => {
    return menuData.map((item) => {
      return (
        <div key={item.id}>
          <h1
            onClick={() => setOpenSubMenu(true)}
            onContextMenu={(e) => {
              e.preventDefault();
              setOpenOptionsMenu(item.id);
            }}
          >
            {item.name}
          </h1>
          {openSubMenu && item.children.length > 0 && (
            <DynamicMenu
              openOptionsMenu={openOptionsMenu}
              setOpenOptionsMenu={setOpenOptionsMenu}
              allData={allData}
              menuData={item.children}
              setMenuData={setMenuData}
            />
          )}
          {openOptionsMenu === item.id && (
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
