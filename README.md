can.Mustache default two-way bindings
==================================

Default two-way bindings for can.Mustache, inspired by Knockout's [defaultBindings](https://github.com/knockout/knockout/tree/master/src/binding/defaultBindings)

###Usage

```handlebars
<form {{submit control.addTodo}}>
    <input type="text" {{value label}} placeholder="What do you need to do?">
    <button>Add todo</button>
</form>
```

See this JSFiddle for a more extensive example: http://jsfiddle.net/dkordik/txP9M/3/
