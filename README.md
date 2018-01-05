# Action Name Builder
Class for building action names for Redux. It provides clean and simple syntax with optional groups and prefixes/suffixes. 

Parameters can be mixed and matched, for example you can only pass suffix and group.

## Why?
While I realize that most standard action looks like `GROUP_SOMETHING_SOMETHING`, when working with medium or large projects, I find notation like `[GROUP] SOMETHING` more readable and cleaner. 

While this is pointless when used within a small project where all the actions are like this:

```js
const FETCH_POSTS = 'FETCH POSTS';
const CHANGE_ROUTE = 'CHANGE_ROUTE';
```

it can be really beneficial, when you have a lot of group-based logic flowing through your actions, for example:

```js
const POSTS_FETCH = '[POSTS] START FETCHING POSTS';
const POSTS_FETCH_SUCCESS = '[POSTS] POSTS FETCHING DONE';

const USER_LOGIN_ATTEMPT = '[USER] USER ATTEMPTS TO LOGIN';
const USER_LOGIN_SUCCESS = '[USER] USER LOGGED IN SUCCESSFULLY';

// etc
```

## Possible options
```js
const options = {
 group: 'your group', // example: 'posts', 'user action'
 prefix: '[', // prefix for the group, it will be added before the `group` text,
 suffix: ']', // suffix for the group, it will be added after the `group` text (remember to ommit the space after),
 underline: true // if true, every space will be converted to underline
}

const anb = new ActionNameBuilder(options);
```

## Examples
```js
const anb = new ActionNameBuilder({ group: 'test' });
const a = anb.make('something'); // returns [TEST] SOMETHING

const anbUnderlined = new ActionNameBuilder({ group: 'another', underline: true });
const b = anbUnderlined.make('something else'); // returns [ANOTHER]_SOMETHING_ELSE

const anbWithoutGroup = new ActionNameBuilder();
const c = anbWithoutGroup.make('something else'); // returns SOMETHING ELSE
```
