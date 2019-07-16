var id;
 
var grade;
 
var idNumber;
 
var campus;
 
var planTime;
 
var selectedSubjects;
 
var product;
 
var fee;
 
var otherFavourable;
 
var IntroductionFavourable;
 
var regimentFavourable;
 
var joinDetail;
 
var joinData;
 
$(function(){
    var url="EmpJoinAjaxVueQuery";
 
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
 
    grade=obj.grade;
 
    idNumber=obj.idNumber;
 
    campus=obj.campus;
 
    planTime=obj.planTime;
 
    selectedSubjects=obj.selectedSubjects;
 
    product=obj.product;
 
    fee=obj.fee;
 
    otherFavourable=obj.otherFavourable;
 
    IntroductionFavourable=obj.IntroductionFavourable;
 
    regimentFavourable=obj.regimentFavourable;
 
    joinDetail=obj.joinDetail;
 
        joinData={
 
            VueId:id,
            VueGrade:grade,
            VueIdNumber:idNumber,
            VueCampus:campus,
            VuePlanTime:planTime,
            VueSelectedSubjects:selectedSubjects,
            VueProduct:product,
            VueFee:fee,
            VueOtherFavourable:otherFavourable,
            VueIntroductionFavourable:IntroductionFavourable,
            VueRegimentFavourable:regimentFavourable,
            VueJoinDetail:joinDetail    };
 
        vmJoin=new Vue({
 
            el:'#newJoin',
 
            data:joinData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(joinData,'VueId','id');
 
            Vue.set(joinData,'VueGrade','grade');
 
            Vue.set(joinData,'VueIdNumber','idNumber');
 
            Vue.set(joinData,'VueCampus','campus');
 
            Vue.set(joinData,'VuePlanTime','planTime');
 
            Vue.set(joinData,'VueSelectedSubjects','selectedSubjects');
 
            Vue.set(joinData,'VueProduct','product');
 
            Vue.set(joinData,'VueFee','fee');
 
            Vue.set(joinData,'VueOtherFavourable','otherFavourable');
 
            Vue.set(joinData,'VueIntroductionFavourable','IntroductionFavourable');
 
            Vue.set(joinData,'VueRegimentFavourable','regimentFavourable');
 
            Vue.set(joinData,'VueJoinDetail','joinDetail');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newJoin").style.display="block";
 
});
 
}
 
});
 
    });
 

