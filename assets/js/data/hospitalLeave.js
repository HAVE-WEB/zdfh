
(function (window, document, Math) {

var levelData = [
    {
        "Code": "940000",
        "Name": "民营",

    },
    {
        "Code": "150000",
        "Name": "一丙",
    },
    {
        "Code": "140000",
        "Name": "二丙",
    },
    {
        "Code": "130000",
        "Name": "三丙",
    },
    {
        "Code": "110000",
        "Name": "一乙",
    },
    {
        "Code": "210000",
        "Name": "二乙",
    },
    {
        "Code": "220000",
        "Name": "三乙",
    },
    {
        "Code": "230000",
        "Name": "一甲",
    },
    {
        "Code": "240000",
        "Name": "二甲",
    },
    {
        "Code": "250000",
        "Name": "三甲",
    },
];

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = levelData;
    } else {
        window.levelData = levelData;
    }

})(window, document, Math);