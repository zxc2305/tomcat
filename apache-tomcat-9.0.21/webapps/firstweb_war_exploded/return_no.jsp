<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/12/23
  Time: 23:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>显示序号</title>
</head>
<body>
<h1>
    该学号的同学名字为：<%=request.getAttribute("name")%>
</h1>
<form action="welcome.jsp" method="post">
    <input type="submit" value="返回" />
</form>


</body>
</html>
