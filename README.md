# ktr-msc-ls1 - {EPITECH.}

Link of the project subject : https://github.com/filoupegase/ktr-msc-ls1/blob/main/doc/KTR-LS1.pdf

### Installation Require :

* [node](https://nodejs.org/en/download/)
* [nodemon](https://www.npmjs.com/package//nodemon)

install global `nodemon`

```sh
npm install -g nodemon
```

### Installation of the project :

1. Clone the repo

```sh
git clone https://github.com/filoupegase/ktr-msc-ls1.git
```

#### 1. Set BackEnd

2. Move to the `/Backend` folder

3. Create a `.env` file at the root of the file `/Backend`

4. The structure should look like this :

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

5. Add the variables present in the mail

6. Install the libraries :

```sh
npm install
```

7. Run the server :

```sh
nodemon server
```

Go to http://localhost:8000/ and check the terminal

#### 2. Set FrontEnd

2. Move to the `/FrontEnd` folder

3. Install the libraries :

```sh
npm install
```

6. Run the server :

```sh
npm start
```

Go to http://localhost:3000/

## Security Packages

### Helmet

Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

* [Helmet](https://www.npmjs.com/package/helmet)

### mongo-sanitize

For the passionately lazy, a standalone module that sanitizes inputs against query selector injection attacks.

* [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize)




