param(
	[string]$kategorie,
	[string]$einrichtung,
	[string]$username,
	[string]$password
)

#Run the commands concurrently for each server in the list
$CPUInfo = Get-WmiObject Win32_Processor #Get CPU Information
$fqdn = (Get-WmiObject win32_computersystem).DNSHostName+"."+(Get-WmiObject win32_computersystem).Domain
$Name = (Get-WmiObject win32_computersystem).DNSHostName
$OSInfo = Get-WmiObject Win32_OperatingSystem #Get OS Information

#Get Memory Information. The data will be shown in a table as GB, rounded to the nearest second decimal.
$PhysicalMemory = Get-WmiObject CIM_PhysicalMemory | Measure-Object -Property capacity -Sum | ForEach-Object {[math]::round(($_.sum / 1GB),2)}

#Get Network Configuration
$Network = Get-WmiObject Win32_NetworkAdapterConfiguration -Filter 'ipenabled = "true"'

$servicetag = Get-Wmiobject win32_bios 
$anomObject = New-Object PSObject
$infoObject = New-Object PSObject

Add-Member -inputObject $anomObject -memberType NoteProperty -name "kategorie" -value $kategorie
Add-Member -inputObject $anomObject -memberType NoteProperty -name "einrichtung" -value $einrichtung
Add-Member -inputObject $anomObject -memberType NoteProperty -name "FQDN" -value $fqdn
Add-Member -inputObject $anomObject -memberType NoteProperty -name "Name" -value $Name
Add-Member -inputObject $anomObject -memberType NoteProperty -name "SerialNumber" -value $servicetag.SerialNUmber
Add-Member -inputObject $anomObject -memberType NoteProperty -name "CPU_Name" -value $CPUInfo.Name
Add-Member -inputObject $anomObject -memberType NoteProperty -name "TotalMemory_GB" -value $PhysicalMemory
Add-Member -inputObject $anomObject -memberType NoteProperty -name "OS_Name" -value $OSInfo.Caption
Add-Member -inputObject $anomObject -memberType NoteProperty -name "OS_Version" -value $OSInfo.Version


#Add data to the infoObjects.
Add-Member -inputObject $infoObject -memberType NoteProperty -name "kategorie" -value $kategorie
Add-Member -inputObject $infoObject -memberType NoteProperty -name "einrichtung" -value $einrichtung
Add-Member -inputObject $infoObject -memberType NoteProperty -name "username" -value $username
Add-Member -inputObject $infoObject -memberType NoteProperty -name "password" -value $password
Add-Member -inputObject $infoObject -memberType NoteProperty -name "FQDN" -value $fqdn
Add-Member -inputObject $infoObject -memberType NoteProperty -name "Name" -value $Name
Add-Member -inputObject $infoObject -memberType NoteProperty -name "SerialNumber" -value $servicetag.SerialNUmber
Add-Member -inputObject $infoObject -memberType NoteProperty -name "CPU_Name" -value $CPUInfo.Name
Add-Member -inputObject $infoObject -memberType NoteProperty -name "TotalMemory_GB" -value $PhysicalMemory
Add-Member -inputObject $infoObject -memberType NoteProperty -name "OS_Name" -value $OSInfo.Caption
Add-Member -inputObject $infoObject -memberType NoteProperty -name "OS_Version" -value $OSInfo.Version

forEach($ip in $Network)
{
	$astring = $astring + ", "+ $ip.IPAddress -join ", "
}
Add-Member -inputObject $infoObject -memberType NoteProperty -name "IP_Addresses" -value $astring
$jsonObject = $infoObject | Select-Object * -ExcludeProperty PSComputerName, RunspaceId, PSShowComputerName | ConvertTo-Json
write-host "Daten die hochgeladen werden:"
$anomObject | ConvertTo-Json
try { $response = Invoke-WebRequest -Uri http://localhost:5000/ -Method POST -Body ($jsonObject) -ContentType "application/json"} catch {
	write-host "Result: " $_.Exception.Response.StatusCode.Value__}