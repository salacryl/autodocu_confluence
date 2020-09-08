const getText = (kategorie, Os, IPs, FQDN, ServiceTag, RAM, CPU) => {

	let text = `<table class='confluenceTable'>
<tr>
<td class='confluenceTd'>Kategorie</td><td class='confluenceTd'>Helpdesk</td>
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
Ein Helpdesk, Help-Desk oder User-Help-Desk (UHD) ist ein Issue-Tracking-System, das vorrangig für die Unterstützung von Anwendern von Hard- und Software, aber auch für Anfragen von Kunden in anderen Dienstleistungsbereichen zuständig ist.

Die Hilfe (Help) kann dabei über klassischen Telefonservice, aber auch mit Hilfe technischer Geräte sowie von Software (Fernwartung, Live-Support-System) erfolgen.

In speziellen Issue-Tracking-Systemen werden die Anfragen verwaltet. Damit kann einerseits von allen eingesetzten Kundenbetreuern auf die Service- und Fehlerhistorie zurückgegriffen und andererseits durch Fehleranalysen die Weiterentwicklung der Produkte oder des Service unterstützt werden.

Die Wissensdatenbank spielt eine zentrale Rolle im Help Desk bei der Fehleranalyse und letztlich der Lösung und Wiederherstellung der Dienstbereitschaft (Produkte und Services).

Die Qualität des Helpdesks nimmt einen zunehmenden Stellenwert bei der Beurteilung von Unternehmen und Produkten ein. Kundenbindung und Image stehen oft in engem Zusammenhang mit der angebotenen Unterstützung.

Für Helpdesks zum IT-Management gilt das ITIL-Service-Desk-Rahmenwerk als De-facto-Standard.
<h2>Gliederung des Helpdesks</h2>
Ein Helpdesk gliedert sich in verschiedene sogenannte Level. Ein Level ist eine Gruppe von Experten, die speziell für die Tätigkeit in diesem Level zuständig ist. Insgesamt sind am Helpdesk 3 Level vorgesehen.

Der First Level ist der Erstkontakt zum Kunden. Dieser besteht zumeist aus Mitarbeitern, die zwar eine IT-Grundausbildung haben, sich jedoch auf keinen Bereich spezialisiert haben. An einigen Helpdesks wird diese Aufgabe auch durch Call-Center-Agenten übernommen. Die Anfragen gehen unter anderem per Mail, Telefon, LiveChat oder Fax bei einem Mitarbeiter im First Level ein und werden von diesem in einem Tickettool (z. B. OTRS) dokumentiert und, wenn möglich, gelöst. Kann das Problem im First Level nicht gelöst werden, wird das Ticket an den Second Level weitergeleitet.

Der Second Level besteht meist aus besser geschultem und erfahrenerem Personal. Sie haben meist mehr Zeit, um sich um einzelne Probleme zu kümmern, und sind die Schnittstelle zum Third Level. Zudem hat der Second Level die Aufgabe, den First Level zu schulen.

Der Third Level bearbeitet die Probleme, die weder im First noch im Second Level gelöst werden konnten. Beim Third Level handelt es sich nicht nur um ein Team wie bei den beiden erstgenannten Leveln, sondern er besteht aus mehreren Expertenteams, die sich auf ein Thema spezialisiert haben. Das können zum Beispiel Serverspezialisten, Netzwerkspezialisten oder Programmierer sein.
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