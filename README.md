# fs-vs-sqlite

## 50 files

```
read:sync:    1.886ms
read:async:   3.086ms

db:async:     0.899ms
db:sync:      0.600ms

db:async.get: 4.467ms
db:sync.get:  2.165ms

Read 50 files, total chars 152,066
```

- `db:async` takes **50%** of the time `read:sync` does and **30%** of the time that
  `read:async` does
- `db:(s)sync.get` which retrieves content one by one instead of via `SELECT * FROM ...`
  performs a lot worse since it actually has to query by `file`
- NOTE: the `file` is indexed

## 500 files

```
read:sync:     17.028ms
read:async:    16.287ms

db:sync:       3.327ms
db:async:      4.827ms

db:sync.get:  19.538ms
db:async.get: 35.814ms

Read 500 files, total chars 1,520,660
```

- `db:async` takes **30%** of the time `read:async` does

## 5,000 files

```
read:sync:     154.228ms
read:async:    134.503ms

db:sync:       37.708ms
db:async:      35.759ms

db:sync.get:  179.368ms
db:async.get: 304.823ms

Read 5,000 files, total chars 15,206,600
```
 
- `db:async` takes **27%** of the time `read:async` does

## 10,000 files

```
read:sync:     285.747ms
read:async:    249.342ms

db:sync:        70.344ms
db:async:       80.419ms

db:sync.get:   309.252ms
db:async.get:  566.872ms

Read 10000 files, total chars 30,413,200
```
 
- `db:async` takes **32%** of the time `read:async` does
