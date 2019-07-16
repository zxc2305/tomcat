<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/12/23
  Time: 3:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>add/show</title>
</head>
<script type="text/javascript" language="javascript">
    function goPage(page){
        location.href="fenye.do?currentPage="+page;
    }
</script>

<body>
<div>
    <table width="100%" border="0" align="center" cellspacing="1" >
        <c:forEach items="${paging.dataList }" var="upl">
            <tr>
                <td align="center">${upl.name1 }</td>
                <td align="center">${upl.name2 }</td>
                <td align="center">${upl.name3 }</td>
            </tr>
        </c:forEach>
    </table>
</div>
<div style="text-align:center; margin-top:10px;color: white;" id="venderfen">
    <c:if test="${paging.totalPage > 0}">
        当前第  ${paging.currentPage }  页/共   ${paging.totalPage}  页
    </c:if>
    <c:if test="${paging.totalPage > 1}">
        <c:choose>
            <c:when test="${paging.currentPage==2 && paging.totalPage==2}">
                <a onclick="goPage(1)">首页</a>
                <a onclick="goPage(${paging.currentPage-1})">上一页</a>
            </c:when>
            <c:when test="${paging.currentPage==1}">
                <a onclick="goPage(${paging.currentPage+1})">下一页</a>
                <a onclick="goPage(${paging.totalPage})">末页</a>
            </c:when>
            <c:when test="${paging.currentPage==paging.totalPage}">
                <a onclick="goPage(1)">首页</a>
                <a onclick="goPage(${paging.currentPage-1})">上一页</a>
            </c:when>
            <c:otherwise>
                <a onclick="goPage(1)">首页</a>
                <a onclick="goPage(${paging.currentPage-1})">上一页</a>
                <a onclick="goPage(${paging.currentPage+1})">下一页</a>
                <a onclick="goPage(${paging.totalPage})">末页</a>
            </c:otherwise>
        </c:choose>
    </c:if>
    共  ${paging.total}  条
</div>

</body>
</html>
