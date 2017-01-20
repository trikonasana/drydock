# docker container

## info

run nightmarejs (node/mocha/chai) based tests - headless and head..ähm..ful with electron.
nice small container.

## config

###toggle head-mode

in test.js l.17:

```
       show: false, //tests run in headless mode
```

```
       show: true, //tests run in browser mode
```

###report

in Dockerfile l.25 

```
       CMD /usr/bin/xvfb-run --server-args="-screen 0 1024x768x24" /usr/local/bin/mocha -R mocha-json-singleline > report .
```

edit **-R mocha-json-singleline > report** to use any mocha reporter configuration (https://mochajs.org/#reporters)

## build

```sh
$ docker build -t electro-knight .
```

## run
```sh
$ docker run -ti electro-knight
```

## copy report file from container
### bash
```sh
$ ./report
```
### fish
```sh
$ fish report.fish
```

