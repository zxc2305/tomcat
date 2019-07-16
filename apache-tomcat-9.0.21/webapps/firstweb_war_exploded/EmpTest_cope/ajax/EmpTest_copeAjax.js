var name;
 
var id;
 
var password;
 
var value;
 
var test_copeData;
 
$(function(){
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
 
        vmTest_cope=new Vue({
 
            el:'#newTest_cope',
 
            data:test_copeData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(test_copeData,'VueName','name');
 
            Vue.set(test_copeData,'VueId','id');
 
            Vue.set(test_copeData,'VuePassword','password');
 
            Vue.set(test_copeData,'VueValue','value');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newTest_cope").style.display="block";
 
});
 
}
 
});
 
    });
 

