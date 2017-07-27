
(function (window, document, Math) {

var officeData = [
    {
        "Code": "940000",
        "Name": "内科系统",

    },
    {
        "Code": "150000",
        "Name": "心脏中心",
    },
    {
        "Code": "140000",
        "Name": "外科系统",
    },
    {
        "Code": "130000",
        "Name": "血管外科",
    },
    {
        "Code": "110000",
        "Name": "妇儿",
    },
    {
        "Code": "210000",
        "Name": "五官科",
    },
    {
        "Code": "220000",
        "Name": "医技科室",
    },
    {
        "Code": "230000",
        "Name": "其它科室",
    },

];

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = officeData;
    } else {
        window.officeData = officeData;
    }

})(window, document, Math);