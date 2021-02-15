**UWAGA! Zaczynając pracę nad projektem — nie róbcie forka.
Jedna osoba z zespołu (np. Mentor) powinna użyć przycisku `Use this template` i dodać innych członków zespołu jako Collaborators do tego repozytorium.
Mentorzy mogą dowolnie zmieniać zakres projektu lub zdecydować się na zupełnie inny temat.**

# CodersCamp 2020 - Projekt TypeScript

## Gra DEVBLE - opis projektu
### Live Demo: 
### Zasady gry
Devble to gra przeglądarkowa dla 1 gracza.
Nazwa powstała od słów "development" oraz od nazwy popularnej gry karcianej, która była dla nas swego rodzaju inspiracją. W projekcie wykorzystaliśmy ikony związane z programowaniem dostępne na stronie [devicon.dev](https://devicon.dev/)
Zasady gry są proste - na ekranie wyświetlane są dwie karty i należy znaleźć wspólny symbol na obu kartach.
Zadanie to nie zawsze jest jednak łatwe, ponieważ ikony mogą różnić się rozmiarem i położeniem, mogą być też obrócone.
Po rozpoznaniu szukanej ikony na obu kartach, należy kliknąć na nią na dowolnej karcie.
Jeśli symbol został wskazany prawidłowo, obie ikony podświetlają się na zielono (na obu kartach), karta znika z ekranu, a w jej miejsce pojawia się nowa karta wylosowana z talii.
Jeśli gracz kliknął nieprawidłową ikonę (ikonę nie będącą również na drugiej karcie) - ikona ta podświetla się na czerwono. Karty nie znikają ze stołu dopóki gracz nie wskaże poprawnego symbolu!
W czasie rozgrywki mierzony jest czas, który następnie wyświetlany jest graczowi w podsumowaniu rozgrywki.
Kiedy wylosowane zostaną dwie ostatnie karty z talii i gracz znajdzie prawidłowy symbol, gra kończy się i zostają wyświetlone wyniki rozgrywki.

### Komendy do uruchomienia projektu:
- tsc -b - build projektu
- npm run test - odpalenie testów
- npm run scss:build - komplikacja plików scss do css
- npm run scss:watch - komplikacja plików scss do css - watch mode

### Skład zespołu:
- Mentor: Arleta Jędrzejczak
- Stanisław Gardzielewski
- Mariusz Olszewski
- Bartosz Ratajczyk
- Urszula Wilk
  
### Użyte technologie
W projekcie zostały przez nas wykorzystane następujące technologie:
- TypeScript
- HTML5
- CSS (SASS)
- Jest

### Materiały 
- ikony pochodzą ze strony [DevIcon](https://devicon.dev/)
- Projekt graficzny wykonany w programie [Figma](https://www.figma.com/file/ecu35ohB62NRav6cFWUNhO/programistdouble?node-id=0%3A1)

### Rozwój projektu
Mamy wiele pomysłów na dalszy rozwój tego projektu. Niektóre z nich to:
- dodanie kilku trybów gry, np gra na czas, gra na różną ilość kart
- dodanie różnych poziomów trudności, np. większa ilość symboli na każdej karcie, obracające się karty, te same ikony w różnych kolorach
- dodanie trybu gry dla 2 graczy
- różne paczki ikon do wyboru przez gracza
- rozpoznawanie mowy (podajesz nazwę symbolu i silnik gry weryfikuje poprawność)


**CodersCamp (coderscamp.edu.pl) - Największy otwarty kurs programowania webowego**

### Zasady wykonywania projektu (wspólne dla wszystkich grup i mentorów):

##### W projekcie każdy z uczestników powinien zaprezentować praktyczną znajomość poniższych zagadnień związanych z TypeScript:

- typy podstawowe
- definiowanie własnych typów
- składanie typów
- typy / klasy / interfejsy
- implementacja / dziedziczenie / kompozycja / implementacja interfejsu
- modyfikatory dostępu
- typy generyczne
- testy jednostkowe i TDD

##### W trakcie trwania projektu należy wyznaczyć w zespole następujące role

tak jak opisano w przypadku poprzedniego projektu.

Product Owner & Dev Manager odpowiada za ustalenie zadań dla zespołu, które umożliwią wykonanie aplikacji zgodnie z wymaganiami.
Oczywiście nie musi, a nawet nie powinien tego robić sam (nieoceniona będzie pomoc Tech Leadera i oczywiście opinia Klienta - pamiętajcie o jego cennym czasie i nie angażujcie w każdą dyskusję).
Można zorganizować spotkanie osób pełniących role w zespole, albo nawet całego zespołu.
W tym projekcie dobrze też zacząć estymować zadania wspólnie z zespołem. Jednakże mentor może zaproponować swój tryb pracy.
Skupcie się na jakości wykonania i pracy zespołowej. Niektóre wymagania mogą przypominać Wam poprzedni projekt, więc czasem może być warto wykorzystać już posiadaną wiedzę.

##### Sposób oceny projektu (i wszystkich kolejnych projektów na CodersCamp)

tak jak opisano w przypadku poprzedniego projektu.

