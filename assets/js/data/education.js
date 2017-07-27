
(function (window, document, Math) {

var educationData = [
    {
        "Code": "940000",
        "Name": "没上过学",

    },
    {
        "Code": "150000",
        "Name": "幼儿园",
    },
    {
        "Code": "140000",
        "Name": "小学",
    },
    {
        "Code": "130000",
        "Name": "初中",
    },
    {
        "Code": "110000",
        "Name": "高中",
    },
    {
        "Code": "210000",
        "Name": "大学",
    },
    {
        "Code": "220000",
        "Name": "大专",
    },

];

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = educationData;
    } else {
        window.educationData = educationData;
    }

})(window, document, Math);