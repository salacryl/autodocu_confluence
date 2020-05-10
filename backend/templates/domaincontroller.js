const getText = (kategorie, Os, IPs, FQDN, ServiceTag, RAM, CPU) => {

	let text = `[[Category:${kategorie}]]
{{Infoxbox Server
|Kategorie=Exchangeserver
|Betriebssystem=${Os}
|IPAdresse=${IPs}
|FQDN=${FQDN}
|Zugangsdaten=In Keepass
|Servicetag=${ServiceTag}
|RAM=${RAM}
|CPU=${CPU}
|}}
== Verantwortlichkeit ==
{| class="wikitable"
|'''Rolle''' (Verantwortlicher, Stellvertreter)
|'''Name'''
|'''Datum'''
|-
|Verantwortlicher
|Meier, Björn
|
|-
|Stellvertreter
|
|
|}

== Systembeschreibung ==
Ein Domain Controller (DC, englisch für Bereichssteuerung, häufig auch Domänencontroller) ist ein Server zur zentralen Authentifizierung von Computern und Benutzern in einem Rechnernetz. Das Konzept wurde in den 1970er Jahren von IBM eingeführt und 1993 von Microsoft mit Windows NT übernommen. Seit 2012 kann Samba als Primary Domain Controller agieren.

In einem Netzwerk mit Domain Controller können mehrere Computer zu einer Domain zusammengefasst werden. Im Unterschied zu den Arbeitsgruppen von Windows 9x/ME kann zentral am Domain Controller festgelegt werden, welche Benutzer sich mit welchem Passwort anmelden dürfen und zu welchen Benutzergruppen sie gehören. Änderungen gelten für alle Computer, die Mitglied der Domain sind.

Um Failover zu ermöglichen, wenn ein Domain Controller ausfällt, können und sollten mehrere Domain Controller in einer Domain betrieben werden. Bei NT4-Domain sind Änderungen nur auf dem Primary Domain Controller (PDC) möglich. Die Backup Domain Controller (BDC) halten nur eine Sicherheitskopie der User- und Anmeldedaten, die in regelmäßigen Abständen aktualisiert werden. Im Gegensatz dazu besitzen alle DC einer Domain ab Windows 2000 je eine beschreibbare Kopie der Active-Directory-Datenbank, in welcher die Benutzerdaten gespeichert werden. Die Änderung eines Attributes auf einem der DC wird in regelmäßigen Intervallen an alle anderen DC repliziert. Dadurch sind alle DC – abgesehen von den Betriebsmaster-Funktionen (FSMO) – auf demselben Stand. Der Ausfall eines DC ist für die Active-Directory-Datenbank unerheblich, da keine Informationen verloren gehen. Sollte aber ein Betriebsmaster ausfallen, muss der Administrator möglichst bald die FSMO-Rollen an einen oder mehrere andere DCs wieder zuweisen, um den Betrieb zu gewährleisten. Das Replikationsintervall der DCs untereinander kann durch den Administrator in Abhängigkeit von der Leistungsfähigkeit des verwendeten Netzes gewählt werden.

Mit Samba können auch Server als Domain Controller agieren, die nicht auf einem Microsoftbetriebssystem aufbauen.

In Microsoft Windows Server 2008 wurde zusätzlich das Konzept des Read Only Domain Controller eingeführt.
=== Applikation === 
=== Applikation Owner === 
=== System Owner === 	
=== Hardware === 	
=== OS / DB-System === 	
=== Datenlokation === 
=== Connection === 
=== Ext. Schnittstellen === 
=== Client === 
=== Backup === 
=== Supplier HW ===
=== Supplier SW ===
	
== Jobs und deren Steuerung ==
=== Job 1 ===
=== Job 2 ===
	
	
== System Sicherheit ==
=== Autorisierung Management ===
Welche Autorisierungen wurden aufgesetzt?
Wie werden diese verwaltet
	
	
=== Überwachung der Autorisierungen ===
Wie werden die Autorisierungen überwacht?
Mit welcher Häufigkeit?
	
=== Sicherheitmassnahmen ===
Welche Sicherheitmassnahmen wurden getroffen?
	
== Wartungsprozedere ==
=== System Start ===
Wie wird das System gestartet?
Welche Reihenfolge?
	
=== System Backup ===
Wie werden System Backups durchgeführt?
In welcher Häufigkeit?
	
=== System Kopie ===
Wie werden System Kopien durchgeführt?
In welcher Häufigkeit?
	
=== System Shutdown ===
Wann werden Shutdowns geplant?
Was passiert dann?
	
== Katastrophenfall ==
=== [https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement BCM Prozedere] ===
*Welche Notfall Szenarios müssen berücksichtigt werden?
*Wie oft wurden diese erprobt?
*Welche Fehler wurden entdeckt?
	
=== Wiederlauf Plan ===
*Welche [https://de.wikipedia.org/wiki/Betriebliches_Kontinuit%C3%A4tsmanagement BCM] Aktivitäten sind wann geplant?
*Welche Vorbereitungen müssen stattfinden?
*Welche Auswirkungen auf dem Business?`;

	return text;
}

export default {
	getText: getText,
}