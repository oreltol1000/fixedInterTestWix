import { getSeqNum, setMenu } from "../services/MenuService.js";
const ACTIONS = {
  add: "add",
  delete: "delete",
  edit: "edit",
};
const getSimpleNode = (newNodeName) => {
  return {
    id: getSeqNum(),
    name: newNodeName,
    children: [],
  };
};
export const findNodeAndChild = (menuOldData, fatherNode, newNode, action) => {
  let copyMenuOldData = JSON.parse(JSON.stringify(menuOldData));
  findNodeAndChildHelper(copyMenuOldData, fatherNode, newNode, action);
  // setMenu(copyMenuOldData);
  return copyMenuOldData;
};

const findNodeAndChildHelper = (menuOldData, fatherNode, newNode, action) => {
  for (let index = 0; index < menuOldData.length; index++) {
    if (menuOldData[index].id === fatherNode.id) {
      console.log("action", action);
      if (action === ACTIONS.delete) {
        menuOldData.splice(index, 1);
        return;
      }
      if (action === ACTIONS.edit) {
        menuOldData[index].name = newNode;
        return;
      }
      if (action === ACTIONS.add) {
        menuOldData[index].children.push(getSimpleNode(newNode));
        return;
      }
      return;
    }
    if (menuOldData[index].children) {
      for (let i = 0; i < menuOldData[index].children.length; i++) {
        findNodeAndChildHelper(
          [menuOldData[index].children[i]],
          fatherNode,
          newNode
        );
      }
    }
  }
  return;
};
