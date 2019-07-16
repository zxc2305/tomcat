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
 
$(function(){
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
 
        vmClient=new Vue({
 
            el:'#newClient',
 
            data:clientData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(clientData,'VueId','id');
 
            Vue.set(clientData,'VueName','name');
 
            Vue.set(clientData,'VueType','type');
 
            Vue.set(clientData,'VueSex','sex');
 
            Vue.set(clientData,'VueTelephone','telephone');
 
            Vue.set(clientData,'VueProvince','province');
 
            Vue.set(clientData,'VueSchool','school');
 
            Vue.set(clientData,'VueFreeTime','freeTime');
 
            Vue.set(clientData,'VueSession','session');
 
            Vue.set(clientData,'VueMajor','major');
 
            Vue.set(clientData,'VueFathePhone','fathePhone');
 
            Vue.set(clientData,'VueMotherPhone','motherPhone');
 
            Vue.set(clientData,'VueMail','mail');
 
            Vue.set(clientData,'VueQq','qq');
 
            Vue.set(clientData,'VueWeChat','WeChat');
 
            Vue.set(clientData,'VueDetail','detail');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newClient").style.display="block";
 
});
 
}
 
});
 
    });
 

