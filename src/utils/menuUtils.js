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
export const findNodeAndChild = (menuOldData, currentNode, newNode, action) => {
  let copyMenuOldData = JSON.parse(JSON.stringify(menuOldData));
  findNodeAndChildHelper({
    menuOldData: copyMenuOldData,
    currentNode,
    newNode,
    action,
  });
  return copyMenuOldData;
};

const findNodeAndChildHelper = ({
  menuOldData,
  currentNode,
  newNode,
  action,
}) => {
  for (let index = 0; index < menuOldData.length; index++) {
    //delete
    if (
      action === ACTIONS.delete &&
      menuOldData[index].children.filter((child) => child.id === currentNode.id)
        .length > 0
    ) {
      menuOldData[index].children = menuOldData[index].children.filter(
        (child) => child.id !== currentNode.id
      );
      return;
    }
    // add or edit
    if (menuOldData[index].id === currentNode.id) {
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
    //deeper
    if (menuOldData[index].children) {
      for (let i = 0; i < menuOldData[index].children.length; i++) {
        findNodeAndChildHelper({
          menuOldData: [menuOldData[index].children[i]],
          currentNode,
          newNode,
          action,
        });
      }
    }
  }
  return;
};
