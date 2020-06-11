<html>
	<head>
		<script language="javascript" type="text/javascript" src="/JSP_Project/js/jform.js">	
		</script>
		<meta charset="utf-8">
			<meta name="viewport" content="width=device-width,initial-scale=1">
			<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<link href="css/global.css" type="text/css" rel="stylesheet">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script type="text/javascript" language="javascript" src="js/sfile.js">
		</script>
	</head>
	<body style="background-image:URL(bg1.jpg)">
		<form  name="form1" action="\ToursAndTravelsDyanamic/Database.jsp">
		<center><h1><font face="Arial Rounded MT" size="22">BOOK HERE</font></h1>
			
			Enter Group Leader Name : <input type="text" name="lfname" required/><br><br>
			
			Enter Group Leader's Last Name : <input type="text" name="llname" required/><br><br>
			
			Register group name as : <input type="text" name="gname" required/><br>
			
			<h4>These fields should be filled by group leader</h4>
			
			Email ID of Group Leader : <input type="text" name="email" onchange="validateEmail()" placeholder="string@abc.com" required/><br><br>
			
			Phone Number of Group Leader : <input type="text" name="fno" onchange="fnoVerify()" placeholder="XXX-XXX-XXXX"/><br><br>
			
			How to Travel : <select name="medium">
			<option value="Airplane">Airplane</option><option value="Train">Train</option><option value="Bus">Bus</option>
			</select>
			
			<Select name="coach"><option value="A/C">A/C</option><option value="NON-A/C">NON-A/C</option></select>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			
			Enter Date of birth : <input type="date" name="dob" onblur="ageVerify()"/> <br><br>
			Number of members : <input type="number" name="count"/><br><br>
			when to travel : <input type="date" name="abc" onblur="verifyTravelDate()"/><br><br>
			Mode of payment : &nbsp;&nbsp;&nbsp;&nbsp;
			<input type="radio" value="Cash" name="method">Cash&nbsp;&nbsp;</input>
			<input type="radio" value="Net Banking" name="method">Net Banking&nbsp;&nbsp;</input>
			<input type="radio" value="Paytm" name="method">Paytm&nbsp;&nbsp;</input>
			<input type="radio" value="Debit/Credit card" name="method">Debit/Credit Card&nbsp;&nbsp;</input><br><br>
			
			
			Select Plan : 
				<select name="plan" onchange="setSelect1()">
					<option value="NULL">None</option>
					<option value="GT">Group Tour</option>
					<option value="ST">Speciality Tour</option>
				</select>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			
			Where to go : 
				<select name="select1" onchange="setPlace()">
					<option value="0">None</option>
					<option value="1">None</option>
					<option value="2">None</option>
				</select><br><br>
				</select>
		<center>
		<button type="submit" class="btn btn-success " style="background:#4FB9BA;" name="submit" value="GroupTours">Generate Ticket</button>
		</form>
	</body>
</html>