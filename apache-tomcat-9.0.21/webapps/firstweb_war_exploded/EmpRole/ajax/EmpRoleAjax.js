var id;
 
var roleName;
 
var personnel;
 
var roleData;
 
$(function(){
    var url="EmpRoleAjaxVueQuery";
 
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
 
    roleName=obj.roleName;
 
    personnel=obj.personnel;
 
        roleData={
 
            VueId:id,
            VueRoleName:roleName,
            VuePersonnel:personnel    };
 
        vmRole=new Vue({
 
            el:'#newRole',
 
            data:roleData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(roleData,'VueId','id');
 
            Vue.set(roleData,'VueRoleName','roleName');
 
            Vue.set(roleData,'VuePersonnel','personnel');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newRole").style.display="block";
 
});
 
}
 
});
 
    });
 

