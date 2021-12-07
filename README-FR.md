# ktr-msc-ls1 - {EPITECH.}

Lien du sujet du projet ktr-msc-ls1 : https://github.com/filoupegase/ktr-msc-ls1/blob/main/doc/KTR-LS1.pdf

### Prerequis

* [node](https://nodejs.org/en/download/)
* [nodemon](https://www.npmjs.com/package//nodemon)

install `nodemon` en global

```sh
npm install -g nodemon
```

### Installation du projet

1. Clonez le repo

```sh
git clone https://github.com/filoupegase/ktr-msc-ls1.git
```

#### 1. BackEnd

2. Déplacez vous dans le dossier `/Backend`

3. Creer un fichier `.env` a la racine du dossier `/Backend`

4. L'arborescence doit ressembler à ca :

```
+-- /BackEnd
|   +-- controller/
|   +-- Models/
|   +-- node_modules/
|   +-- routes/
|   +-- .env
|   +-- .gitignore
|   +-- app.js
+-- ...
```

5. Ajoutez les variables présentent dans le mail

6. Installer les librairies :

```sh
npm install
```

7. Démarrer le serveur :

```sh
nodemon server
```

Rendez-vous sur [http://localhost:3000](http://localhost:3000/) et dans votre terminal

#### 2. FrontEnd

2. Déplacez vous dans le dossier `/FrontEnd`

3. Installer les librairies :

```sh
npm install
```

6. Démarrer le serveur :

```sh
npm start
```

Rendez-vous sur [http://localhost:3001](http://localhost:3001/)