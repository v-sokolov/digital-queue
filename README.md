## Prerequisites:

1) Install rush globally
```shell
$ npm install -g @microsoft/rush
```

## Add new dependency
```shell
$ rush add -p [package-name] [--dev]
```

## Run single project
```shell
$ rushx [internal script]
```

## Run packages synchronization between projects
```shell
$ rush update [--full] [--purge]
```

## Save new changelog updates
```shell
$ rush change [--verify]
```

## Prettier
```shell
$ rush prettier
```
