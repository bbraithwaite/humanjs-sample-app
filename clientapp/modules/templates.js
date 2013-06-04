(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects
exports.includes = {};
exports.pages = {};

// app.jade compiled template
exports.app = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<div class="container"><div class="navbar"><div class="navbar-inner"><a href="#" class="brand">human.js - sample</a><ul class="nav"><li><a href="/">home</a></li><li><a href="/one">page one</a></li><li><a href="/two">page two</a></li></ul></div></div><section id="pages"></section></div>');
    }
    return buf.join("");
};

// watchedTask.jade compiled template
exports.includes.watchedTask = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push("<li" + jade.attrs({
            id: id,
            "class": "watchedTask task watched"
        }, {
            id: true,
            "class": true
        }) + '><!-- task permalink--><span class="title">' + ((jade.interp = taskTitleHtml) == null ? "" : jade.interp) + "</span></li>");
    }
    return buf.join("");
};

// fourOhFour.jade compiled template
exports.pages.fourOhFour = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page fourOhFour"><h2>404</h2></section>');
    }
    return buf.join("");
};

// homepage.jade compiled template
exports.pages.homepage = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page home"><h2>Home</h2><p>If you view source you\'ll see pretty things. </p></section>');
    }
    return buf.join("");
};

// pageOne.jade compiled template
exports.pages.pageOne = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageOne"><h2>Page 1</h2></section>');
    }
    return buf.join("");
};

// pageTwo.jade compiled template
exports.pages.pageTwo = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageTwo"><h2>Page 2</h2></section>');
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();