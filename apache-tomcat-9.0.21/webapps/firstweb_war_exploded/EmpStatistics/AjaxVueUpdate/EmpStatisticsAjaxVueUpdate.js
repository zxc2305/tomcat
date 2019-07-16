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
 
function newStatistics(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueGetName=getName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===getName
 
            });
 
            vm.VuePutName=putName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===putName
 
            });
 
            vm.VueMonthAll=monthAll;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===monthAll
 
            });
 
            vm.VuePercentConversion=percentConversion;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===percentConversion
 
            });
 
            vm.VueDayAll=dayAll;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===dayAll
 
            });
 
            vm.VueWeekAll=weekAll;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===weekAll
 
            });
 
            vm.VueFollowTimeCount=followTimeCount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===followTimeCount
 
            });
 
            vm.VueNameAll=nameAll;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===nameAll
 
            });
 
            vm.VueThreeDaysNoFollow=threeDaysNoFollow;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===threeDaysNoFollow
 
            });
 
            vm.VueOneWeekNoFollow=oneWeekNoFollow;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===oneWeekNoFollow
 
            });
 
            vm.VueTwoWeekNoFollow=twoWeekNoFollow;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===twoWeekNoFollow
 
            });
 
            vm.VueOneMonthNoFollow=oneMonthNoFollow;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===oneMonthNoFollow
 
            });
 
            vm.VueJoinClient=joinClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===joinClient
 
            });
 
            vm.VueReadyClient=readyClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===readyClient
 
            });
 
            vm.VueTryClient=tryClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===tryClient
 
            });
 
            vm.VuePurposeClient=purposeClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===purposeClient
 
            });
 
            vm.VueNoAnswerClient=noAnswerClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===noAnswerClient
 
            });
 
            vm.VueNewClient=newClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===newClient
 
            });
 
            vm.VueNeedClient=needClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===needClient
 
            });
 
            vm.VueInvalidClient=invalidClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===invalidClient
 
            });
 
            vm.VueBlacklistClient=blacklistClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===blacklistClient
 
            });
 
            vm.VueTABLE_CATALOG=TABLE_CATALOG;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===TABLE_CATALOG
 
            });
 
            vm.VueTABLE_SCHEMA=TABLE_SCHEMA;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===TABLE_SCHEMA
 
            });
 
            vm.VueTABLE_NAME=TABLE_NAME;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===TABLE_NAME
 
            });
 
            vm.VueNON_UNIQUE=NON_UNIQUE;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===NON_UNIQUE
 
            });
 
            vm.VueINDEX_SCHEMA=INDEX_SCHEMA;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===INDEX_SCHEMA
 
            });
 
            vm.VueINDEX_NAME=INDEX_NAME;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===INDEX_NAME
 
            });
 
            vm.VueSEQ_IN_INDEX=SEQ_IN_INDEX;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===SEQ_IN_INDEX
 
            });
 
            vm.VueCOLUMN_NAME=COLUMN_NAME;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===COLUMN_NAME
 
            });
 
            vm.VueCOLLATION=COLLATION;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===COLLATION
 
            });
 
            vm.VueCARDINALITY=CARDINALITY;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===CARDINALITY
 
            });
 
            vm.VueSUB_PART=SUB_PART;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===SUB_PART
 
            });
 
            vm.VuePACKED=PACKED;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===PACKED
 
            });
 
            vm.VueNULLABLE=NULLABLE;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===NULLABLE
 
            });
 
            vm.VueINDEX_TYPE=INDEX_TYPE;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===INDEX_TYPE
 
            });
 
            vm.VueCOMMENT=COMMENT;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===COMMENT
 
            });
 
            vm.VueINDEX_COMMENT=INDEX_COMMENT;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===INDEX_COMMENT
 
            });
 
            vm.VueIS_VISIBLE=IS_VISIBLE;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===IS_VISIBLE
 
            });
 
            vm.VueEXPRESSION=EXPRESSION;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===EXPRESSION
 
            });
 
                document.getElementById("newStatistics").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newStatistics();",500);
 

