var id;
 
var studentName;
 
var boardingTime;
 
var adviser;
 
var returnsType;
 
var receiptNumber;
 
var returnsData;
 
var trueFee;
 
var useFee;
 
var returnsFee;
 
var refundFee;
 
var finance;
 
var returnsDetail;
 
var operate;
 
var returnsData;
 
function newReturns(){
    var url="EmpReturnsAjaxVueQuery";
 
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
 
    studentName=obj.studentName;
 
    boardingTime=obj.boardingTime;
 
    adviser=obj.adviser;
 
    returnsType=obj.returnsType;
 
    receiptNumber=obj.receiptNumber;
 
    returnsData=obj.returnsData;
 
    trueFee=obj.trueFee;
 
    useFee=obj.useFee;
 
    returnsFee=obj.returnsFee;
 
    refundFee=obj.refundFee;
 
    finance=obj.finance;
 
    returnsDetail=obj.returnsDetail;
 
    operate=obj.operate;
 
        returnsData={
 
            VueId:id,
            VueStudentName:studentName,
            VueBoardingTime:boardingTime,
            VueAdviser:adviser,
            VueReturnsType:returnsType,
            VueReceiptNumber:receiptNumber,
            VueReturnsData:returnsData,
            VueTrueFee:trueFee,
            VueUseFee:useFee,
            VueReturnsFee:returnsFee,
            VueRefundFee:refundFee,
            VueFinance:finance,
            VueReturnsDetail:returnsDetail,
            VueOperate:operate    };
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueStudentName=studentName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===studentName
 
            });
 
            vm.VueBoardingTime=boardingTime;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===boardingTime
 
            });
 
            vm.VueAdviser=adviser;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===adviser
 
            });
 
            vm.VueReturnsType=returnsType;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsType
 
            });
 
            vm.VueReceiptNumber=receiptNumber;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===receiptNumber
 
            });
 
            vm.VueReturnsData=returnsData;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsData
 
            });
 
            vm.VueTrueFee=trueFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===trueFee
 
            });
 
            vm.VueUseFee=useFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===useFee
 
            });
 
            vm.VueReturnsFee=returnsFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsFee
 
            });
 
            vm.VueRefundFee=refundFee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===refundFee
 
            });
 
            vm.VueFinance=finance;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===finance
 
            });
 
            vm.VueReturnsDetail=returnsDetail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===returnsDetail
 
            });
 
            vm.VueOperate=operate;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===operate
 
            });
 
                document.getElementById("newReturns").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newReturns();",500);
 

