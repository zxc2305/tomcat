var id;
 
var consultantName;
 
var amount;
 
var money;
 
var trueMoney;
 
var sundryFee;
 
var returnsAmount;
 
var returnsTrueMoney;
 
var returnTrueSundryFee;
 
var day;
 
var newPeople;
 
var visitAmount;
 
var effectiveVisit;
 
var invalidVisit;
 
var followAmount;
 
var name;
 
var newClient;
 
var trueJoin;
 
var readyJoin;
 
var trueJoinPercent;
 
var newSupply;
 
var returnsMoney;
 
var otherMoney;
 
var sundry;
 
var allAmount;
 
var channel;
 
var onWay;
 
var Introduction;
 
var association;
 
var roster;
 
var directCall;
 
var programme;
 
var onLine;
 
var customService;
 
var consultantData;
 
$(function(){
    var url="EmpConsultantAjaxVueQuery";
 
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
 
    consultantName=obj.consultantName;
 
    amount=obj.amount;
 
    money=obj.money;
 
    trueMoney=obj.trueMoney;
 
    sundryFee=obj.sundryFee;
 
    returnsAmount=obj.returnsAmount;
 
    returnsTrueMoney=obj.returnsTrueMoney;
 
    returnTrueSundryFee=obj.returnTrueSundryFee;
 
    day=obj.day;
 
    newPeople=obj.newPeople;
 
    visitAmount=obj.visitAmount;
 
    effectiveVisit=obj.effectiveVisit;
 
    invalidVisit=obj.invalidVisit;
 
    followAmount=obj.followAmount;
 
    name=obj.name;
 
    newClient=obj.newClient;
 
    trueJoin=obj.trueJoin;
 
    readyJoin=obj.readyJoin;
 
    trueJoinPercent=obj.trueJoinPercent;
 
    newSupply=obj.newSupply;
 
    returnsMoney=obj.returnsMoney;
 
    otherMoney=obj.otherMoney;
 
    sundry=obj.sundry;
 
    allAmount=obj.allAmount;
 
    channel=obj.channel;
 
    onWay=obj.onWay;
 
    Introduction=obj.Introduction;
 
    association=obj.association;
 
    roster=obj.roster;
 
    directCall=obj.directCall;
 
    programme=obj.programme;
 
    onLine=obj.onLine;
 
    customService=obj.customService;
 
        consultantData={
 
            VueId:id,
            VueConsultantName:consultantName,
            VueAmount:amount,
            VueMoney:money,
            VueTrueMoney:trueMoney,
            VueSundryFee:sundryFee,
            VueReturnsAmount:returnsAmount,
            VueReturnsTrueMoney:returnsTrueMoney,
            VueReturnTrueSundryFee:returnTrueSundryFee,
            VueDay:day,
            VueNewPeople:newPeople,
            VueVisitAmount:visitAmount,
            VueEffectiveVisit:effectiveVisit,
            VueInvalidVisit:invalidVisit,
            VueFollowAmount:followAmount,
            VueName:name,
            VueNewClient:newClient,
            VueTrueJoin:trueJoin,
            VueReadyJoin:readyJoin,
            VueTrueJoinPercent:trueJoinPercent,
            VueNewSupply:newSupply,
            VueReturnsMoney:returnsMoney,
            VueOtherMoney:otherMoney,
            VueSundry:sundry,
            VueAllAmount:allAmount,
            VueChannel:channel,
            VueOnWay:onWay,
            VueIntroduction:Introduction,
            VueAssociation:association,
            VueRoster:roster,
            VueDirectCall:directCall,
            VueProgramme:programme,
            VueOnLine:onLine,
            VueCustomService:customService    };
 
        vmConsultant=new Vue({
 
            el:'#newConsultant',
 
            data:consultantData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(consultantData,'VueId','id');
 
            Vue.set(consultantData,'VueConsultantName','consultantName');
 
            Vue.set(consultantData,'VueAmount','amount');
 
            Vue.set(consultantData,'VueMoney','money');
 
            Vue.set(consultantData,'VueTrueMoney','trueMoney');
 
            Vue.set(consultantData,'VueSundryFee','sundryFee');
 
            Vue.set(consultantData,'VueReturnsAmount','returnsAmount');
 
            Vue.set(consultantData,'VueReturnsTrueMoney','returnsTrueMoney');
 
            Vue.set(consultantData,'VueReturnTrueSundryFee','returnTrueSundryFee');
 
            Vue.set(consultantData,'VueDay','day');
 
            Vue.set(consultantData,'VueNewPeople','newPeople');
 
            Vue.set(consultantData,'VueVisitAmount','visitAmount');
 
            Vue.set(consultantData,'VueEffectiveVisit','effectiveVisit');
 
            Vue.set(consultantData,'VueInvalidVisit','invalidVisit');
 
            Vue.set(consultantData,'VueFollowAmount','followAmount');
 
            Vue.set(consultantData,'VueName','name');
 
            Vue.set(consultantData,'VueNewClient','newClient');
 
            Vue.set(consultantData,'VueTrueJoin','trueJoin');
 
            Vue.set(consultantData,'VueReadyJoin','readyJoin');
 
            Vue.set(consultantData,'VueTrueJoinPercent','trueJoinPercent');
 
            Vue.set(consultantData,'VueNewSupply','newSupply');
 
            Vue.set(consultantData,'VueReturnsMoney','returnsMoney');
 
            Vue.set(consultantData,'VueOtherMoney','otherMoney');
 
            Vue.set(consultantData,'VueSundry','sundry');
 
            Vue.set(consultantData,'VueAllAmount','allAmount');
 
            Vue.set(consultantData,'VueChannel','channel');
 
            Vue.set(consultantData,'VueOnWay','onWay');
 
            Vue.set(consultantData,'VueIntroduction','Introduction');
 
            Vue.set(consultantData,'VueAssociation','association');
 
            Vue.set(consultantData,'VueRoster','roster');
 
            Vue.set(consultantData,'VueDirectCall','directCall');
 
            Vue.set(consultantData,'VueProgramme','programme');
 
            Vue.set(consultantData,'VueOnLine','onLine');
 
            Vue.set(consultantData,'VueCustomService','customService');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newConsultant").style.display="block";
 
});
 
}
 
});
 
    });
 

