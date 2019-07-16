var id;
 
var house;
 
var traffic;
 
var distance;
 
var brandFamilar;
 
var brandApprove;
 
var familySuggestion;
 
var purpose;
 
var researchData;
 
function newResearch(){
    var url="EmpResearchAjaxVueQuery";
 
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
 
    house=obj.house;
 
    traffic=obj.traffic;
 
    distance=obj.distance;
 
    brandFamilar=obj.brandFamilar;
 
    brandApprove=obj.brandApprove;
 
    familySuggestion=obj.familySuggestion;
 
    purpose=obj.purpose;
 
        researchData={
 
            VueId:id,
            VueHouse:house,
            VueTraffic:traffic,
            VueDistance:distance,
            VueBrandFamilar:brandFamilar,
            VueBrandApprove:brandApprove,
            VueFamilySuggestion:familySuggestion,
            VuePurpose:purpose    };
 
            vm.VueId=id;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===id
 
            });
 
            vm.VueHouse=house;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===house
 
            });
 
            vm.VueTraffic=traffic;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===traffic
 
            });
 
            vm.VueDistance=distance;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===distance
 
            });
 
            vm.VueBrandFamilar=brandFamilar;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===brandFamilar
 
            });
 
            vm.VueBrandApprove=brandApprove;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===brandApprove
 
            });
 
            vm.VueFamilySuggestion=familySuggestion;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===familySuggestion
 
            });
 
            vm.VuePurpose=purpose;
 
            Vue.nextTick(function(){
 
                vm.$el.textContent===purpose
 
            });
 
                document.getElementById("newResearch").style.display="block";
 
});
 
}
 
});
 
    };
 
        window.setInterval("newResearch();",500);
 

