var id;
 
var getName;
 
var putName;
 
var monthAll;
 
var percentConversion;
 
var dayAll;
 
var weekAll;
 
var followTimeCount;
 
var nameAll;
 
var threeDaysNoFollow;
 
var oneWeekNoFollow;
 
var twoWeekNoFollow;
 
var oneMonthNoFollow;
 
var joinClient;
 
var readyClient;
 
var tryClient;
 
var purposeClient;
 
var noAnswerClient;
 
var newClient;
 
var needClient;
 
var invalidClient;
 
var blacklistClient;
 
var TABLE_CATALOG;
 
var TABLE_SCHEMA;
 
var TABLE_NAME;
 
var NON_UNIQUE;
 
var INDEX_SCHEMA;
 
var INDEX_NAME;
 
var SEQ_IN_INDEX;
 
var COLUMN_NAME;
 
var COLLATION;
 
var CARDINALITY;
 
var SUB_PART;
 
var PACKED;
 
var NULLABLE;
 
var INDEX_TYPE;
 
var COMMENT;
 
var INDEX_COMMENT;
 
var IS_VISIBLE;
 
var EXPRESSION;
 
var statisticsData;
 
$(function(){
    var url="EmpStatisticsAjaxVueQuery";
 
$.ajax({
        url:url,
        type:"post",
        dataType:"json",
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest);
            alert(textStatus);
            alert(errorThrown);
        },
        success:function(data){
            //alert(data);
            $.each(data,function(idx,obj){
 
    id=obj.id;
 
    getName=obj.getName;
 
    putName=obj.putName;
 
    monthAll=obj.monthAll;
 
    percentConversion=obj.percentConversion;
 
    dayAll=obj.dayAll;
 
    weekAll=obj.weekAll;
 
    followTimeCount=obj.followTimeCount;
 
    nameAll=obj.nameAll;
 
    threeDaysNoFollow=obj.threeDaysNoFollow;
 
    oneWeekNoFollow=obj.oneWeekNoFollow;
 
    twoWeekNoFollow=obj.twoWeekNoFollow;
 
    oneMonthNoFollow=obj.oneMonthNoFollow;
 
    joinClient=obj.joinClient;
 
    readyClient=obj.readyClient;
 
    tryClient=obj.tryClient;
 
    purposeClient=obj.purposeClient;
 
    noAnswerClient=obj.noAnswerClient;
 
    newClient=obj.newClient;
 
    needClient=obj.needClient;
 
    invalidClient=obj.invalidClient;
 
    blacklistClient=obj.blacklistClient;
 
    TABLE_CATALOG=obj.TABLE_CATALOG;
 
    TABLE_SCHEMA=obj.TABLE_SCHEMA;
 
    TABLE_NAME=obj.TABLE_NAME;
 
    NON_UNIQUE=obj.NON_UNIQUE;
 
    INDEX_SCHEMA=obj.INDEX_SCHEMA;
 
    INDEX_NAME=obj.INDEX_NAME;
 
    SEQ_IN_INDEX=obj.SEQ_IN_INDEX;
 
    COLUMN_NAME=obj.COLUMN_NAME;
 
    COLLATION=obj.COLLATION;
 
    CARDINALITY=obj.CARDINALITY;
 
    SUB_PART=obj.SUB_PART;
 
    PACKED=obj.PACKED;
 
    NULLABLE=obj.NULLABLE;
 
    INDEX_TYPE=obj.INDEX_TYPE;
 
    COMMENT=obj.COMMENT;
 
    INDEX_COMMENT=obj.INDEX_COMMENT;
 
    IS_VISIBLE=obj.IS_VISIBLE;
 
    EXPRESSION=obj.EXPRESSION;
 
        statisticsData={
 
            VueId:id,
            VueGetName:getName,
            VuePutName:putName,
            VueMonthAll:monthAll,
            VuePercentConversion:percentConversion,
            VueDayAll:dayAll,
            VueWeekAll:weekAll,
            VueFollowTimeCount:followTimeCount,
            VueNameAll:nameAll,
            VueThreeDaysNoFollow:threeDaysNoFollow,
            VueOneWeekNoFollow:oneWeekNoFollow,
            VueTwoWeekNoFollow:twoWeekNoFollow,
            VueOneMonthNoFollow:oneMonthNoFollow,
            VueJoinClient:joinClient,
            VueReadyClient:readyClient,
            VueTryClient:tryClient,
            VuePurposeClient:purposeClient,
            VueNoAnswerClient:noAnswerClient,
            VueNewClient:newClient,
            VueNeedClient:needClient,
            VueInvalidClient:invalidClient,
            VueBlacklistClient:blacklistClient,
            VueTABLE_CATALOG:TABLE_CATALOG,
            VueTABLE_SCHEMA:TABLE_SCHEMA,
            VueTABLE_NAME:TABLE_NAME,
            VueNON_UNIQUE:NON_UNIQUE,
            VueINDEX_SCHEMA:INDEX_SCHEMA,
            VueINDEX_NAME:INDEX_NAME,
            VueSEQ_IN_INDEX:SEQ_IN_INDEX,
            VueCOLUMN_NAME:COLUMN_NAME,
            VueCOLLATION:COLLATION,
            VueCARDINALITY:CARDINALITY,
            VueSUB_PART:SUB_PART,
            VuePACKED:PACKED,
            VueNULLABLE:NULLABLE,
            VueINDEX_TYPE:INDEX_TYPE,
            VueCOMMENT:COMMENT,
            VueINDEX_COMMENT:INDEX_COMMENT,
            VueIS_VISIBLE:IS_VISIBLE,
            VueEXPRESSION:EXPRESSION    };
 
        vmStatistics=new Vue({
 
            el:'#newStatistics',
 
            data:statisticsData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(statisticsData,'VueId','id');
 
            Vue.set(statisticsData,'VueGetName','getName');
 
            Vue.set(statisticsData,'VuePutName','putName');
 
            Vue.set(statisticsData,'VueMonthAll','monthAll');
 
            Vue.set(statisticsData,'VuePercentConversion','percentConversion');
 
            Vue.set(statisticsData,'VueDayAll','dayAll');
 
            Vue.set(statisticsData,'VueWeekAll','weekAll');
 
            Vue.set(statisticsData,'VueFollowTimeCount','followTimeCount');
 
            Vue.set(statisticsData,'VueNameAll','nameAll');
 
            Vue.set(statisticsData,'VueThreeDaysNoFollow','threeDaysNoFollow');
 
            Vue.set(statisticsData,'VueOneWeekNoFollow','oneWeekNoFollow');
 
            Vue.set(statisticsData,'VueTwoWeekNoFollow','twoWeekNoFollow');
 
            Vue.set(statisticsData,'VueOneMonthNoFollow','oneMonthNoFollow');
 
            Vue.set(statisticsData,'VueJoinClient','joinClient');
 
            Vue.set(statisticsData,'VueReadyClient','readyClient');
 
            Vue.set(statisticsData,'VueTryClient','tryClient');
 
            Vue.set(statisticsData,'VuePurposeClient','purposeClient');
 
            Vue.set(statisticsData,'VueNoAnswerClient','noAnswerClient');
 
            Vue.set(statisticsData,'VueNewClient','newClient');
 
            Vue.set(statisticsData,'VueNeedClient','needClient');
 
            Vue.set(statisticsData,'VueInvalidClient','invalidClient');
 
            Vue.set(statisticsData,'VueBlacklistClient','blacklistClient');
 
            Vue.set(statisticsData,'VueTABLE_CATALOG','TABLE_CATALOG');
 
            Vue.set(statisticsData,'VueTABLE_SCHEMA','TABLE_SCHEMA');
 
            Vue.set(statisticsData,'VueTABLE_NAME','TABLE_NAME');
 
            Vue.set(statisticsData,'VueNON_UNIQUE','NON_UNIQUE');
 
            Vue.set(statisticsData,'VueINDEX_SCHEMA','INDEX_SCHEMA');
 
            Vue.set(statisticsData,'VueINDEX_NAME','INDEX_NAME');
 
            Vue.set(statisticsData,'VueSEQ_IN_INDEX','SEQ_IN_INDEX');
 
            Vue.set(statisticsData,'VueCOLUMN_NAME','COLUMN_NAME');
 
            Vue.set(statisticsData,'VueCOLLATION','COLLATION');
 
            Vue.set(statisticsData,'VueCARDINALITY','CARDINALITY');
 
            Vue.set(statisticsData,'VueSUB_PART','SUB_PART');
 
            Vue.set(statisticsData,'VuePACKED','PACKED');
 
            Vue.set(statisticsData,'VueNULLABLE','NULLABLE');
 
            Vue.set(statisticsData,'VueINDEX_TYPE','INDEX_TYPE');
 
            Vue.set(statisticsData,'VueCOMMENT','COMMENT');
 
            Vue.set(statisticsData,'VueINDEX_COMMENT','INDEX_COMMENT');
 
            Vue.set(statisticsData,'VueIS_VISIBLE','IS_VISIBLE');
 
            Vue.set(statisticsData,'VueEXPRESSION','EXPRESSION');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newStatistics").style.display="block";
 
});
 
}
 
});
 
    });
 

