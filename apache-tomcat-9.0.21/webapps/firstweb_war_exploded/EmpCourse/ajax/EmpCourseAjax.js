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
 
$(function(){
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
 
        vmCourse=new Vue({
 
            el:'#newCourse',
 
            data:courseData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(courseData,'VueId','id');
 
            Vue.set(courseData,'VueCourseName','courseName');
 
            Vue.set(courseData,'VueChargeType','chargeType');
 
            Vue.set(courseData,'VuePrice','price');
 
            Vue.set(courseData,'VueNumber','number');
 
            Vue.set(courseData,'VueClassHours','classHours');
 
            Vue.set(courseData,'VueVipHours','vipHours');
 
            Vue.set(courseData,'VueRegisteredStudent','registeredStudent');
 
            Vue.set(courseData,'VueMode','mode');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newCourse").style.display="block";
 
});
 
}
 
});
 
    });
 

