var id;
 
var operation;
 
var nameOrigin;
 
var originDetail;
 
var parameter;
 
var line;
 
var describe;
 
var evaluationOptions;
 
var value;
 
var process;
 
var changeStudentType;
 
var followDetail;
 
var installData;
 
$(function(){
    var url="EmpInstallAjaxVueQuery";
 
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
 
    operation=obj.operation;
 
    nameOrigin=obj.nameOrigin;
 
    originDetail=obj.originDetail;
 
    parameter=obj.parameter;
 
    line=obj.line;
 
    describe=obj.describe;
 
    evaluationOptions=obj.evaluationOptions;
 
    value=obj.value;
 
    process=obj.process;
 
    changeStudentType=obj.changeStudentType;
 
    followDetail=obj.followDetail;
 
        installData={
 
            VueId:id,
            VueOperation:operation,
            VueNameOrigin:nameOrigin,
            VueOriginDetail:originDetail,
            VueParameter:parameter,
            VueLine:line,
            VueDescribe:describe,
            VueEvaluationOptions:evaluationOptions,
            VueValue:value,
            VueProcess:process,
            VueChangeStudentType:changeStudentType,
            VueFollowDetail:followDetail    };
 
        vmInstall=new Vue({
 
            el:'#newInstall',
 
            data:installData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(installData,'VueId','id');
 
            Vue.set(installData,'VueOperation','operation');
 
            Vue.set(installData,'VueNameOrigin','nameOrigin');
 
            Vue.set(installData,'VueOriginDetail','originDetail');
 
            Vue.set(installData,'VueParameter','parameter');
 
            Vue.set(installData,'VueLine','line');
 
            Vue.set(installData,'VueDescribe','describe');
 
            Vue.set(installData,'VueEvaluationOptions','evaluationOptions');
 
            Vue.set(installData,'VueValue','value');
 
            Vue.set(installData,'VueProcess','process');
 
            Vue.set(installData,'VueChangeStudentType','changeStudentType');
 
            Vue.set(installData,'VueFollowDetail','followDetail');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newInstall").style.display="block";
 
});
 
}
 
});
 
    });
 

