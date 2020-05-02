function validateEmail()
		{
			with(document.forms.form1)
			{
				var re=/['@']/
				if(re.test(email.value))
				{
				}
				else
				{
					alert('Please Enter Valid Email Address')
				}
			}
		}
		function fnoVerify()
		{
			with(document.forms.form1)
			{
				var re=/^[\(]?(\d{3})[\)]?[\.]?(\d{3})[ -\.]?(\d{4})$/
				if(re.test(fno.value))
				{
				}
				else
				{
					alert('Please Enter Valid Phone Number')
				}
			}
		}
			function verifyTravelDate()
			{
				var cdf=new Date()
				
				var cy=cdf.getFullYear();
				var cd=cdf.toString()
					cd=(cd.substring(8,10))
				var cm=(cdf.toString())
					cm=(cm.substring(4,7))	
				var arr=new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec')			
				for(var i=0;i<arr.length;i++)
				{
					if(cm==arr[i])
					{
						cm=parseInt((i+1));
						break
					}
				}

				with(document.forms.form1)
				{
					var bday=abc.value
					var by=parseInt(bday.substring(0,4))
					var bm=parseInt(bday.substring(5,7))
					var bd=parseInt(bday.substring(8,10))
					
					if(by>=cy)
					{
						if(bm>cm)
						{

						}
						else if(bm==cm)
						{
							if(bd>=cd)
							{}
							else
							{
								alert('Selected date is passed')
							}
						}
						else
						{
							alert('Selected Month is Passed..')
						}
					}
					else
					{
						alert('Selected Year is passed..')
					}
				}
			}

function ageVerify()
			{
				var cdf=new Date()
				
				var cy=cdf.getFullYear();
				var cd=cdf.toString()
					cd=(cd.substring(8,10))
				var cm=(cdf.toString())
					cm=(cm.substring(4,7))	
				var arr=new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec')			
				for(var i=0;i<arr.length;i++)
				{
					if(cm==arr[i])
					{
						cm=parseInt((i+1));
						break
					}
				}
				
				with(document.forms.form1)
				{
					var bday=dob.value
					var by=parseInt(bday.substring(0,4))
					var bm=parseInt(bday.substring(5,7))
					var bd=parseInt(bday.substring(8,10))
					
					var dy=cy-by
					if(bm<=cm)
					{
						var dm=1
					}
					if(bd<=cd)
					{
						var dd=1
					}
					if(dy<18)
					{
						alert('Not eligible \n You Are Under 18')
					}
					else if(dy>18)
					{
						suggest(bd,by)
					}
					else
					{
						if(dd==1 && dm==1)
						{
							suggest(bd,by)
						}
						else
						{
							alert('Not eligible \n You Are Under 18')
						}
					}
				}					
			}
	function setSelect1()
			{
				with(document.forms.form1)
				{
					if(plan.value=='GT')
					{
						select1[0].text='New York'
						select1[0].value='NY'
						select1[1].text='Miami'
						select1[1].value='Miami'
						select1[2].text='Tokyo'
						select1[2].value="tokyo"
						select1[3].text='None'
						select1[3].value=NULL
						select1[4].text='None'
						select1[4].value=NULL

					}
					else if(plan.value=='ST')
					{
						select1[0].text='Temple'
						select1[0].value='Temple'
						select1[1].text='Wild Life'
						select1[1].value='WL'
						select1[2].text='Mueseum'
						select1[2].value='Mueseum'
						select1[3].text='Historical'
						select1[3].value='Historical'
						select1[4].text='None'
						select1[4].value=NULL
					}
					else if(plan.value=='CT')
					{
						
					}
					else
					{
						alert('Please Select any one Valid option')
					}
				}
			}
		function setPlace()
			{
				with(document.forms.form1)
				{
					if(select1.value=='Temple')
					{
						select2[0].text='Badrinath Temple'
						select2[0].value='BdT'
						select2[1].text='The Konark Sun'
						select2[1].value='TKS'
						select2[2].text='Brihdeswara Temple'
						select2[2].value='BhT'
						select2[3].text='Somnath Temple'
						select2[3].value='ST'
						select2[4].text='The Golden Temple'
						select2[4].value='TGT'
						
					}
					else if(select1.value=='WL')
					{
						select2[0].text='Corbett Nainital Tour'
						select2[0].value='CNT'
						select2[1].text='Phikara Tour'
						select2[1].value='PT'
						select2[2].text='Elephant Safari'
						select2[2].value='ES'
						select2[3].text='Corbett National Park'
						select2[3].value='CNP'
						select2[4].text='None'
						select2[4].value=NULL
					}
					else if(select1.value=='Mueseum')
					{
						select2[0].text='National Mueseum'
						select2[0].value='NM'
						select2[1].text='Indian Mueseum'
						select2[1].value='IM'
						select2[2].text='Chhatrapati Shivaji Vastu Mumbai'
						select2[2].value='CSVM'
						select2[3].text='Salar Jung Mueseum'
						select2[3].value='SJM'
						select2[4].text='None'
						select2[4].value=NULL
					}
					else if(select1.value=='Historical')
					{
						select2[0].text='Taj Mahal'
						select2[0].value='TM'
						select2[1].text='Qutub Minar'
						select2[1].value='QM'
						select2[2].text='Humayun`s Tomb'
						select2[2].value='HT'
						select2[3].text='Hawa Mahal, Jaipur'
						select2[3].value='HMJ'
						select2[4].text='None'
						select2[4].value=NULL
					}
					else
					{
						alert('Please Select Valid option')
					}
					}
			}
