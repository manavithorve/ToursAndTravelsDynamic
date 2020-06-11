<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*,javax.sql.*,java.io.*;" %>

<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
	try
	{
		Class.forName("oracle.jdbc.OracleDriver");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/tours_and_travels?serverTimezone=UTC","root","");
		out.println("Connection to :" +con);
	}
	catch(Exception e)
	{
		out.println("Error : "+e);
	}
%>
</body>
</html>