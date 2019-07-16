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
 
function newNotice(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueNameNumber=nameNumber;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===nameNumber
 
            });
 
            vm.VueFollowDegree=followDegree;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===followDegree
 
            });
 
            vm.VueVolume=volume;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===volume
 
            });
 
            vm.VueMoney=money;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===money
 
            });
 
            vm.VuePendingPayment=pendingPayment;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===pendingPayment
 
            });
 
            vm.VueDealt=dealt;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===dealt
 
            });
 
            vm.VueInform=inform;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===inform
 
            });
 
            vm.VueNotice=notice;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===notice
 
            });
 
            vm.VueExamine=examine;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===examine
 
            });
 
                document.getElementById("newNotice").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newNotice();",500);
 

