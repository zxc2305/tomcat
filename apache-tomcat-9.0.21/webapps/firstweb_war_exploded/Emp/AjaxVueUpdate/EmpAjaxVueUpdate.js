document.write("AjaxVueUpdate.js");
document.write("<br>");

var name;
var age;
var sex;
function newRepeat() {
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
            // alert("yes");
            $.each(data,function(idx,obj){
                //    var li = document.createElement("li");
                //   li.innerHTML = "<a>" + obj.name +"<br>"+obj.age+"<br>"+obj.sex+ "</a>";
                ///document.getElementById("ul1").appendChild(li);
                name=obj.name;
                age=obj.age;
                sex=obj.sex;
                // alert(name+age+sex);
                newdata={
                    VueName:name,
                    VueSex:sex,
                    VueAge:age

                };
                vm.VueName=name
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent===name
                })
                vm.VueSex=sex
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent===sex
                })
                vm.VueAge=age
                // vm.$el.textContent==='new message'
                Vue.nextTick(function () {
                    vm.$el.textContent===age
                })
                document.getElementById("newApp").style.display="block";
            });
        }
    });
    // });

}
window.setInterval("newRepeat();",500);
