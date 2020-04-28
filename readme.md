## What is this library

it is a function which creates a new axios instance that is intended to behave
like curl

## Why create it ?

I use curl a lot and cause bugs in axios because I expect it to behave the same.
Normally this is due to default headers added, however there may be additional
behavior that axios follows which curl doesn't, since curl is more bare bones.

## How to use it ?

```
import makeAxiosBehaveLikeCurl from 'make-axios-behave-like-curl'
import axios from 'axios'

// curl is a new instance of axios
const curl = makeAxiosBehaveLikeCurl(axios)
```
