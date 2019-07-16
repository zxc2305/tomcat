var name;
 
var id;
 
var password;
 
var value;
 
var testData;
 
$(function(){
    var url="EmpTestAjaxVueQuery";
 
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
 
        testData={
 
            VueName:name,
            VueId:id,
            VuePassword:password,
            VueValue:value    };
 
        vmTest=new Vue({
 
            el:'#newTest',
 
            data:testData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(testData,'VueName','name');
 
            Vue.set(testData,'VueId','id');
 
            Vue.set(testData,'VuePassword','password');
 
            Vue.set(testData,'VueValue','value');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newTest").style.display="block";
 
});
 
}
 
});
 
    });
 

