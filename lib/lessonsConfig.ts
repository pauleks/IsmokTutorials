interface LessonsConfig {
  [key: string]: {
    name: string;
    description: string;
    rowNumber: number;
  };
}

const configuration: LessonsConfig = {
  cpliusplius: {
    name: "C++",
    description: "Placeholderis",
    rowNumber: 4,
  },
  kita: {
    name: "Pristatomosios pamokos",
    description: "Sužinok, kaip naudotis IšmOK!",
    rowNumber: 1,
  },
  svetaines: {
    name: "Svetainių kūrimas",
    description:
      "Nuo pristatomosios svetainės kūrimo, iki internetinio žaidimo!",
    rowNumber: 3,
  },
  dirbtuves: {
    name: "Dirbtuvės",
    description:
      "Lengvi projektai, siekiantys tave supažindinti su naujomis technologijomis!",
    rowNumber: 2,
  },
};

export default configuration;
