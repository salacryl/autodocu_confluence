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
Ein Anwendungsserver oder Applikationsserver, englisch Application Server [ˌæplɪˈkeɪʃn̩ ˈsɝːvɚ], ist im Allgemeinen ein Server in einem Computernetzwerk, der Anwendungsprogramme ausführt. Im engeren Sinne bezeichnet der Begriff eine Software, die spezielle Dienste zur Verfügung stellt, wie beispielsweise Transaktionen, Authentifizierung oder den Zugriff auf Verzeichnisdienste, Webservices und Datenbanken über definierte Schnittstellen. In Bezug mit Java steht die Bezeichnung Application Server meist für ein Rahmenwerk, das die Entwicklung von Webanwendungen erleichtert und einen Server bereitstellt.[1]

Gängig und von wesentlicher Bedeutung sind Anwendungsserver beispielsweise in Geoinformationssystemen, wo sie die angefragten Landkarten erzeugen und auch Tracking in Echtzeit ermöglichen.[2][3][4] Dass eine Routenplanung durch Eingabe von Start und Ziel im Browser unverzüglich ein qualifiziertes Resultat erbringt, beruht nicht auf Fähigkeiten des Clients, sondern auf umfangreichen individuellen Ermittlungen durch den Anwendungsserver, der nur sein Ergebnis liefert.

Ein Anwendungsserver bietet eine Laufzeitumgebung für den Server-Teil einer Client-Server Anwendung. Zum Beispiel stellt bei einer Webanwendung der Webbrowser den Client-Teil der Anwendung dar.

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