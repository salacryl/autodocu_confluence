#Defining import and export variables
$outreport = "C:\temp\Server_Inventory_" + $((Get-Date).ToString('MM-dd-yyyy')) + ".csv"

#Start PSRemoting.
Invoke-Command  -scriptblock {

#Run the commands concurrently for each server in the list
$CPUInfo = Get-WmiObject Win32_Processor #Get CPU Information
$OSInfo = Get-WmiObject Win32_OperatingSystem #Get OS Information

#Get Memory Information. The data will be shown in a table as GB, rounded to the nearest second decimal.
$PhysicalMemory = Get-WmiObject CIM_PhysicalMemory | Measure-Object -Property capacity -Sum | % {[math]::round(($_.sum / 1GB),2)}

#Get Network Configuration
$Network = Get-WmiObject Win32_NetworkAdapterConfiguration -Filter 'ipenabled = "true"'

#Get local admins.
$localadmins = Get-CimInstance -ClassName win32_group -Filter "name = 'administrators'" | Get-CimAssociatedInstance -Association win32_groupuser

#Get list of shares
$Shares = Get-WmiObject Win32_share | Where {$_.name -NotLike "*$"}
$infoObject = New-Object PSObject

#Add data to the infoObjects.
Add-Member -inputObject $infoObject -memberType NoteProperty -name "ServerName" -value $CPUInfo.SystemName
Add-Member -inputObject $infoObject -memberType NoteProperty -name "CPU_Name" -value $CPUInfo.Name
Add-Member -inputObject $infoObject -memberType NoteProperty -name "TotalMemory_GB" -value $PhysicalMemory
Add-Member -inputObject $infoObject -memberType NoteProperty -name "OS_Name" -value $OSInfo.Caption
Add-Member -inputObject $infoObject -memberType NoteProperty -name "OS_Version" -value $OSInfo.Version

$i = 0;
forEach($ip in $Network)
{
	$astring = $astring + ", "+ $ip.IPAddress -join ", "
}
Add-Member -inputObject $infoObject -memberType NoteProperty -name "IP Addresses" -value $astring
$infoObject} | Select-Object * -ExcludeProperty PSComputerName, RunspaceId, PSShowComputerName | Export-Csv -path $outreport -NoTypeInformation