<%@page import="java.sql.*"%>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Welcome</title>
</head>
<body>
<% 
	
		String g_name=request.getParameter("gname");
		String g_leader=request.getParameter("lfname")+" "+request.getParameter("llname");
		String email=request.getParameter("email");
		String travelDate=request.getParameter("abc");
		int id=(int)(Math.random()*g_name.length()+100);
		out.println("<center><h1>Welcome "+g_name+" You have Applied successfully </h1></center>");
		out.println("<h1><center>Your group id is: "+id+"</center></h1>");
		try
		{
			Class.forName("oracle.jdbc.OracleDriver");
			Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","System","123456");
			PreparedStatement ps=con.prepareStatement("insert into jspProject values(?,?,?,?)");
			ps.setInt(1,id);
			ps.setString(2,g_name);
			ps.setString(3,g_leader);
			ps.setString(4,email);
			
			int rows=ps.executeUpdate();
			if(rows>0)
			{
				out.println("<marquee><h2>Tickets are sent to: "+email+" </h2></marquee>");
			}
		}
		catch(Exception e)
		{
			out.println("Error : "+e);
		}
%>
<br><br>
</body>
</html>