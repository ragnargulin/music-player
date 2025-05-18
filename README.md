## Projektöversikt
Denna applikation hanterar musikspellistor där användaren kan:
- Lista spellistor
- Skapa nya spellistor
- Organisera musik efter genre, artist och låtar

Projektet är byggt i JavaScript och följer MVC-designmönstret för bättre struktur och underhållbarhet. UI:t är enkelt men funktionellt. Fokus har lagts på javascript-koden.

## Gitstruktur och arbetsmetodik
Projektet är versionhanterat med Git och publicerat på GitHub. Följande grenar används:
- **main** – stabil produktionskod
- **development** – aktiv utveckling inför nästa release
- **features** – för nya funktioner innan de slås ihop med development

### Använda git-kommandon

**Skapa ny gren:**

```
    git checkout -b features/ny-funktion
```

**Byta gren:**

```
    git checkout development
```

**Slå ihop grenar:**

```
    git checkout development
    git merge features/ny-funktion
```

**Lösa konflikter:**
1. Git markerar konfliktområden i filerna med `<<<<<<<`, `=======`, `>>>>>>>`
2. Gå igenom konflikterna, välj vilken kod som ska behållas eller kombinera delar
3. När konflikterna är lösta:

```
       git add .
       git commit
```

**Tips:** Testa alltid applikationen efter merge för att försäkra att allt fungerar.

## Struktur (MVC)
- **Model**: Hanterar data, t.ex. spellistor, låtar och kategorisering
- **View**: HTML och CSS för att visa innehållet för användaren
- **Controller**: Logiken som kopplar samman användarens interaktion med datan

Koden är organiserad i mappar:
- /models
- /views
- /controllers