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
Ein Helpdesk, Help-Desk oder User-Help-Desk (UHD) ist ein Issue-Tracking-System, das vorrangig für die Unterstützung von Anwendern von Hard- und Software, aber auch für Anfragen von Kunden in anderen Dienstleistungsbereichen zuständig ist.

Die Hilfe (Help) kann dabei über klassischen Telefonservice, aber auch mit Hilfe technischer Geräte sowie von Software (Fernwartung, Live-Support-System) erfolgen.

In speziellen Issue-Tracking-Systemen werden die Anfragen verwaltet. Damit kann einerseits von allen eingesetzten Kundenbetreuern auf die Service- und Fehlerhistorie zurückgegriffen und andererseits durch Fehleranalysen die Weiterentwicklung der Produkte oder des Service unterstützt werden.

Die Wissensdatenbank spielt eine zentrale Rolle im Help Desk bei der Fehleranalyse und letztlich der Lösung und Wiederherstellung der Dienstbereitschaft (Produkte und Services).

Die Qualität des Helpdesks nimmt einen zunehmenden Stellenwert bei der Beurteilung von Unternehmen und Produkten ein. Kundenbindung und Image stehen oft in engem Zusammenhang mit der angebotenen Unterstützung.

Für Helpdesks zum IT-Management gilt das ITIL-Service-Desk-Rahmenwerk als De-facto-Standard.
== Gliederung des Helpdesks ==
Ein Helpdesk gliedert sich in verschiedene sogenannte Level. Ein Level ist eine Gruppe von Experten, die speziell für die Tätigkeit in diesem Level zuständig ist. Insgesamt sind am Helpdesk 3 Level vorgesehen.

Der First Level ist der Erstkontakt zum Kunden. Dieser besteht zumeist aus Mitarbeitern, die zwar eine IT-Grundausbildung haben, sich jedoch auf keinen Bereich spezialisiert haben. An einigen Helpdesks wird diese Aufgabe auch durch Call-Center-Agenten übernommen. Die Anfragen gehen unter anderem per Mail, Telefon, LiveChat oder Fax bei einem Mitarbeiter im First Level ein und werden von diesem in einem Tickettool (z. B. OTRS) dokumentiert und, wenn möglich, gelöst. Kann das Problem im First Level nicht gelöst werden, wird das Ticket an den Second Level weitergeleitet.

Der Second Level besteht meist aus besser geschultem und erfahrenerem Personal. Sie haben meist mehr Zeit, um sich um einzelne Probleme zu kümmern, und sind die Schnittstelle zum Third Level. Zudem hat der Second Level die Aufgabe, den First Level zu schulen.

Der Third Level bearbeitet die Probleme, die weder im First noch im Second Level gelöst werden konnten. Beim Third Level handelt es sich nicht nur um ein Team wie bei den beiden erstgenannten Leveln, sondern er besteht aus mehreren Expertenteams, die sich auf ein Thema spezialisiert haben. Das können zum Beispiel Serverspezialisten, Netzwerkspezialisten oder Programmierer sein.
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