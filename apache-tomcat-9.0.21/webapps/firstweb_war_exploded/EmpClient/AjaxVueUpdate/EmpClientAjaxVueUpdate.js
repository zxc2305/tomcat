var id;
 
var name;
 
var type;
 
var sex;
 
var telephone;
 
var province;
 
var school;
 
var freeTime;
 
var session;
 
var major;
 
var fathePhone;
 
var motherPhone;
 
var mail;
 
var qq;
 
var WeChat;
 
var detail;
 
var clientData;
 
function newClient(){
    var url="EmpClientAjaxVueQuery";
 
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
 
    sex=obj.sex;
 
    telephone=obj.telephone;
 
    province=obj.province;
 
    school=obj.school;
 
    freeTime=obj.freeTime;
 
    session=obj.session;
 
    major=obj.major;
 
    fathePhone=obj.fathePhone;
 
    motherPhone=obj.motherPhone;
 
    mail=obj.mail;
 
    qq=obj.qq;
 
    WeChat=obj.WeChat;
 
    detail=obj.detail;
 
        clientData={
 
            VueId:id,
            VueName:name,
            VueType:type,
            VueSex:sex,
            VueTelephone:telephone,
            VueProvince:province,
            VueSchool:school,
            VueFreeTime:freeTime,
            VueSession:session,
            VueMajor:major,
            VueFathePhone:fathePhone,
            VueMotherPhone:motherPhone,
            VueMail:mail,
            VueQq:qq,
            VueWeChat:WeChat,
            VueDetail:detail    };
 
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
 
            vm.VueSex=sex;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===sex
 
            });
 
            vm.VueTelephone=telephone;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===telephone
 
            });
 
            vm.VueProvince=province;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===province
 
            });
 
            vm.VueSchool=school;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===school
 
            });
 
            vm.VueFreeTime=freeTime;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===freeTime
 
            });
 
            vm.VueSession=session;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===session
 
            });
 
            vm.VueMajor=major;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===major
 
            });
 
            vm.VueFathePhone=fathePhone;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===fathePhone
 
            });
 
            vm.VueMotherPhone=motherPhone;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===motherPhone
 
            });
 
            vm.VueMail=mail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===mail
 
            });
 
            vm.VueQq=qq;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===qq
 
            });
 
            vm.VueWeChat=WeChat;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===WeChat
 
            });
 
            vm.VueDetail=detail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===detail
 
            });
 
                document.getElementById("newClient").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newClient();",500);
 

