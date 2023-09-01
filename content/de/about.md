Scigate ist ein Showcase und One-Stop-Shop für (Rechts-)Daten. Zurzeit handelt es sich bei Scigate um einen frühen Prototyp

## I. Datenhunger

Künstliche Intelligenz braucht Daten, natürliche Intelligenz auch. Gateway zu diesen Daten im weitesten Sinne war früher, nicht zuletzt wenn es um die Wissenschaft ging, vor allem die Bibliothek. Gatekeeper zu diesen Daten waren die Bibliothekarinnen und Bibliothekare, welche die Texte, die Daten mit Metadaten versahen und sie so such- und auffindbar machten.

Von dieser Bibliothek ist heute wenig geblieben. Wissenschaftsdaten werden heute häufig in Datenbanken verschiedenster Akteure zur Verfügung gestellt, mit unterschiedlichem Zugang und verschiedenster Zugänglichkeit, nicht zuletzt in Hinblick auf die inhaltliche Erschliessung und so auch wiederum Such- und Auffindbarkeit der Daten. Eine bedeutende Rolle nehmen Grossverlage ein, die mit ihren Datenbanken die öffentlichen Bibliotheken als Gatekeeper des Wissens weitestgehend abgelöst haben.

Neben Vorteilen der heutigen Vielfalt von Datenquellen beeinträchtigt die damit einhergehende Fragmentierung des Zugangs zu Wissenschaftsdaten die nationale und internationale Forschung und deren Sichtbarkeit. Das Projekt Scigate möchte versuchen, hier einen Gegenpol zu bilden. Jenseits der weiterhin bestehenden und zudem wünschenswerten Vielfalt der Datenquellen soll ein einheitlicher Sucheinstieg in die heute stark fragmentiere Landschaft wissenschaftlicher Datenbanken sowie ein niederschwellig zugänglicher One-Stop-Shop für Wissenschaftsdaten geschaffen werden.

## II. Showcase und One-Stop-Shop für (Rechts-)Daten

Mit Scigate haben wir einen ersten Prototypen geschaffen, mit dem Schwerpunkt rechtswissenschaftliche Daten: Wäre es nicht schön, von einem Ort aus das ganze Textkorpus „Recht“ durchsuchen zu können – alle Rechtsdaten, Gesetze, wissenschaftliche Veröffentlichungen, Urteile und sonstige Texte aus der sogenannten Rechtspraxis? Und wäre es nicht mindestens ebenso schön, auf all diese Rechtstexte dann auch sogleich zugreifen zu können?

Mit Scigate soll eine solche Schnittstelle zum Textkorpus Recht skizziert werden, die klassische Suchschnittstelle und moderne Programmierschnittstelle zugleich ist.

Scigate ist, wenn überhaupt, ein „running prototype“, ein Konzept, das hoffentlich nicht zu langweilig ist, um diskutiert zu werden. Die Herausforderungen sind gross, doch die damit verbundene Möglichkeiten zu verlockend.

Zur Reduzierung der Komplexität wird eine weitgehende Modularisierung von Scigate angestrebt. So erfolgt insbesondere die Datenaggregierung weiter an verschiedensten Orten, in verschiedensten Formaten und Datenbanken. Dreh- und Angelpunkt von Scigate werden damit sogenannte Plug-Ins, deren Aufgabe es ist, Datenquellen anzusprechen und ihre Antwort zurück für Scigate zu übersetzen.

Wie aber werden dann etwa die Suchergebnisse dargestellt? Kann man diese so heterogenen Suchergebnisse in einer Liste zusammenführen? Inwieweit müssen wir die Daten der einzelnen Datenquellen homogenisieren, um sie dann auch homogen abrufen zu können? Wie gehen wir mit Dubletten um? Wie gewichtet man die Ergebnisse? Legt man die Gewichtung offen? Soll man dann gar zwischen verschiedensten offenen Gewichtungen und Suchalgorhythmen wählen können? Hilft eine graphische Aufarbeitung der Suchergebnisse? Und wie steht man zur Künstlichen Intelligenz, als Abbild dieses so bereits geschaffenen Wissens und als vielleicht Motor künftiger Wissenschaft? Eine Lösung für alles auf einmal wird man kaum finden. Aber auf zweimal, dreimal, Stück für Stück und modular. Vielleicht.

## III. Technisches

Angestrebt wird, Scigate möglichst modular aufzubauen und so die technischen Herausforderungen möglichst selbstständig zu adressieren.

Untechnisch technisch gesprochen werden hierzu die einzelnen Datenquellen durch Plugins bzw. Proxies an Scigate angebunden. Die Proxies dienen als Übersetzter zwischen sicgate und den Datenquellen. Sie übersetzen die Anfragen von Scigate für die einzelne Datenquelle und bereiten deren Antwort wiederum für Scigate auf.

Herausforderung der nahen Zukunft wird es sein, weitere Datenquellen anzubinden, die Suchergebnisse zusätzlich in einer einheitlichen Trefferliste aufzuarbeiten und die so bereits etwas homogenisierten Daten mittels der sicgate-API zur Weiternutzung zugänglich zu machen.

Scigate ist als Open-Source-Projekt konzipiert. Der Zugang zum Quellcode findet sich zurzeit hier:

- Allgemeines Suchinterface: https://github.com/lehrstuhl-boente/scigate-ui-new
- Proxies zur Anbindung von Datenquellen: https://github.com/lehrstuhl-boente/scigate-proxies
- API zum Massendownload der Suchergebnisse: https://github.com/lehrstuhl-boente/scigate-api

Über Ideen, Mitarbeit bei der Weiterentwicklung, Hinweise, Rückmeldungen, technische Anfragen etc. an lst.boente@rwi.uzh.ch würden wir uns sehr freuen!
