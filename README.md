# Note for code reviewer and interviwer
I have used Angular boilerplate from online available git resource. The task of gulp are not written by my self, it is used from boilerplate.
**Credit* git clone https://github.com/jbutko/AngularJS-Boilerplate.git

## 1. Setup
```bash
npm install
```
- install all npm and bower dependencies

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`

## 2. Watch files 
```bash
gulp
```

## 2.2. Run Test Cases (Run Specs file)
```bash
karma start
```

- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```