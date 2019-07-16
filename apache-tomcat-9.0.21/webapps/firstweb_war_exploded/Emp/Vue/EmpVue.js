document.write("Vue.js");
document.write("<br>");
var exampleData={
    message:'ii',
    test:'ll'
}
// 创建一个 Vue 实例或 "ViewModel"
// 它连接 View 与 Model
new Vue({
    el: '#app',
    data: exampleData

})
var planData={
    VueName: "name",
    VueAge: "20",
    VueSex: "男"
}
/*
new Vue({
    el:'#newApp',
    data:planData
})
*/