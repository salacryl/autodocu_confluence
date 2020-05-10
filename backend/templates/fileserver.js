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
Ein Dateiserver (oder aus engl. file server auch Fileserver genannt) ist ein Rechner, der Dateisysteme oder zumindest einen Teil eines Dateisystems in einem Rechnernetz zur Verfügung stellt.
== Funktion ==
Die Hauptaufgabe eines Dateiservers ist es, mehreren Benutzern Zugriff auf Dateien zu gewähren. Die Kontrolle der Zugriffsrechte erfolgt durch den Server selbst oder über die Dateiberechtigungen im Dateisystem.

Die zentrale Speicherung von Dateien hat folgende Vorteile bzw. Gründe:

bei entsprechender Organisation besserer Überblick über vorhandene Daten
Vermeidung von Konflikten zwischen unterschiedlichen Versionen eines Dokuments
zentrale Rechtevergabe für Dateien, mit ACLs sehr feingranular
Arbeitsgruppen können mit denselben Dateien arbeiten, ohne sie auf Wechselmedien transportieren zu müssen
Möglichkeit zur automatischen Versionierung oder Revision
Datensicherungen sind einfacher und günstiger, da nicht Daten auf jedem Client einzeln gesichert werden müssen. Bei entsprechendem Dateisystem, Logical Volume Manager oder Disk-Array können während des laufenden Betriebs Snapshots gemacht werden.
Unter fast jedem Betriebssystem kann ein Dateiserver eingerichtet werden. Üblich sind Dateiserver unter Linux-Distributionen, NetWare, Windows und Unix.
=== Applikation === 
Exchange 2016

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