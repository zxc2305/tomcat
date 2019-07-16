<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/12/23
  Time: 23:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>测试显示</title>
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript">
    $("#myDiv").load("${base}/welcomeQuery?random=" + Math.random(),
    function(response, status, XMLHttpRequest) {
    var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus");
    if (sessionstatus == "timeout") {
    showDivDialog("relogin_dialog");
    }
    });
    </script>
</head>
<body><form action="myQuery" method="post">
    请输入学生姓名：<input type="text" name="name" /> <br /> 请输入学生学号：<input
        type="text" name="pwd" /> <br /> <input type="submit" value="查询" />
</form>
<form action="welcomeQuery" method="post">
<%= request.getAttribute("welcome.id(1).id") %>
<%= request.getAttribute("welcome.id(1).name") %>
<%= request.getAttribute("welcome.id(1).salary") %>
    <input type="submit" value="查询" />
</form>
<div id="myDiv"><%= request.getAttribute("welcome.id(1).id") %>
    <%= request.getAttribute("welcome.id(1).name") %>
    <%= request.getAttribute("welcome.id(1).salary") %></div>






<form action="MyTestQuery" method="post">
    <%= request.getAttribute("Test.name(1).name") %>
    <%= request.getAttribute("Test.id(1).id") %>
    <%= request.getAttribute("Test.password(1).password") %>
    <%= request.getAttribute("Test.value(1).value")%>
    <input type="submit" value="查询" />
</form>

<div id="mySecondDiv"><%= request.getAttribute("Testname") %>
</div>
</body>
</html>
