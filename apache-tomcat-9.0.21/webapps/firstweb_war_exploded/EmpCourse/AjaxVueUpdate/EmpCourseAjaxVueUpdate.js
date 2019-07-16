var id;
 
var courseName;
 
var chargeType;
 
var price;
 
var number;
 
var classHours;
 
var vipHours;
 
var registeredStudent;
 
var mode;
 
var courseData;
 
function newCourse(){
    var url="EmpCourseAjaxVueQuery";
 
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
 
    courseName=obj.courseName;
 
    chargeType=obj.chargeType;
 
    price=obj.price;
 
    number=obj.number;
 
    classHours=obj.classHours;
 
    vipHours=obj.vipHours;
 
    registeredStudent=obj.registeredStudent;
 
    mode=obj.mode;
 
        courseData={
 
            VueId:id,
            VueCourseName:courseName,
            VueChargeType:chargeType,
            VuePrice:price,
            VueNumber:number,
            VueClassHours:classHours,
            VueVipHours:vipHours,
            VueRegisteredStudent:registeredStudent,
            VueMode:mode    };
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueCourseName=courseName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===courseName
 
            });
 
            vm.VueChargeType=chargeType;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===chargeType
 
            });
 
            vm.VuePrice=price;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===price
 
            });
 
            vm.VueNumber=number;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===number
 
            });
 
            vm.VueClassHours=classHours;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===classHours
 
            });
 
            vm.VueVipHours=vipHours;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===vipHours
 
            });
 
            vm.VueRegisteredStudent=registeredStudent;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===registeredStudent
 
            });
 
            vm.VueMode=mode;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===mode
 
            });
 
                document.getElementById("newCourse").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newCourse();",500);
 

