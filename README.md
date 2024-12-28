# Installation

```shell
$ npm install arb-logger
```

# Usage

Using default log template

```js
const log = require('arb-logger')();

log.success('This is a success message');
log.error('This is an error message');
log.warn('This is a warning message');
log.info('This is an info message');
```

Using custom log template

```js
const log = require('./index')({
    custom: '&f&!7{timestamp}&r &8[CUSTOM] &7{text}'
});

log.custom('This is a custom message');
```

## Colors

```
&0 -> Black
&1 -> Blue
&2 -> Green
&3 -> Cyan
&4 -> Red
&5 -> Magenta
&6 -> Yellow
&7 -> Bright Black
&8 -> Bright White
&9 -> Bright Blue
&a -> Bright Green
&b -> Bright Cyan
&c -> Bright Red
&d -> Bright Magenta
&e -> Bright Yellow
&f -> White
&!0 -> Background Black
&!1 -> Background Blue
&!2 -> Background Green
&!3 -> Background Cyan
&!4 -> Background Red
&!5 -> Background Magenta
&!6 -> Background Yellow
&!7 -> Bright Background Black
&!8 -> Bright Background White
&!9 -> Bright Background Blue
&!a -> Bright Background Green
&!b -> Bright Background Cyan
&!c -> Bright Background Red
&!d -> Bright Background Magenta
&!e -> Bright Background Yellow
&!f -> Background White
```

## Styles

```
&i -> Inverse
&j -> Dim
&k -> Blink
&l -> Bold
&m -> Strikethrough
&n -> Underline
&o -> Italic
&p -> Overline
&r -> Reset
&h -> Hidden
&v -> Visible
&x -> No Strikethrough
&u -> No Underline
&q -> No Overline
&w -> No Blink
&z -> No Inverse
```
