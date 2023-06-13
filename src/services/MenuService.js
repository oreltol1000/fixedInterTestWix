const DEFAULT_MENU = [
  {
    id: 1,
    name: "Menu",
    children: [],
  },
];

export const getMenu = () => {
  return JSON.parse(localStorage.getItem("menu")) || DEFAULT_MENU;
};
export const setMenu = (menu) => {
  localStorage.setItem("menu", JSON.stringify(menu));
};

export const getSeqNum = () => {
  if (!localStorage.getItem("seqNum")) {
    localStorage.setItem("seqNum", 1);
  }
  const seqNum = localStorage.getItem("seqNum");
  localStorage.setItem("seqNum", parseInt(seqNum) + 1);
  return seqNum;
};
