import { useState } from "react";
import { findNodeAndChild } from "../../utils/menuUtils";

const OptionMenu = ({ allData, menuNode, setMenuData, setOpenOptionsMenu }) => {
  const [inputEdit, setInputEdit] = useState(menuNode.name);
  const [inputAdd, setInputAdd] = useState("");
  const [openInputEdit, setOpenInputEdit] = useState(false);
  const [openInputAdd, setOpenInputAdd] = useState(false);

  const deleteHandler = () => {};
  const handleAdd = (eventId, value) => {
    if (eventId === "Enter") {
      let newMenuData = findNodeAndChild(allData, menuNode, value, "add");
      setMenuData(newMenuData);
      setOpenOptionsMenu(false);
    }
  };

  const handleEdit = (eventId, value) => {
    if (eventId === "Enter") {
      let newMenuData = findNodeAndChild(allData, menuNode, value, "edit");
      setMenuData(newMenuData);
      setOpenOptionsMenu(false);
    }
  };

  return (
    <div className="option-menu">
      <div className="option-block">
        <span onClick={() => deleteHandler()}>Delete</span>
      </div>
      {/* edit */}
      <div className="option-block">
        <span onClick={() => setOpenInputEdit(true)}>Edit</span>
        {openInputEdit && (
          <input
            value={inputEdit}
            onChange={(e) => setInputEdit(e.target.value)}
            onKeyDown={(e) => {
              handleEdit(e.key, e.target.value);
            }}
          />
        )}
      </div>

      {/* insert */}

      <div className="option-block">
        <span onClick={() => setOpenInputAdd(true)}>Add</span>
        {openInputAdd && (
          <input
            value={inputAdd}
            onChange={(e) => setInputAdd(e.target.value)}
            onKeyDown={(e) => {
              handleAdd(e.key, e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OptionMenu;
