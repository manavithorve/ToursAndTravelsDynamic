<%@page language="java"%>
<html>
<head>
<meta charset="utf-8">
			<meta name="viewport" content="width=device-width,initial-scale=1">
			<link rel="stylesheet" type="text/css" href="					https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<link href="css/global.css" type="text/css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<%
	String btnValue=request.getParameter("submit");
	out.println("Button value : "+btnValue);
	if(btnValue.equals("GroupTours"))
	{%>
		<jsp:forward page="tour_types/GroupTours.jsp"/>
	<%}
	if(btnValue.equals("CorporateTours"))
	{%>
		<jsp:forward page="tour_types/CorporateTours.jsp"/>
	<%}
%>
</body>
</html>