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
 
function newConsultant(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueConsultantName=consultantName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===consultantName
 
            });
 
            vm.VueAmount=amount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===amount
 
            });
 
            vm.VueMoney=money;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===money
 
            });
 
            vm.VueTrueMoney=trueMoney;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===trueMoney
 
            });
 
            vm.VueSundryFee=sundryFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===sundryFee
 
            });
 
            vm.VueReturnsAmount=returnsAmount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsAmount
 
            });
 
            vm.VueReturnsTrueMoney=returnsTrueMoney;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsTrueMoney
 
            });
 
            vm.VueReturnTrueSundryFee=returnTrueSundryFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnTrueSundryFee
 
            });
 
            vm.VueDay=day;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===day
 
            });
 
            vm.VueNewPeople=newPeople;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===newPeople
 
            });
 
            vm.VueVisitAmount=visitAmount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===visitAmount
 
            });
 
            vm.VueEffectiveVisit=effectiveVisit;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===effectiveVisit
 
            });
 
            vm.VueInvalidVisit=invalidVisit;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===invalidVisit
 
            });
 
            vm.VueFollowAmount=followAmount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===followAmount
 
            });
 
            vm.VueName=name;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===name
 
            });
 
            vm.VueNewClient=newClient;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===newClient
 
            });
 
            vm.VueTrueJoin=trueJoin;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===trueJoin
 
            });
 
            vm.VueReadyJoin=readyJoin;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===readyJoin
 
            });
 
            vm.VueTrueJoinPercent=trueJoinPercent;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===trueJoinPercent
 
            });
 
            vm.VueNewSupply=newSupply;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===newSupply
 
            });
 
            vm.VueReturnsMoney=returnsMoney;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsMoney
 
            });
 
            vm.VueOtherMoney=otherMoney;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===otherMoney
 
            });
 
            vm.VueSundry=sundry;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===sundry
 
            });
 
            vm.VueAllAmount=allAmount;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===allAmount
 
            });
 
            vm.VueChannel=channel;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===channel
 
            });
 
            vm.VueOnWay=onWay;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===onWay
 
            });
 
            vm.VueIntroduction=Introduction;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===Introduction
 
            });
 
            vm.VueAssociation=association;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===association
 
            });
 
            vm.VueRoster=roster;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===roster
 
            });
 
            vm.VueDirectCall=directCall;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===directCall
 
            });
 
            vm.VueProgramme=programme;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===programme
 
            });
 
            vm.VueOnLine=onLine;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===onLine
 
            });
 
            vm.VueCustomService=customService;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===customService
 
            });
 
                document.getElementById("newConsultant").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newConsultant();",500);
 

