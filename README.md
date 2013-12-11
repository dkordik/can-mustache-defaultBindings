can.Mustache default two-way bindings
==================================

Default two-way bindings for can.Mustache, inspired by Knockout's [defaultBindings](https://github.com/knockout/knockout/tree/master/src/binding/defaultBindings) and [Justin Meyer](https://github.com/justinbmeyer)'s [Weekly Widget 2 - 2-Way Mustache Helpers](http://bitovi.com/blog/2013/01/weekly-widget-two-way-mustache-helpers.html)

###Usage

```handlebars
<form {{submit control.addTodo}}>
    <input type="text" {{value label}} placeholder="What do you need to do?">
    <button>Add todo</button>
</form>
```

See this JSFiddle for a more extensive example: http://jsfiddle.net/dkordik/txP9M/3/
