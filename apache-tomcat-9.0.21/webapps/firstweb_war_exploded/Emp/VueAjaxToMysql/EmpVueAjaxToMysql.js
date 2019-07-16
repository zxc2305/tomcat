document.write("VueAjaxToMysql.js");
document.write("<br>");

var example1 = new Vue({
    el: '#example',
    data: {
        items: {
            type1:'第一个输入框',
            type2:'第二个输入框'
        }
    },
    ready:function(){ },
    watch:{
        items:{
            handler:function(val,oldval){
                console.log(this.$refs.type1.value);
                //////////////////////////////////
                var url = "newAjaxVueQuery";
                $.ajax({
                    url:url,
                    type:"post",
                    dataType:"json",
                    data:{
                        type1:this.$refs.type1.value,
                        type2:this.$refs.type2.value
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                        alert(XMLHttpRequest);
                        alert(textStatus);
                        alert(errorThrown);
                    },
                    success:function(data){
                        // alert("yes");
                        $.each(data,function(idx,obj){
                            var li = document.createElement("li");
                            li.innerHTML = "<a>" + obj.name +"<br>"+obj.age+"<br>"+obj.sex+ "</a>";
                            ///document.getElementById("ul1").appendChild(li);
                            name=obj.name;
                            age=obj.age;
                            sex=obj.sex;
                            // alert(name+age+sex);
                            exampleData={
                                VueName:name,
                                VueSex:sex,
                                VueAge:age

                            };
                            vm.VueName=name;
                            // vm.$el.textContent==='new message'
                            Vue.nextTick(function () {
                                vm.$el.textContent===name
                            })
                            vm.VueSex=sex;
                            // vm.$el.textContent==='new message'
                            Vue.nextTick(function () {
                                vm.$el.textContent===sex
                            })
                            vm.VueAge=age;
                            // vm.$el.textContent==='new message'
                            Vue.nextTick(function () {
                                vm.$el.textContent===age
                            })
                            document.getElementById("newApp").style.display="block";
                        });
                    }
                });
                //////////////////////////////////


                console.log(this.$refs.type2.value);
            },
            deep:true
        } },
    methods:{
    }
})