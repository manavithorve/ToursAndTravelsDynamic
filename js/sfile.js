		myBanner=new Array('images/bannerImage1.jpg','images/bannerImage2.jpg','images/bannerImage3.jpg')
		banner=0;
		function showBanner()
		{
			if(document.images)
			{
				banner++
				if(banner==myBanner.length)
				{
					banner=0
				}
				document.changeBanner.src=myBanner[banner]
				setTimeout('showBanner()',1000)
			}
		}
		
		function search()
		{
			with(document.forms.form1)
			{
				if(ftd.value=="New York" || ftd.value=="newyork" || ftd.value=="New york")
				{
					document.location.href="NY.html"
				}
				else if(ftd.value=="Miami" || ftd.value=="miami")
				{
					document.location.href="miami.html"
				}
				else if(ftd.value=="Tokyo" || ftd.value=="tokyo")
				{
					document.location.href="tokyo.html"
				}
				else
				{
					alert('Sorry We do not provide srvice to your destination..!')
				}
			}
		}