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
 
function newInstall(){
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
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueOperation=operation;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===operation
 
            });
 
            vm.VueNameOrigin=nameOrigin;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===nameOrigin
 
            });
 
            vm.VueOriginDetail=originDetail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===originDetail
 
            });
 
            vm.VueParameter=parameter;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===parameter
 
            });
 
            vm.VueLine=line;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===line
 
            });
 
            vm.VueDescribe=describe;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===describe
 
            });
 
            vm.VueEvaluationOptions=evaluationOptions;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===evaluationOptions
 
            });
 
            vm.VueValue=value;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===value
 
            });
 
            vm.VueProcess=process;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===process
 
            });
 
            vm.VueChangeStudentType=changeStudentType;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===changeStudentType
 
            });
 
            vm.VueFollowDetail=followDetail;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===followDetail
 
            });
 
                document.getElementById("newInstall").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newInstall();",500);
 

