var id;
 
var house;
 
var traffic;
 
var distance;
 
var brandFamilar;
 
var brandApprove;
 
var familySuggestion;
 
var purpose;
 
var researchData;
 
$(function(){
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
 
        vmResearch=new Vue({
 
            el:'#newResearch',
 
            data:researchData,
 

                    methods:{

                        ready:function(){
                            
 
            Vue.set(researchData,'VueId','id');
 
            Vue.set(researchData,'VueHouse','house');
 
            Vue.set(researchData,'VueTraffic','traffic');
 
            Vue.set(researchData,'VueDistance','distance');
 
            Vue.set(researchData,'VueBrandFamilar','brandFamilar');
 
            Vue.set(researchData,'VueBrandApprove','brandApprove');
 
            Vue.set(researchData,'VueFamilySuggestion','familySuggestion');
 
            Vue.set(researchData,'VuePurpose','purpose');
 
        }
 
        }
 
        }
 
        );
 
            document.getElementById("newResearch").style.display="block";
 
});
 
}
 
});
 
    });
 

