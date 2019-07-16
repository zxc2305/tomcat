<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/12/15
  Time: 23:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>My First web</title>
  </head>
  <body>
  <form action="MyServlet" method="post">
    <input id="name" name="name" type="text">
    <input id="pwd"name="pwd" type="text">
    <input name="submit" type="submit" value="提交">
  </form>
  <div id="backc">
    <table align="center" border="0">
      <tr><td>父亲：</td></tr>
    </table>
  </div>
  </body>
</html>
