var id;
 
var nameNumber;
 
var followDegree;
 
var volume;
 
var money;
 
var pendingPayment;
 
var dealt;
 
var inform;
 
var notice;
 
var examine;
 
var noticeData;
 
$(function(){
    var url="EmpNoticeAjaxVueQuery";
 
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
 
    nameNumber=obj.nameNumber;
 
    followDegree=obj.followDegree;
 
    volume=obj.volume;
 
    money=obj.money;
 
    pendingPayment=obj.pendingPayment;
 
    dealt=obj.dealt;
 
    inform=obj.inform;
 
    notice=obj.notice;
 
    examine=obj.examine;
 
        noticeData={
 
            VueId:id,
            VueNameNumber:nameNumber,
            VueFollowDegree:followDegree,
            VueVolume:volume,
            VueMoney:money,
            VuePendingPayment:pendingPayment,
            VueDealt:dealt,
            VueInform:inform,
            VueNotice:notice,
            VueExamine:examine    };
 
        vmNotice=new Vue({
 
            el:'#newNotice',
 
            data:noticeData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(noticeData,'VueId','id');
 
            Vue.set(noticeData,'VueNameNumber','nameNumber');
 
            Vue.set(noticeData,'VueFollowDegree','followDegree');
 
            Vue.set(noticeData,'VueVolume','volume');
 
            Vue.set(noticeData,'VueMoney','money');
 
            Vue.set(noticeData,'VuePendingPayment','pendingPayment');
 
            Vue.set(noticeData,'VueDealt','dealt');
 
            Vue.set(noticeData,'VueInform','inform');
 
            Vue.set(noticeData,'VueNotice','notice');
 
            Vue.set(noticeData,'VueExamine','examine');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newNotice").style.display="block";
 
});
 
}
 
});
 
    });
 

