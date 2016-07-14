# Hoodie-app-ember-example

Setup

```
git clone https://github.com/gr2m/hoodie-app-ember-example.git
cd hoodie-app-ember-example
npm install
```

Start dev server

```
ember server
```

Uses [ember-hoodie](https://github.com/courajs/ember-hoodie). If you see an error that `ember-hoodie` cannot be found, create `node_modules/ember-hoodie/addon/index.js`
with this content:

```js
import Store from './services/store';

export {
  Store
};
```

It’s already [fixed in ember-hoodie](https://github.com/courajs/ember-hoodie/commit/c26bcfe7f99139dbd532c876b93021d86fedc109) but not yet released.
