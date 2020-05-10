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
Mit Citrix Hypervisor Pools können Sie mehrere Server und den verbundenen gemeinsam genutzten Speicher als eine einzige einheitliche Ressource anzeigen. Verwenden Sie diese Ansicht, um VMs basierend auf ihren Ressourcenanforderungen und Geschäftsprioritäten bereitzustellen. Ein Pool kann bis zu 64 Server mit derselben Version der Citrix Hypervisor-Software auf derselben Patch-Ebene und mit allgemein kompatibler Hardware enthalten. Weitere Informationen finden Sie unter Pool-Anforderungen.

Ein Server im Pool wird als Poolmaster festgelegt. Der Poolmaster stellt einen einzigen Ansprechpartner für alle Server im Pool bereit und leitet die Kommunikation an andere Mitglieder des Pools nach Bedarf weiter.

Wenn der Poolmaster heruntergefahren wird, ist der Pool nicht verfügbar, bis der Master wieder online ist oder bis Sie eines der anderen Mitglieder als den neuen Poolmaster nominiert haben. Jedes Mitglied eines Ressourcenpools enthält alle Informationen, die erforderlich sind, um die Rolle des Masters zu übernehmen, falls erforderlich. Bei einem HA-aktivierten Pool wird automatisch ein neuer Poolmaster nominiert, wenn der Master heruntergefahren wird.
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