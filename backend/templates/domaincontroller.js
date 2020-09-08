const getText = (kategorie, Os, IPs, FQDN, ServiceTag, RAM, CPU) => {

	let text = `<table class='confluenceTable'>
<tr>
<td class='confluenceTd'>Kategorie</td><td class='confluenceTd'>Domain-Controller (Active Directory)</td>
</tr>
<tr>
<td class='confluenceTd'>Betriebssystem</td><td class='confluenceTd'>${Os}</td>
</tr>
<tr>
<td class='confluenceTd'>|IPAdresse</td><td class='confluenceTd'>${IPs}</td>
</tr>
<tr>
<td class='confluenceTd'>|FQDN</td><td class='confluenceTd'>${FQDN}</td>
</tr>
<tr>
<td class='confluenceTd'>Zugangsdaten</td><td class='confluenceTd'>In Keepass</td>
</tr>
<tr>
<td class='confluenceTd'>|Servicetag</td><td class='confluenceTd'>${ServiceTag}</td>
</tr>
<tr>
<td class='confluenceTd'>RAM</td><td class='confluenceTd'>${RAM}</td>
</tr>
<tr>
<td class='confluenceTd' >CPU</td><td class='confluenceTd'>${CPU}</td>
</tr>
</table>
<h1>Verantwortlichkeit</h1>
<table class='confluenceTable'>
<tr>
<td class='confluenceTd'>Rolle</td><td class='confluenceTd'>Name</td>
</tr>
<tr>
<td class='confluenceTd'>Verantwortlicher</td><td class='confluenceTd'>Meier, Bjoern</td>
</tr>
<tr>
<td class='confluenceTd'>Stellvertreter</td><td class='confluenceTd'>Fehlt</td>
</tr>
</table>

<h1>Systembeschreibung</h1>
Ein Domain Controller (DC, englisch für Bereichssteuerung, häufig auch Domänencontroller) ist ein Server zur zentralen Authentifizierung von Computern und Benutzern in einem Rechnernetz. Das Konzept wurde in den 1970er Jahren von IBM eingeführt und 1993 von Microsoft mit Windows NT übernommen. Seit 2012 kann Samba als Primary Domain Controller agieren.

In einem Netzwerk mit Domain Controller können mehrere Computer zu einer Domain zusammengefasst werden. Im Unterschied zu den Arbeitsgruppen von Windows 9x/ME kann zentral am Domain Controller festgelegt werden, welche Benutzer sich mit welchem Passwort anmelden dürfen und zu welchen Benutzergruppen sie gehören. Änderungen gelten für alle Computer, die Mitglied der Domain sind.

Um Failover zu ermöglichen, wenn ein Domain Controller ausfällt, können und sollten mehrere Domain Controller in einer Domain betrieben werden. Bei NT4-Domain sind Änderungen nur auf dem Primary Domain Controller (PDC) möglich. Die Backup Domain Controller (BDC) halten nur eine Sicherheitskopie der User- und Anmeldedaten, die in regelmäßigen Abständen aktualisiert werden. Im Gegensatz dazu besitzen alle DC einer Domain ab Windows 2000 je eine beschreibbare Kopie der Active-Directory-Datenbank, in welcher die Benutzerdaten gespeichert werden. Die Änderung eines Attributes auf einem der DC wird in regelmäßigen Intervallen an alle anderen DC repliziert. Dadurch sind alle DC – abgesehen von den Betriebsmaster-Funktionen (FSMO) – auf demselben Stand. Der Ausfall eines DC ist für die Active-Directory-Datenbank unerheblich, da keine Informationen verloren gehen. Sollte aber ein Betriebsmaster ausfallen, muss der Administrator möglichst bald die FSMO-Rollen an einen oder mehrere andere DCs wieder zuweisen, um den Betrieb zu gewährleisten. Das Replikationsintervall der DCs untereinander kann durch den Administrator in Abhängigkeit von der Leistungsfähigkeit des verwendeten Netzes gewählt werden.

Mit Samba können auch Server als Domain Controller agieren, die nicht auf einem Microsoftbetriebssystem aufbauen.

In Microsoft Windows Server 2008 wurde zusätzlich das Konzept des Read Only Domain Controller eingeführt.
<h1>Applikation </h1> 
<h1>Applikation Owner </h1> 
<h1>System Owner </h1> 	
<h1>Hardware </h1> 	
<h1>OS / DB-System </h1> 	
<h1> Datenlokation </h1> 
<h1> Connection </h1> 
<h1> Ext. Schnittstellen </h1> 
<h1> Client </h1> 
<h1> Backup </h1> 
<h1> Supplier HW </h1>
<h1> Supplier SW </h1>
	
<h1> Jobs und deren Steuerung </h1>
<h2> Job 1 </h2>
<h2> Job 2 </h2>
	
	
<h1>System Sicherheit </h1>
<h2> Autorisierung Management </h2>
Welche Autorisierungen wurden aufgesetzt?
Wie werden diese verwaltet
	
	
<h1> Überwachung der Autorisierungen </h1>
Wie werden die Autorisierungen überwacht?
Mit welcher Häufigkeit?
	
<h1> Sicherheitmassnahmen </h1>
Welche Sicherheitmassnahmen wurden getroffen?
	
<h1>Wartungsprozedere</h1>
<h2> System Start </h2>
Wie wird das System gestartet?
Welche Reihenfolge?
	
<h2> System Backup </h2>
Wie werden System Backups durchgeführt?
In welcher Häufigkeit?
	
<h2> System Kopie </h2>
Wie werden System Kopien durchgeführt?
In welcher Häufigkeit?
	
<h2> System Shutdown </h2>
Wann werden Shutdowns geplant?
Was passiert dann?
	
<h2> Katastrophenfall</h2>
<a href='https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement'>BCM Prozedere</a>
*Welche Notfall Szenarios müssen berücksichtigt werden?
*Wie oft wurden diese erprobt?
*Welche Fehler wurden entdeckt?
	
<h2> Wiederlauf Plan </h2>
*Welche <a href='https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement'>BCM Aktivitäten sind wann geplant?</a>
*Welche Vorbereitungen müssen stattfinden?
*Welche Auswirkungen auf dem Business?`;

	return text;
}

export default {
	getText: getText,
}