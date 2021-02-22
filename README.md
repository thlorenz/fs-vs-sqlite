# fs-vs-sqlite

## 50 files

```
read:sync:    1.886ms
read:async:   3.086ms
db:selectAll: 0.899ms
Read 50 files, total chars 152,066
```

- `db:selectAll` takes **50%** of the time `read:sync` does and **30%** of the time that
  `read:async` does

## 500 files

```
read:sync:     17.028ms
read:async:    16.287ms
db:selectAll:   4.827ms
Read 500 files, total chars 1,520,660
```

- `db:selectAll` takes **30%** of the time `read:async` does

## 5,000 files

```
read:sync:     154.228ms
read:async:    134.503ms
db:selectAll:   35.759ms
Read 5,000 files, total chars 15,206,600
```
 
- `db:selectAll` takes **27%** of the time `read:async` does

## 10,000 files

```
read:sync:     285.747ms
read:async:    249.342ms
db:selectAll:   80.419ms
Read 10000 files, total chars 30,413,200
```
 
- `db:selectAll` takes **32%** of the time `read:async` does
