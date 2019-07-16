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
 
function newPublicname(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueName=name;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===name
 
            });
 
            vm.VueType=type;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===type
 
            });
 
            vm.VueTelephone=telephone;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===telephone
 
            });
 
            vm.VueSchool=school;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===school
 
            });
 
            vm.VueSession=session;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===session
 
            });
 
            vm.VueCampus=campus;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===campus
 
            });
 
            vm.VueMajor=major;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===major
 
            });
 
            vm.VueFreeTime=freeTime;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===freeTime
 
            });
 
            vm.VueCurrentConsultant=currentConsultant;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===currentConsultant
 
            });
 
                document.getElementById("newPublicname").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newPublicname();",500);
 

