var name;
 
var id;
 
var password;
 
var value;
 
var test_copeData;
 
function newTest_cope(){
    var url="EmpTest_copeAjaxVueQuery";
 
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
 
    name=obj.name;
 
    id=obj.id;
 
    password=obj.password;
 
    value=obj.value;
 
        test_copeData={
 
            VueName:name,
            VueId:id,
            VuePassword:password,
            VueValue:value    };
 
            vm.VueName=name;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===name
 
            });
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VuePassword=password;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===password
 
            });
 
            vm.VueValue=value;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===value
 
            });
 
                document.getElementById("newTest_cope").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newTest_cope();",500);
 

