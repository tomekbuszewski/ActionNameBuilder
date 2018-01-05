# Class Name Builder
Class for building action names for Redux. It provides clean and simple syntax with optional groups and prefixes/suffixes. 

Parameters can be mixed and matched, for example you can only pass suffix and group.
 
### Possible options
```js
const options = {
 group: 'your group', // example: 'posts', 'user action'
 prefix: '[', // prefix for the group, it will be added before the `group` text,
 suffix: ']', // suffix for the group, it will be added after the `group` text (remember to ommit the space after),
 underline: true // if true, every space will be converted to underline
}

const anb = new ActionNameBuilder(options);
```

### Examples
```js
const anb = new ActionNameBuilder({ group: 'test' });
const a = anb.make('something'); // returns [TEST] SOMETHING

const anbUnderlined = new ActionNameBuilder({ group: 'another , underline: true });
const b = anbUnderlined.make('something else'); // returns [ANOTHER]_SOMETHING_ELSE

const anbWithoutGroup = new ActionNameBuilder();
const c = anbWithoutGroup.make('something else'); // returns SOMETHING ELSE
 */
