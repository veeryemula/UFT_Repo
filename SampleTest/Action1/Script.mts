
'browserTitle = "Gmail - Free Storage and Email from Google - Internet Explorer"
'SystemUtil.Run "iexplore.exe", "https://www.gmail.com"
'Browser("CreationTime:=0").Highlight
'Print Browser("CreationTime:=0").Page("title:=Gmail.*").GetROProperty("url")
'Set oDesc = Description.Create()
'oDesc("micclass").Value = "Link"
'oDesc("enabled").Value = true
'Set links = Browser("title:=" & browserTitle).Page("title:=Gmail.*").ChildObjects(oDesc)
'Print links.Count
''For n = 0 To links.Count-1
''	Print links(n).GetROProperty("text")
''Next
'Browser("CreationTime:=0").CloseAllTabs



WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("Micro Focus MyFlight Sample Application") @@ hightlight id_;_1181582_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_2009140120_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cdcfb5fd81e65ab8e360dcb" @@ hightlight id_;_2010299944_;_script infofile_;_ZIP::ssf6.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK") @@ hightlight id_;_2010315880_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Static("Incorrect username or").Check CheckPoint("Incorrect username or password.  Use: Username=john, Password=HP") @@ hightlight id_;_5112692_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_2163512_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("Micro Focus MyFlight Sample Application_2") @@ hightlight id_;_1181582_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cdcfbf99331471153ca" @@ hightlight id_;_2008468544_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2008465040_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").Check CheckPoint("datePicker") @@ hightlight id_;_2008477280_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_788828_;_script infofile_;_ZIP::ssf13.xml_;_


'
'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_1996938536_;_script infofile_;_ZIP::ssf21.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5cecc2d5b26b72f8355e" @@ hightlight id_;_1996948424_;_script infofile_;_ZIP::ssf22.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").VirtualButton("MyFlight").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf23.xml_;_
'
'WpfWindow("Micro Focus MyFlight Sample").VirtualObject("FlightImage").Click 50,22 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf18.xml_;_
'
'
'
'RepositoriesCollection.Add "C:\Users\venkateshwarlu.r\Desktop\UFT_Training\Tutorial\Repositories\MyFlightRepository.tsr"
'Window("Notepad").Activate
'
'
'
'
'
'
'
'FileContent("Log.txt").Output CheckPoint("Log.txt")
'
'
'WpfWindow("Micro Focus MyFlight Sample").WpfObject("UserName Object").Output CheckPoint("FullName Object") @@ hightlight id_;_2084904312_;_script infofile_;_ZIP::ssf14.xml_;_
