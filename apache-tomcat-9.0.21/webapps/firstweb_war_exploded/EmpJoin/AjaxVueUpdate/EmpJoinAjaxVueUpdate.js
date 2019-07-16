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
 
function newJoin(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueGrade=grade;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===grade
 
            });
 
            vm.VueIdNumber=idNumber;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===idNumber
 
            });
 
            vm.VueCampus=campus;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===campus
 
            });
 
            vm.VuePlanTime=planTime;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===planTime
 
            });
 
            vm.VueSelectedSubjects=selectedSubjects;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===selectedSubjects
 
            });
 
            vm.VueProduct=product;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===product
 
            });
 
            vm.VueFee=fee;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===fee
 
            });
 
            vm.VueOtherFavourable=otherFavourable;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===otherFavourable
 
            });
 
            vm.VueIntroductionFavourable=IntroductionFavourable;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===IntroductionFavourable
 
            });
 
            vm.VueRegimentFavourable=regimentFavourable;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===regimentFavourable
 
            });
 
            vm.VueJoinDetail=joinDetail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===joinDetail
 
            });
 
                document.getElementById("newJoin").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newJoin();",500);
 

