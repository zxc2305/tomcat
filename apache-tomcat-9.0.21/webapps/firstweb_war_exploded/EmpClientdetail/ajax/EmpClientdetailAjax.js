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
 
$(function(){
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
 
        vmClientdetail=new Vue({
 
            el:'#newClientdetail',
 
            data:clientdetailData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(clientdetailData,'VueId','id');
 
            Vue.set(clientdetailData,'VueWay','way');
 
            Vue.set(clientdetailData,'VueOrigin','origin');
 
            Vue.set(clientdetailData,'VueFirstCounselor','firstCounselor');
 
            Vue.set(clientdetailData,'VueCurrentConsultant','currentConsultant');
 
            Vue.set(clientdetailData,'VueAssistantConsultant','assistantConsultant');
 
            Vue.set(clientdetailData,'VueEntryTime','entryTime');
 
            Vue.set(clientdetailData,'VueFollowUpRecord','followUpRecord');
 
            Vue.set(clientdetailData,'VueLevel','level');
 
            Vue.set(clientdetailData,'VueMoment','moment');
 
            Vue.set(clientdetailData,'VueLastFollow','lastFollow');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newClientdetail").style.display="block";
 
});
 
}
 
});
 
    });
 

