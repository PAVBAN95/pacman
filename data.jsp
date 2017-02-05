<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" type="text/css" href="css/data.css">
	<title>High Score</title>
</head>
<body>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<% ResultSet rs =(ResultSet)request.getAttribute("resultset"); %>

<div class="header">
    Pac Man
 </div>   
<div id="Table">
    <TABLE BORDER="1">
            <TR>
                <TH>Rank</TH>
                <TH>Name</TH>
                <TH>Score</TH>
            </TR>
            <% while(rs.next()){ %>
            <tr>
            	<td><%= rs.getString(1)%></td>
            	<td><%= rs.getString(2)%></td>
            	<td><%= rs.getString(3)%></td>
            </tr>
            <% } %>
    </TABLE>

</div>
<center>
<a href="index.html">
<div id="button">Try Again</div>
</a>
</center>
</body>

</body>
</html>
