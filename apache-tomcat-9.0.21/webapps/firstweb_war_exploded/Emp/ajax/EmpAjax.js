document.write("Ajax.js");
document.write("<br>");
var name;
var sex;
var age;
var vm;
var newdata;
$(function(){
    //$("#btn").click(function(){
    var url = "newAjaxQuery";

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
                //  var li = document.createElement("li");
                //  li.innerHTML = "<a>" + obj.name +"<br>"+obj.age+"<br>"+obj.sex+ "</a>";
                ///document.getElementById("ul1").appendChild(li);
                name=obj.name;
                age=obj.age;
                sex=obj.sex;
                newdata={
                    VueName:name,
                    VueSex:sex,
                    VueAge:age
                };
                vm=new Vue({
                    el:'#newApp',
                    data:newdata,
                    methods:{

                        ready:function(){
                            Vue.set(newdata, 'VueAge', 'age');
                            Vue.set(newdata, 'VueName', 'name');
                            Vue.set(newdata, 'VueSex', 'sex');
                            alert("执行到这里了！");
                        }
                    }
                });

                vm.VueName='new message'
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent==='new message'
                })
                vm.VueSex='new message'
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent==='new message'
                })
                vm.VueAge='new message'
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent==='new message'
                })

                // };

                // window.setInterval("test();",10000);
                document.getElementById("newApp").style.display="block";
            });
        }
    });
    // });




});
