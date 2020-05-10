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
Der Delivery Controller ist die serverseitige Komponente, die für die Verwaltung des Benutzerzugriffs sowie das Brokering und Optimieren von Verbindungen zuständig ist. Controller stellen auch die Maschinenerstellungsdienste zur Erstellung von Desktop- und Serverimages bereit.

Eine Site muss mindestens über einen Controller verfügen. Nach der Installation des ersten Controllers können Sie im Rahmen der Siteerstellung oder auch später weitere Controller hinzufügen. Es gibt zwei Hauptvorteile, mehr als einen Controller in einer Site zu haben.

Redundanz: Als bewährte Methode sollte eine Produktionssite immer mindestens zwei Controller auf unterschiedlichen physischen Servern haben. Wenn ein Controller ausfällt, können die anderen die Verwaltung der Verbindungen und der Site übernehmen.
Skalierbarkeit: Je intensiver die Aktivität einer Site, umso mehr nehmen CPU-Auslastung auf dem Controller und die Datenbankaktivität zu. Zusätzliche Controller bieten die Möglichkeit, mehr Benutzer, Anwendungen und Desktopanforderungen zu verarbeiten und die Reaktionszeit insgesamt zu verbessern.
Jeder Controller kommuniziert direkt mit der Sitedatenbank. In einer Site mit mehreren Zonen kommunizieren die Controller in jeder Zone mit der Datenbank in der primären Zone.
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