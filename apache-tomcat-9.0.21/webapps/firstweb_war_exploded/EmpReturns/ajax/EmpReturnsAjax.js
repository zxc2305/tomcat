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
 
$(function(){
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
 
        vmReturns=new Vue({
 
            el:'#newReturns',
 
            data:returnsData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(returnsData,'VueId','id');
 
            Vue.set(returnsData,'VueStudentName','studentName');
 
            Vue.set(returnsData,'VueBoardingTime','boardingTime');
 
            Vue.set(returnsData,'VueAdviser','adviser');
 
            Vue.set(returnsData,'VueReturnsType','returnsType');
 
            Vue.set(returnsData,'VueReceiptNumber','receiptNumber');
 
            Vue.set(returnsData,'VueReturnsData','returnsData');
 
            Vue.set(returnsData,'VueTrueFee','trueFee');
 
            Vue.set(returnsData,'VueUseFee','useFee');
 
            Vue.set(returnsData,'VueReturnsFee','returnsFee');
 
            Vue.set(returnsData,'VueRefundFee','refundFee');
 
            Vue.set(returnsData,'VueFinance','finance');
 
            Vue.set(returnsData,'VueReturnsDetail','returnsDetail');
 
            Vue.set(returnsData,'VueOperate','operate');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newReturns").style.display="block";
 
});
 
}
 
});
 
    });
 

