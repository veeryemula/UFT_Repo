WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("Micro Focus MyFlight Sample Application") @@ hightlight id_;_1181582_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_2009140120_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cdcfb5fd81e65ab8e360dc" @@ hightlight id_;_2010299944_;_script infofile_;_ZIP::ssf6.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK") @@ hightlight id_;_2010315880_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Static("Incorrect username or").Check CheckPoint("Incorrect username or password.  Use: Username=john, Password=HP") @@ hightlight id_;_5112692_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_2163512_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("Micro Focus MyFlight Sample Application_2") @@ hightlight id_;_1181582_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cdcfbf99331471153ca" @@ hightlight id_;_2008468544_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2008465040_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").Check CheckPoint("datePicker") @@ hightlight id_;_2008477280_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close
Msgbox "Done"
