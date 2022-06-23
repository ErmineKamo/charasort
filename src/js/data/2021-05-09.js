dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Part 3: Stardust Crusaders", key: "SC" },
      { name: "Part 4: Diamond is Unbreakable", key: "DiU" },
    ]
  },
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Star Platinum",
    img: "https://static.jojowiki.com/images/6/6a/latest/20200102231412/StarPlatinumMangaAv.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Magician's Red",
    img: "https://static.jojowiki.com/images/7/7c/latest/20200101165815/MagicianRedMangaAv.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Hermit Purple",
    img: "https://static.jojowiki.com/images/0/08/latest/20200101165723/HermitPurpleMangaAv.png",
    opts: {
      series: [ "SC" ]
    }
  }
];
