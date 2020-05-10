#!/bin/bash

if [ "$#" -ne 2 ]; then
    printf "Das Script braucht als Argument die Kategorie des Servers und die Einrichtung.

Beispiel: inventory.sh mailserver dicvhi

Liste von Serverkategorien:

Parametername : Beschreibung
-------------   ------------
domaincontroller : Anmeldeserver (Active Directory / Domï¿½nen-Controller)
mailserver : Emailserver (Exchange)
fileserver : Dateiserver
spamfilter : Spamblocker / Mailgateway (Postfix)
intranet : Intranet (Sharepoint)
appserver : Applikationsserver
databaseserver : Datenbankserver (SQLServer)
hypervhost : Hyper-V
dockerhost : Docker-Host
helpdesk : Helpdesk (OTRS)
sensorserver : Sensor-Server (PRTG)
backupserver : Backup-Server
asterisk : VoIP-Server (asterisk)
reverseproxy : Reverse Proxy
citrix_controller : Citrix Controller
citrix_node : Citrix Cluster-Node
citrix_workerclone : Citrix Worker-Klon

Liste von Einrichtungsnamen:

Parametername : Beschreibung
-------------   ------------
dicvhi : Caritasverband fï¿½r die Diï¿½zese Hildesheim e. V.
stmonika : Altenpflegeheim St. Monika
hgeistsarstedt : Altenzentrum Heilig Geist Sarstedt
judithheim : Caritas Netzwerk Salzgitter (Judith Heim)
caritaswohnenhm : Caritas Wohnen Hann. Mï¿½nden
caritaswohnenhi : Caritas Wohnen Hildesheim
friedland : Caritasstelle Friedland
caritashelmstedt : Caritasverband fï¿½r den Landkreis Helmstedt
werkstaettenhannover : Caritaswerkstï¿½tten Hannover
caritaswohnenha : Caritas-Wohnen-Hannover
evrs : Elisabeth von Rantzau Schule
roederhof : Heimstatt Rï¿½derhof
henneckenrode : Kinder- und Jugendhilfe Henneckenrode
magdalenenhof : Magdalenenhof Senioren- u. Pflegeheim
waldmuehle : Mutter-Kind-Klinik Haus Waldmï¿½hle Braunlage
langeoog : Mutter-Kind-Klinik Langeoog
wangerooge : Mutter-Kind-Klinik St. Willehad Wangerooge
mariaimtann : Senioren-Pflegeheim Maria im Tann
stansgar : St. Ansgar Kinder- und Jugendhilfe
stbonifatius : St. Bonifatius Kinder- und Jugendhilfe
sthedwig : St. Hedwig Braunschweig
stjoseph : St. Joseph Kinder- und Jugendhilfe
stnikolaus : St. Nikolaus Kinder- und Jugendhilfe
stteresienhaus : St. Teresienhaus Bremen Kinder- und Jungendhilfe
teresienhof : Teresienhof Senioren- u. Pflegeheim


"
exit 1
fi


SUDO=''
if [ "$(id -u)" != "0" ]; then
        SUDO='sudo'
fi

$SUDO apt install dmidecode -y > /dev/null 2>&1
Serial="Servicetag nicht gefunden"
if [ "$(dmidecode > /dev/null 2>&1)" == "0"  ]; then
        $Serial=$(dmidecode | grep -i serial)
fi


OS=$(cat /etc/issue | sed 's/\\//g')
IPs=$(ip -o addr | awk '!/^[0-9]*: ?lo|link\/ether/ {gsub("/", " "); print $4}' | tr '\n' ',')
FQDN=$(hostname -f)
Name=$(hostname -s)
Mem=$((`grep MemTotal /proc/meminfo | awk '{print $2}'`/1048576))
CPU=$(cat /proc/cpuinfo | grep "model name" | tail -1 | cut -f 2 -d ":" | xargs)


output=$(printf "{
\"kategorie\": \"$1\",
\"einrichtung\": \"$2\",
\"OS_Name\": \"$OS\",
\"IP_Addresses\" : \"$IPs\",
\"FQDN\": \"$FQDN\",
\"Name\": \"$Name\",
\"SerialNumber\": \"$Serial\",
\"TotalMemory_GB\": \"$Mem\",
\"CPU_Name\": \"$CPU\"
}")

echo -e "Daten die hochgeladen werden:\n$output"

curl -d "$output" -H 'Content-Type: application/json' https://autodoc.deliancourt.org