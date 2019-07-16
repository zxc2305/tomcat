var id;
 
var roleName;
 
var personnel;
 
var roleData;
 
function newRole(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueRoleName=roleName;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===roleName
 
            });
 
            vm.VuePersonnel=personnel;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===personnel
 
            });
 
                document.getElementById("newRole").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newRole();",500);
 

