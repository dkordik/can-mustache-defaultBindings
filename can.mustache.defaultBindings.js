steal("can", "can/control",
function (can, Control) {

var Value = Control({
    init: function(){
        this.set()
    },
    "{value} change": function () {
        if (this.element[0].cancelElementUpdate) {
            this.element[0].cancelElementUpdate = false;
        } else {
            this.set();
        }
    },
    set: function(){
        this.element[0].value = this.options.value();
    },
    get: function () {
        this.options.value(this.element[0].value);
    },
    "change": "get",
    "keydown": function(){
        //setTimeout? yeah, that's how knockout does it in afterkeydown, too.
        //for the uninitiated: normally, the latest el value isn't available from keydown.
        //some may say "hey dummy, just use keyup!" but if we want DAT SPEED, keydown's the only way.
        //if you want to see this in action, remove the setTimeout and watch.
        setTimeout(can.proxy(function () {
            this.element[0].cancelElementUpdate = true;
            this.get();
        }, this), 0)
    }
});

can.Mustache.registerHelper("value", function (obs) {
    return function (el) {
        new Value(el, { value: obs })
    }
});

var Visible = Control({
    init: function(){
        this.set()
    },
    "{value} change": "set",
    set: function(){
        if (this.options.value() === true) {
            this.element.show();
        } else {
            this.element.hide();
        }
    }
});

can.Mustache.registerHelper("visible", function (obs) {
    return function (el) {
        new Visible(el, { value: obs })
    }
});

var CSSClass = Control({
    init: function(){
        this.set()
    },
    "{value} change": "set",
    set: function(){
        if (this.options.value() == true) {
            this.element.addClass(this.options.className);
        } else {
            this.element.removeClass(this.options.className);
        }
    }
});

can.Mustache.registerHelper("class", function (className, obs) {
    return function (el) {
        new CSSClass(el, { className: className, value: obs })
    }
});

var Click = Control({
    "click": function(){
        this.options.clickFunc(this.options.model);        
    }
});

can.Mustache.registerHelper("click", function (clickFunc) {
    var context = this;
    return function (el) {
        new Click(el, { clickFunc: clickFunc, model: context })
    }
});

var Submit = Control({
    "submit": function(el, ev){
        this.options.submitFunc(this.options.model);
        ev.preventDefault();
    }
});
 
can.Mustache.registerHelper("submit", function (submitFunc) {
    var context = this;
    return function (el) {
        new Submit(el, { submitFunc: submitFunc, model: context })
    }
});

var Check = Control({
    init: function(){
        this.set()
    },
    "{value} change": "set",
    set: function(){
        this.element.prop("checked", this.options.value());
    },
    "change": function(el, ev){
        this.options.value(this.element.prop("checked"));
    }
});
 
can.Mustache.registerHelper("checked", function (obs) {
    return function (el) {
        new Check(el, { value: obs })
    }
});

});