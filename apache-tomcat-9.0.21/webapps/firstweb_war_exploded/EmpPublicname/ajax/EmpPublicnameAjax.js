var id;
 
var name;
 
var type;
 
var telephone;
 
var school;
 
var session;
 
var campus;
 
var major;
 
var freeTime;
 
var currentConsultant;
 
var publicnameData;
 
$(function(){
    var url="EmpPublicnameAjaxVueQuery";
 
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
 
    name=obj.name;
 
    type=obj.type;
 
    telephone=obj.telephone;
 
    school=obj.school;
 
    session=obj.session;
 
    campus=obj.campus;
 
    major=obj.major;
 
    freeTime=obj.freeTime;
 
    currentConsultant=obj.currentConsultant;
 
        publicnameData={
 
            VueId:id,
            VueName:name,
            VueType:type,
            VueTelephone:telephone,
            VueSchool:school,
            VueSession:session,
            VueCampus:campus,
            VueMajor:major,
            VueFreeTime:freeTime,
            VueCurrentConsultant:currentConsultant    };
 
        vmPublicname=new Vue({
 
            el:'#newPublicname',
 
            data:publicnameData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(publicnameData,'VueId','id');
 
            Vue.set(publicnameData,'VueName','name');
 
            Vue.set(publicnameData,'VueType','type');
 
            Vue.set(publicnameData,'VueTelephone','telephone');
 
            Vue.set(publicnameData,'VueSchool','school');
 
            Vue.set(publicnameData,'VueSession','session');
 
            Vue.set(publicnameData,'VueCampus','campus');
 
            Vue.set(publicnameData,'VueMajor','major');
 
            Vue.set(publicnameData,'VueFreeTime','freeTime');
 
            Vue.set(publicnameData,'VueCurrentConsultant','currentConsultant');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newPublicname").style.display="block";
 
});
 
}
 
});
 
    });
 

