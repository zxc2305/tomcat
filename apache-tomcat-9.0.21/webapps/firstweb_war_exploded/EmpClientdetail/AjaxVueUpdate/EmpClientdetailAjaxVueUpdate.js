var id;
 
var way;
 
var origin;
 
var firstCounselor;
 
var currentConsultant;
 
var assistantConsultant;
 
var entryTime;
 
var followUpRecord;
 
var level;
 
var moment;
 
var lastFollow;
 
var clientdetailData;
 
function newClientdetail(){
    var url="EmpClientdetailAjaxVueQuery";
 
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
 
    way=obj.way;
 
    origin=obj.origin;
 
    firstCounselor=obj.firstCounselor;
 
    currentConsultant=obj.currentConsultant;
 
    assistantConsultant=obj.assistantConsultant;
 
    entryTime=obj.entryTime;
 
    followUpRecord=obj.followUpRecord;
 
    level=obj.level;
 
    moment=obj.moment;
 
    lastFollow=obj.lastFollow;
 
        clientdetailData={
 
            VueId:id,
            VueWay:way,
            VueOrigin:origin,
            VueFirstCounselor:firstCounselor,
            VueCurrentConsultant:currentConsultant,
            VueAssistantConsultant:assistantConsultant,
            VueEntryTime:entryTime,
            VueFollowUpRecord:followUpRecord,
            VueLevel:level,
            VueMoment:moment,
            VueLastFollow:lastFollow    };
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueWay=way;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===way
 
            });
 
            vm.VueOrigin=origin;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===origin
 
            });
 
            vm.VueFirstCounselor=firstCounselor;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===firstCounselor
 
            });
 
            vm.VueCurrentConsultant=currentConsultant;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===currentConsultant
 
            });
 
            vm.VueAssistantConsultant=assistantConsultant;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===assistantConsultant
 
            });
 
            vm.VueEntryTime=entryTime;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===entryTime
 
            });
 
            vm.VueFollowUpRecord=followUpRecord;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===followUpRecord
 
            });
 
            vm.VueLevel=level;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===level
 
            });
 
            vm.VueMoment=moment;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===moment
 
            });
 
            vm.VueLastFollow=lastFollow;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===lastFollow
 
            });
 
                document.getElementById("newClientdetail").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newClientdetail();",500);
 

