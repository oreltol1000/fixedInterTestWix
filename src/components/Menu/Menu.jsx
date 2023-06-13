import DynamicMenu from "../DynamicMenu/DynamicMenu";
import { getMenu, setMenu } from "../../services/MenuService";
import { useState, useEffect } from "react";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    setMenuData(getMenu());
  }, []);

  useEffect(() => {
    if (menuData) {
      setMenu(menuData);
    }
  }, [menuData]);
  return (
    <div className="menu">
      <h1>Menu test</h1>
      <DynamicMenu
        allData={menuData}
        menuData={menuData}
        setMenuData={setMenuData}
      />
    </div>
  );
};
export default Menu;
