﻿/*jquery.1.3.2.min.js*/
(function () {
  var W = this, ab, F = W.jQuery, S = W.$, T = W.jQuery = W.$ = function (b,
      a) {
    return new T.fn.init(b, a)
  }, M = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, ac = /^.[^:#\[\.,]*$/;
  T.fn = T.prototype = {
    init: function (e, b) {
      e = e || document;
      if (e.nodeType) {
        this[0] = e;
        this.length = 1;
        this.context = e;
        return this
      }
      if (typeof e === "string") {
        var c = M.exec(e);
        if (c && (c[1] || !b)) {
          if (c[1]) {
            e = T.clean([c[1]], b)
          } else {
            var a = document.getElementById(c[3]);
            if (a && a.id != c[3]) {
              return T().find(e)
            }
            var d = T(a || []);
            d.context = document;
            d.selector = e;
            return d
          }
        } else {
          return T(b).find(e)
        }
      } else {
        if (T.isFunction(e)) {
          return T(document).ready(e)
        }
      }
      if (e.selector && e.context) {
        this.selector = e.selector;
        this.context = e.context
      }
      return this.setArray(T.isArray(e) ? e : T.makeArray(e))
    }, selector: "", jquery: "1.3.2", size: function () {
      return this.length
    }, get: function (a) {
      return a === ab ? Array.prototype.slice.call(this) : this[a]
    }, pushStack: function (c, a, d) {
      var b = T(c);
      b.prevObject = this;
      b.context = this.context;
      if (a === "find") {
        b.selector = this.selector + (this.selector ? " " : "") + d
      } else {
        if (a) {
          b.selector = this.selector + "." + a + "(" + d + ")"
        }
      }
      return b
    }, setArray: function (a) {
      this.length = 0;
      Array.prototype.push.apply(this, a);
      return this
    }, each: function (a, b) {
      return T.each(this, a, b)
    }, index: function (a) {
      return T.inArray(a && a.jquery ? a[0] : a, this)
    }, attr: function (c, a, b) {
      var d = c;
      if (typeof c === "string") {
        if (a === ab) {
          return this[0] && T[b || "attr"](this[0], c)
        } else {
          d = {};
          d[c] = a
        }
      }
      return this.each(function (e) {
        for (c in d) {
          T.attr(b ? this.style : this, c, T.prop(this, d[c], b, e, c))
        }
      })
    }, css: function (b, a) {
      if ((b == "width" || b == "height") && parseFloat(a) < 0) {
        a = ab
      }
      return this.attr(b, a, "curCSS")
    }, text: function (a) {
      if (typeof a !== "object" && a != null) {
        return this.empty().append(
            (this[0] && this[0].ownerDocument || document).createTextNode(a))
      }
      var b = "";
      T.each(a || this, function () {
        T.each(this.childNodes, function () {
          if (this.nodeType != 8) {
            b += this.nodeType != 1 ? this.nodeValue : T.fn.text([this])
          }
        })
      });
      return b
    }, wrapAll: function (b) {
      if (this[0]) {
        var a = T(b, this[0].ownerDocument).clone();
        if (this[0].parentNode) {
          a.insertBefore(this[0])
        }
        a.map(function () {
          var c = this;
          while (c.firstChild) {
            c = c.firstChild
          }
          return c
        }).append(this)
      }
      return this
    }, wrapInner: function (a) {
      return this.each(function () {
        T(this).contents().wrapAll(a)
      })
    }, wrap: function (a) {
      return this.each(function () {
        T(this).wrapAll(a)
      })
    }, append: function () {
      return this.domManip(arguments, true, function (a) {
        if (this.nodeType == 1) {
          this.appendChild(a)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, true, function (a) {
        if (this.nodeType == 1) {
          this.insertBefore(a, this.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, false, function (a) {
        this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return this.domManip(arguments, false, function (a) {
        this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, end: function () {
      return this.prevObject || T([])
    }, push: [].push, sort: [].sort, splice: [].splice, find: function (b) {
      if (this.length === 1) {
        var a = this.pushStack([], "find", b);
        a.length = 0;
        T.find(b, this[0], a);
        return a
      } else {
        return this.pushStack(T.unique(T.map(this, function (c) {
          return T.find(b, c)
        })), "find", b)
      }
    }, clone: function (b) {
      var d = this.map(function () {
        if (!T.support.noCloneEvent && !T.isXMLDoc(this)) {
          var f = this.outerHTML;
          if (!f) {
            var e = this.ownerDocument.createElement("div");
            e.appendChild(this.cloneNode(true));
            f = e.innerHTML
          }
          return T.clean(
              [f.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/,
                  "")])[0]
        } else {
          return this.cloneNode(true)
        }
      });
      if (b === true) {
        var a = this.find("*").andSelf(), c = 0;
        d.find("*").andSelf().each(function () {
          if (this.nodeName !== a[c].nodeName) {
            return
          }
          var g = T.data(a[c], "events");
          for (var e in g) {
            for (var f in g[e]) {
              T.event.add(this, e, g[e][f], g[e][f].data)
            }
          }
          c++
        })
      }
      return d
    }, filter: function (a) {
      return this.pushStack(T.isFunction(a) && T.grep(this, function (b, c) {
            return a.call(b, c)
          }) || T.multiFilter(a, T.grep(this, function (b) {
            return b.nodeType === 1
          })), "filter", a)
    }, closest: function (c) {
      var a = T.expr.match.POS.test(c) ? T(c) : null, b = 0;
      return this.map(function () {
        var d = this;
        while (d && d.ownerDocument) {
          if (a ? a.index(d) > -1 : T(d).is(c)) {
            T.data(d, "closest", b);
            return d
          }
          d = d.parentNode;
          b++
        }
      })
    }, not: function (b) {
      if (typeof b === "string") {
        if (ac.test(b)) {
          return this.pushStack(T.multiFilter(b, this, true), "not", b)
        } else {
          b = T.multiFilter(b, this)
        }
      }
      var a = b.length && b[b.length - 1] !== ab && !b.nodeType;
      return this.filter(function () {
        return a ? T.inArray(this, b) < 0 : this != b
      })
    }, add: function (a) {
      return this.pushStack(T.unique(
          T.merge(this.get(), typeof a === "string" ? T(a) : T.makeArray(a))))
    }, is: function (a) {
      return !!a && T.multiFilter(a, this).length > 0
    }, hasClass: function (a) {
      return !!a && this.is("." + a)
    }, val: function (c) {
      if (c === ab) {
        var i = this[0];
        if (i) {
          if (T.nodeName(i, "option")) {
            return (i.attributes.value || {}).specified ? i.value : i.text
          }
          if (T.nodeName(i, "select")) {
            var e = i.selectedIndex, b = [], a = i.options, f = i.type
                == "select-one";
            if (e < 0) {
              return null
            }
            for (var h = f ? e : 0, d = f ? e + 1 : a.length; h < d; h++) {
              var g = a[h];
              if (g.selected) {
                c = T(g).val();
                if (f) {
                  return c
                }
                b.push(c)
              }
            }
            return b
          }
          return (i.value || "").replace(/\r/g, "")
        }
        return ab
      }
      if (typeof c === "number") {
        c += ""
      }
      return this.each(function () {
        if (this.nodeType != 1) {
          return
        }
        if (T.isArray(c) && /radio|checkbox/.test(this.type)) {
          this.checked = (T.inArray(this.value, c) >= 0 || T.inArray(this.name,
              c) >= 0)
        } else {
          if (T.nodeName(this, "select")) {
            var j = T.makeArray(c);
            T("option", this).each(function () {
              this.selected = (T.inArray(this.value, j) >= 0 || T.inArray(
                  this.text, j) >= 0)
            });
            if (!j.length) {
              this.selectedIndex = -1
            }
          } else {
            this.value = c
          }
        }
      })
    }, html: function (a) {
      return a === ab ? (this[0] ? this[0].innerHTML.replace(
          / jQuery\d+="(?:\d+|null)"/g, "") : null) : this.empty().append(a)
    }, replaceWith: function (a) {
      return this.after(a).remove()
    }, eq: function (a) {
      return this.slice(a, +a + 1)
    }, slice: function () {
      return this.pushStack(Array.prototype.slice.apply(this, arguments),
          "slice", Array.prototype.slice.call(arguments).join(","))
    }, map: function (a) {
      return this.pushStack(T.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    }, andSelf: function () {
      return this.add(this.prevObject)
    }, domManip: function (d, a, b) {
      if (this[0]) {
        var e = (this[0].ownerDocument
        || this[0]).createDocumentFragment(), h = T.clean(d,
            (this[0].ownerDocument || this[0]), e), f = e.firstChild;
        if (f) {
          for (var g = 0, i = this.length; g < i; g++) {
            b.call(c(this[g], f),
                this.length > 1 || g > 0 ? e.cloneNode(true) : e)
          }
        }
        if (h) {
          T.each(h, E)
        }
      }
      return this;
      function c(k, j) {
        return a && T.nodeName(k, "table") && T.nodeName(j, "tr")
            ? (k.getElementsByTagName("tbody")[0] || k.appendChild(
            k.ownerDocument.createElement("tbody"))) : k
      }
    }
  };
  T.fn.init.prototype = T.fn;
  function E(b, a) {
    if (a.src) {
      T.ajax({url: a.src, async: false, dataType: "script"})
    } else {
      T.globalEval(a.text || a.textContent || a.innerHTML || "")
    }
    if (a.parentNode) {
      a.parentNode.removeChild(a)
    }
  }

  function ad() {
    return +new Date
  }

  T.extend = T.fn.extend = function () {
    var c = arguments[0] || {}, e = 1, d = arguments.length, h = false, f;
    if (typeof c === "boolean") {
      h = c;
      c = arguments[1] || {};
      e = 2
    }
    if (typeof c !== "object" && !T.isFunction(c)) {
      c = {}
    }
    if (d == e) {
      c = this;
      --e
    }
    for (; e < d; e++) {
      if ((f = arguments[e]) != null) {
        for (var g in f) {
          var b = c[g], a = f[g];
          if (c === a) {
            continue
          }
          if (h && a && typeof a === "object" && !a.nodeType) {
            c[g] = T.extend(h, b || (a.length != null ? [] : {}), a)
          } else {
            if (a !== ab) {
              c[g] = a
            }
          }
        }
      }
    }
    return c
  };
  var ag = /z-?index|font-?weight|opacity|zoom|line-?height/i, Q = document.defaultView
      || {}, L = Object.prototype.toString;
  T.extend({
    noConflict: function (a) {
      W.$ = S;
      if (a) {
        W.jQuery = F
      }
      return T
    }, isFunction: function (a) {
      return L.call(a) === "[object Function]"
    }, isArray: function (a) {
      return L.call(a) === "[object Array]"
    }, isXMLDoc: function (a) {
      return a.nodeType === 9 && a.documentElement.nodeName !== "HTML"
          || !!a.ownerDocument && T.isXMLDoc(a.ownerDocument)
    }, globalEval: function (a) {
      if (a && /\S/.test(a)) {
        var b = document.getElementsByTagName("head")[0]
            || document.documentElement, c = document.createElement("script");
        c.type = "text/javascript";
        if (T.support.scriptEval) {
          c.appendChild(document.createTextNode(a))
        } else {
          c.text = a
        }
        b.insertBefore(c, b.firstChild);
        b.removeChild(c)
      }
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toUpperCase() == b.toUpperCase()
    }, each: function (e, a, f) {
      var g, d = 0, c = e.length;
      if (f) {
        if (c === ab) {
          for (g in e) {
            if (a.apply(e[g], f) === false) {
              break
            }
          }
        } else {
          for (; d < c;) {
            if (a.apply(e[d++], f) === false) {
              break
            }
          }
        }
      } else {
        if (c === ab) {
          for (g in e) {
            if (a.call(e[g], g, e[g]) === false) {
              break
            }
          }
        } else {
          for (var b = e[0]; d < c && a.call(b, d, b) !== false; b = e[++d]) {
          }
        }
      }
      return e
    }, prop: function (b, a, c, d, e) {
      if (T.isFunction(a)) {
        a = a.call(b, d)
      }
      return typeof a === "number" && c == "curCSS" && !ag.test(e) ? a + "px"
          : a
    }, className: {
      add: function (b, a) {
        T.each((a || "").split(/\s+/), function (d, c) {
          if (b.nodeType == 1 && !T.className.has(b.className, c)) {
            b.className += (b.className ? " " : "") + c
          }
        })
      }, remove: function (b, a) {
        if (b.nodeType == 1) {
          b.className = a !== ab ? T.grep(b.className.split(/\s+/),
              function (c) {
                return !T.className.has(a, c)
              }).join(" ") : ""
        }
      }, has: function (a, b) {
        return a && T.inArray(b, (a.className || a).toString().split(/\s+/))
            > -1
      }
    }, swap: function (b, c, a) {
      var e = {};
      for (var d in c) {
        e[d] = b.style[d];
        b.style[d] = c[d]
      }
      a.call(b);
      for (var d in c) {
        b.style[d] = e[d]
      }
    }, css: function (e, g, c, h) {
      if (g == "width" || g == "height") {
        var a, f = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        }, b = g == "width" ? ["Left", "Right"] : ["Top", "Bottom"];

        function d() {
          a = g == "width" ? e.offsetWidth : e.offsetHeight;
          if (h === "border") {
            return
          }
          T.each(b, function () {
            if (!h) {
              a -= parseFloat(T.curCSS(e, "padding" + this, true)) || 0
            }
            if (h === "margin") {
              a += parseFloat(T.curCSS(e, "margin" + this, true)) || 0
            } else {
              a -= parseFloat(T.curCSS(e, "border" + this + "Width", true)) || 0
            }
          })
        }

        if (e.offsetWidth !== 0) {
          d()
        } else {
          T.swap(e, f, d)
        }
        return Math.max(0, Math.round(a))
      }
      return T.curCSS(e, g, c)
    }, curCSS: function (e, h, g) {
      var b, i = e.style;
      if (h == "opacity" && !T.support.opacity) {
        b = T.attr(i, "opacity");
        return b == "" ? "1" : b
      }
      if (h.match(/float/i)) {
        h = H
      }
      if (!g && i && i[h]) {
        b = i[h]
      } else {
        if (Q.getComputedStyle) {
          if (h.match(/float/i)) {
            h = "float"
          }
          h = h.replace(/([A-Z])/g, "-$1").toLowerCase();
          var a = Q.getComputedStyle(e, null);
          if (a) {
            b = a.getPropertyValue(h)
          }
          if (h == "opacity" && b == "") {
            b = "1"
          }
        } else {
          if (e.currentStyle) {
            var d = h.replace(/\-(\w)/g, function (k, j) {
              return j.toUpperCase()
            });
            b = e.currentStyle[h] || e.currentStyle[d];
            if (!/^\d+(px)?$/i.test(b) && /^\d/.test(b)) {
              var f = i.left, c = e.runtimeStyle.left;
              e.runtimeStyle.left = e.currentStyle.left;
              i.left = b || 0;
              b = i.pixelLeft + "px";
              i.left = f;
              e.runtimeStyle.left = c
            }
          }
        }
      }
      return b
    }, clean: function (g, b, d) {
      b = b || document;
      if (typeof b.createElement === "undefined") {
        b = b.ownerDocument || b[0] && b[0].ownerDocument || document
      }
      if (!d && g.length === 1 && typeof g[0] === "string") {
        var e = /^<(\w+)\s*\/?>$/.exec(g[0]);
        if (e) {
          return [b.createElement(e[1])]
        }
      }
      var f = [], h = [], a = b.createElement("div");
      T.each(g, function (l, i) {
        if (typeof i === "number") {
          i += ""
        }
        if (!i) {
          return
        }
        if (typeof i === "string") {
          i = i.replace(/(<(\w+)[^>]*?)\/>/g, function (q, p, r) {
            return r.match(
                /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? q
                : p + "></" + r + ">"
          });
          var m = i.replace(/^\s+/, "").substring(0, 10).toLowerCase();
          var k = !m.indexOf("<opt") && [1, "<select multiple='multiple'>",
                "</select>"] || !m.indexOf("<leg") && [1, "<fieldset>",
                "</fieldset>"] || m.match(/^<(thead|tbody|tfoot|colg|cap)/)
              && [1, "<table>", "</table>"] || !m.indexOf("<tr") && [2,
                "<table><tbody>", "</tbody></table>"] || (!m.indexOf("<td")
              || !m.indexOf("<th")) && [3, "<table><tbody><tr>",
                "</tr></tbody></table>"] || !m.indexOf("<col") && [2,
                "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
              || !T.support.htmlSerialize && [1, "div<div>", "</div>"] || [0,
                "", ""];
          a.innerHTML = k[1] + i + k[2];
          while (k[0]--) {
            a = a.lastChild
          }
          if (!T.support.tbody) {
            var j = /<tbody/i.test(i), n = !m.indexOf("<table") && !j
                ? a.firstChild && a.firstChild.childNodes : k[1] == "<table>"
            && !j ? a.childNodes : [];
            for (var o = n.length - 1; o >= 0; --o) {
              if (T.nodeName(n[o], "tbody") && !n[o].childNodes.length) {
                n[o].parentNode.removeChild(n[o])
              }
            }
          }
          if (!T.support.leadingWhitespace && /^\s/.test(i)) {
            a.insertBefore(b.createTextNode(i.match(/^\s*/)[0]), a.firstChild)
          }
          i = T.makeArray(a.childNodes)
        }
        if (i.nodeType) {
          f.push(i)
        } else {
          f = T.merge(f, i)
        }
      });
      if (d) {
        for (var c = 0; f[c]; c++) {
          if (T.nodeName(f[c], "script") && (!f[c].type
              || f[c].type.toLowerCase() === "text/javascript")) {
            h.push(f[c].parentNode ? f[c].parentNode.removeChild(f[c]) : f[c])
          } else {
            if (f[c].nodeType === 1) {
              f.splice.apply(f, [c + 1, 0].concat(
                  T.makeArray(f[c].getElementsByTagName("script"))))
            }
            d.appendChild(f[c])
          }
        }
        return h
      }
      return f
    }, attr: function (c, f, b) {
      if (!c || c.nodeType == 3 || c.nodeType == 8) {
        return ab
      }
      var e = !T.isXMLDoc(c), a = b !== ab;
      f = e && T.props[f] || f;
      if (c.tagName) {
        var g = /href|src|style/.test(f);
        if (f == "selected" && c.parentNode) {
          c.parentNode.selectedIndex
        }
        if (f in c && e && !g) {
          if (a) {
            if (f == "type" && T.nodeName(c, "input") && c.parentNode) {
              throw "type property can't be changed"
            }
            c[f] = b
          }
          if (T.nodeName(c, "form") && c.getAttributeNode(f)) {
            return c.getAttributeNode(f).nodeValue
          }
          if (f == "tabIndex") {
            var d = c.getAttributeNode("tabIndex");
            return d && d.specified ? d.value : c.nodeName.match(
                /(button|input|object|select|textarea)/i) ? 0
                : c.nodeName.match(/^(a|area)$/i) && c.href ? 0 : ab
          }
          return c[f]
        }
        if (!T.support.style && e && f == "style") {
          return T.attr(c.style, "cssText", b)
        }
        if (a) {
          c.setAttribute(f, "" + b)
        }
        var h = !T.support.hrefNormalized && e && g ? c.getAttribute(f, 2)
            : c.getAttribute(f);
        return h === null ? ab : h
      }
      if (!T.support.opacity && f == "opacity") {
        if (a) {
          c.zoom = 1;
          c.filter = (c.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(
                  b) + "" == "NaN" ? "" : "alpha(opacity=" + b * 100 + ")")
        }
        return c.filter && c.filter.indexOf("opacity=") >= 0 ? (parseFloat(
            c.filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : ""
      }
      f = f.replace(/-([a-z])/ig, function (j, i) {
        return i.toUpperCase()
      });
      if (a) {
        c[f] = b
      }
      return c[f]
    }, trim: function (a) {
      return (a || "").replace(/^\s+|\s+$/g, "")
    }, makeArray: function (a) {
      var c = [];
      if (a != null) {
        var b = a.length;
        if (b == null || typeof a === "string" || T.isFunction(a)
            || a.setInterval) {
          c[0] = a
        } else {
          while (b) {
            c[--b] = a[b]
          }
        }
      }
      return c
    }, inArray: function (b, a) {
      for (var d = 0, c = a.length; d < c; d++) {
        if (a[d] === b) {
          return d
        }
      }
      return -1
    }, merge: function (b, e) {
      var d = 0, c, a = b.length;
      if (!T.support.getAll) {
        while ((c = e[d++]) != null) {
          if (c.nodeType != 8) {
            b[a++] = c
          }
        }
      } else {
        while ((c = e[d++]) != null) {
          b[a++] = c
        }
      }
      return b
    }, unique: function (a) {
      var f = [], g = {};
      try {
        for (var e = 0, d = a.length; e < d; e++) {
          var b = T.data(a[e]);
          if (!g[b]) {
            g[b] = true;
            f.push(a[e])
          }
        }
      } catch (c) {
        f = a
      }
      return f
    }, grep: function (e, a, f) {
      var d = [];
      for (var c = 0, b = e.length; c < b; c++) {
        if (!f != !a(e[c], c)) {
          d.push(e[c])
        }
      }
      return d
    }, map: function (f, a) {
      var e = [];
      for (var d = 0, c = f.length; d < c; d++) {
        var b = a(f[d], d);
        if (b != null) {
          e[e.length] = b
        }
      }
      return e.concat.apply([], e)
    }
  });
  var O = navigator.userAgent.toLowerCase();
  T.browser = {
    version: (O.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
    safari: /webkit/.test(O),
    opera: /opera/.test(O),
    msie: /msie/.test(O) && !/opera/.test(O),
    mozilla: /mozilla/.test(O) && !/(compatible|webkit)/.test(O)
  };
  T.each({
    parent: function (a) {
      return a.parentNode
    }, parents: function (a) {
      return T.dir(a, "parentNode")
    }, next: function (a) {
      return T.nth(a, 2, "nextSibling")
    }, prev: function (a) {
      return T.nth(a, 2, "previousSibling")
    }, nextAll: function (a) {
      return T.dir(a, "nextSibling")
    }, prevAll: function (a) {
      return T.dir(a, "previousSibling")
    }, siblings: function (a) {
      return T.sibling(a.parentNode.firstChild, a)
    }, children: function (a) {
      return T.sibling(a.firstChild)
    }, contents: function (a) {
      return T.nodeName(a, "iframe") ? a.contentDocument
      || a.contentWindow.document : T.makeArray(a.childNodes)
    }
  }, function (b, a) {
    T.fn[b] = function (d) {
      var c = T.map(this, a);
      if (d && typeof d == "string") {
        c = T.multiFilter(d, c)
      }
      return this.pushStack(T.unique(c), b, d)
    }
  });
  T.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (b, a) {
    T.fn[b] = function (h) {
      var e = [], c = T(h);
      for (var d = 0, g = c.length; d < g; d++) {
        var f = (d > 0 ? this.clone(true) : this).get();
        T.fn[a].apply(T(c[d]), f);
        e = e.concat(f)
      }
      return this.pushStack(e, b, h)
    }
  });
  T.each({
    removeAttr: function (a) {
      T.attr(this, a, "");
      if (this.nodeType == 1) {
        this.removeAttribute(a)
      }
    }, addClass: function (a) {
      T.className.add(this, a)
    }, removeClass: function (a) {
      T.className.remove(this, a)
    }, toggleClass: function (a, b) {
      if (typeof b !== "boolean") {
        b = !T.className.has(this, a)
      }
      T.className[b ? "add" : "remove"](this, a)
    }, remove: function (a) {
      if (!a || T.filter(a, [this]).length) {
        T("*", this).add([this]).each(function () {
          T.event.remove(this);
          T.removeData(this)
        });
        if (this.parentNode) {
          this.parentNode.removeChild(this)
        }
      }
    }, empty: function () {
      T(this).children().remove();
      while (this.firstChild) {
        this.removeChild(this.firstChild)
      }
    }
  }, function (b, a) {
    T.fn[b] = function () {
      return this.each(a, arguments)
    }
  });
  function Y(b, a) {
    return b[0] && parseInt(T.curCSS(b[0], a, true), 10) || 0
  }

  var aa = "jQuery" + ad(), I = 0, R = {};
  T.extend({
    cache: {}, data: function (c, d, b) {
      c = c == W ? R : c;
      var a = c[aa];
      if (!a) {
        a = c[aa] = ++I
      }
      if (d && !T.cache[a]) {
        T.cache[a] = {}
      }
      if (b !== ab) {
        T.cache[a][d] = b
      }
      return d ? T.cache[a][d] : a
    }, removeData: function (c, d) {
      c = c == W ? R : c;
      var a = c[aa];
      if (d) {
        if (T.cache[a]) {
          delete T.cache[a][d];
          d = "";
          for (d in T.cache[a]) {
            break
          }
          if (!d) {
            T.removeData(c)
          }
        }
      } else {
        try {
          delete c[aa]
        } catch (b) {
          if (c.removeAttribute) {
            c.removeAttribute(aa)
          }
        }
        delete T.cache[a]
      }
    }, queue: function (c, d, a) {
      if (c) {
        d = (d || "fx") + "queue";
        var b = T.data(c, d);
        if (!b || T.isArray(a)) {
          b = T.data(c, d, T.makeArray(a))
        } else {
          if (a) {
            b.push(a)
          }
        }
      }
      return b
    }, dequeue: function (a, b) {
      var d = T.queue(a, b), c = d.shift();
      if (!b || b === "fx") {
        c = d[0]
      }
      if (c !== ab) {
        c.call(a)
      }
    }
  });
  T.fn.extend({
    data: function (d, b) {
      var a = d.split(".");
      a[1] = a[1] ? "." + a[1] : "";
      if (b === ab) {
        var c = this.triggerHandler("getData" + a[1] + "!", [a[0]]);
        if (c === ab && this.length) {
          c = T.data(this[0], d)
        }
        return c === ab && a[1] ? this.data(a[0]) : c
      } else {
        return this.trigger("setData" + a[1] + "!", [a[0], b]).each(
            function () {
              T.data(this, d, b)
            })
      }
    }, removeData: function (a) {
      return this.each(function () {
        T.removeData(this, a)
      })
    }, queue: function (b, a) {
      if (typeof b !== "string") {
        a = b;
        b = "fx"
      }
      if (a === ab) {
        return T.queue(this[0], b)
      }
      return this.each(function () {
        var c = T.queue(this, b, a);
        if (b == "fx" && c.length == 1) {
          c[0].call(this)
        }
      })
    }, dequeue: function (a) {
      return this.each(function () {
        T.dequeue(this, a)
      })
    }
  });
  (function () {
    var b = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, h = 0, l = Object.prototype.toString;
    var n = function (r, v, ai, D) {
      ai = ai || [];
      v = v || document;
      if (v.nodeType !== 1 && v.nodeType !== 9) {
        return []
      }
      if (!r || typeof r !== "string") {
        return ai
      }
      var q = [], t, A, x, w, C, u, s = true;
      b.lastIndex = 0;
      while ((t = b.exec(r)) !== null) {
        q.push(t[1]);
        if (t[2]) {
          u = RegExp.rightContext;
          break
        }
      }
      if (q.length > 1 && g.exec(r)) {
        if (q.length === 2 && k.relative[q[0]]) {
          A = j(q[0] + q[1], v)
        } else {
          A = k.relative[q[0]] ? [v] : n(q.shift(), v);
          while (q.length) {
            r = q.shift();
            if (k.relative[r]) {
              r += q.shift()
            }
            A = j(r, A)
          }
        }
      } else {
        var B = D ? {expr: q.pop(), set: o(D)} : n.find(q.pop(),
            q.length === 1 && v.parentNode ? v.parentNode : v, c(v));
        A = n.filter(B.expr, B.set);
        if (q.length > 0) {
          x = o(A)
        } else {
          s = false
        }
        while (q.length) {
          var y = q.pop(), z = y;
          if (!k.relative[y]) {
            y = ""
          } else {
            z = q.pop()
          }
          if (z == null) {
            z = v
          }
          k.relative[y](x, z, c(v))
        }
      }
      if (!x) {
        x = A
      }
      if (!x) {
        throw "Syntax error, unrecognized expression: " + (y || r)
      }
      if (l.call(x) === "[object Array]") {
        if (!s) {
          ai.push.apply(ai, x)
        } else {
          if (v.nodeType === 1) {
            for (var p = 0; x[p] != null; p++) {
              if (x[p] && (x[p] === true || x[p].nodeType === 1 && i(v,
                      x[p]))) {
                ai.push(A[p])
              }
            }
          } else {
            for (var p = 0; x[p] != null; p++) {
              if (x[p] && x[p].nodeType === 1) {
                ai.push(A[p])
              }
            }
          }
        }
      } else {
        o(x, ai)
      }
      if (u) {
        n(u, v, ai, D);
        if (m) {
          hasDuplicate = false;
          ai.sort(m);
          if (hasDuplicate) {
            for (var p = 1; p < ai.length; p++) {
              if (ai[p] === ai[p - 1]) {
                ai.splice(p--, 1)
              }
            }
          }
        }
      }
      return ai
    };
    n.matches = function (q, p) {
      return n(q, null, null, p)
    };
    n.find = function (p, w, x) {
      var q, s;
      if (!p) {
        return []
      }
      for (var t = 0, u = k.order.length; t < u; t++) {
        var r = k.order[t], s;
        if ((s = k.match[r].exec(p))) {
          var v = RegExp.leftContext;
          if (v.substr(v.length - 1) !== "\\") {
            s[1] = (s[1] || "").replace(/\\/g, "");
            q = k.find[r](s, w, x);
            if (q != null) {
              p = p.replace(k.match[r], "");
              break
            }
          }
        }
      }
      if (!q) {
        q = w.getElementsByTagName("*")
      }
      return {set: q, expr: p}
    };
    n.filter = function (C, D, z, t) {
      var u = C, x = [], p = D, r, w, q = D && D[0] && c(D[0]);
      while (C && D.length) {
        for (var ai in k.filter) {
          if ((r = k.match[ai].exec(C)) != null) {
            var v = k.filter[ai], y, A;
            w = false;
            if (p == x) {
              x = []
            }
            if (k.preFilter[ai]) {
              r = k.preFilter[ai](r, p, z, x, t, q);
              if (!r) {
                w = y = true
              } else {
                if (r === true) {
                  continue
                }
              }
            }
            if (r) {
              for (var s = 0; (A = p[s]) != null; s++) {
                if (A) {
                  y = v(A, r, s, p);
                  var B = t ^ !!y;
                  if (z && y != null) {
                    if (B) {
                      w = true
                    } else {
                      p[s] = false
                    }
                  } else {
                    if (B) {
                      x.push(A);
                      w = true
                    }
                  }
                }
              }
            }
            if (y !== ab) {
              if (!z) {
                p = x
              }
              C = C.replace(k.match[ai], "");
              if (!w) {
                return []
              }
              break
            }
          }
        }
        if (C == u) {
          if (w == null) {
            throw "Syntax error, unrecognized expression: " + C
          } else {
            break
          }
        }
        u = C
      }
      return p
    };
    var k = n.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
        PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
      },
      attrMap: {"class": "className", "for": "htmlFor"},
      attrHandle: {
        href: function (p) {
          return p.getAttribute("href")
        }
      },
      relative: {
        "+": function (p, w, q) {
          var s = typeof w === "string", x = s && !/\W/.test(w), r = s && !x;
          if (x && !q) {
            w = w.toUpperCase()
          }
          for (var t = 0, u = p.length, v; t < u; t++) {
            if ((v = p[t])) {
              while ((v = v.previousSibling) && v.nodeType !== 1) {
              }
              p[t] = r || v && v.nodeName === w ? v || false : v === w
            }
          }
          if (r) {
            n.filter(w, p, true)
          }
        }, ">": function (u, r, t) {
          var w = typeof r === "string";
          if (w && !/\W/.test(r)) {
            r = t ? r : r.toUpperCase();
            for (var q = 0, s = u.length; q < s; q++) {
              var v = u[q];
              if (v) {
                var p = v.parentNode;
                u[q] = p.nodeName === r ? p : false
              }
            }
          } else {
            for (var q = 0, s = u.length; q < s; q++) {
              var v = u[q];
              if (v) {
                u[q] = w ? v.parentNode : v.parentNode === r
              }
            }
            if (w) {
              n.filter(r, u, true)
            }
          }
        }, "": function (p, r, t) {
          var q = h++, s = a;
          if (!r.match(/\W/)) {
            var u = r = t ? r : r.toUpperCase();
            s = d
          }
          s("parentNode", r, q, p, u, t)
        }, "~": function (p, r, t) {
          var q = h++, s = a;
          if (typeof r === "string" && !r.match(/\W/)) {
            var u = r = t ? r : r.toUpperCase();
            s = d
          }
          s("previousSibling", r, q, p, u, t)
        }
      },
      find: {
        ID: function (r, q, p) {
          if (typeof q.getElementById !== "undefined" && !p) {
            var s = q.getElementById(r[1]);
            return s ? [s] : []
          }
        }, NAME: function (q, u, t) {
          if (typeof u.getElementsByName !== "undefined") {
            var r = [], v = u.getElementsByName(q[1]);
            for (var p = 0, s = v.length; p < s; p++) {
              if (v[p].getAttribute("name") === q[1]) {
                r.push(v[p])
              }
            }
            return r.length === 0 ? null : r
          }
        }, TAG: function (q, p) {
          return p.getElementsByTagName(q[1])
        }
      },
      preFilter: {
        CLASS: function (p, r, q, s, u, t) {
          p = " " + p[1].replace(/\\/g, "") + " ";
          if (t) {
            return p
          }
          for (var w = 0, v; (v = r[w]) != null; w++) {
            if (v) {
              if (u ^ (v.className && (" " + v.className + " ").indexOf(p)
                  >= 0)) {
                if (!q) {
                  s.push(v)
                }
              } else {
                if (q) {
                  r[w] = false
                }
              }
            }
          }
          return false
        }, ID: function (p) {
          return p[1].replace(/\\/g, "")
        }, TAG: function (q, r) {
          for (var p = 0; r[p] === false; p++) {
          }
          return r[p] && c(r[p]) ? q[1] : q[1].toUpperCase()
        }, CHILD: function (q) {
          if (q[1] == "nth") {
            var p = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
                q[2] == "even" && "2n" || q[2] == "odd" && "2n+1" || !/\D/.test(
                    q[2]) && "0n+" + q[2] || q[2]);
            q[2] = (p[1] + (p[2] || 1)) - 0;
            q[3] = p[3] - 0
          }
          q[0] = h++;
          return q
        }, ATTR: function (v, r, q, s, u, t) {
          var p = v[1].replace(/\\/g, "");
          if (!t && k.attrMap[p]) {
            v[1] = k.attrMap[p]
          }
          if (v[2] === "~=") {
            v[4] = " " + v[4] + " "
          }
          return v
        }, PSEUDO: function (u, r, q, s, t) {
          if (u[1] === "not") {
            if (u[3].match(b).length > 1 || /^\w/.test(u[3])) {
              u[3] = n(u[3], null, null, r)
            } else {
              var p = n.filter(u[3], r, q, true ^ t);
              if (!q) {
                s.push.apply(s, p)
              }
              return false
            }
          } else {
            if (k.match.POS.test(u[0]) || k.match.CHILD.test(u[0])) {
              return true
            }
          }
          return u
        }, POS: function (p) {
          p.unshift(true);
          return p
        }
      },
      filters: {
        enabled: function (p) {
          return p.disabled === false && p.type !== "hidden"
        }, disabled: function (p) {
          return p.disabled === true
        }, checked: function (p) {
          return p.checked === true
        }, selected: function (p) {
          p.parentNode.selectedIndex;
          return p.selected === true
        }, parent: function (p) {
          return !!p.firstChild
        }, empty: function (p) {
          return !p.firstChild
        }, has: function (p, q, r) {
          return !!n(r[3], p).length
        }, header: function (p) {
          return /h\d/i.test(p.nodeName)
        }, text: function (p) {
          return "text" === p.type
        }, radio: function (p) {
          return "radio" === p.type
        }, checkbox: function (p) {
          return "checkbox" === p.type
        }, file: function (p) {
          return "file" === p.type
        }, password: function (p) {
          return "password" === p.type
        }, submit: function (p) {
          return "submit" === p.type
        }, image: function (p) {
          return "image" === p.type
        }, reset: function (p) {
          return "reset" === p.type
        }, button: function (p) {
          return "button" === p.type || p.nodeName.toUpperCase() === "BUTTON"
        }, input: function (p) {
          return /input|select|textarea|button/i.test(p.nodeName)
        }
      },
      setFilters: {
        first: function (p, q) {
          return q === 0
        }, last: function (q, r, s, p) {
          return r === p.length - 1
        }, even: function (p, q) {
          return q % 2 === 0
        }, odd: function (p, q) {
          return q % 2 === 1
        }, lt: function (p, q, r) {
          return q < r[3] - 0
        }, gt: function (p, q, r) {
          return q > r[3] - 0
        }, nth: function (p, q, r) {
          return r[3] - 0 == q
        }, eq: function (p, q, r) {
          return r[3] - 0 == q
        }
      },
      filter: {
        PSEUDO: function (u, q, p, t) {
          var r = q[1], w = k.filters[r];
          if (w) {
            return w(u, p, q, t)
          } else {
            if (r === "contains") {
              return (u.textContent || u.innerText || "").indexOf(q[3]) >= 0
            } else {
              if (r === "not") {
                var v = q[3];
                for (var p = 0, s = v.length; p < s; p++) {
                  if (v[p] === u) {
                    return false
                  }
                }
                return true
              }
            }
          }
        }, CHILD: function (w, t) {
          var q = t[1], v = w;
          switch (q) {
            case "only":
            case "first":
              while (v = v.previousSibling) {
                if (v.nodeType === 1) {
                  return false
                }
              }
              if (q == "first") {
                return true
              }
              v = w;
            case "last":
              while (v = v.nextSibling) {
                if (v.nodeType === 1) {
                  return false
                }
              }
              return true;
            case "nth":
              var u = t[2], x = t[3];
              if (u == 1 && x == 0) {
                return true
              }
              var r = t[0], y = w.parentNode;
              if (y && (y.sizcache !== r || !w.nodeIndex)) {
                var s = 0;
                for (v = y.firstChild; v; v = v.nextSibling) {
                  if (v.nodeType === 1) {
                    v.nodeIndex = ++s
                  }
                }
                y.sizcache = r
              }
              var p = w.nodeIndex - x;
              if (u == 0) {
                return p == 0
              } else {
                return (p % u == 0 && p / u >= 0)
              }
          }
        }, ID: function (p, q) {
          return p.nodeType === 1 && p.getAttribute("id") === q
        }, TAG: function (p, q) {
          return (q === "*" && p.nodeType === 1) || p.nodeName === q
        }, CLASS: function (p, q) {
          return (" " + (p.className || p.getAttribute("class")) + " ").indexOf(
                  q) > -1
        }, ATTR: function (u, p) {
          var q = p[1], s = k.attrHandle[q] ? k.attrHandle[q](u) : u[q] != null
              ? u[q] : u.getAttribute(q), t = s + "", v = p[2], r = p[4];
          return s == null ? v === "!=" : v === "=" ? t === r : v === "*="
              ? t.indexOf(r) >= 0 : v === "~=" ? (" " + t + " ").indexOf(r) >= 0
              : !r ? t && s !== false : v === "!=" ? t != r : v === "^="
              ? t.indexOf(r) === 0 : v === "$=" ? t.substr(t.length - r.length)
          === r : v === "|=" ? t === r || t.substr(0, r.length + 1) === r + "-"
              : false
        }, POS: function (u, r, q, t) {
          var s = r[2], p = k.setFilters[s];
          if (p) {
            return p(u, q, r, t)
          }
        }
      }
    };
    var g = k.match.POS;
    for (var e in k.match) {
      k.match[e] = RegExp(k.match[e].source + /(?![^\[]*\])(?![^\(]*\))/.source)
    }
    var o = function (p, q) {
      p = Array.prototype.slice.call(p);
      if (q) {
        q.push.apply(q, p);
        return q
      }
      return p
    };
    try {
      Array.prototype.slice.call(document.documentElement.childNodes)
    } catch (f) {
      o = function (t, p) {
        var r = p || [];
        if (l.call(t) === "[object Array]") {
          Array.prototype.push.apply(r, t)
        } else {
          if (typeof t.length === "number") {
            for (var q = 0, s = t.length; q < s; q++) {
              r.push(t[q])
            }
          } else {
            for (var q = 0; t[q]; q++) {
              r.push(t[q])
            }
          }
        }
        return r
      }
    }
    var m;
    if (document.documentElement.compareDocumentPosition) {
      m = function (q, r) {
        var p = q.compareDocumentPosition(r) & 4 ? -1 : q === r ? 0 : 1;
        if (p === 0) {
          hasDuplicate = true
        }
        return p
      }
    } else {
      if ("sourceIndex" in document.documentElement) {
        m = function (q, r) {
          var p = q.sourceIndex - r.sourceIndex;
          if (p === 0) {
            hasDuplicate = true
          }
          return p
        }
      } else {
        if (document.createRange) {
          m = function (p, r) {
            var q = p.ownerDocument.createRange(), s = r.ownerDocument.createRange();
            q.selectNode(p);
            q.collapse(true);
            s.selectNode(r);
            s.collapse(true);
            var t = q.compareBoundaryPoints(Range.START_TO_END, s);
            if (t === 0) {
              hasDuplicate = true
            }
            return t
          }
        }
      }
    }
    (function () {
      var q = document.createElement("form"), p = "script"
          + (new Date).getTime();
      q.innerHTML = "<input name='" + p + "'/>";
      var r = document.documentElement;
      r.insertBefore(q, r.firstChild);
      if (!!document.getElementById(p)) {
        k.find.ID = function (v, u, t) {
          if (typeof u.getElementById !== "undefined" && !t) {
            var s = u.getElementById(v[1]);
            return s ? s.id === v[1] || typeof s.getAttributeNode
            !== "undefined" && s.getAttributeNode("id").nodeValue === v[1] ? [s]
                : ab : []
          }
        };
        k.filter.ID = function (t, s) {
          var u = typeof t.getAttributeNode !== "undefined"
              && t.getAttributeNode("id");
          return t.nodeType === 1 && u && u.nodeValue === s
        }
      }
      r.removeChild(q)
    })();
    (function () {
      var p = document.createElement("div");
      p.appendChild(document.createComment(""));
      if (p.getElementsByTagName("*").length > 0) {
        k.find.TAG = function (s, t) {
          var u = t.getElementsByTagName(s[1]);
          if (s[1] === "*") {
            var q = [];
            for (var r = 0; u[r]; r++) {
              if (u[r].nodeType === 1) {
                q.push(u[r])
              }
            }
            u = q
          }
          return u
        }
      }
      p.innerHTML = "<a href='#'></a>";
      if (p.firstChild && typeof p.firstChild.getAttribute !== "undefined"
          && p.firstChild.getAttribute("href") !== "#") {
        k.attrHandle.href = function (q) {
          return q.getAttribute("href", 2)
        }
      }
    })();
    if (document.querySelectorAll) {
      (function () {
        var q = n, p = document.createElement("div");
        p.innerHTML = "<p class='TEST'></p>";
        if (p.querySelectorAll && p.querySelectorAll(".TEST").length === 0) {
          return
        }
        n = function (u, v, s, r) {
          v = v || document;
          if (!r && v.nodeType === 9 && !c(v)) {
            try {
              return o(v.querySelectorAll(u), s)
            } catch (t) {
            }
          }
          return q(u, v, s, r)
        };
        n.find = q.find;
        n.filter = q.filter;
        n.selectors = q.selectors;
        n.matches = q.matches
      })()
    }
    if (document.getElementsByClassName
        && document.documentElement.getElementsByClassName) {
      (function () {
        var p = document.createElement("div");
        p.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (p.getElementsByClassName("e").length === 0) {
          return
        }
        p.lastChild.className = "e";
        if (p.getElementsByClassName("e").length === 1) {
          return
        }
        k.order.splice(1, 0, "CLASS");
        k.find.CLASS = function (s, r, q) {
          if (typeof r.getElementsByClassName !== "undefined" && !q) {
            return r.getElementsByClassName(s[1])
          }
        }
      })()
    }
    function d(v, q, r, x, p, y) {
      var z = v == "previousSibling" && !y;
      for (var t = 0, u = x.length; t < u; t++) {
        var w = x[t];
        if (w) {
          if (z && w.nodeType === 1) {
            w.sizcache = r;
            w.sizset = t
          }
          w = w[v];
          var s = false;
          while (w) {
            if (w.sizcache === r) {
              s = x[w.sizset];
              break
            }
            if (w.nodeType === 1 && !y) {
              w.sizcache = r;
              w.sizset = t
            }
            if (w.nodeName === q) {
              s = w;
              break
            }
            w = w[v]
          }
          x[t] = s
        }
      }
    }

    function a(v, q, r, x, p, y) {
      var z = v == "previousSibling" && !y;
      for (var t = 0, u = x.length; t < u; t++) {
        var w = x[t];
        if (w) {
          if (z && w.nodeType === 1) {
            w.sizcache = r;
            w.sizset = t
          }
          w = w[v];
          var s = false;
          while (w) {
            if (w.sizcache === r) {
              s = x[w.sizset];
              break
            }
            if (w.nodeType === 1) {
              if (!y) {
                w.sizcache = r;
                w.sizset = t
              }
              if (typeof q !== "string") {
                if (w === q) {
                  s = true;
                  break
                }
              } else {
                if (n.filter(q, [w]).length > 0) {
                  s = w;
                  break
                }
              }
            }
            w = w[v]
          }
          x[t] = s
        }
      }
    }

    var i = document.compareDocumentPosition ? function (p, q) {
      return p.compareDocumentPosition(q) & 16
    } : function (p, q) {
      return p !== q && (p.contains ? p.contains(q) : true)
    };
    var c = function (p) {
      return p.nodeType === 9 && p.documentElement.nodeName !== "HTML"
          || !!p.ownerDocument && c(p.ownerDocument)
    };
    var j = function (s, u) {
      var p = [], w = "", v, q = u.nodeType ? [u] : u;
      while ((v = k.match.PSEUDO.exec(s))) {
        w += v[0];
        s = s.replace(k.match.PSEUDO, "")
      }
      s = k.relative[s] ? s + "*" : s;
      for (var t = 0, r = q.length; t < r; t++) {
        n(s, q[t], p)
      }
      return n.filter(w, p)
    };
    T.find = n;
    T.filter = n.filter;
    T.expr = n.selectors;
    T.expr[":"] = T.expr.filters;
    n.selectors.filters.hidden = function (p) {
      return p.offsetWidth === 0 || p.offsetHeight === 0
    };
    n.selectors.filters.visible = function (p) {
      return p.offsetWidth > 0 || p.offsetHeight > 0
    };
    n.selectors.filters.animated = function (p) {
      return T.grep(T.timers, function (q) {
        return p === q.elem
      }).length
    };
    T.multiFilter = function (p, r, q) {
      if (q) {
        p = ":not(" + p + ")"
      }
      return n.matches(p, r)
    };
    T.dir = function (q, r) {
      var s = [], p = q[r];
      while (p && p != document) {
        if (p.nodeType == 1) {
          s.push(p)
        }
        p = p[r]
      }
      return s
    };
    T.nth = function (t, s, q, p) {
      s = s || 1;
      var r = 0;
      for (; t; t = t[q]) {
        if (t.nodeType == 1 && ++r == s) {
          break
        }
      }
      return t
    };
    T.sibling = function (p, q) {
      var r = [];
      for (; p; p = p.nextSibling) {
        if (p.nodeType == 1 && p != q) {
          r.push(p)
        }
      }
      return r
    };
    return;
    W.Sizzle = n
  })();
  T.event = {
    add: function (c, f, d, a) {
      if (c.nodeType == 3 || c.nodeType == 8) {
        return
      }
      if (c.setInterval && c != W) {
        c = W
      }
      if (!d.guid) {
        d.guid = this.guid++
      }
      if (a !== ab) {
        var e = d;
        d = this.proxy(e);
        d.data = a
      }
      var g = T.data(c, "events") || T.data(c, "events", {}), b = T.data(c,
              "handle") || T.data(c, "handle", function () {
            return typeof T !== "undefined" && !T.event.triggered
                ? T.event.handle.apply(arguments.callee.elem, arguments) : ab
          });
      b.elem = c;
      T.each(f.split(/\s+/), function (k, j) {
        var i = j.split(".");
        j = i.shift();
        d.type = i.slice().sort().join(".");
        var h = g[j];
        if (T.event.specialAll[j]) {
          T.event.specialAll[j].setup.call(c, a, i)
        }
        if (!h) {
          h = g[j] = {};
          if (!T.event.special[j] || T.event.special[j].setup.call(c, a, i)
              === false) {
            if (c.addEventListener) {
              c.addEventListener(j, b, false)
            } else {
              if (c.attachEvent) {
                c.attachEvent("on" + j, b)
              }
            }
          }
        }
        h[d.guid] = d;
        T.event.global[j] = true
      });
      c = null
    },
    guid: 1,
    global: {},
    remove: function (b, e, c) {
      if (b.nodeType == 3 || b.nodeType == 8) {
        return
      }
      var f = T.data(b, "events"), g, h;
      if (f) {
        if (e === ab || (typeof e === "string" && e.charAt(0) == ".")) {
          for (var d in f) {
            this.remove(b, d + (e || ""))
          }
        } else {
          if (e.type) {
            c = e.handler;
            e = e.type
          }
          T.each(e.split(/\s+/), function (m, k) {
            var i = k.split(".");
            k = i.shift();
            var l = RegExp(
                "(^|\\.)" + i.slice().sort().join(".*\\.") + "(\\.|$)");
            if (f[k]) {
              if (c) {
                delete f[k][c.guid]
              } else {
                for (var j in f[k]) {
                  if (l.test(f[k][j].type)) {
                    delete f[k][j]
                  }
                }
              }
              if (T.event.specialAll[k]) {
                T.event.specialAll[k].teardown.call(b, i)
              }
              for (g in f[k]) {
                break
              }
              if (!g) {
                if (!T.event.special[k] || T.event.special[k].teardown.call(b,
                        i) === false) {
                  if (b.removeEventListener) {
                    b.removeEventListener(k, T.data(b, "handle"), false)
                  } else {
                    if (b.detachEvent) {
                      b.detachEvent("on" + k, T.data(b, "handle"))
                    }
                  }
                }
                g = null;
                delete f[k]
              }
            }
          })
        }
        for (g in f) {
          break
        }
        if (!g) {
          var a = T.data(b, "handle");
          if (a) {
            a.elem = null
          }
          T.removeData(b, "events");
          T.removeData(b, "handle")
        }
      }
    },
    trigger: function (d, b, e, h) {
      var f = d.type || d;
      if (!h) {
        d = typeof d === "object" ? d[aa] ? d : T.extend(T.Event(f), d)
            : T.Event(f);
        if (f.indexOf("!") >= 0) {
          d.type = f = f.slice(0, -1);
          d.exclusive = true
        }
        if (!e) {
          d.stopPropagation();
          if (this.global[f]) {
            T.each(T.cache, function () {
              if (this.events && this.events[f]) {
                T.event.trigger(d, b, this.handle.elem)
              }
            })
          }
        }
        if (!e || e.nodeType == 3 || e.nodeType == 8) {
          return ab
        }
        d.result = ab;
        d.target = e;
        b = T.makeArray(b);
        b.unshift(d)
      }
      d.currentTarget = e;
      var c = T.data(e, "handle");
      if (c) {
        c.apply(e, b)
      }
      if ((!e[f] || (T.nodeName(e, "a") && f == "click")) && e["on" + f]
          && e["on" + f].apply(e, b) === false) {
        d.result = false
      }
      if (!h && e[f] && !d.isDefaultPrevented() && !(T.nodeName(e, "a") && f
          == "click")) {
        this.triggered = true;
        try {
          e[f]()
        } catch (a) {
        }
      }
      this.triggered = false;
      if (!d.isPropagationStopped()) {
        var g = e.parentNode || e.ownerDocument;
        if (g) {
          T.event.trigger(d, b, g, true)
        }
      }
    },
    handle: function (b) {
      var c, h;
      b = arguments[0] = T.event.fix(b || W.event);
      b.currentTarget = this;
      var a = b.type.split(".");
      b.type = a.shift();
      c = !a.length && !b.exclusive;
      var d = RegExp("(^|\\.)" + a.slice().sort().join(".*\\.") + "(\\.|$)");
      h = (T.data(this, "events") || {})[b.type];
      for (var f in h) {
        var e = h[f];
        if (c || d.test(e.type)) {
          b.handler = e;
          b.data = e.data;
          var g = e.apply(this, arguments);
          if (g !== ab) {
            b.result = g;
            if (g === false) {
              b.preventDefault();
              b.stopPropagation()
            }
          }
          if (b.isImmediatePropagationStopped()) {
            break
          }
        }
      }
    },
    props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
        " "),
    fix: function (c) {
      if (c[aa]) {
        return c
      }
      var e = c;
      c = T.Event(e);
      for (var d = this.props.length, a; d;) {
        a = this.props[--d];
        c[a] = e[a]
      }
      if (!c.target) {
        c.target = c.srcElement || document
      }
      if (c.target.nodeType == 3) {
        c.target = c.target.parentNode
      }
      if (!c.relatedTarget && c.fromElement) {
        c.relatedTarget = c.fromElement == c.target ? c.toElement
            : c.fromElement
      }
      if (c.pageX == null && c.clientX != null) {
        var b = document.documentElement, f = document.body;
        c.pageX = c.clientX + (b && b.scrollLeft || f && f.scrollLeft || 0)
            - (b.clientLeft || 0);
        c.pageY = c.clientY + (b && b.scrollTop || f && f.scrollTop || 0)
            - (b.clientTop || 0)
      }
      if (!c.which && ((c.charCode || c.charCode === 0) ? c.charCode
              : c.keyCode)) {
        c.which = c.charCode || c.keyCode
      }
      if (!c.metaKey && c.ctrlKey) {
        c.metaKey = c.ctrlKey
      }
      if (!c.which && c.button) {
        c.which = (c.button & 1 ? 1 : (c.button & 2 ? 3 : (c.button & 4 ? 2
            : 0)))
      }
      return c
    },
    proxy: function (a, b) {
      b = b || function () {
            return a.apply(this, arguments)
          };
      b.guid = a.guid = a.guid || b.guid || this.guid++;
      return b
    },
    special: {
      ready: {
        setup: P, teardown: function () {
        }
      }
    },
    specialAll: {
      live: {
        setup: function (b, a) {
          T.event.add(this, a[0], af)
        }, teardown: function (a) {
          if (a.length) {
            var c = 0, b = RegExp("(^|\\.)" + a[0] + "(\\.|$)");
            T.each((T.data(this, "events").live || {}), function () {
              if (b.test(this.type)) {
                c++
              }
            });
            if (c < 1) {
              T.event.remove(this, a[0], af)
            }
          }
        }
      }
    }
  };
  T.Event = function (a) {
    if (!this.preventDefault) {
      return new T.Event(a)
    }
    if (a && a.type) {
      this.originalEvent = a;
      this.type = a.type
    } else {
      this.type = a
    }
    this.timeStamp = ad();
    this[aa] = true
  };
  function X() {
    return false
  }

  function J() {
    return true
  }

  T.Event.prototype = {
    preventDefault: function () {
      this.isDefaultPrevented = J;
      var a = this.originalEvent;
      if (!a) {
        return
      }
      if (a.preventDefault) {
        a.preventDefault()
      }
      a.returnValue = false
    },
    stopPropagation: function () {
      this.isPropagationStopped = J;
      var a = this.originalEvent;
      if (!a) {
        return
      }
      if (a.stopPropagation) {
        a.stopPropagation()
      }
      a.cancelBubble = true
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = J;
      this.stopPropagation()
    },
    isDefaultPrevented: X,
    isPropagationStopped: X,
    isImmediatePropagationStopped: X
  };
  var ah = function (b) {
    var c = b.relatedTarget;
    while (c && c != this) {
      try {
        c = c.parentNode
      } catch (a) {
        c = this
      }
    }
    if (c != this) {
      b.type = b.data;
      T.event.handle.apply(this, arguments)
    }
  };
  T.each({mouseover: "mouseenter", mouseout: "mouseleave"}, function (a, b) {
    T.event.special[b] = {
      setup: function () {
        T.event.add(this, a, ah, b)
      }, teardown: function () {
        T.event.remove(this, a, ah)
      }
    }
  });
  T.fn.extend({
    bind: function (b, a, c) {
      return b == "unload" ? this.one(b, a, c) : this.each(function () {
        T.event.add(this, b, c || a, c && a)
      })
    }, one: function (b, a, c) {
      var d = T.event.proxy(c || a, function (e) {
        T(this).unbind(e, d);
        return (c || a).apply(this, arguments)
      });
      return this.each(function () {
        T.event.add(this, b, d, c && a)
      })
    }, unbind: function (a, b) {
      return this.each(function () {
        T.event.remove(this, a, b)
      })
    }, trigger: function (b, a) {
      return this.each(function () {
        T.event.trigger(b, a, this)
      })
    }, triggerHandler: function (c, a) {
      if (this[0]) {
        var b = T.Event(c);
        b.preventDefault();
        b.stopPropagation();
        T.event.trigger(b, a, this[0]);
        return b.result
      }
    }, toggle: function (a) {
      var c = arguments, b = 1;
      while (b < c.length) {
        T.event.proxy(a, c[b++])
      }
      return this.click(T.event.proxy(a, function (d) {
        this.lastToggle = (this.lastToggle || 0) % b;
        d.preventDefault();
        return c[this.lastToggle++].apply(this, arguments) || false
      }))
    }, hover: function (b, a) {
      return this.mouseenter(b).mouseleave(a)
    }, ready: function (a) {
      P();
      if (T.isReady) {
        a.call(document, T)
      } else {
        T.readyList.push(a)
      }
      return this
    }, live: function (a, b) {
      var c = T.event.proxy(b);
      c.guid += this.selector + a;
      T(document).bind(Z(a, this.selector), this.selector, c);
      return this
    }, die: function (a, b) {
      T(document).unbind(Z(a, this.selector),
          b ? {guid: b.guid + this.selector + a} : null);
      return this
    }
  });
  function af(a) {
    var d = RegExp("(^|\\.)" + a.type + "(\\.|$)"), b = true, c = [];
    T.each(T.data(this, "events").live || [], function (g, f) {
      if (d.test(f.type)) {
        var e = T(a.target).closest(f.data)[0];
        if (e) {
          c.push({elem: e, fn: f})
        }
      }
    });
    c.sort(function (e, f) {
      return T.data(e.elem, "closest") - T.data(f.elem, "closest")
    });
    T.each(c, function () {
      if (this.fn.call(this.elem, a, this.fn.data) === false) {
        return (b = false)
      }
    });
    return b
  }

  function Z(a, b) {
    return ["live", a, b.replace(/\./g, "`").replace(/ /g, "|")].join(".")
  }

  T.extend({
    isReady: false, readyList: [], ready: function () {
      if (!T.isReady) {
        T.isReady = true;
        if (T.readyList) {
          T.each(T.readyList, function () {
            this.call(document, T)
          });
          T.readyList = null
        }
        T(document).triggerHandler("ready")
      }
    }
  });
  var G = false;

  function P() {
    if (G) {
      return
    }
    G = true;
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", function () {
        document.removeEventListener("DOMContentLoaded", arguments.callee,
            false);
        T.ready()
      }, false)
    } else {
      if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", arguments.callee);
            T.ready()
          }
        });
        if (document.documentElement.doScroll && W == W.top) {
          (function () {
            if (T.isReady) {
              return
            }
            try {
              document.documentElement.doScroll("left")
            } catch (a) {
              setTimeout(arguments.callee, 0);
              return
            }
            T.ready()
          })()
        }
      }
    }
    T.event.add(W, "load", T.ready)
  }

  T.each(
      ("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(
          ","), function (a, b) {
        T.fn[b] = function (c) {
          return c ? this.bind(b, c) : this.trigger(b)
        }
      });
  T(W).bind("unload", function () {
    for (var a in T.cache) {
      if (a != 1 && T.cache[a].handle) {
        T.event.remove(T.cache[a].handle.elem)
      }
    }
  });
  (function () {
    T.support = {};
    var f = document.documentElement, e = document.createElement(
        "script"), a = document.createElement("div"), b = "script"
        + (new Date).getTime();
    a.style.display = "none";
    a.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
    var d = a.getElementsByTagName("*"), g = a.getElementsByTagName("a")[0];
    if (!d || !d.length || !g) {
      return
    }
    T.support = {
      leadingWhitespace: a.firstChild.nodeType == 3,
      tbody: !a.getElementsByTagName("tbody").length,
      objectAll: !!a.getElementsByTagName("object")[0].getElementsByTagName(
          "*").length,
      htmlSerialize: !!a.getElementsByTagName("link").length,
      style: /red/.test(g.getAttribute("style")),
      hrefNormalized: g.getAttribute("href") === "/a",
      opacity: g.style.opacity === "0.5",
      cssFloat: !!g.style.cssFloat,
      scriptEval: false,
      noCloneEvent: true,
      boxModel: null
    };
    e.type = "text/javascript";
    try {
      e.appendChild(document.createTextNode("window." + b + "=1;"))
    } catch (c) {
    }
    f.insertBefore(e, f.firstChild);
    if (W[b]) {
      T.support.scriptEval = true;
      delete W[b]
    }
    f.removeChild(e);
    if (a.attachEvent && a.fireEvent) {
      a.attachEvent("onclick", function () {
        T.support.noCloneEvent = false;
        a.detachEvent("onclick", arguments.callee)
      });
      a.cloneNode(true).fireEvent("onclick")
    }
    T(function () {
      var h = document.createElement("div");
      h.style.width = h.style.paddingLeft = "1px";
      document.body.appendChild(h);
      T.boxModel = T.support.boxModel = h.offsetWidth === 2;
      document.body.removeChild(h).style.display = "none"
    })
  })();
  var H = T.support.cssFloat ? "cssFloat" : "styleFloat";
  T.props = {
    "for": "htmlFor",
    "class": "className",
    "float": H,
    cssFloat: H,
    styleFloat: H,
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    tabindex: "tabIndex"
  };
  T.fn.extend({
    _load: T.fn.load, load: function (e, b, a) {
      if (typeof e !== "string") {
        return this._load(e)
      }
      var c = e.indexOf(" ");
      if (c >= 0) {
        var g = e.slice(c, e.length);
        e = e.slice(0, c)
      }
      var d = "GET";
      if (b) {
        if (T.isFunction(b)) {
          a = b;
          b = null
        } else {
          if (typeof b === "object") {
            b = T.param(b);
            d = "POST"
          }
        }
      }
      var f = this;
      T.ajax({
        url: e, type: d, dataType: "html", data: b, complete: function (i, h) {
          if (h == "success" || h == "notmodified") {
            f.html(g ? T("<div/>").append(
                i.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(g)
                : i.responseText)
          }
          if (a) {
            f.each(a, [i.responseText, h, i])
          }
        }
      });
      return this
    }, serialize: function () {
      return T.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        return this.elements ? T.makeArray(this.elements) : this
      }).filter(function () {
        return this.name && !this.disabled && (this.checked
            || /select|textarea/i.test(this.nodeName)
            || /text|hidden|password|search/i.test(this.type))
      }).map(function (c, b) {
        var a = T(this).val();
        return a == null ? null : T.isArray(a) ? T.map(a, function (d, e) {
          return {name: b.name, value: d}
        }) : {name: b.name, value: a}
      }).get()
    }
  });
  T.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(
      ","), function (b, a) {
    T.fn[a] = function (c) {
      return this.bind(a, c)
    }
  });
  var N = ad();
  T.extend({
    get: function (d, b, a, c) {
      if (T.isFunction(b)) {
        a = b;
        b = null
      }
      return T.ajax({type: "GET", url: d, data: b, success: a, dataType: c})
    },
    getScript: function (b, a) {
      return T.get(b, null, a, "script")
    },
    getJSON: function (c, b, a) {
      return T.get(c, b, a, "json")
    },
    post: function (d, b, a, c) {
      if (T.isFunction(b)) {
        a = b;
        b = {}
      }
      return T.ajax({type: "POST", url: d, data: b, success: a, dataType: c})
    },
    ajaxSetup: function (a) {
      T.extend(T.ajaxSettings, a)
    },
    ajaxSettings: {
      url: location.href,
      global: true,
      type: "GET",
      contentType: "application/x-www-form-urlencoded",
      processData: true,
      async: true,
      xhr: function () {
        return W.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP")
            : new XMLHttpRequest()
      },
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        script: "text/javascript, application/javascript",
        json: "application/json, text/javascript",
        text: "text/plain",
        _default: "*/*"
      }
    },
    lastModified: {},
    ajax: function (k) {
      k = T.extend(true, k, T.extend(true, {}, T.ajaxSettings, k));
      var a, r = /=\?(&|$)/g, f, b, q = k.type.toUpperCase();
      if (k.data && k.processData && typeof k.data !== "string") {
        k.data = T.param(k.data)
      }
      if (k.dataType == "jsonp") {
        if (q == "GET") {
          if (!k.url.match(r)) {
            k.url += (k.url.match(/\?/) ? "&" : "?") + (k.jsonp || "callback")
                + "=?"
          }
        } else {
          if (!k.data || !k.data.match(r)) {
            k.data = (k.data ? k.data + "&" : "") + (k.jsonp || "callback")
                + "=?"
          }
        }
        k.dataType = "json"
      }
      if (k.dataType == "json" && (k.data && k.data.match(r) || k.url.match(
              r))) {
        a = "jsonp" + N++;
        if (k.data) {
          k.data = (k.data + "").replace(r, "=" + a + "$1")
        }
        k.url = k.url.replace(r, "=" + a + "$1");
        k.dataType = "script";
        W[a] = function (u) {
          b = u;
          o();
          l();
          W[a] = ab;
          try {
            delete W[a]
          } catch (t) {
          }
          if (p) {
            p.removeChild(d)
          }
        }
      }
      if (k.dataType == "script" && k.cache == null) {
        k.cache = false
      }
      if (k.cache === false && q == "GET") {
        var s = ad();
        var c = k.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + s + "$2");
        k.url = c + ((c == k.url) ? (k.url.match(/\?/) ? "&" : "?") + "_=" + s
                : "")
      }
      if (k.data && q == "GET") {
        k.url += (k.url.match(/\?/) ? "&" : "?") + k.data;
        k.data = null
      }
      if (k.global && !T.active++) {
        T.event.trigger("ajaxStart")
      }
      var g = /^(\w+:)?\/\/([^\/?#]+)/.exec(k.url);
      if (k.dataType == "script" && q == "GET" && g && (g[1] && g[1]
          != location.protocol || g[2] != location.host)) {
        var p = document.getElementsByTagName("head")[0];
        var d = document.createElement("script");
        d.src = k.url;
        if (k.scriptCharset) {
          d.charset = k.scriptCharset
        }
        if (!a) {
          var i = false;
          d.onload = d.onreadystatechange = function () {
            if (!i && (!this.readyState || this.readyState == "loaded"
                || this.readyState == "complete")) {
              i = true;
              o();
              l();
              d.onload = d.onreadystatechange = null;
              p.removeChild(d)
            }
          }
        }
        p.appendChild(d);
        return ab
      }
      var m = false;
      var n = k.xhr();
      if (k.username) {
        n.open(q, k.url, k.async, k.username, k.password)
      } else {
        n.open(q, k.url, k.async)
      }
      try {
        if (k.data) {
          n.setRequestHeader("Content-Type", k.contentType)
        }
        if (k.ifModified) {
          n.setRequestHeader("If-Modified-Since",
              T.lastModified[k.url] || "Thu, 01 Jan 1970 00:00:00 GMT")
        }
        n.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        n.setRequestHeader("Accept",
            k.dataType && k.accepts[k.dataType] ? k.accepts[k.dataType]
            + ", */*" : k.accepts._default)
      } catch (e) {
      }
      if (k.beforeSend && k.beforeSend(n, k) === false) {
        if (k.global && !--T.active) {
          T.event.trigger("ajaxStop")
        }
        n.abort();
        return false
      }
      if (k.global) {
        T.event.trigger("ajaxSend", [n, k])
      }
      var j = function (v) {
        if (n.readyState == 0) {
          if (h) {
            clearInterval(h);
            h = null;
            if (k.global && !--T.active) {
              T.event.trigger("ajaxStop")
            }
          }
        } else {
          if (!m && n && (n.readyState == 4 || v == "timeout")) {
            m = true;
            if (h) {
              clearInterval(h);
              h = null
            }
            f = v == "timeout" ? "timeout" : !T.httpSuccess(n) ? "error"
                : k.ifModified && T.httpNotModified(n, k.url) ? "notmodified"
                : "success";
            if (f == "success") {
              try {
                b = T.httpData(n, k.dataType, k)
              } catch (t) {
                f = "parsererror"
              }
            }
            if (f == "success") {
              var u;
              try {
                u = n.getResponseHeader("Last-Modified")
              } catch (t) {
              }
              if (k.ifModified && u) {
                T.lastModified[k.url] = u
              }
              if (!a) {
                o()
              }
            } else {
              T.handleError(k, n, f)
            }
            l();
            if (v) {
              n.abort()
            }
            if (k.async) {
              n = null
            }
          }
        }
      };
      if (k.async) {
        var h = setInterval(j, 13);
        if (k.timeout > 0) {
          setTimeout(function () {
            if (n && !m) {
              j("timeout")
            }
          }, k.timeout)
        }
      }
      try {
        n.send(k.data)
      } catch (e) {
        T.handleError(k, n, null, e)
      }
      if (!k.async) {
        j()
      }
      function o() {
        if (k.success) {
          k.success(b, f)
        }
        if (k.global) {
          T.event.trigger("ajaxSuccess", [n, k])
        }
      }

      function l() {
        if (k.complete) {
          k.complete(n, f)
        }
        if (k.global) {
          T.event.trigger("ajaxComplete", [n, k])
        }
        if (k.global && !--T.active) {
          T.event.trigger("ajaxStop")
        }
      }

      return n
    },
    handleError: function (c, a, d, b) {
      if (c.error) {
        c.error(a, d, b)
      }
      if (c.global) {
        T.event.trigger("ajaxError", [a, c, b])
      }
    },
    active: 0,
    httpSuccess: function (a) {
      try {
        return !a.status && location.protocol == "file:" || (a.status >= 200
            && a.status < 300) || a.status == 304 || a.status == 1223
      } catch (b) {
      }
      return false
    },
    httpNotModified: function (b, d) {
      try {
        var a = b.getResponseHeader("Last-Modified");
        return b.status == 304 || a == T.lastModified[d]
      } catch (c) {
      }
      return false
    },
    httpData: function (a, c, d) {
      var e = a.getResponseHeader("content-type"), f = c == "xml" || !c && e
          && e.indexOf("xml") >= 0, b = f ? a.responseXML : a.responseText;
      if (f && b.documentElement.tagName == "parsererror") {
        throw "parsererror"
      }
      if (d && d.dataFilter) {
        b = d.dataFilter(b, c)
      }
      if (typeof b === "string") {
        if (c == "script") {
          T.globalEval(b)
        }
        if (c == "json") {
          b = W["eval"]("(" + b + ")")
        }
      }
      return b
    },
    param: function (d) {
      var b = [];

      function a(f, e) {
        b[b.length] = encodeURIComponent(f) + "=" + encodeURIComponent(e)
      }

      if (T.isArray(d) || d.jquery) {
        T.each(d, function () {
          a(this.name, this.value)
        })
      } else {
        for (var c in d) {
          if (T.isArray(d[c])) {
            T.each(d[c], function () {
              a(c, this)
            })
          } else {
            a(c, T.isFunction(d[c]) ? d[c]() : d[c])
          }
        }
      }
      return b.join("&").replace(/%20/g, "+")
    }
  });
  var V = {}, U, ae = [["height", "marginTop", "marginBottom", "paddingTop",
    "paddingBottom"],
    ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
    ["opacity"]];

  function K(b, c) {
    var a = {};
    T.each(ae.concat.apply([], ae.slice(0, c)), function () {
      a[this] = b
    });
    return a
  }

  T.fn.extend({
    show: function (c, a) {
      if (c) {
        return this.animate(K("show", 3), c, a)
      } else {
        for (var e = 0, g = this.length; e < g; e++) {
          var h = T.data(this[e], "olddisplay");
          this[e].style.display = h || "";
          if (T.css(this[e], "display") === "none") {
            var f = this[e].tagName, b;
            if (V[f]) {
              b = V[f]
            } else {
              var d = T("<" + f + " />").appendTo("body");
              b = d.css("display");
              if (b === "none") {
                b = "block"
              }
              d.remove();
              V[f] = b
            }
            T.data(this[e], "olddisplay", b)
          }
        }
        for (var e = 0, g = this.length; e < g; e++) {
          this[e].style.display = T.data(this[e], "olddisplay") || ""
        }
        return this
      }
    }, hide: function (b, a) {
      if (b) {
        return this.animate(K("hide", 3), b, a)
      } else {
        for (var c = 0, d = this.length; c < d; c++) {
          var e = T.data(this[c], "olddisplay");
          if (!e && e !== "none") {
            T.data(this[c], "olddisplay", T.css(this[c], "display"))
          }
        }
        for (var c = 0, d = this.length; c < d; c++) {
          this[c].style.display = "none"
        }
        return this
      }
    }, _toggle: T.fn.toggle, toggle: function (a, b) {
      var c = typeof a === "boolean";
      return T.isFunction(a) && T.isFunction(b) ? this._toggle.apply(this,
          arguments) : a == null || c ? this.each(function () {
        var d = c ? a : T(this).is(":hidden");
        T(this)[d ? "show" : "hide"]()
      }) : this.animate(K("toggle", 3), a, b)
    }, fadeTo: function (c, a, b) {
      return this.animate({opacity: a}, c, b)
    }, animate: function (a, d, b, c) {
      var e = T.speed(d, b, c);
      return this[e.queue === false ? "each" : "queue"](function () {
        var g = T.extend({}, e), i, f = this.nodeType == 1 && T(this).is(
                ":hidden"), h = this;
        for (i in a) {
          if (a[i] == "hide" && f || a[i] == "show" && !f) {
            return g.complete.call(this)
          }
          if ((i == "height" || i == "width") && this.style) {
            g.display = T.css(this, "display");
            g.overflow = this.style.overflow
          }
        }
        if (g.overflow != null) {
          this.style.overflow = "hidden"
        }
        g.curAnim = T.extend({}, a);
        T.each(a, function (o, k) {
          var l = new T.fx(h, g, o);
          if (/toggle|show|hide/.test(k)) {
            l[k == "toggle" ? f ? "show" : "hide" : k](a)
          } else {
            var m = k.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/), j = l.cur(
                    true) || 0;
            if (m) {
              var p = parseFloat(m[2]), n = m[3] || "px";
              if (n != "px") {
                h.style[o] = (p || 1) + n;
                j = ((p || 1) / l.cur(true)) * j;
                h.style[o] = j + n
              }
              if (m[1]) {
                p = ((m[1] == "-=" ? -1 : 1) * p) + j
              }
              l.custom(j, p, n)
            } else {
              l.custom(j, k, "")
            }
          }
        });
        return true
      })
    }, stop: function (b, c) {
      var a = T.timers;
      if (b) {
        this.queue([])
      }
      this.each(function () {
        for (var d = a.length - 1; d >= 0; d--) {
          if (a[d].elem == this) {
            if (c) {
              a[d](true)
            }
            a.splice(d, 1)
          }
        }
      });
      if (!c) {
        this.dequeue()
      }
      return this
    }
  });
  T.each({
    slideDown: K("show", 1),
    slideUp: K("hide", 1),
    slideToggle: K("toggle", 1),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"}
  }, function (b, a) {
    T.fn[b] = function (d, c) {
      return this.animate(a, d, c)
    }
  });
  T.extend({
    speed: function (b, a, c) {
      var d = typeof b === "object" ? b : {
        complete: c || !c && a || T.isFunction(b) && b,
        duration: b,
        easing: c && a || a && !T.isFunction(a) && a
      };
      d.duration = T.fx.off ? 0 : typeof d.duration === "number" ? d.duration
          : T.fx.speeds[d.duration] || T.fx.speeds._default;
      d.old = d.complete;
      d.complete = function () {
        if (d.queue !== false) {
          T(this).dequeue()
        }
        if (T.isFunction(d.old)) {
          d.old.call(this)
        }
      };
      return d
    }, easing: {
      linear: function (b, a, d, c) {
        return d + c * b
      }, swing: function (b, a, d, c) {
        return ((-Math.cos(b * Math.PI) / 2) + 0.5) * c + d
      }
    }, timers: [], fx: function (b, c, a) {
      this.options = c;
      this.elem = b;
      this.prop = a;
      if (!c.orig) {
        c.orig = {}
      }
    }
  });
  T.fx.prototype = {
    update: function () {
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }
      (T.fx.step[this.prop] || T.fx.step._default)(this);
      if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
        this.elem.style.display = "block"
      }
    }, cur: function (a) {
      if (this.elem[this.prop] != null && (!this.elem.style
          || this.elem.style[this.prop] == null)) {
        return this.elem[this.prop]
      }
      var b = parseFloat(T.css(this.elem, this.prop, a));
      return b && b > -10000 ? b : parseFloat(T.curCSS(this.elem, this.prop))
      || 0
    }, custom: function (a, b, c) {
      this.startTime = ad();
      this.start = a;
      this.end = b;
      this.unit = c || this.unit || "px";
      this.now = this.start;
      this.pos = this.state = 0;
      var e = this;

      function d(f) {
        return e.step(f)
      }

      d.elem = this.elem;
      if (d() && T.timers.push(d) && !U) {
        U = setInterval(function () {
          var f = T.timers;
          for (var g = 0; g < f.length; g++) {
            if (!f[g]()) {
              f.splice(g--, 1)
            }
          }
          if (!f.length) {
            clearInterval(U);
            U = ab
          }
        }, 13)
      }
    }, show: function () {
      this.options.orig[this.prop] = T.attr(this.elem.style, this.prop);
      this.options.show = true;
      this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0,
          this.cur());
      T(this.elem).show()
    }, hide: function () {
      this.options.orig[this.prop] = T.attr(this.elem.style, this.prop);
      this.options.hide = true;
      this.custom(this.cur(), 0)
    }, step: function (c) {
      var d = ad();
      if (c || d >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = true;
        var f = true;
        for (var e in this.options.curAnim) {
          if (this.options.curAnim[e] !== true) {
            f = false
          }
        }
        if (f) {
          if (this.options.display != null) {
            this.elem.style.overflow = this.options.overflow;
            this.elem.style.display = this.options.display;
            if (T.css(this.elem, "display") == "none") {
              this.elem.style.display = "block"
            }
          }
          if (this.options.hide) {
            T(this.elem).hide()
          }
          if (this.options.hide || this.options.show) {
            for (var b in this.options.curAnim) {
              T.attr(this.elem.style, b, this.options.orig[b])
            }
          }
          this.options.complete.call(this.elem)
        }
        return false
      } else {
        var a = d - this.startTime;
        this.state = a / this.options.duration;
        this.pos = T.easing[this.options.easing || (T.easing.swing ? "swing"
            : "linear")](this.state, a, 0, 1, this.options.duration);
        this.now = this.start + ((this.end - this.start) * this.pos);
        this.update()
      }
      return true
    }
  };
  T.extend(T.fx, {
    speeds: {slow: 600, fast: 200, _default: 400},
    step: {
      opacity: function (a) {
        T.attr(a.elem.style, "opacity", a.now)
      }, _default: function (a) {
        if (a.elem.style && a.elem.style[a.prop] != null) {
          a.elem.style[a.prop] = a.now + a.unit
        } else {
          a.elem[a.prop] = a.now
        }
      }
    }
  });
  if (document.documentElement.getBoundingClientRect) {
    T.fn.offset = function () {
      if (!this[0]) {
        return {top: 0, left: 0}
      }
      if (this[0] === this[0].ownerDocument.body) {
        return T.offset.bodyOffset(this[0])
      }
      var f = this[0].getBoundingClientRect(), c = this[0].ownerDocument, g = c.body, h = c.documentElement, a = h.clientTop
          || g.clientTop || 0, b = h.clientLeft || g.clientLeft || 0, d = f.top
          + (self.pageYOffset || T.boxModel && h.scrollTop || g.scrollTop)
          - a, e = f.left + (self.pageXOffset || T.boxModel && h.scrollLeft
          || g.scrollLeft) - b;
      return {top: d, left: e}
    }
  } else {
    T.fn.offset = function () {
      if (!this[0]) {
        return {top: 0, left: 0}
      }
      if (this[0] === this[0].ownerDocument.body) {
        return T.offset.bodyOffset(this[0])
      }
      T.offset.initialized || T.offset.initialize();
      var f = this[0], i = f.offsetParent, j = f, a = f.ownerDocument, c, h = a.documentElement, e = a.body, d = a.defaultView, k = d.getComputedStyle(
          f, null), b = f.offsetTop, g = f.offsetLeft;
      while ((f = f.parentNode) && f !== e && f !== h) {
        c = d.getComputedStyle(f, null);
        b -= f.scrollTop, g -= f.scrollLeft;
        if (f === i) {
          b += f.offsetTop, g += f.offsetLeft;
          if (T.offset.doesNotAddBorder
              && !(T.offset.doesAddBorderForTableAndCells
              && /^t(able|d|h)$/i.test(f.tagName))) {
            b += parseInt(c.borderTopWidth, 10) || 0, g += parseInt(
                    c.borderLeftWidth, 10) || 0
          }
          j = i, i = f.offsetParent
        }
        if (T.offset.subtractsBorderForOverflowNotVisible && c.overflow
            !== "visible") {
          b += parseInt(c.borderTopWidth, 10) || 0, g += parseInt(
                  c.borderLeftWidth, 10) || 0
        }
        k = c
      }
      if (k.position === "relative" || k.position === "static") {
        b += e.offsetTop, g += e.offsetLeft
      }
      if (k.position === "fixed") {
        b += Math.max(h.scrollTop, e.scrollTop), g += Math.max(h.scrollLeft,
            e.scrollLeft)
      }
      return {top: b, left: g}
    }
  }
  T.offset = {
    initialize: function () {
      if (this.initialized) {
        return
      }
      var c = document.body, i = document.createElement(
          "div"), g, h, a, f, b, j, e = c.style.marginTop, d = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
      b = {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        border: 0,
        width: "1px",
        height: "1px",
        visibility: "hidden"
      };
      for (j in b) {
        i.style[j] = b[j]
      }
      i.innerHTML = d;
      c.insertBefore(i, c.firstChild);
      g = i.firstChild, h = g.firstChild, f = g.nextSibling.firstChild.firstChild;
      this.doesNotAddBorder = (h.offsetTop !== 5);
      this.doesAddBorderForTableAndCells = (f.offsetTop === 5);
      g.style.overflow = "hidden", g.style.position = "relative";
      this.subtractsBorderForOverflowNotVisible = (h.offsetTop === -5);
      c.style.marginTop = "1px";
      this.doesNotIncludeMarginInBodyOffset = (c.offsetTop === 0);
      c.style.marginTop = e;
      c.removeChild(i);
      this.initialized = true
    }, bodyOffset: function (c) {
      T.offset.initialized || T.offset.initialize();
      var a = c.offsetTop, b = c.offsetLeft;
      if (T.offset.doesNotIncludeMarginInBodyOffset) {
        a += parseInt(T.curCSS(c, "marginTop", true), 10) || 0, b += parseInt(
                T.curCSS(c, "marginLeft", true), 10) || 0
      }
      return {top: a, left: b}
    }
  };
  T.fn.extend({
    position: function () {
      var b = 0, c = 0, e;
      if (this[0]) {
        var d = this.offsetParent(), a = this.offset(), f = /^body|html$/i.test(
            d[0].tagName) ? {top: 0, left: 0} : d.offset();
        a.top -= Y(this, "marginTop");
        a.left -= Y(this, "marginLeft");
        f.top += Y(d, "borderTopWidth");
        f.left += Y(d, "borderLeftWidth");
        e = {top: a.top - f.top, left: a.left - f.left}
      }
      return e
    }, offsetParent: function () {
      var a = this[0].offsetParent || document.body;
      while (a && (!/^body|html$/i.test(a.tagName) && T.css(a, "position")
      == "static")) {
        a = a.offsetParent
      }
      return T(a)
    }
  });
  T.each(["Left", "Top"], function (b, c) {
    var a = "scroll" + c;
    T.fn[a] = function (d) {
      if (!this[0]) {
        return null
      }
      return d !== ab ? this.each(function () {
        this == W || this == document ? W.scrollTo(!b ? d : T(W).scrollLeft(),
            b ? d : T(W).scrollTop()) : this[a] = d
      }) : this[0] == W || this[0] == document ? self[b ? "pageYOffset"
          : "pageXOffset"] || T.boxModel && document.documentElement[a]
      || document.body[a] : this[0][a]
    }
  });
  T.each(["Height", "Width"], function (b, d) {
    var f = b ? "Left" : "Top", c = b ? "Right" : "Bottom", e = d.toLowerCase();
    T.fn["inner" + d] = function () {
      return this[0] ? T.css(this[0], e, false, "padding") : null
    };
    T.fn["outer" + d] = function (g) {
      return this[0] ? T.css(this[0], e, false, g ? "margin" : "border") : null
    };
    var a = d.toLowerCase();
    T.fn[a] = function (g) {
      return this[0] == W ? document.compatMode == "CSS1Compat"
      && document.documentElement["client" + d] || document.body["client" + d]
          : this[0] == document ? Math.max(
          document.documentElement["client" + d], document.body["scroll" + d],
          document.documentElement["scroll" + d], document.body["offset" + d],
          document.documentElement["offset" + d]) : g === ab ? (this.length
          ? T.css(this[0], a) : null) : this.css(a,
          typeof g === "string" ? g : g + "px")
    }
  })
})();
/*common.js*/
var SKIN_PATH = "/Skins/Default/";
var PTN_EMAIL = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var PTN_FLOAT = /\d+(\.\d+)?/;
function $nsw() {
}
function $j(a) {
  return $("#" + a)
}
function $v(a, c) {
  if (c == null) {
    var b = $j(a).attr("value");
    if (b == null || b == undefined) {
      return ""
    }
    return b
  } else {
    return $j(a).attr("value", c)
  }
}
function $tv(a) {
  return $.trim($v(a))
}
function getChecked(a) {
  return $("#" + a).attr("checked")
}
function checkRadio(c, b) {
  var a;
  if (b == null) {
    a = $(document.body).find("input[type=radio]")
  } else {
    a = $j(b).find("input[type=radio]")
  }
  a.each(function (d) {
    var e = $(this);
    e.attr("checked", e.attr("value") == c)
  })
}
function getSelectedText(a) {
  var c = $("#" + a + ">option");
  var b = "";
  c.each(function (d) {
    if (this.selected) {
      b = this.text
    }
  });
  return b
}
function hideDdl(b) {
  var d = ["select", "iframe", "applet", "object"];
  var a;
  if (b != null) {
    a = $j(b)
  } else {
    a = $(document.body)
  }
  for (var c = 0; c < d.length; ++c) {
    a.find(d[c]).css("visibility", "hidden")
  }
}
function showDdl() {
  var b = ["select", "iframe", "applet", "object"];
  for (var a = 0; a < b.length; ++a) {
    $(b[a]).css("visibility", "visible")
  }
}
function relocation(a) {
  var c;
  if (typeof (a).toString().toLowerCase() == "string") {
    c = $j(a)
  } else {
    c = $(a)
  }
  if (c.length == 0) {
    return
  }
  var d = document.documentElement.scrollTop || document.body.scrollTop;
  var b = (d - (c.height() / 2) + "px");
  c.css({"margin-top": b})
}
$(function () {
  $(window).resize(function () {
    relocation("mesbook1");
    relocation("mesbook1_c")
  });
  $(window).scroll(function () {
    relocation("mesbook1");
    relocation("mesbook1_c")
  })
});
function oran_msg(c, a, d, f, b, e) {
  window.onload = function () {
    $a(c, a, d, f, b, e)
  }
}
function $confirm(b, l, o) {
  hideDdl();
  var n = "消息对话框";
  var e = $j("mesbook1_c");
  if (e.length == 0) {
    var m = "<div id='mesbook1_c'><div><img onclick='hideMsg()' id='mesbook1_cImgClose' src='"
        + SKIN_PATH
        + "Img/ico9_close.gif' alt='关闭' class='fr p vam' /><span id='mesbook1_cTitle'></span></div><dl class='b1'><dt><img id='mesbook1_cIcon' src='"
        + SKIN_PATH
        + "Img/message_ico_03.gif' alt='' title=''  /></dt><dd class='l_25' id='mesbook1_cMsg'></dd><dd class='b' style='visibility:hidden' id='mesbook1_cAutoClose'>此窗口<span id='mesbook1_cDelay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1_cBtns'><input type='button' class='b15' value='确 定' /><input type='button' class='b15' value='取 消' /></dd></dl></div>";
    $(document.body).append(m)
  }
  var e = $j("mesbook1_c");
  var a = $j("mesbook1_cImgClose");
  var d = $j("mesbook1_cIcon");
  var j = $j("mesbook1_cMsg");
  var k = $j("mesbook1_cAutoClose");
  var c = $j("mesbook1_cDelay");
  var h = $j("mesbook1_cTitle");
  var p = $j("mesbook1_cBtns");
  h.html(n);
  j.html(b);
  var g = SKIN_PATH + "Img/ico_ques.gif";
  d.attr("src", g);
  var f = p.find("input:eq(0)");
  var i = p.find("input:eq(1)");
  f.removeAttr("onclick");
  i.removeAttr("onclick");
  if (l.title != null) {
    f.val(l.title)
  }
  if (typeof (l.toDo) == "string") {
    f.click(function () {
      location.href = l.toDo
    })
  } else {
    f.click(function () {
      l.toDo()
    })
  }
  if (o.title != null) {
    i.val(o.title)
  }
  if (typeof (o.toDo) == "string") {
    i.click(function () {
      location.href = o.toDo
    })
  } else {
    i.click(function () {
      o.toDo()
    })
  }
  a.removeAttr("onclick");
  a.click(function () {
    hideConfirm()
  });
  showFullBg();
  setCM("mesbook1_c");
  relocation("mesbook1_c");
  e.fadeIn(80)
}
function hideConfirm() {
  showDdl();
  var a = $j("mesbook1_c");
  hideFullBg();
  a.fadeOut(80)
}
function $a(c, p, g, l, o, a) {
  if (p == null) {
    p = 2
  }
  if (g == null) {
    g = -1
  }
  if (o == null) {
    o = "消息提示"
  }
  hideDdl();
  var f = $j("mesbook1");
  if (f.length == 0) {
    var n = "<div id='mesbook1'><div><img style='float:right' onclick='hideMsg()' id='mesbook1ImgClose' src='"
        + SKIN_PATH
        + "Img/ico9_close.gif' alt='关闭' class='fr p vam ml5' /><span id='mesbook1Title'></span></div><dl class='b1'><dt><img id='mesbook1Icon' src='"
        + SKIN_PATH
        + "Img/message_ico_03.gif' alt='' title='' /></dt><dd class='l_25' id='mesbook1Msg'></dd><dd class='b' style='visibility:hidden' id='mesbook1AutoClose'>此窗口<span id='mesbook1Delay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1Btns'><input type='button' class='b15' value='关 闭' /></dd></dl></div>";
    $(document.body).append(n)
  }
  var f = $j("mesbook1");
  var b = $j("mesbook1ImgClose");
  var e = $j("mesbook1Icon");
  var k = $j("mesbook1Msg");
  var m = $j("mesbook1AutoClose");
  var d = $j("mesbook1Delay");
  var j = $j("mesbook1Title");
  var q = $j("mesbook1Btns");
  j.html(o);
  k.html(c);
  var i = SKIN_PATH + "Img/";
  switch (p) {
    case 1:
      i += "ico_ok.gif";
      break;
    case 2:
      i += "ico_info.gif";
      break;
    case 3:
      i += "ioc_ques.gif";
      break;
    case -1:
      i += "ico_error.gif";
      break;
    default:
      i += "ico_normal.gif";
      break
  }
  e.attr("src", i);
  var h = q.find("input");
  h.removeAttr("onclick");
  h.click(function () {
    hideMsg();
    if (l != null) {
      $j(l).focus()
    }
    if (a != null) {
      a()
    }
  });
  b.removeAttr("onclick");
  b.click(function () {
    hideMsg();
    if (l != null) {
      $j(l).focus()
    }
    if (a != null) {
      a()
    }
  });
  h.focus();
  showFullBg();
  setCM("mesbook1");
  relocation("mesbook1");
  f.fadeIn(80)
}
function showMsgPage(f, a, e, g, d, c) {
  if (a == null) {
    a = "Information"
  } else {
    switch (a) {
      case 1:
        a = "Successful";
        break;
      case 2:
        a = "Information";
        break;
      case 3:
        a = "Question";
        break;
      case -1:
        a = "Failed";
        break;
      default:
        a = "Information";
        break
    }
  }
  if (e == null) {
    e = "/"
  }
  if (g == null) {
    g = "首页"
  }
  if (d == null) {
    d = "/"
  }
  if (c == null) {
    c = 9
  }
  f = f.replace("/<script>/g", "").replace("/<\/script>/g", "").replace(
      "/</sCript>/g", "");
  e = e.replace("/<script>/g", "").replace("/<\/script>/g", "").replace(
      "/</sCript>/g", "").replace("http://", "").replace("https://", "");
  g = g.replace("/<script>/g", "").replace("/<\/script>/g", "").replace(
      "/</sCript>/g", "");
  d = d.replace("/<script>/g", "").replace("/<\/script>/g", "").replace(
      "/</sCript>/g", "").replace("http://", "").replace("https://", "");
  var b = "/Tools/Message.aspx?result=" + a + "&btntitle=" + encodeURIComponent(
          g) + "&btnhref=" + encodeURIComponent(e) + "&defaulthref="
      + encodeURIComponent(d) + "&delay=" + c + "&msg=" + encodeURIComponent(f);
  location.href = b
}
function hideMsg() {
  showDdl();
  var a = $j("mesbook1");
  hideFullBg();
  a.fadeOut(80)
}
function setCM(b, e) {
  var d;
  if (typeof (b).toString().toLowerCase() == "string") {
    d = $j(b)
  } else {
    d = $(b)
  }
  if (e == null) {
    e = 80
  }
  var c = d.height() / 2;
  var a = d.width() / 2;
  d.css({
    top: "50%",
    "margin-top": "-" + c + "px",
    left: "50%",
    "margin-left": "-" + a + "px"
  });
  d.css({position: "absolute", "z-index": "999"});
  d.fadeIn(e)
}
function setCMS(c, f) {
  var e;
  if (typeof (c).toString().toLowerCase() == "string") {
    e = $j(c)
  } else {
    e = $(c)
  }
  if (f == null) {
    f = 80
  }
  var d = e.height() / 2;
  var b = e.width() / 2;
  var a = document.documentElement.scrollTop;
  if (a > 100) {
    e.css({
      top: "50%",
      "margin-top": "-" + d + "px",
      left: "50%",
      "margin-left": "-" + b + "px"
    })
  } else {
    d = 200;
    e.css({
      "margin-top": "-" + d + "px",
      left: "50%",
      "margin-left": "-" + b + "px"
    })
  }
  e.css({position: "absolute", "z-index": "999"});
  e.fadeIn(f)
}
function showFullBg(n, e, h, k, i, d, b) {
  if (n == null) {
    n = "oran_full_bg"
  }
  var a = $j(n);
  if (a.length == 0) {
    var l = "<div style='position:absolute;top:0;left:0;display:none;' id='" + n
        + "'></div>";
    $(document.body).append(l)
  }
  if (h == null) {
    h = 0.75
  }
  if (k == null) {
    k = "#777"
  }
  if (i == null) {
    i = "9"
  }
  if (d == null) {
    d = 80
  }
  if (e == null) {
    e = true
  }
  var a = $j(n);
  var m = document.documentElement;
  var c = m.scrollWidth;
  var g = m.scrollHeight;
  var f = m.clientHeight;
  var j = m.clientWidth;
  if (g < f) {
    g = f
  }
  if (c < j) {
    c = j
  }
  a.css({
    "z-index": i,
    background: k,
    opacity: h,
    filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=" + h * 100 + ")"
  });
  a.css({height: g, width: c});
  if (e) {
    hideDdl(null, b)
  }
  a.fadeIn(d);
  if (b != null) {
    b()
  }
}
function hideFullBg(a, c) {
  if (a == null) {
    a = "oran_full_bg"
  }
  if (c == null) {
    c = 80
  }
  var b = $j(a);
  b.fadeOut(c);
  showDdl()
}
function $closeLayer(a, b) {
  $j(a).fadeOut(80, function () {
    hideFullBg(b)
  })
}
function limitLength(a) {
  var l = a.value;
  var n = parseInt($(a).attr("max"));
  var c = a.id;
  var e = l.replace(/[^\x00-\xff]/g, "**");
  var d = e.length;
  if (d * 1 <= n * 1) {
    return
  }
  var j = e.substr(0, n);
  var h = 0;
  var k = "";
  for (var g = 0; g < j.length; g++) {
    var b = j.substr(g, 1);
    if (b == "*") {
      h++
    }
  }
  var m = 0;
  var f = e.substr(n * 1 - 1, 1);
  if (h % 2 == 0) {
    m = h / 2 + (n * 1 - h);
    k = l.substr(0, m)
  } else {
    m = (h - 1) / 2 + (n * 1 - h);
    k = l.substr(0, m)
  }
  alert("最大输入" + n + "个字节（相当于" + n / 2 + "个汉字）！");
  document.getElementById(c).value = k;
  return
}
function $g(a) {
  return document.getElementById(a)
}
function $name(a) {
  return document.getElementsByName(a)
}
function $tag(b, a) {
  var c = b;
  if (c != Object) {
    c = $g(b)
  }
  return c.getElementsByTagName(a)
}
function digiKeyOnly(b) {
  var a = window.event ? event.keyCode : b.which;
  if (a < 27 || a > 128) {
    return true
  } else {
    if (a >= 48 && a <= 57) {
      return true
    } else {
      return false
    }
  }
}
function digiOnly(a) {
  a.value = a.value.replace(/[^0-9]/g, "")
}
function $o(b, a, d, c) {
  if (b == null || b == "") {
    return
  }
  if (a == null) {
    a = "300"
  }
  if (d == null) {
    d = "300"
  }
  if (c == null) {
    c = "location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0;top=0,left=0"
  }
  if (a) {
    c += ",width=" + a
  }
  if (d) {
    c += ",height=" + d
  }
  window.open(b, "", c, false)
}
function emptyText(a) {
  var c;
  if (a == null) {
    c = $("body").find("input[type=text]")
  } else {
    c = $j(a).find("input[type=text]")
  }
  var b;
  if (a == null) {
    b = $("body").find("input[type=password]")
  } else {
    b = $j(a).find("input[type=password]")
  }
  c.each(function () {
    $(this).attr("value", "")
  });
  b.each(function () {
    $(this).attr("value", "")
  });
  if (a == null) {
    c = $("body").find("textarea")
  } else {
    c = $j(a).find("textarea")
  }
  c.each(function () {
    $(this).attr("value", "")
  })
}
$cookie = function (d, g, b) {
  if (g == null && b == null) {
    var e = d + "=";
    begin = document.cookie.indexOf(e);
    if (begin != -1) {
      begin += e.length;
      end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = document.cookie.length
      }
      return document.cookie.substring(begin, end)
    }
    return null
  } else {
    if (typeof (g) == "boolean") {
      $cookie(d, "", -999999)
    } else {
      if (b == null) {
        b = 9986400000
      }
      var a = new Date();
      var f = new Date();
      var c = b;
      f.setTime(a.getTime() + c);
      document.cookie = d + "=" + g + ";expires=" + f.toGMTString()
    }
  }
};
function $qs(g) {
  var b = new Object();
  var f = location.search.substring(1);
  var e = f.split("&");
  for (var c = 0; c < e.length; ++c) {
    var h = e[c].indexOf("=");
    if (!h) {
      continue
    }
    var d = e[c].substring(0, h);
    var a = e[c].substring(h + 1);
    a = decodeURIComponent(a);
    b[d] = a
  }
  return b[g] == null ? "" : b[g]
}
function selectAll(d, b) {
  var a = $tag(b, "input");
  for (var c = 0; c < a.length; ++c) {
    a[c].checked = d.checked
  }
}
function invertSelect(b) {
  var a = $tag(b, "input");
  for (var c = 0; c < a.length; ++c) {
    a[c].checked = !a[c].checked
  }
}
function getPageFilename() {
  var b = location.pathname;
  var c = b.lastIndexOf("/") + 1;
  var a = b.substring(c, b.length);
  return a
}
function getRawUrl() {
  var b = location.href;
  var c = b.lastIndexOf("/") + 1;
  var a = b.substring(c, b.length);
  c = a.lastIndexOf("#");
  a = a.substring(0, c);
  return a
}
function getIntactRawUrl() {
  var a = location.href;
  var b;
  b = a.lastIndexOf("#");
  a = a.substring(0, b);
  return a
}
function toggleArg(c, f) {
  var b = $$.intactRawUrl();
  var g = b.indexOf("?");
  if (g == -1) {
    return b + "?" + c + "=" + f
  } else {
    var a = b.substring(g);
    var e = b.substring(0, g);
    var d = new RegExp("&?" + c + "=?\\w*\\[?\\w*\\]?\\|?\\d?", "i");
    a = a.replace(d, "");
    if (a.length == 1) {
      a += c + "=" + f
    } else {
      a += "&" + c + "=" + f
    }
    return e + a
  }
}
function increase(c, b) {
  if (b == null) {
    b = "show"
  }
  var a = $j(c);
  a.animate({height: b, width: b, opacity: b}, "fast")
}
function fadeToggle(a, b) {
  if (b == null) {
    b = "fast"
  }
  if ($("#" + a).is(":visible")) {
    $("#" + a).fadeOut(b)
  } else {
    $("#" + a).fadeIn(b)
  }
}
function clearAllElms(a, b) {
  clearDdls(a, b);
  clearTextBoxes(a, b);
  clearRdos(a, b);
  clearChks(a, b)
}
function clearRdos(a, c) {
  if (c == null) {
    c = "tfocus"
  }
  var b = $j(a).find("input[type=radio]");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  })
}
function clearChks(a, c) {
  if (c == null) {
    c = "tfocus"
  }
  var b = $j(a).find("input[type=checkbox]");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  })
}
function clearDdls(a, c) {
  if (c == null) {
    c = "tfocus"
  }
  var b = $j(a).find("select");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  })
}
function clearTextBoxes(a, c) {
  if (c == null) {
    c = "tfocus"
  }
  var b = $j(a).find("input[type=text]");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  });
  var b = $j(a).find("input[type=password]");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  });
  b = $j(a).find("textarea");
  b.focus(function () {
    $(this).addClass(c)
  });
  b.blur(function () {
    $(this).removeClass(c)
  })
}
var addBookmark = function (f) {
  var g = document.title;
  var c = document.URL;
  var d = window.event || arguments.callee.caller.arguments[0];
  var h = {
    IE: /MSIE/.test(window.navigator.userAgent) && !window.opera,
    FF: /Firefox/.test(window.navigator.userAgent),
    OP: !!window.opera
  };
  f.onclick = null;
  if (h.IE) {
    f.attachEvent("onclick", function () {
      try {
        window.external.AddFavorite(c, g);
        window.event.returnValue = false
      } catch (a) {
        alert("加入收藏失败，请使用Ctrl+D进行添加")
      }
    })
  } else {
    if (h.FF || f.nodeName.toLowerCase() == "a") {
      if (h.FF) {
        f.setAttribute("rel", "sidebar"), f.title = g, f.href = c
      } else {
        alert("加入收藏失败，请使用Ctrl+D进行添加")
      }
    } else {
      if (h.OP) {
        var b = document.createElement("a");
        b.rel = "sidebar", b.title = g, b.href = c;
        f.parentNode.insertBefore(b, f);
        b.appendChild(f);
        b = null
      } else {
        alert("加入收藏失败，请使用Ctrl+D进行添加")
      }
    }
  }
};
function setSelectByValue(a, d) {
  var e = $g(a);
  for (var c = 0; c < e.options.length; ++c) {
    var b = e.options[c];
    b.selected = (b.value == d)
  }
}
function showVerifyCode(a, c, b, f) {
  if (a == null) {
    a = "spVerCode"
  }
  if (c == null) {
    c = "spVerCodeMsg"
  }
  if (b == null) {
    b = "imgVerCode"
  }
  if (f == null) {
    f = "spChgVerCode"
  }
  var h = $j(a);
  var e = $j(c);
  var d = $j(f);
  if (h.html() == "") {
    e.html("正在加载验证码...");
    e.show();
    h.html("<img src='/Tools/ValidCode.aspx' style='display:none;' id='" + b
        + "' alt='验证码' />")
  }
  var g = $j(b);
  g.load(function () {
    e.hide();
    g.show();
    d.show()
  })
}
function changeVerCode(a, b) {
  if (a == null) {
    a = "imgVerCode"
  }
  if (b == null) {
    b = "spVerCodeMsg"
  }
  var d = $j(a);
  var c = $j(b);
  c.html("正在刷新验证码...").show();
  d.attr({src: "/Tools/ValidCode.aspx?x=" + Math.random(), alt: "验证码"});
  d.hide();
  d.load(function () {
    c.hide();
    d.show()
  })
}
function showProc(c, a) {
  var b = $j("imgProc");
  if (a == null) {
    a = true
  }
  if (a) {
    $(c).hide();
    if (b.length > 0) {
      b.remove()
    }
    $("<img src='" + SKIN_PATH
        + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(c)
  } else {
    $(c).show();
    b.remove()
  }
}
function enlarge(c, b) {
  if (c == null) {
    c = true
  }
  if (b == null) {
    b = "Content"
  }
  var e = $j(b);
  var d = parseInt(e.css("font-size"));
  var a = (c ? d * 1.2 : d / 1.2);
  e.css("font-size", a + "px")
}
function altRow(c, g, f, h) {
  var e = $tag(g, "tr");
  for (var d = c; d < e.length; ++d) {
    var b;
    if (d % 2 == 0) {
      b = h
    } else {
      b = f
    }
    if (typeof (b) == "object") {
      for (var a in b) {
        e[d].style[a] = b[a]
      }
    } else {
      e[d].className = b
    }
  }
}
function getCheckedVal(c, d) {
  if (d == null) {
    d = -1
  }
  var b = $j(c).find("input:checked");
  var e = "";
  var a = false;
  b.each(function (f) {
    if (f > d) {
      if (a) {
        e += ","
      }
      e += $(this).val();
      a = true
    }
  });
  return e
}
function checkAll(c, b) {
  var a = $j(b).find("input[type=checkbox]");
  a.each(function (d) {
    this.checked = c.checked
  })
}
function GetSearchURL(e, b) {
  if (b == null) {
    b = getIntactRawUrl()
  }
  var h = e.split("|");
  for (var f = 0; f < h.length; f++) {
    var c = h[f].split(",");
    var a;
    var g = document.getElementById(c[0]);
    if (c.length == 2) {
      a = c[1]
    } else {
      a = c[0]
    }
    if (g != null) {
      var d = g.value;
      if (d != null) {
        b += "&" + a + "=" + encodeURIComponent(d)
      }
    }
  }
  return b
}
function SearchObjectByGet(c, b, a) {
  if (a == null) {
    a = false
  }
  var d = GetSearchURL(c, b);
  if (a) {
    return d
  }
  window.location.href = d
}
function SearchObjects(c, b) {
  if (c == "请填写关键词" || c == "请输入关键词") {
    $a("您还没有输入关键词，请填写后查询。");
    return
  }
  if (b == "product") {
    var a = "/Search/Index.aspx?objtype=product&kwd=" + escape(c);
    window.location.href = a
  } else {
    var a = "/Search/News.aspx?objtype=news&kwd=" + escape(c);
    window.location.href = a
  }
}
function GoToURL(c, b) {
  var a;
  a = SetURLField(a, c, b);
  location.href = a
}
function GoToURLByGet(c, b) {
  var a;
  a = location.href;
  a = SetURLField(a, "page", "1");
  a = SetURLField(a, c, b)
}
function SetURLField(a, f, c) {
  var b;
  b = a.indexOf("?");
  if (b == -1) {
    a += "?" + f + "=" + c
  } else {
    var d = f + "=";
    var e = a.indexOf(d);
    if (e != -1) {
      e += d.length;
      end = a.indexOf("&", e);
      if (end == -1) {
        a = a.substring(0, e) + c
      } else {
        a = a.substring(0, e) + c + a.substring(end)
      }
    } else {
      a = a + "&" + f + "=" + c
    }
  }
  return a
}
function readURLParameter(e) {
  var c = e + "=";
  var b = "";
  var a = location.href;
  var d = a.indexOf(c);
  if (d != -1) {
    d += c.length;
    end = a.indexOf("&", d);
    if (end == -1) {
      b = a.substring(d)
    } else {
      b = a.substring(d, end)
    }
  }
  return b
}
function focusToRemoveText(c) {
  var a = $(c);
  var b = (a.attr("hadfocused") == "1");
  if (!b) {
    a.val("");
    a.attr("hadfocused", "1")
  }
}
function SUR_ShowTable(f) {
  var e = "";
  var c;
  switch (f.SelectionMode) {
    case 1:
      c = "radio";
      break;
    case 2:
      c = "checkbox";
      break
  }
  switch (f.ShowMode) {
    case 1:
      e = '<div class="survey_1" style="width:' + f.Width
          + 'px;"><div class="sur_tit" style="width:' + (f.Width - 2) + 'px;">'
          + f.Title + '</div><table class="sur_tab" id="SUR_itemTab_'
          + f.SubjectId + '">';
      for (var b = 0; b < f.Items.length; ++b) {
        var d = f.Items[b];
        var a = "SUR_item_" + f.SubjectId + b;
        e += '<tr><td><input name="SUR_item' + f.SubjectId + '" type="' + c
            + '" value="' + d.id + '" id="' + a + '" /></td><td><label for="'
            + a + '">' + d.title + "</label></td></tr>"
      }
      e += '</table><div class="bot_btn2"><input type="button" value="提交" class="b15" onclick="SUR_senddata(this,'
          + f.ObjectName
          + ')" /><input type="button" onclick="window.open(\'/tools/survey.aspx?oid='
          + f.SubjectId + '\')" value="查看" class="b16" /></div></div>';
      break
  }
  document.write(e)
}
function SUR_senddata(f, a) {
  var c = "SUR_post_msg_" + a.SubjectId;
  var d = "<span id='" + c + "'>正在提交,请稍后...</span>";
  var b = "/ajax.ashx?action=Survey&t=" + Math.random();
  var e = getCheckedVal("SUR_itemTab_" + a.SubjectId);
  if (e == null || e.length == 0) {
    $a("您至少需要选中一个投票项。");
    return
  }
  $(f).after(d).hide();
  $.post(b, {_SUR_SubjectID: a.SubjectId, _CheckedItems: e}, function (h) {
    var i = gav(h, "state");
    var g = gav(h, "msg");
    if (i == "1") {
      $confirm("投票成功，感谢您的参与。", {
        title: "确定", toDo: function () {
          hideConfirm()
        }
      }, {
        title: "查看结果", toDo: function () {
          window.open("/tools/survey.aspx?oid=" + a.SubjectId);
          hideConfirm()
        }
      })
    } else {
      $a(g)
    }
    $j(c).remove();
    $(f).show()
  })
}
function LEW_ShowTable() {
  var a = '<div class="reports" id="LEAVEWORD_cntr" style="margin:0 auto 10px auto;"><h1>留言</h1><table id="LEAVEWORD_tab"><tr><th>* 标题：</th><td><input type="text" size="40" id="LEAVEWORD_txtTitle" /></td></tr><tr><th>* 联系人：</th><td><input type="text" size="10" id="LEAVEWORD_txtContact" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="30" id="LEAVEWORD_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="30" id="LEAVEWORD_txtMobile" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="30" id="LEAVEWORD_txtEmail" /></td></tr><tr><th>* 留言分类：</th><td id="LEAVEWORD_tdCats"></td></tr><tr><th>留言内容：</th><td><textarea style="width:230px;height:80px;" id="LEAVEWORD_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="sendLeaveword(this)" /> </td></tr></table></div>';
  document.write(a);
  fillLeavewordCategories()
}
function PAY_ShowTable() {
  var a = '<div class="reports" id="DIR_PAY_cntr" style="margin:0 auto 10px auto;"><h1>付款</h1><table id="DIR_PAY_tab" style="background:url('
      + SKIN_PATH
      + 'img/Pay_ico.gif) no-repeat right top;width:400px;"><tr><tr><th>* 付款方式：</th><td><select id="DIR_PAY_ddlPayment"><option value="">请选择</option><option value="alipay">支付宝</option><option value="99bill">快钱</option></select></td></tr><th>* 付款人：</th><td><input type="text" size="20" id="DIR_PAY_txtPayer" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="20" id="DIR_PAY_txtEmail" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="20" id="DIR_PAY_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="20" id="DIR_PAY_txtMobile" /></td></tr><tr><th>我公司业务员姓名：</th><td><input type="text" size="20" id="DIR_PAY_txtSalesManName" /></td></tr><tr><th>* 付款金额：</th><td><input type="text" size="10" id="DIR_PAY_txtMoney" /></td></tr><tr><th>* 款项用途：</th><td><input type="text" size="40" id="DIR_PAY_txtUse" /></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="directPay(this)" /> </td></tr></table></div>';
  document.write(a)
}
function LoginCheck(a, c) {
  var b = window.location;
  if (a == undefined || a.length == 0) {
    $a("请输入用户名", "错误提示", "txtUsername");
    return
  }
  if (c == undefined || c.length == 0) {
    $a("请输入密码", "错误提示", "txtPassword");
    return
  }
  $.post("/ajax.ashx?action=logincheck&t=" + Math.random(),
      {username: a, password: c}, function (d) {
        if (gav(d, "state") == "1") {
          $a(gav(d, "msg"));
          window.location.href = b
        } else {
          $a(gav(d, "msg"))
        }
      })
}

function xuanze() {
  var a = document.getElementById("seachkeywords").value;
  if (a == "请输入关键词搜索") {
    $a("请输入关键词搜索");
    return;
  }
  window.location.href = "/plus/search.php?searchtype='titlekeyword'&q=" + a
}

$(function () {
  $("#seachkeywords").val("请输入关键词搜索").css({color: "#666"});
  $("#seachkeywords").click(function () {
    $(this).val("").css({color: "#000"})
  }).blur(function () {
    if ($.trim($(this).val()) == "") {
      $(this).val("请输入关键词搜索").css({color: "#666"})
    }
  })
});
function ChangeFontSize(b, a) {
  $(b).addClass("cur").siblings("a").removeClass("cur");
  $j("cntrBody").css("font-size", a).find("*").css("font-size", a)
}
function getUrlParms() {
  var b = new Object();
  var f = location.search.substring(1);
  var e = f.split("&");
  for (var c = 0; c < e.length; c++) {
    var g = e[c].indexOf("=");
    if (g == -1) {
      continue
    }
    var a = e[c].substring(0, g);
    var d = e[c].substring(g + 1);
    b[a] = unescape(d)
  }
  return b
}
function SetHome(c, d) {
  try {
    c.style.behavior = "url(#default#homepage)";
    c.setHomePage(d)
  } catch (b) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
      } catch (b) {
        alert(
            "抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。")
      }
      var a = Components.classes["@mozilla.org/preferences-service;1"].getService(
          Components.interfaces.nsIPrefBranch);
      a.setCharPref("browser.startup.homepage", d)
    } else {
      alert("抱歉，您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!")
    }
  }
};
/*inc.js*/
function helpLoad() {
  hits(OBJ_ID, MARK);
  getHits(OBJ_ID, MARK);
  getHelpStatic(OBJ_ID);
  helpSelectCurrentPosition()
}
function helpSelectCurrentPosition() {
  var a = window.location.href.substring(
      window.location.href.lastIndexOf(".") + 1).toLowerCase();
  if (a != "html") {
    $(".nr h4[sid='" + SID + "'],.nr li[sid='" + SID + "']").addClass("cur")
  } else {
    $(".nr h4[sid='" + OBJ_ID + "'],.nr li[sid='" + OBJ_ID + "']").addClass(
        "cur");
    if (!$(".nr .cur").size()) {
      $(".nr h4[sid='" + SID + "'],.nr li[sid='" + SID + "']").addClass("cur")
    }
  }
}
function newsLoad() {
  // hits(OBJ_ID, MARK);
  // getHits(OBJ_ID, MARK);
  // writeComment(OBJ_ID, MARK);
  // getLastArticle();
  // getHistory(MARK);
  // addHistory(OBJ_ID, MARK);
  // getNewProduct()
}
function newsSelectCurrentPosition() {
  $(".nr h4[sid='" + SID + "'],.nr li[sid='" + SID + "']").addClass("cur")
}
function productLoad() {
  productSelectCurrentPosition(SID);
  hits(ProductID, "product");
  writeComment(ProductID, MARK);
  addHistory(ProductID, MARK);
  initImages(ProductID);
  getHistory("product");
  getRecommentProductByHistory(ProductID);
  getRelevantViewed(ProductID);
  for (var a = 0; a < ARR_AD_MARK.length; ++a) {
    getAd(ARR_AD_MARK[a], "cntrAd_" + a)
  }
  checkSize()
}
function downLoad() {
  hits(DownloadID, "download");
  writeComment(DownloadID, MARK);
  addHistory(DownloadID, MARK);
  getHistory("download");
  getRelevantViewedDownload(DownloadID)
}
function projectLoad() {
  productSelectCurrentPosition(SID);
  hits(ProjectID, "project");
  writeComment(ProjectID, MARK);
  addHistory(ProjectID, MARK);
  getVideo(VIDEO_KEY);
  getHistory("project");
  getRecommentProjectByHistory(ProjectID);
  getRelevantViewedProject(ProjectID);
  for (var a = 0; a < ARR_AD_MARK.length; ++a) {
    getAd(ARR_AD_MARK[a], "cntrAd_" + a)
  }
  checkSize()
}
function getTaoCanPrice(a) {
  $.post("/ajax.ashx?action=getTaoCanPrice&t=" + Math.random(), {IDList: a},
      function (d) {
        var c = gav(d, "OldPrice");
        var b = gav(d, "NowPrice");
        $j("OldPrice").html(c);
        $j("NowPrice").html(b)
      })
}
function ShowTaoCanProduct() {
  $(document).ready(function () {
    $(".cbox").find("input").click(function () {
      var a = new Array();
      a = $("#txtIDList").attr("value").split(",");
      var b = a[0];
      if (!this.checked) {
        $(".tao_rt").find("a[id=" + this.value + "]").hide();
        $(".tao_rt").find("a[id=" + this.value + "]").prev().hide();
        for (var c = 0; c < a.length; c++) {
          if (this.value != a[c] && a[c] != a[0] && this.value != a[c]) {
            b = b + "," + a[c]
          }
        }
      } else {
        $(".tao_rt").find("a[id=" + this.value + "]").show();
        $(".tao_rt").find("a[id=" + this.value + "]").prev().show();
        b = $("#txtIDList").attr("value") + "," + this.value
      }
      $("#txtIDList").val(b);
      $("#TCount").html($("#txtIDList").attr("value").split(",").length);
      getTaoCanPrice(b)
    })
  })
}
function checkSize() {
  $(document).ready(function () {
    $(".pro_kuang").find("li").click(function () {
      $(this).parent().find("a").removeClass();
      $(this).find("a").addClass("img")
    })
  })
}
function checkWishSize(g) {
  $(g).parent().find("a").removeClass();
  $(g).addClass("clicked");
  if ($("#txtAttr").html() == "") {
    $("#txtAttr").append($(g).attr("title"))
  } else {
    var a = new Array();
    a = $("#txtAttr").html().split(",");
    for (var e = 0; e < a.length; e++) {
      var b = a[e].split(":")[0];
      var d = $(g).attr("title").split(":")[0];
      var c = $(g).attr("title").split(":")[1];
      var f = b + ":" + c;
      if (b == d) {
        $("#txtAttr").html($("#txtAttr").html().replace(a[e], f));
        return
      }
    }
    $("#txtAttr").append("," + $(g).attr("title"))
  }
}
function getAttrValesPhotos(a) {
  $.post("/ajax.ashx?action=attrValuesPhotos&t=" + Math.random(), {oid: a},
      function (b) {
        $j("img_list").html(b)
      })
}
function switchProdTab(d) {
  var b = $(d);
  var a = b.attr("target_id");
  var c = b.parent().find("a[class=cr]");
  if (c.attr("target_id") == a) {
    return
  }
  c.removeClass("cr");
  b.addClass("cr");
  $j("cntrRelevantProd>div").hide();
  $j(a).show()
}
function agentLoad() {
  hits(OBJ_ID, MARK);
  helpSelectCurrentPosition();
  getHits(OBJ_ID, MARK);
  getAgentHelpStatic(OBJ_ID);
  getAd(MARK, "cntrAd")
}
function keepUsername(a, b) {
  var c = $j(b).attr("value");
  if (a != null && c != undefined) {
    if (a) {
      $cookie("__oran__k_username", c, 99999999999)
    } else {
      $cookie("__oran__k_username", false)
    }
    return
  }
  if (!$j("chkKeep").attr("checked")) {
    return
  }
  if (c != undefined) {
    $cookie("__oran__k_username", c, 99999999999)
  }
}
function toggleJobDetail(d, c) {
  var a = $(d).parent().next();
  var b = $(d).parent();
  if (a.is(":visible")) {
    a.slideUp(80);
    b.css({background: "url(" + c + "img/ico14.gif) no-repeat 0 5px"})
  } else {
    a.slideDown(80);
    b.css({background: "url(" + c + "img/ico13.gif) no-repeat 0 5px"})
  }
}
function showAllColumns(a) {
  if (a == null) {
    a = true
  }
  if (a) {
    showFullBg()
  }
  setCM("prod_all_columns");
  relocation("prod_all_columns")
}
function hideAllColumns(a) {
  if (a == null) {
    a = true
  }
  if (a) {
    hideFullBg()
  }
  $j("prod_all_columns").fadeOut(80)
}
function showBgProc(a, d) {
  if (d == null) {
    d = "正在处理..."
  }
  var b = "oran_div_processing";
  var c = $j(b);
  if (c.length == 0) {
    $(document.body).append("<div id='" + b + "'><p><img src='" + SKIN_PATH
        + "img/processing_2.gif' id='imgProc' alt='" + d
        + "' /></p><p class='mt10'>" + d + "</p></div>")
  }
  c = $j(b);
  if (a == null) {
    a = true
  }
  if (a) {
    showFullBg("oran_full_bg_2");
    setCM(b);
    relocation(b);
    c.fadeIn(80)
  } else {
    c.fadeOut(80);
    hideFullBg("oran_full_bg_2")
  }
}
function gav(d, a) {
  var c = $(d);
  var b = $(c.find("node[key=" + a + "]")).text();
  return b
}
function sc(b, a) {
  b.attr("class", a)
}
function ddlSecQus_Changed(c, a) {
  if (a == null) {
    a = "txtSecQus"
  }
  var b = $j(a);
  if (c.value == "") {
    b.show();
    b.attr("value", "").focus()
  } else {
    b.hide()
  }
  b.attr("value", c.value)
}
function showMyAddress(b) {
  if (b == null) {
    b = true
  }
  if (b) {
    showFullBg("oran_full_bg", false)
  }
  var a = $("#divCartMyAddr > iframe");
  a.attr("src", "layer/MyAddress.aspx");
  setCM("divCartMyAddr")
}
function hideMyAddress() {
  top.window.hideFullBg("oran_full_bg");
  $(top.window.document).find("#divCartMyAddr").fadeOut(80)
}
function setMyAddr(a) {
  var k = $(a).parent().parent().parent();
  var h = k.find("span[name=chnName]").html();
  var e = k.find("span[name=province]").html();
  var f = k.find("span[name=city]").html();
  var j = k.find("span[name=address]").html();
  var b = k.find("span[name=zipCode]").html();
  var g = k.find("span[name=tel]").html();
  var c = k.find("span[name=mobile]").html();
  var i = k.find("span[name=email]").html();
  var d = $(top.window.document);
  d.find("#txtAddrName").val(h);
  d.find("#txtInvoiceTitle").val(h);
  d.find("#txtEmail").val(i);
  d.find("#txtAddrAddr").val(j);
  d.find("#txtAddrZip").val(b);
  d.find("#txtAddrTel").val(g);
  d.find("#txtAddrMobile").val(c);
  $(top.window.document).find("#regionAddr_hdnPrtRegion").val(e);
  $(top.window.document).find("#regionAddr_hdnChdRegion").val(f);
  top.window.regionAddr_initSelectedItems();
  hideMyAddress()
}
function checkPinForm() {
  var c = $j("txtNewPin").val();
  var b = $j("txtSecAsr").val();
  var a = $j("txtNewEmail").val();
  if (c.length == 0 && b == 0 && a.length == 0) {
    $a("未有任何修改项", 2);
    return false
  } else {
    return true
  }
}
function switchOrderTab(b) {
  var a = $j("ulOrderTypeTabs");
  a.find("a").removeClass("cur b cblack f14");
  $(b).addClass("cur b cblack f14").blur()
}
function searchOrder() {
  var g = $tv("txOrderNo");
  var a = $tv("txtStartDate");
  var f = $tv("txtEndDate");
  var e = $tv("ddlOrderStates");
  var c = $("#ulOrderTypeTabs").find(".cur").attr("ordertype");
  if (g.length == 0 && a.length == 0 && f.length == 0 && e.length == 0) {
    $a("至少需要一个查询条件。");
    return
  }
  var b = false;
  var d = "orderlist.aspx?";
  if (g.length > 0) {
    d += "no=" + g;
    b = true
  }
  if (a.length > 0) {
    if (b) {
      d += "&"
    }
    d += "start=" + a;
    b = true
  }
  if (f.length > 0) {
    if (b) {
      d += "&"
    }
    d += "end=" + f;
    b = true
  }
  if (e.length > 0) {
    if (b) {
      d += "&"
    }
    d += "state=" + e;
    b = true
  }
  if (c != undefined && c.length > 0) {
    if (b) {
      d += "&"
    }
    d += "type=" + c;
    b = true
  }
  location.href = d
}
function searchFav() {
  var c = $tv("txtFavKwd");
  var d = $tv("ddlFavClns");
  var a = false;
  var b = "MyFavorites.aspx?";
  if (c.length > 0) {
    b += "kwd=" + encodeURI(c);
    a = true
  }
  if (d.length > 0) {
    if (a) {
      b += "&"
    }
    b += "oid=" + d;
    a = true
  }
  location.href = b
}
function customizePriceRange(f) {
  var c = $(f).parent().find("input:eq(0)");
  var e = $(f).parent().find("input:eq(1)");
  var b = parseInt(c.val());
  var d = parseInt(e.val());
  var a = "/product/list.aspx?";
  if (!b) {
    b = 0
  }
  if (!d) {
    d = 0
  }
  if (b == 0 && d == 0) {
    $a("至少需要一个价格范围。");
    c.focus();
    return
  }
  if (b > 0 && d > 0) {
    a += "PriceLower=" + b + "&PriceUpper=" + d
  } else {
    if (b > 0) {
      a += "PriceUpper=" + b
    } else {
      if (d > 0) {
        a += "PriceLower=" + d
      }
    }
  }
  location.href = a
}
function copyUrl(c) {
  var b = $j("div_nsw_copy_url");
  var a = location.href;
  if (b.length == 0) {
    var d = "<div id='div_nsw_copy_url'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_copy_url_bg')\"><img src='"
        + SKIN_PATH
        + "img/ico9_close.gif' /></a>拷贝链接地址</h1><div class='cont'><div>拷贝本URL从您的博客或者网站链接到本"
        + (c == "product" ? "产品" : "文章") + "</div><textarea>" + a
        + "</textarea><div><input type='button' value='拷贝地址' onclick='copyArticleUrl()' class='b13' /></div></div></div>";
    $(document.body).append(d)
  }
  setCM("div_nsw_copy_url");
  relocation("div_nsw_copy_url");
  showFullBg("div_nsw_copy_url_bg")
}
function copyArticleUrl() {
  var a = $("#div_nsw_copy_url .cont textarea").val();
  window.clipboardData.setData("Text", a);
  $a("本网页地址已复制到粘帖板。", 1)
}
function initImages(c) {
  var a = '<li {$co$}><a href="{$path$}" target="_blank" title="{$title$}"><img title="{$title$}" alt="{$title$}" longdesc="{$path$}" src="{$path$}"  width="60" height="60"></a></li>';
  var d = "";
  for (var b = 0; b < ARR_IMG_PATH.length; ++b) {
    if (b == 0) {
      d = a.replace(/\{\$co\$\}/ig, "class='now'").replace(/\{\$path\$\}/ig,
          ARR_IMG_PATH[b]).replace(/\{\$title\$\}/ig, OBJ_TITLE)
    } else {
      d += a.replace(/\{\$co\$\}/ig, "").replace(/\{\$path\$\}/ig,
          ARR_IMG_PATH[b]).replace(/\{\$title\$\}/ig, OBJ_TITLE)
    }
  }
  $("#img_list").html(d)
}
function setSelectedImg(a) {
  $(a).parent().find("a").removeClass("cur");
  $(a).addClass("cur")
}
function viewBigImage(b) {
  var c = window.location.host;
  var a = "/product/gallery.aspx?oid=" + b;
  if (c != "undefined") {
    a += "&selectedpath=http://" + c
  }
  window.open(a)
}
function switchImage(d) {
  var a = $(".MagicZoom");
  var b = a.find("img:eq(0)");
  var c = $(".MagicZoomBigImageCont img");
  var e = $(d).find("img").attr("srcimg");
  a.attr("href", e);
  b.attr("src", e);
  c.attr("src", e);
  $j("btnShowOrgiImg").click(function () {
    window.open(e, "orgiImg")
  })
}
function initViewPhoto() {
  $j("imgBig").attr("src", $("#ulPhotos>li>a>img").attr("src"));
  $("#ulPhotos>li>a:eq(0)").addClass("cur");
  resetNextPrevious($("#ulPhotos>li>a:eq(0)").get())
}
function viewPhoto(a) {
  $j("imgBig").attr("src", $(a).find("img").attr("src"));
  $("#ulPhotos>li>a").removeClass("cur");
  $(a).addClass("cur").blur();
  resetNextPrevious(a)
}
function resetNextPrevious(b) {
  var c = $(b).parent().prev();
  if (c.length == 0) {
    c = $("#ulPhotos>li:last")
  }
  var a = $(b).parent().next();
  if (a.length == 0) {
    a = $("#ulPhotos>li:first")
  }
  $j("btnPrev").removeAttr("onclick").click(function () {
    viewPhoto(c.find("a").get())
  });
  $j("btnNext").removeAttr("onclick").click(function () {
    viewPhoto(a.find("a").get())
  })
}
function mailArticle(d, b) {
  var a = $j("mailArticle");
  if (a.length == 0) {
    var c = "<div id='mailArticle'><iframe src='/private/SendNewsToYourFriends.aspx?oid="
        + b + "' frameborder='0'></iframe></div>";
    $(document.body).append(c)
  }
  setCM("mailArticle");
  showFullBg("mailArticle_bg", null, null, null, null, null, function () {
    $("#mailArticle iframe").css("visibility", "visible")
  });
  relocation("mailArticle")
}
function mailProduct(b, a) {
  $j("mailArticle").html(
      "<iframe src='/private/SendProductToYourFriends.aspx?oid=" + a
      + "' frameborder='0'></iframe>");
  setCM("mailArticle");
  showFullBg("mailArticle_bg", null, null, null, null, null, function () {
    $("#mailArticle iframe").css("visibility", "visible")
  });
  relocation("mailArticle")
}
function mailDownload(b, a) {
  $j("mailArticle").html(
      "<iframe src='/private/SendDownloadToYourFriends.aspx?oid=" + a
      + "' frameborder='0'></iframe>");
  setCM("mailArticle");
  showFullBg("mailArticle_bg", null, null, null, null, null, function () {
    $("#mailArticle iframe").css("visibility", "visible")
  });
  relocation("mailArticle")
}
function hideMailAtricle() {
  $(top.document.getElementById("mailArticle")).fadeOut(80);
  $(top.document.getElementById("mailArticle_bg")).fadeOut(80);
  top.showDdl()
}
function contractExtend(f, c) {
  var b = $(f);
  var d = b.parent().next();
  var e;
  var a;
  if (b.attr("alt") == "收缩") {
    e = "展开";
    a = "img/ico15_.gif";
    d.slideUp(80)
  } else {
    e = "收缩";
    a = "img/ico15.gif";
    d.slideDown(80)
  }
  b.attr({src: c + a, alt: e})
}
function showLayer(a, c, b) {
  setCM(a);
  relocation(a);
  showFullBg(c, null, null, null, null, null, b)
}
function hideLayer(a, b) {
  $j(a).fadeOut(80);
  hideFullBg(b)
}
function hideAdvanNewsSearch() {
  $(top.document).find("#div_nsw_news_advan_cntr").fadeOut(80);
  $(top.document).find("#div_nsw_news_advan_bg").fadeOut(80);
  top.showDdl()
}
function advanNewsSearch() {
  var a = "/search/news.aspx?type=";
  a += $g("rdoFuzzy").checked ? "1" : "2";
  top.location.href = SearchObjectByGet(
      "ddlFields,tg|ddlNewsColumns2,sid|txtKwd,kwd|txtStartDate,start|txtEndDate,end",
      a, true)
}
function contractExtendProdColumn(f, c) {
  var b = $(f);
  var d = b.parent().parent().next();
  var e;
  var a;
  if (b.attr("alt") == "收缩") {
    e = "展开";
    a = "img/ico14.gif";
    d.slideUp(80)
  } else {
    e = "收缩";
    a = "img/ico13.gif";
    d.slideDown(80)
  }
  b.attr({src: c + a, alt: e})
}
function resetOrderList(a) {
  var c = a.lastIndexOf("/");
  a = a.substring(c + 1);
  var b = $j("ddlOrderBy").find("option");
  b.each(function (d) {
    if ($(b[d]).attr("value") == a) {
      $(b[d]).attr("selected", "selected")
    }
  })
}
function initNextPre() {
  var c = $j("pagerMain").find("a[class=oran_pg_pp]");
  if (c.length == 0) {
    $j("btnPrePage").click(function () {
      $a("这已是第一页。")
    })
  } else {
    var d = c.attr("href");
    $j("btnPrePage").click(function () {
      location.href = d
    })
  }
  var a = $j("pagerMain").find("a[class=oran_pg_np]");
  if (a.length == 0) {
    $j("btnNextPage").click(function () {
      $a("这已是最后一页。")
    })
  } else {
    var b = a.attr("href");
    $j("btnNextPage").click(function () {
      location.href = b
    })
  }
}
function increaseScroll(a) {
  var b = 1;
  var c = setInterval(function () {
    if (b > 320) {
      window.clearInterval(c)
    }
    $g("img_list").scrollLeft += 14;
    b += 14
  }, 1)
}
function decreaseScroll(a) {
  var b = 1;
  var c = setInterval(function () {
    if (b > 320) {
      window.clearInterval(c)
    }
    $g("img_list").scrollLeft -= 14;
    b += 14
  }, 1)
}
function payadScroll(e, a, c) {
  var d = $j("payad_" + a);
  var b = $j("payad_" + e);
  if (d.length == 0) {
    d = $j("payad_" + c)
  }
  b.fadeOut("80", function () {
    d.show()
  })
}
function showReport(c) {
  var a = $j("RPT_cntr");
  if (a.length == 0) {
    var b = '<div class="reports" id="RPT_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'RPT_cntr\',\'RPT____BG\')" class="close2"><img src="'
        + SKIN_PATH
        + 'img/close2.gif" alt="关闭" title="关闭" /></a>报告/纠错/举报</h1><table id="RPT_tab"><tr><th>被报告网站标题：</th><td><input type="text" size="40" disabled="disabled" value="'
        + document.title
        + '" /></td></tr><tr><th>被报告网址：</th><td><input type="text" size="40" disabled="disabled" value="'
        + document.URL
        + '" /></td></tr><tr><th>* 报告类型：</th><td id="RPT_tdCats"></td></tr><tr><th>联系人：</th><td><input type="text" size="10" id="RPT_txtContact" /></td></tr><tr><th>电子邮箱地址：</th><td><input type="text" size="30" id="RPT_txtEmail" /></td></tr><tr><th>报告内容简要描述：</th><td><textarea style="width:230px;height:80px;" id="RPT_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#RPT_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="sendReprots(this)" /> </td></tr></table></div>';
    $(document.body).append(b);
    fillReportCategories()
  }
  a.show();
  showFullBg("RPT____BG", null, null, null, null, null, function () {
    $j("RPT_cats").css("visibility", "visible")
  });
  setCM("RPT_cntr");
  relocation("RPT_cntr")
}
function showLeaveword(c) {
  var a = $j("LEAVEWORD_cntr");
  if (a.length == 0) {
    var b = '<div class="reports" id="LEAVEWORD_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'LEAVEWORD_cntr\',\'LEAVEWORD____BG\')" class="close2"><img src="'
        + SKIN_PATH
        + 'img/close2.gif" alt="关闭" title="关闭" /></a>留言</h1><table id="LEAVEWORD_tab"><tr><th>* 标题：</th><td><input type="text" size="40" id="LEAVEWORD_txtTitle" /></td></tr><tr><th>* 联系人：</th><td><input type="text" size="10" id="LEAVEWORD_txtContact" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="30" id="LEAVEWORD_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="30" id="LEAVEWORD_txtMobile" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="30" id="LEAVEWORD_txtEmail" /></td></tr><tr><th>* 留言分类：</th><td id="LEAVEWORD_tdCats"></td></tr><tr><th>留言内容：</th><td><textarea style="width:230px;height:80px;" id="LEAVEWORD_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#LEAVEWORD_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="sendLeaveword(this)" /> </td></tr></table></div>';
    $(document.body).append(b);
    fillLeavewordCategories()
  }
  a.show();
  showFullBg("LEAVEWORD____BG", null, null, null, null, null, function () {
    $j("LEAVEWORD_cats").css("visibility", "visible")
  });
  setCM("LEAVEWORD_cntr");
  relocation("LEAVEWORD_cntr")
}
function showDirectPay(c) {
  var a = $j("DIR_PAY_cntr");
  if (a.length == 0) {
    var b = '<div class="reports" id="DIR_PAY_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'DIR_PAY_cntr\',\'DIR_PAY____BG\')" class="close2"><img src="'
        + SKIN_PATH
        + 'img/close2.gif" alt="关闭" title="关闭" /></a>付款</h1><table id="DIR_PAY_tab" style="background:url('
        + SKIN_PATH
        + 'img/Pay_ico.gif) no-repeat right top;width:400px;"><tr><tr><th>* 付款方式：</th><td><select id="DIR_PAY_ddlPayment"><option value="">请选择</option><option value="alipay">支付宝</option><option value="99bill">快钱</option></select></td></tr><th>* 付款人：</th><td><input type="text" size="20" id="DIR_PAY_txtPayer" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="20" id="DIR_PAY_txtEmail" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="20" id="DIR_PAY_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="20" id="DIR_PAY_txtMobile" /></td></tr><tr><th>我公司业务员姓名：</th><td><input type="text" size="20" id="DIR_PAY_txtSalesManName" /></td></tr><tr><th>* 付款金额：</th><td><input type="text" size="10" id="DIR_PAY_txtMoney" /></td></tr><tr><th>* 款项用途：</th><td><input type="text" size="40" id="DIR_PAY_txtUse" /></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#DIR_PAY_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="directPay(this)" /> </td></tr></table></div>';
    $(document.body).append(b)
  }
  a.show();
  showFullBg("DIR_PAY____BG", null, null, null, null, null, function () {
    $j("DIR_PAY_ddlPayment").css("visibility", "visible")
  });
  setCM("DIR_PAY_cntr");
  relocation("DIR_PAY_cntr")
}
function showFav(g, f, c) {
  if (c == null) {
    c = location.pathname
  }
  var b = "div_fav_cntr";
  var h = "/private/favorite.aspx?url=" + c + "&title=" + f;
  h = h.toLowerCase();
  var a = $j(b);
  if (a.length != 0) {
    a.remove()
  }
  var e = '<div style="z-index:99;position:absolute;" id="' + b
      + '"><iframe src="' + h + "\" frameborder='0'></iframe></div>";
  $(document.body).append(e);
  a = $j(b);
  var d = getObjectOffset(g);
  a.css({top: d.bottom - 130, left: d.right - 200})
}
function closeTopLayer(a) {
  var b = $(top.document).find("#" + a);
  b.fadeOut();
  top.hideFullBg()
}
function getObjectOffset(d) {
  var a = $(d);
  var c = a.offset();
  var b = {
    top: c.top,
    left: c.left,
    bottom: c.top + a.height(),
    right: c.left + a.width()
  };
  return b
}
function productSelectCurrentPosition(a) {
  $("div.nr h4[sid='" + SID + "'],div.nr li[sid='" + SID + "']").addClass("cur")
}
function ShowHelp(b) {
  var a = $j("div_nsw_show_help");
  if (a.length == 0) {
    var c = "<div id='div_nsw_show_help'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_show_help_bg')\"><img src='"
        + SKIN_PATH
        + "img/ico9_close.gif' /></a>帮助说明</h1><div class='cont'><textarea>" + b
        + "</textarea></div></div>";
    $(document.body).append(c)
  }
  setCM("div_nsw_show_help");
  relocation("div_nsw_show_help");
  showFullBg("div_nsw_show_help_bg")
}
function onclPrReAtts(b, f, a) {
  var g = false;
  $("#" + b).html(f);
  if (atts == null || atts == "") {
    atts = a + "," + f
  } else {
    var d = new Array();
    d = atts.split("$");
    if (d.length <= 0) {
      atts = atts + "$" + a + "," + f
    } else {
      atts = "";
      for (var e = 0; e < d.length; e++) {
        var h = "";
        var c = d[e].split(",");
        if (c.length == 2) {
          h = c[1];
          if (c[0] == a) {
            h = f;
            g = true
          }
          if (atts == null || atts == "") {
            atts = c[0] + "," + h
          } else {
            atts = atts + "$" + c[0] + "," + h
          }
        }
      }
      if (g == false) {
        if (atts == null || atts == "") {
          atts = a + "," + f
        } else {
          atts = atts + "$" + a + "," + f
        }
      }
    }
  }
}
function switchAttrTab(c) {
  var a = $(c);
  if (a.attr("class") == "cur") {
    return
  }
  var b = a.attr("item_name");
  $j("div__detail").hide();
  $j("div__attr").hide();
  $j("div__" + b).show();
  $(".prod_tab").find("a").removeClass("cur");
  a.addClass("cur")
}
function switchExtendAttrTab(f, g) {
  var d = f;
  var a = f.substring(f.length - 1, f.length);
  for (var b = 0; b < g; b++) {
    var c = "detailvalue" + b;
    var e = "detail" + b;
    if (a == b) {
      $j(c).show();
      $j(e).addClass("cur")
    } else {
      $j(c).hide();
      $j(e).removeClass()
    }
  }
}
function switchExtendContentTab(g, h, a) {
  var e = g;
  var b = g.substring(g.length - 1, g.length);
  for (var c = 0; c < h; c++) {
    var d = "contentvalue" + a + c;
    var f = "content" + a + c;
    if (b == c) {
      $j(d).show();
      $j(f).addClass("cur")
    } else {
      $j(d).hide();
      $j(f).removeClass()
    }
  }
}
$(function () {
  var e = 0;
  var v = 0;
  var a = 0;
  var u = 0;
  var b = 5;
  var d = 0;
  var m = 0;
  var p = "";
  var w = $("div.plc");
  var g = $("div.plc2");
  var r = $("div.pro_curmbs");
  var f = w.size() ? w : g;
  var l = f.size() ? f : r;
  var h = $("div.menu");
  var n = h.children("ul").children("li");
  var c = l.find("a");
  var k = c.size();
  var j = "cur";
  h.find("li").removeClass(j);
  var t = new Object();
  t.getCurrentURL = function () {
    switch (MARK) {
      case "product":
        p = v ? v : MARK;
        break;
      case "news":
        p = e ? e : MARK;
        break;
      case "project":
        p = b ? b : MARK;
        break;
      case "agent":
        p = a ? a : MARK;
        break;
      case "help":
        p = u ? u : MARK;
        break;
      case "download":
        p = d ? d : MARK;
        break;
      case "job":
        p = m ? m : MARK;
        break;
      default:
        p = MARK;
        break
    }
    return p
  };
  t.firstLiCur = function () {
    h.find("li:first").addClass(j)
  };
  t.selectedCur = function () {
    n.children("a").each(function () {
      var i = $(this).attr("href").toLowerCase();
      i = i.substring(i.lastIndexOf("/") + 1);
      if (i == p) {
        $(this).parent("li").addClass(j);
        return false
      } else {
        if (typeof (p) == "number") {
          n.eq(p).addClass(j);
          return false
        }
      }
    })
  };
  t.selectedTxtCur = function () {
    n.children("a").each(function () {
      var i = $.trim($(this).text());
      if (i == o && o.indexOf("首页") == -1) {
        $(this).parent("li").addClass(j);
        return false
      }
    });
    return h.children("ul").children("li." + j)
  };
  t.hasCur = function () {
    var i = h.children("ul").children("li." + j).size();
    return i
  };
  if (typeof (MARK) == "undefined") {
    t.firstLiCur();
    return false
  }
  if (!k) {
    p = t.getCurrentURL();
    t.selectedCur()
  }
  for (var q = k - 1; q >= 0; q--) {
    p = c.eq(q).attr("href");
    var o = $.trim(c.eq(q).text());
    p = p.substring(p.lastIndexOf("/") + 1).toLowerCase();
    if (p == "" || p == undefined) {
      p = t.getCurrentURL()
    }
    var s = t.selectedTxtCur();
    if (s.size() && o.indexOf("首页") == -1) {
      s.parent("li").addClass(j);
      return false
    } else {
      t.selectedCur();
      if (t.hasCur()) {
        return false
      }
    }
  }
  if (!t.hasCur()) {
    p = MARK;
    t.selectedCur();
    if (!t.hasCur()) {
      t.firstLiCur()
    }
  } else {
    t.firstLiCur()
  }
});
function removeProductInfoTags() {
  if (!$.trim($("div.pd_attr").text())) {
    $("div.pd_attr").remove()
  }
  if (!$.trim($("div.pd_short").text())) {
    $("div.pd_short").remove()
  }
};

/*ajax.js*/
var flag = false;
function DrawImage(e, b, a, d) {
  var c = new Image();
  c.src = e.src;
  if (c.width > 0 && c.height > 0) {
    flag = true;
    if (c.width / c.height >= b / a) {
      if (c.width > b) {
        e.width = b;
        e.height = (c.height * b) / c.width
      } else {
        e.width = c.width;
        e.height = c.height
      }
      if (d == 1) {
        if (a > e.height && b > e.width) {
          e.style.padding = (a - e.height) / 2 + "px 0 0 " + (b - c.width) / 2
              + "px"
        } else {
          if (a > e.height) {
            e.style.padding = (a - e.height) / 2 + "px 0 0 0"
          } else {
            if (b > e.width) {
              e.style.padding = "0 0 0 " + (b - e.width) / 2 + "px"
            }
          }
        }
      }
    } else {
      if (c.height > a) {
        e.height = a;
        e.width = (c.width * a) / c.height
      } else {
        e.width = c.width;
        e.height = c.height
      }
      if (d == 1) {
        if (a > e.height && b > e.width) {
          e.style.padding = (a - e.height) / 2 + "px 0 0 " + (b - e.width) / 2
              + "px"
        } else {
          if (a > e.height) {
            e.style.padding = (a - e.height) / 2 + "px 0 0 0"
          } else {
            if (b > e.width) {
              e.style.padding = "0 0 0 " + (b - e.width) / 2 + "px"
            }
          }
        }
      }
    }
  }
}
function initCommonHeader() {
  $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function (b) {
    var a = gav(b, "showIM");
    showIM(a);
    var c = gav(b, "username");
    if (c.length > 0) {
      $j("commonHeaderGuest").hide();
      $j("commonHeaderUsername").html(c);
      $j("commonHeaderUser").fadeIn(80)
    }
  })
}
function showIM(a) {
  if ($("#bodd").html() != "") {
    if (a == "True") {
      $("#bodd").show();
      $("#kefubtn").hide();
      $("#divOranIm").show()
    } else {
      $("#bodd").hide();
      $("#kefubtn").show();
      $("#divOranIm").hide()
    }
  }
}
function initCommonHeaderKeywords(a) {
  if (a == "") {
    a = "6"
  }
  $.post("/ajax.ashx?action=initcommonheaderkeywords&t=" + Math.random(),
      {s: a}, function (b) {
        $j("commonHeaderkeywords").html(b)
      })
}
function addToCart(f, c, a, e, b, h, d) {
  showProc(f);
  if (h == null) {
    h = false
  }
  e = $j(e).html();
  b = $j(b).val();
  var g;
  if (a == null) {
    g = 1
  } else {
    if (typeof (a) == "number") {
      g = a
    } else {
      g = $tv(a)
    }
  }
  if (e == null) {
    e = ""
  }
  if (b == null) {
    b = ""
  }
  $.post("/ajax.ashx?action=addtocart&t=" + Math.random(),
      {pid: c, quti: g, atts: e, pidlist: b}, function (m) {
        var j = gav(m, "msg");
        var l = gav(m, "count");
        var k = gav(m, "state");
        if (d != null) {
          location.href = d;
          return
        }
        if (k != "1") {
          $a(j);
          showProc(f, false);
          return
        }
        $confirm(j, {title: "去结算", toDo: "/paycenter/cart.aspx"}, {
          title: "再选购", toDo: function () {
            hideConfirm()
          }
        });
        $j("headerCartCount").html(l);
        if (h && (gav(m, "state") == 1) && confirm(
                "添加到购物车成功，是否马上刷新页面购物车页面？\r\n\r\n是 - 刷新本页面查看最新结果\r\n否 - 保留当前页面状态")) {
          location.href = "cart.aspx?t=" + Math.random();
          return
        }
        showProc(f, false)
      })
}
function emptyCart(a) {
  showBgProc();
  $.get("/ajax.ashx?action=emptycart&t=" + Math.random(), function (b) {
    if (b == "1") {
      $a("清空购物车成功，单击确认返回产品中心。", 1, false, null, "消息", function () {
        location.href = "/product"
      })
    } else {
      $a("清空购物车失败，请稍候重试。")
    }
    showBgProc(false)
  })
}
function changeQuantity(d, b, c) {
  var a = $(d).parent().find("input").attr("value");
  if (!/^\d+$/.test(a)) {
    $a("数量必须是一个整数。");
    return
  }
  if (parseInt(a) == 0) {
    $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=addtocart&t=" + Math.random(),
      {pid: b, quti: a, atts: c}, function (e) {
        if (gav(e, "state") == "1") {
          if (confirm(
                  "数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random()
          } else {
            showBgProc(false);
            $(d).hide()
          }
        } else {
          $a(e);
          showBgProc(false)
        }
      })
}
function delCartProduct(c, a, b) {
  showBgProc();
  var d = 0;
  $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {pid: a, atts: b},
      function (e) {
        if (gav(e, "state") == "1") {
          if (confirm(
                  "商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random()
          }
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function changeQuantity(c, b) {
  var a = $(c).parent().find("input").attr("value");
  if (!/^\d+$/.test(a)) {
    $a("数量必须是一个整数。");
    return
  }
  if (parseInt(a) == 0) {
    $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {pid: b, quti: a},
      function (d) {
        if (gav(d, "state") == "1") {
          if (confirm(
                  "数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random()
          } else {
            showBgProc(false);
            $(c).hide()
          }
        } else {
          $a(d);
          showBgProc(false)
        }
      })
}
function delCartProduct(c, a, b) {
  showBgProc();
  var d = 0;
  $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {pid: a, atts: b},
      function (e) {
        if (gav(e, "state") == "1") {
          if (confirm(
                  "商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random()
          }
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function cancelOrder(b, a) {
  showBgProc();
  $.post("/ajax.ashx?action=cancelorder&t=" + Math.random(), {no: a},
      function (c) {
        if (gav(c, "state") == "1") {
          $(b).parent().parent().parent().find("td[name=orderstate]").html(
              "已取消");
          $(b).hide()
        } else {
          $a("<p>取消订单操作失败。</p><p>非‘待审核’状态、已锁定等订单不可取消。</p>")
        }
        showBgProc(false)
      })
}
function delFavColumn(b, a) {
  showBgProc();
  $.post("/ajax.ashx?action=delfavfolumn&t=" + Math.random(), {oid: a},
      function (c) {
        if (gav(c, "state") == "1") {
          $(b).parent().parent().fadeOut(80).remove()
        } else {
          $a("操作失败，请稍候重试。")
        }
        showBgProc(false)
      })
}
function delMyWish(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=delMyWishs&t=" + Math.random(), {ids: b},
      function (e) {
        if (gav(e, "state") == "1") {
          var d = $j(a).find("input[name=item]:checked");
          d.each(function (f) {
            $(this).parent().parent().remove()
          })
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function delMyDownloads(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=delMyDownloads&t=" + Math.random(), {ids: b},
      function (e) {
        if (gav(e, "state") == "1") {
          var d = $j(a).find("input[name=item]:checked");
          d.each(function (f) {
            $(this).parent().parent().remove()
          })
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function addFav(d, c, b, a) {
  if (b == null) {
    b = location.pathname
  }
  if (c == null) {
    c = document.title
  }
  $.post("/ajax.ashx?action=fav&t=" + Math.random(),
      {url: b, ptitle: c, column_id: a}, function (g) {
        var f = gav(g, "state");
        var e = gav(g, "msg");
        if (f == "1") {
          closeTopLayer("div_fav_cntr")
        } else {
          top.$a(e, "2");
          closeTopLayer("div_fav_cntr")
        }
      })
}
function delFav(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=delfav&t=" + Math.random(), {ids: b}, function (e) {
    if (gav(e, "state") == "1") {
      var d = $j(a).find("input[name=item]:checked");
      d.each(function (f) {
        $(this).parent().parent().remove()
      })
    } else {
      $a(gav(e, "msg"))
    }
    showBgProc(false)
  })
}
function hits(a, b) {
  $.post("/ajax.ashx?action=hits&t=" + Math.random(), {oid: a, mark: b})
}
function postComment(e, c, d) {
  showProc(e);
  var a = $tv("txtCmtContent");
  var b = $tv("txtCmtVerCode");
  if (a == "") {
    $a("内容必填。");
    showProc(e, false);
    return
  }
  if ($g("txtVerCode") != null && s_verCode == "") {
    $a("验证码不可空。");
    showProc(e, false);
    return
  }
  $.post("/ajax.ashx?action=postcomment&t=" + Math.random(),
      {content: a, oid: c, verCode: b, mark: d}, function (h) {
        var k = gav(h, "state");
        var j = gav(h, "msg");
        if (k == "") {
          $a(h, -1)
        } else {
          if (k == "2") {
            $a(j, 1);
            emptyText("tbCmt")
          } else {
            if (k == "1") {
              var o = gav(h, "time");
              var g = gav(h, "username");
              var p = gav(h, "ip");
              var m = gav(h, "comment");
              var f = gav(h, "feedback");
              var l = gav(h, "num");
              var n = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";
              var q = n.replace("{$username$}", g).replace("{$ip$}", p).replace(
                  "{$time$}", o).replace("{$feedback$}", f).replace(
                  "{$content$}", m);
              var r = $j("divComments").html();
              if (r == "暂无评论") {
                r = ""
              }
              $j("divComments").html(q + r);
              $j("spCommentCount").html(l);
              $a(j, 1);
              emptyText("tbCmt")
            } else {
              $a(j)
            }
          }
        }
        showProc(e, false)
      })
}
function writeComment(a, b) {
  $.post("/ajax.ashx?action=getcomment&t=" + Math.random(), {oid: a, mark: b},
      function (e) {
        var h = $(e).find("count").text();
        $j("spCommentCount").html(h);
        var n = $(e).find("comment");
        var m = "";
        var k = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";
        for (var f = 0; f < n.length; ++f) {
          var o = $(n[f]);
          var d = o.find("username").text();
          var g = o.find("content").text();
          var l = o.find("ip").text();
          var j = o.find("inputTime").text();
          var c = o.find("feedback").text();
          m += k.replace("{$username$}", d).replace("{$ip$}", l).replace(
              "{$time$}", j).replace("{$content$}", g).replace("{$feedback$}",
              c)
        }
        if (m.length > 0) {
          $j("divComments").html(m)
        } else {
          $j("divComments").html("暂无评论")
        }
      })
}
function addHistory(a, b) {
  $.get("/ajax.ashx?action=addhistory&t=" + Math.random(), {oid: a, mark: b})
}
function getAd(b, a) {
  $.post("/ajax.ashx?action=getadd", {keyname: b}, function (c) {
    $j(a).html(c)
  })
}
function getVideo(a) {
  $.post("/ajax.ashx?action=getvideo", {videoKey: a}, function (c) {
    var b = $j("divVideo");
    if (c.length == 0) {
      b.slideUp(80)
    } else {
      b.html(c);
      $(".prod_attrs").toggleClass("prod_attrs").toggleClass("prod_attrs_b")
    }
  })
}
function getOrderAnns() {
  $.get("/ajax.ashx?action=getorderanns", function (a) {
    $j("divOrderAnns").html(a)
  })
}
function getEndingRemark() {
  $.get("/ajax.ashx?action=getendingremark", function (a) {
    $j("divEndingRemark").html(a)
  })
}
function getHistory(a) {
  $.post("/ajax.ashx?action=gethistory&t=" + Math.random(), {mark: a},
      function (b) {
        if (b.length == 0) {
          b = "<li>&nbsp;&nbsp;无浏览历史</li>"
        }
        $j("divHistoryCntr").html(b + "<div class='clear'></div>")
      })
}
function getHits(a, b) {
  $.post("/ajax.ashx?action=gethits", {mark: b, oid: a}, function (c) {
    $j("cntrHits").html(c)
  })
}
function getHelpStatic(a) {
  $.post("/ajax.ashx?action=helpsatisfaction&t=" + Math.random(), {oid: a},
      function (k) {
        var b = [parseInt(gav(k, "1")), parseInt(gav(k, "2")),
          parseInt(gav(k, "3"))];
        var g = b[0] + b[1] + b[2];
        if (g == 0) {
          g = 1
        }
        var f = 100;
        for (var c = 0; c < b.length; ++c) {
          var e = (b[c] / g).toFixed(2);
          var d = f * e;
          if (d == 0) {
            d = 1
          }
          var j = "<div class='static_graph' style='height:" + d
              + "px;'></div><div class='static_w'>" + (e * 100).toFixed(2)
              + "%</div>";
          $j("cntrStatic_" + c).html(j)
        }
      })
}
function submitHelpUse(c, b) {
  showProc(c);
  var a = $("input[name=use]:checked").val();
  $.post("/ajax.ashx?action=helpuseful&t=" + Math.random(), {oid: b, notion: a},
      function (d) {
        if (gav(d, "state") == "0") {
          $a(gav(d, "msg"))
        } else {
          $a(gav(d, "msg"), 1);
          getHelpStatic(b)
        }
        showProc(c, false)
      })
}
function getSimilarArticle(a) {
  $.post("/ajax.ashx?action=getsmilararticle&t=" + Math.random(), {sid: a},
      function (b) {
        $j("cntrSimilarArticle").html(b)
      })
}
function getLastArticle() {
  $.post("/ajax.ashx?action=getlastarticle", function (a) {
    $j("cntrLastArticle").html(a)
  })
}
function cleanHistory(b, a) {
  $.post("/ajax.ashx?action=cleanhistory", {mark: b}, function (c) {
    $j("divHistoryCntr").html("<li>&nbsp;&nbsp;无浏览历史</li>")
  })
}
function subscription(d, a) {
  if (a == null) {
    a = "txtSubscriptionEmail"
  }
  var c = $.trim($j(a).val());
  var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (c.length == 0) {
    $a("E-Mail 不可为空");
    $j(a).focus();
    return false
  }
  if (!b.test(c)) {
    $a("E-Mail 格式错误。");
    $j(a).focus();
    return false
  }
  showProc(d);
  $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {email: c},
      function (g) {
        var f = gav(g, "state");
        var e = gav(g, "msg");
        if (f == "1") {
          $a(e, 1)
        } else {
          $a(e)
        }
        showProc(d, false)
      })
}
function userFeedback(c) {
  var a = $tv("txtFdTitle");
  var b = $tv("txtFdShortDesc");
  if (a.length == 0 || b.length == 0) {
    $a("内容或标题不可为空。");
    return false
  }
  showBgProc(true, "正在提交...");
  $.post("/ajax.ashx?action=userfeedback&t=" + Math.random(),
      {title: a, shortDesc: b}, function (f) {
        var e = gav(f, "state");
        var d = gav(f, "msg");
        if (e == "1") {
          showMsgPage("<li>您的意见提交成功，感谢您的意见，有您的支持，我们会做得更好。</li>", 1,
              "/user/faq.aspx", "意见/反馈", "/user/faq.aspx");
          return
        } else {
          if (d.length > 0) {
            $a(d)
          } else {
            $a(f)
          }
        }
        showBgProc(false)
      })
}
function checkAuthority(b, a) {
  $.post("/ajax.ashx?action=checkauthority&t=" + Math.random(), {authIDs: b},
      function (c) {
        if (c == "1") {
          $j("div___________Perm").hide();
          document.oncontextmenu = function () {
            return true
          };
          document.onselectstart = function () {
            return true
          }
        } else {
          showMsgPage("您不具有查看 " + a + " 的权限。");
          return
        }
      })
}
function changeFavColumn(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showProc(c);
  $.post("/ajax.ashx?action=changefavcolumn&t=" + Math.random(),
      {ids: b, targetId: c.value}, function (f) {
        var e = gav(f, "state");
        var d = gav(f, "msg");
        if (e == "1") {
          location.reload()
        } else {
        }
      });
  showProc(c, false)
}
function getRecommentProductByHistory(a) {
  $.post("/ajax.ashx?action=GetRecommentProductByHistory&t=" + Math.random(),
      {oid: a}, function (c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function getRecommentProjectByHistory(a) {
  $.post("/ajax.ashx?action=GetRecommentProjectByHistory&t=" + Math.random(),
      {oid: a}, function (c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function getRelevantSales(a) {
  $.post("/ajax.ashx?action=GetRelevantSales&t=" + Math.random(), {oid: a},
      function (c) {
        var b = $j("divRelevantSalesCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function getRelevantViewed(a) {
  $.post("/ajax.ashx?action=GetRelevantViewed&t=" + Math.random(), {oid: a},
      function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function getRelevantViewedProject(a) {
  $.post("/ajax.ashx?action=GetRelevantViewedProject&t=" + Math.random(),
      {oid: a}, function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function getRelevantViewedDownload(a) {
  $.post("/ajax.ashx?action=GetRelevantViewedDownload&t=" + Math.random(),
      {oid: a}, function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
          b.remove()
        } else {
          b.html(c)
        }
      })
}
function delInitationlog(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=DelInitationlog&t=" + Math.random(), {ids: b},
      function (e) {
        if (gav(e, "state") == "1") {
          var d = $j(a).find("input[name=item]:checked");
          d.each(function (f) {
            $(this).parent().parent().remove()
          })
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function sendInvitation(c) {
  var b = $j(c);
  var a = $j("txtEmail").val();
  if (a == null || a.length == 0) {
    $a("电子邮箱地址不可为空。");
    return
  }
  if (!PTN_EMAIL.test(a)) {
    $a("电子邮箱地址格式不正确。");
    return
  }
  showProc(c);
  $.post("/ajax.ashx?action=SendInvitation&t=" + Math.random(), {_email: a},
      function (f) {
        var e = gav(f, "state");
        var d = gav(f, "msg");
        if (e == "1") {
          showMsgPage(d, 1, "/user/InviteUserList.aspx", "邀请函列表",
              "/user/InviteUserList.aspx")
        } else {
          $a(d);
          showProc(c, false)
        }
      })
}
function fillReportCategories() {
  $.get("/ajax.ashx?action=GetReportCategories&t=" + Math.random(),
      function (d) {
        var a = d.split("$$");
        var c = '<option value="">请选择...</option>';
        for (var b = 0; b < a.length; ++b) {
          c += '<option value="' + a[b] + '">' + a[b] + "</option>"
        }
        $j("RPT_tdCats").html('<select id="RPT_cats">' + c + "</select>")
      })
}
function fillLeavewordCategories() {
  $.get("/ajax.ashx?action=GetLeavewordCategories&t=" + Math.random(),
      function (d) {
        var a = d.split("$$");
        var c = '<option value="">请选择...</option>';
        for (var b = 0; b < a.length; ++b) {
          c += '<option value="' + a[b] + '">' + a[b] + "</option>"
        }
        $j("LEAVEWORD_tdCats").html(
            '<select id="LEAVEWORD_cats">' + c + "</select>")
      })
}
function sendLeaveword(a) {
  var h = $j("LEAVEWORD_cats").val();
  var j = $v("LEAVEWORD_txtTitle");
  var c = $v("LEAVEWORD_txtTel");
  var f = $v("LEAVEWORD_txtMobile");
  var d = $v("LEAVEWORD_txtContact");
  var g = $v("LEAVEWORD_txtEmail");
  var e = $v("LEAVEWORD_txtShortDesc");
  var b = "";
  if (j == "") {
    b += "<li>标题不可为空</li>"
  }
  if (d == "") {
    b += "<li>联系人不可为空</li>"
  }
  if (g == "") {
    b += "<li>电子邮箱地址不可为空</li>"
  } else {
    if (!PTN_EMAIL.test(g)) {
      b += "<li>电子邮箱地址格式错误</li>"
    }
  }
  if (h == "") {
    b += "<li>留言类型必选</li>"
  }
  if (b.length > 0) {
    $a(b);
    return
  }
  showProc(a);
  $.post("/ajax.ashx?action=SendLeaveword&t=" + Math.random(),
      {title: j, cat: h, contact: d, email: g, shortDesc: e, tel: c, mobile: f},
      function (m) {
        var l = gav(m, "state");
        var k = gav(m, "msg");
        if (l == "1") {
          $a(k, 1)
        } else {
          $a(k)
        }
        showProc(a, false)
      })
}
function sendReprots(g) {
  var c = $j("RPT_cats").val();
  var b = document.title;
  var e = document.URL;
  var f = $v("RPT_txtContact");
  var d = $v("RPT_txtEmail");
  var a = $v("RPT_txtShortDesc");
  if (c.length == 0) {
    $a("请选择报告分类。");
    return
  }
  showProc(g);
  $.post("/ajax.ashx?action=SendReports&t=" + Math.random(),
      {title: b, url: e, cat: c, contact: f, email: d, shortDesc: a},
      function (k) {
        var j = gav(k, "state");
        var h = gav(k, "msg");
        if (j == "1") {
          $a(h, 1)
        } else {
          $a(h)
        }
        showProc(g, false)
      })
}
function directPay(a) {
  var f = $v("DIR_PAY_txtPayer");
  var k = $v("DIR_PAY_txtEmail");
  var h = $v("DIR_PAY_txtTel");
  var j = $v("DIR_PAY_txtMobile");
  var e = $v("DIR_PAY_txtSalesManName");
  var d = $v("DIR_PAY_txtMoney");
  var b = $v("DIR_PAY_txtUse");
  var c = $v("DIR_PAY_ddlPayment");
  var g = "";
  if (f.length == 0) {
    g += "<li>付款人不可为空。</li>"
  }
  if (k == "") {
    g += "<li>电子邮箱地址不可为空</li>"
  } else {
    if (!PTN_EMAIL.test(k)) {
      g += "<li>电子邮箱地址格式错误</li>"
    }
  }
  if (d.length == 0) {
    g += "<li>付款金额不可为空。</li>"
  } else {
    if (!PTN_FLOAT.test(d)) {
      g += "<li>付款金额必须为数字，如89.00。</li>"
    }
  }
  if (b.length == 0) {
    g += "<li>款项用途不可为空。</li>"
  }
  if (c.length == 0) {
    g += "<li>请选择付款方式。</li>"
  }
  if (g.length > 0) {
    $a(g);
    return
  }
  showProc(a);
  $.post("/ajax.ashx?action=DirectPay&t=" + Math.random(), {
    payer: f,
    email: k,
    tel: h,
    mobile: j,
    salesMan: e,
    _money: d,
    _use: b,
    payment: c
  }, function (n) {
    var m = gav(n, "state");
    var l = gav(n, "msg");
    if (m == "1") {
      location.href = "/Paycenter/PayDirectConfirm.aspx";
      return
    } else {
      $a(l)
    }
    showProc(a, false)
  })
}
function submitOrder(a, e) {
  showProc(a);
  var d = $j("txtContact").val();
  var j = $j("txtCompName").val();
  var k = $j("txtTel").val();
  var h = $j("txtMobile").val();
  var m = $j("txtEmail").val();
  var c = $j("txtAddr").val();
  var g = $j("txtContent").val();
  var n = $j("txtValidate").val();
  var f = "";
  if (d.length == 0) {
    f += "<p>联系人不可为空</p>"
  }
  if (h.length == 0) {
    f += "<p>手机不可为空</p>"
  }
  var l = /^\d{11,13}$/;
  if (h.length > 0 && !l.test(h)) {
    f += "<p>手机格式错误</p>"
  }
  var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (m.length > 0 && !b.test(m)) {
    f += "<p>E-Mail格式错误</p>"
  }
  if (g.length == 0) {
    f += "<p>采购意向描述不可为空</p>"
  }
  if (n.length == 0) {
    f += "<p>验证码不可为空</p>"
  }
  if (f.length > 0) {
    $a(f);
    showProc(a, false);
    return
  }
  $.post("/ajax.ashx?action=submitorder&t=" + Math.random(), {
    oid: e,
    contact: d,
    compName: j,
    tel: k,
    mobile: h,
    email: m,
    addr: c,
    content: g,
    vali: n
  }, function (q) {
    var p = gav(q, "state");
    var o = gav(q, "msg");
    if (p == "1") {
      $a(o, 1);
      emptyText("tbForm1");
      document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?"
          + new Date().getTime()
    } else {
      $a(o);
      if ($.trim(o).indexOf("验证码错误") != -1) {
        document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?"
            + new Date().getTime()
      } else {
        emptyText("tbForm1")
      }
    }
  });
  showProc(a, false)
}
function getAgentHelpStatic(a) {
  $.post("/ajax.ashx?action=agenthelpsatisfaction&t=" + Math.random(), {oid: a},
      function (k) {
        var b = [parseInt(gav(k, "1")), parseInt(gav(k, "2")),
          parseInt(gav(k, "3"))];
        var g = b[0] + b[1] + b[2];
        if (g == 0) {
          g = 1
        }
        var f = 100;
        for (var c = 0; c < b.length; ++c) {
          var e = (b[c] / g).toFixed(2);
          var d = f * e;
          if (d == 0) {
            d = 1
          }
          var j = "<div class='static_graph' style='height:" + d
              + "px;'></div><div class='static_w'>" + (e * 100).toFixed(2)
              + "%</div>";
          $j("cntrStatic_" + c).html(j)
        }
      })
}
function submitAgentHelpUse(c, b) {
  showProc(c);
  var a = $("input[name=use]:checked").val();
  $.post("/ajax.ashx?action=agenthelpuseful&t=" + Math.random(),
      {oid: b, notion: a}, function (d) {
        if (gav(d, "state") == "0") {
          $a(gav(d, "msg"))
        } else {
          $a(gav(d, "msg"), 1);
          getAgentHelpStatic(b)
        }
        showProc(c, false)
      })
}
function showProductInfo(h, c, g) {
  var f = null;
  var e = null;
  var a = null;
  var d = null;
  $(h).hover(function () {
    f = new Date();
    b()
  }, function () {
    window.clearInterval(a)
  });
  function b() {
    a = window.setInterval(function () {
      e = new Date();
      d = e - f;
      if (d > 400) {
        if ($(h).parent().parent().next().attr("class") == "mesbook4" || $(
                h).parent().parent().next().attr("class") == "mesbook40") {
          if ($(h).parent().parent().next().is(":visible")) {
            return
          } else {
            $(h).parent().parent().next().show()
          }
        } else {
          $.post("/ajax.ashx?action=showProductInfo&t=" + Math.random(),
              {oid: c, index: g}, function (j) {
                if ($(h).parent().parent().next().attr("class") == "mesbook4"
                    || $(h).parent().parent().next().attr("class")
                    == "mesbook40") {
                  return
                } else {
                  $(h).parent().parent().after(j);
                  return
                }
              })
        }
      }
    }, 450)
  }
}
function showProductInfos(g, c) {
  var f = null;
  var e = null;
  var a = null;
  var d = null;
  $(g).hover(function () {
    f = new Date();
    b()
  }, function () {
    window.clearInterval(a)
  });
  function b() {
    a = window.setInterval(function () {
      e = new Date();
      d = e - f;
      if (d > 400) {
        if ($(g).parent().parent().next().attr("class") == "mesbook44") {
          if ($(g).parent().parent().next().is(":visible")) {
            return
          } else {
            $(g).parent().parent().next().show()
          }
        } else {
          $.post("/ajax.ashx?action=showProductInfos&t=" + Math.random(),
              {oid: c}, function (h) {
                if ($(g).parent().parent().next().attr("class")
                    == "mesbook44") {
                  return
                } else {
                  $(g).parent().parent().after(h);
                  return
                }
              })
        }
      }
    }, 450)
  }
}
function hideProductInfo(a) {
  if ($(a).parent().parent().next().attr("class") == "mesbook4" || $(
          a).parent().parent().next().attr("class") == "mesbook40" || $(
          a).parent().parent().next().attr("class") == "mesbook44") {
    $(a).parent().parent().next().mouseover(function () {
      $(a).parent().parent().next().show();
      return
    });
    $(a).parent().parent().next().mouseout(function () {
      $(a).parent().parent().next().hide();
      return
    });
    $(a).parent().parent().next().hide()
  }
}
function showProductTips(b) {
  var a = $j("div_nsw_tips");
  if (a.length == 0) {
    var c = "<div class='mesbook5' id='div_nsw_tips'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\"><img src='"
        + SKIN_PATH
        + "img/ico9_close.gif' /></a>产品预定</h1><h4>告诉我该产品的好消息</h4><div class='con'>您需要等待该产品的上架吗？一旦该产品的价格降价之后，我们会第一时间把该商品的价格清单发送到您的电子邮件。</div> <h5>如果打折则发送电子邮件给我</h5><div class='inp'><input id='rdoTip1' type='radio' name='rdoTips' value='0' checked='true' /><label for='rdoTip1'>仅仅当前该产品</label></div><div class='inp'><input id='rdoTip2' type='radio' name='rdoTips' value='1' /><label for='rdoTip2'>当前产品所属分类</label></div><div class='inp'><input  id='rdoTip3' type='radio' name='rdoTips' value='2' /><label for='rdoTip3'>所有打折清单</label></div><div class='inp'><span>Email:</span><input type='text' id='txtEmail' name='txtEmail'  class='text' /><input id='txtHide' name='txtHide' type='hidden' value='"
        + b
        + "' /></div><div class='inp'><span>简述:</span><textarea id='txtContent' name='txtContent'class='textarea'></textarea></div><div class='mes_btn'><input type='button' class='b61' value='提  交' onclick=\"submitProductTips('txtHide','txtEmail','txtContent','rdoTips')\" /><input type='button' class='b62' value='取  消' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\" /></div></div>";
    $(document.body).append(c)
  }
  setCM("div_nsw_tips");
  showFullBg("div_nsw_tips_bg");
  relocation("div_nsw_tips")
}
function submitProductTips(e, f, c, d) {
  var e = $j("txtHide").val();
  var f = $j("txtEmail").val();
  var c = $j("txtContent").val();
  var a = $("input[name=rdoTips]:checked").val();
  if (c.length > 500) {
    $a("简述太长，不能超过500个字节，请填写简短描述")
  }
  var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (f.length == 0) {
    $a("E-Mail 不可为空");
    return false
  }
  if (!b.test(f)) {
    $a("E-Mail 格式错误");
    return false
  }
  $.post("/ajax.ashx?action=postProductTips&t=" + Math.random(),
      {oid: e, email: f, content: c, state: a}, function (g) {
        if (gav(g, "state") == "1") {
          $a(gav(g, "msg"), 1)
        } else {
          $a(gav(g, "msg"))
        }
      });
  $j("div_nsw_tips").hide();
  hideFullBg("div_nsw_tips_bg")
}
function showMyWish(b) {
  var a = $j("div_nsw_wishs");
  if (a.length == 0) {
    var c = '<div class="mesbook6" id="div_nsw_wishs"></div>';
    $(document.body).append(c)
  }
  $.post("/ajax.ashx?action=showMyWish&t=" + Math.random(), {oid: b},
      function (d) {
        $j("div_nsw_wishs").html(d)
      });
  setCM("div_nsw_wishs");
  showFullBg("div_nsw_wishs_bg");
  relocation("div_nsw_wishs")
}
function submitProductWishs(b, c, a) {
  var b = $j("txtHide").val();
  var c = $j("txtAttr").html();
  var a = $j("txtNum").val();
  $.post("/ajax.ashx?action=postProductWishs&t=" + Math.random(),
      {oid: b, attr: c, num: a}, function (d) {
        if (gav(d, "state") == "1") {
          $a(gav(d, "msg"), 1)
        } else {
          $a(gav(d, "msg"))
        }
      });
  $j("div_nsw_wishs").hide();
  hideFullBg("div_nsw_wishs_bg")
}
function sendGetProductsNotify(c) {
  var b = $j("ddlProductsColumns").val();
  var a = $j("txtSearch").val();
  if (a == "关键词") {
    a = ""
  }
  $.post("/ajax.ashx?action=sendGetProductsByColumn&t=" + Math.random(),
      {columnID: b, searchText: a}, function (d) {
        InitDropdownlist(document.getElementById("PackageSelectList"),
            "请选择关联资讯", "0", d)
      })
}
function InitDropdownlist(e, d, c, f) {
  var a = e.options.length;
  for (i = 0; i < a; i++) {
    e.remove(0)
  }
  var b = f.split("||");
  a = b.length;
  if (a) {
    for (i = 0; i < a - 1; i++) {
      text_value = b[i].split("$$");
      text = text_value[1];
      value = text_value[0];
      e.add(new Option(text, value))
    }
  }
}
function userorder(a) {
  var b = $tv("txtname");
  var e = $tv("txttitle");
  var c = $tv("txtemail");
  var j = $tv("txttel");
  var f = $tv("txtcontent");
  var h = $tv("txtaddress");
  var k = $tv("txtenddate");
  var g = $("#PackagePickList").val();
  if (e == "") {
    $a("定单名称不能为空", "txttitle");
    return
  }
  if (b == "") {
    $a("下单人姓名不能为空", "txtname");
    return
  }
  if (j == "") {
    $a("联系电话不能为空", "txttel");
    return
  }
  if (h == "") {
    $a("联系地址不能为空", "txtaddress");
    return
  }
  if (k == "") {
    $a("到货时间不能为空", "txtenddate");
    return
  }
  if (f == "" || f.length > 1000) {
    $a("详细描述不能为空或者大于1000字", "txtcontent");
    return
  } else {
    var l = $.trim($(a).attr("value"));
    var d = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!d.test(c)) {
      $a("E-Mail错误");
      return false
    }
  }
  $.post("/ajax.ashx?action=agentorder&t=" + Math.random(), {
    s_name: b,
    s_title: e,
    s_email: c,
    s_tel: j,
    s_content: f,
    s_address: h,
    s_enddate: k,
    s_IDList: g
  }, function (o) {
    var n = gav(o, "state");
    var m = gav(o, "msg");
    if (n == "1") {
      showMsgPage("<li>定单提交成功，我们会尽快与您联系，谢谢！</li>", 1, "/User/UserOrder.aspx",
          "在线定单", "/User/UserOrder.aspx");
      return
    } else {
      if (m.length > 0) {
        $a(m)
      } else {
        $a(o)
      }
    }
  })
}
function delAgentOrder(c, a) {
  var b = getCheckedVal(a);
  if (b.length == 0) {
    $a("无选中项。");
    return
  }
  showBgProc();
  $.post("/ajax.ashx?action=delAgentOrder&t=" + Math.random(), {ids: b},
      function (e) {
        if (gav(e, "state") == "1") {
          var d = $j(a).find("input[name=item]:checked");
          d.each(function (f) {
            $(this).parent().parent().remove()
          });
          $a(gav(e, "msg"), 1)
        } else {
          $a(gav(e, "msg"))
        }
        showBgProc(false)
      })
}
function AddApply(a) {
  var b = document.getElementById("TxtType").selectedIndex;
  var c = $tv("TxtUrl");
  var e = $tv("TxtName");
  var d = $tv("TxtPhotoPath");
  var h = $tv("TxtMsg");
  var k = $tv("TxtUserName");
  var f = $tv("TxtTel");
  var g = $tv("TxtEmail");
  var j = $tv("TxtQQ");
  if (c == "" || c == "http://") {
    $a("请输入网址！", "TxtUrl");
    return
  }
  if (e == "") {
    $a("请输入网站名称！", "TxtName");
    return
  }
  if (h.length > 400) {
    $a("网站简况不能大于400字！", "txtUsername");
    return
  }
  $.post("/ajax.ashx?action=apply&t=" + Math.random(), {
    Type: b,
    Url: c,
    Name: e,
    PhotoPath: d,
    Content: h,
    UserName: k,
    Phone: f,
    Email: g,
    QQ: j
  }, function (l) {
    if (gav(l, "state") == "1") {
      $a(gav(l, "msg"))
    } else {
      $a(gav(l, "msg"))
    }
  })
}
function AddCompare(b) {
  var c = false;
  if (b.checked) {
    c = true;
    $(b).next().next().next().show()
  } else {
    c = false;
    $(b).next().next().next().hide()
  }
  var a = $(b).val();
  $.post("/ajax.ashx?action=addCompare&t=" + Math.random(), {ids: a, flag: c},
      function (g) {
        if (gav(g, "state") == "1") {
          var f = gav(g, "newcookie");
          var d = new Array();
          d = f.split(",");
          if (d.length > 0) {
            for (var e = 0; e < d.length; e++) {
              if (e == d.length - 1) {
                $(".pro_main").find("input[id=" + d[e] + "]").show()
              } else {
                $(".pro_main").find("input[id=" + d[e] + "]").hide()
              }
            }
          }
        }
      })
}
function DelOneCompare(b) {
  var a = $(b).attr("id");
  $.post("/ajax.ashx?action=delOneCompare&t=" + Math.random(), {ids: a},
      function (c) {
        if (gav(c, "state") == "1") {
          window.location = "/product/Compare.aspx"
        } else {
          showMsgPage("<li>产品对比车中不存在对比的产品记录，请选择需要对比的产品</li>", 0, "/", "首页", "/")
        }
      })
}
function DelAllCompare() {
  $.post("/ajax.ashx?action=delAllCompare&t=" + Math.random(), {},
      function (a) {
        showMsgPage("<li>产品对比车中所有产品已移除，您可以继续挑选产品进行比较</li>", 1, "/", "首页", "/")
      })
}
function addDownload(b, a) {
  $.post("/ajax.ashx?action=addDownload&t=" + Math.random(), {oid: b},
      function (c) {
        if (gav(c, "state") == "1") {
          window.location = a
        } else {
          $a(gav(c, "msg"))
        }
      })
}
function getNewProduct() {
  $.post("/ajax.ashx?action=getnewproduct&t=" + Math.random(), function (a) {
    $("#newpro").html(a);
    $("#newpro h5").mouseover(function () {
      $(this).addClass("cur").siblings("h5").removeClass("cur").end().next(
          "dl").show().siblings("dl").hide()
    }).eq(0).trigger("mouseover")
  })
}
function getSubSiteInfos() {
  $.post("/ajax.ashx?action=subsiteinfos&t=" + Math.random(),
      {domain: document.domain}, function (c) {
        var a = gav(c, "phone");
        var b = gav(c, "address");
        $("#phones").html(a)
      })
}
function getSubSiteInfo() {
  $.post("/ajax.ashx?action=subsiteinfo&t=" + Math.random(),
      {domain: document.domain}, function (a) {
        if (a) {
          $("#site ul").html(a)
        } else {
          $("#site").remove()
        }
      })
}
function IsURL(c) {
  var b = "^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  var a = new RegExp(b);
  if (a.test(c)) {
    return (true)
  } else {
    return (false)
  }
};

/*ScrollPicleft.js*/
var sina = {
  $: function (objName) {
    if (document.getElementById) {
      return eval('document.getElementById("' + objName + '")')
    } else {
      return eval("document.all." + objName)
    }
  },
  isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true : false,
  addEvent: function (a, c, b) {
    if (a.attachEvent) {
      a.attachEvent("on" + c, b)
    } else {
      a.addEventListener(c, b, false)
    }
  },
  delEvent: function (a, c, b) {
    if (a.detachEvent) {
      a.detachEvent("on" + c, b)
    } else {
      a.removeEventListener(c, b, false)
    }
  },
  readCookie: function (d) {
    var e = "", a = d + "=";
    if (document.cookie.length > 0) {
      var c = document.cookie.indexOf(a);
      if (c != -1) {
        c += a.length;
        var b = document.cookie.indexOf(";", c);
        if (b == -1) {
          b = document.cookie.length
        }
        e = unescape(document.cookie.substring(c, b))
      }
    }
    return e
  },
  writeCookie: function (d, a, f, g) {
    var e = "", b = "";
    if (f != null) {
      e = new Date((new Date).getTime() + f * 3600000);
      e = "; expires=" + e.toGMTString()
    }
    if (g != null) {
      b = ";domain=" + g
    }
    document.cookie = d + "=" + escape(a) + e + b
  },
  readStyle: function (b, a) {
    if (b.style[a]) {
      return b.style[a]
    } else {
      if (b.currentStyle) {
        return b.currentStyle[a]
      } else {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          var c = document.defaultView.getComputedStyle(b, null);
          return c.getPropertyValue(a)
        } else {
          return null
        }
      }
    }
  }
};
function ScrollPicleft(b, g, f, e) {
  this.scrollContId = b;
  this.arrLeftId = g;
  this.arrRightId = f;
  this.dotListId = e;
  this.dotClassName = "dotItem";
  this.dotOnClassName = "dotItemOn";
  this.dotObjArr = [];
  this.pageWidth = 0;
  this.frameWidth = 0;
  this.speed = 10;
  this.space = 10;
  this.pageIndex = 0;
  this.autoPlay = true;
  this.autoPlayTime = 5;
  var a, d, c = "ready";
  this.stripDiv = document.createElement("DIV");
  this.listDiv01 = document.createElement("DIV");
  this.listDiv02 = document.createElement("DIV");
  if (!ScrollPicleft.childs) {
    ScrollPicleft.childs = []
  }
  this.ID = ScrollPicleft.childs.length;
  ScrollPicleft.childs.push(this);
  this.initialize = function () {
    if (!this.scrollContId) {
      throw new Error("必须指定scrollContId.");
      return
    }
    this.scrollContDiv = sina.$(this.scrollContId);
    if (!this.scrollContDiv) {
      throw new Error('scrollContId不是正确的对象.(scrollContId = "'
          + this.scrollContId + '")');
      return
    }
    this.scrollContDiv.style.width = this.frameWidth + "px";
    this.scrollContDiv.style.overflow = "hidden";
    this.listDiv01.innerHTML = this.listDiv02.innerHTML = this.scrollContDiv.innerHTML;
    this.scrollContDiv.innerHTML = "";
    this.scrollContDiv.appendChild(this.stripDiv);
    this.stripDiv.appendChild(this.listDiv01);
    this.stripDiv.appendChild(this.listDiv02);
    this.stripDiv.style.overflow = "hidden";
    this.stripDiv.style.zoom = "1";
    this.stripDiv.style.width = "32766px";
    var l = navigator.userAgent.toUpperCase().indexOf("MSIE") == -1 ? false
        : true;
    if (l) {
      this.listDiv01.style.styleFloat = "left";
      this.listDiv02.style.styleFloat = "left"
    } else {
      this.listDiv01.style.cssFloat = "left";
      this.listDiv02.style.cssFloat = "left"
    }
    sina.addEvent(this.scrollContDiv, "mouseover",
        Function("ScrollPicleft.childs[" + this.ID + "].stop()"));
    sina.addEvent(this.scrollContDiv, "mouseout",
        Function("ScrollPicleft.childs[" + this.ID + "].play()"));
    if (this.arrLeftId) {
      this.arrLeftObj = sina.$(this.arrLeftId);
      if (this.arrLeftObj) {
        sina.addEvent(this.arrLeftObj, "mousedown",
            Function("ScrollPicleft.childs[" + this.ID + "].rightMouseDown()"));
        sina.addEvent(this.arrLeftObj, "mouseup",
            Function("ScrollPicleft.childs[" + this.ID + "].rightEnd()"));
        sina.addEvent(this.arrLeftObj, "mouseout",
            Function("ScrollPicleft.childs[" + this.ID + "].rightEnd()"))
      }
    }
    if (this.arrRightId) {
      this.arrRightObj = sina.$(this.arrRightId);
      if (this.arrRightObj) {
        sina.addEvent(this.arrRightObj, "mousedown",
            Function("ScrollPicleft.childs[" + this.ID + "].leftMouseDown()"));
        sina.addEvent(this.arrRightObj, "mouseup",
            Function("ScrollPicleft.childs[" + this.ID + "].leftEnd()"));
        sina.addEvent(this.arrRightObj, "mouseout",
            Function("ScrollPicleft.childs[" + this.ID + "].leftEnd()"))
      }
    }
    if (this.dotListId) {
      this.dotListObj = sina.$(this.dotListId);
      if (this.dotListObj) {
        var h = Math.round(
            this.listDiv01.offsetWidth / this.frameWidth + 0.4), k, j;
        for (k = 0; k < h; k++) {
          j = document.createElement("span");
          this.dotListObj.appendChild(j);
          this.dotObjArr.push(j);
          if (k == this.pageIndex) {
            j.className = this.dotClassName
          } else {
            j.className = this.dotOnClassName
          }
          j.title = "第" + (k + 1) + "页";
          sina.addEvent(j, "click", Function(
              "ScrollPicleft.childs[" + this.ID + "].pageTo(" + k + ")"))
        }
      }
    }
    if (this.autoPlay) {
      this.play()
    }
  };
  this.leftMouseDown = function () {
    if (c != "ready") {
      return
    }
    c = "floating";
    d = setInterval("ScrollPicleft.childs[" + this.ID + "].moveLeft()",
        this.speed)
  };
  this.rightMouseDown = function () {
    if (c != "ready") {
      return
    }
    c = "floating";
    d = setInterval("ScrollPicleft.childs[" + this.ID + "].moveRight()",
        this.speed)
  };
  this.moveLeft = function () {
    if (this.scrollContDiv.scrollLeft + this.space
        >= this.listDiv01.scrollWidth) {
      this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + this.space
          - this.listDiv01.scrollWidth
    } else {
      this.scrollContDiv.scrollLeft += this.space
    }
    this.accountPageIndex()
  };
  this.moveRight = function () {
    if (this.scrollContDiv.scrollLeft - this.space <= 0) {
      this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth
          + this.scrollContDiv.scrollLeft - this.space
    } else {
      this.scrollContDiv.scrollLeft -= this.space
    }
    this.accountPageIndex()
  };
  this.leftEnd = function () {
    if (c != "floating") {
      return
    }
    c = "stoping";
    clearInterval(d);
    var h = this.pageWidth - this.scrollContDiv.scrollLeft % this.pageWidth;
    this.move(h)
  };
  this.rightEnd = function () {
    if (c != "floating") {
      return
    }
    c = "stoping";
    clearInterval(d);
    var h = -this.scrollContDiv.scrollLeft % this.pageWidth;
    this.move(h)
  };
  this.move = function (i, j) {
    var k = i / 5;
    if (!j) {
      if (k > this.space) {
        k = this.space
      }
      if (k < -this.space) {
        k = -this.space
      }
    }
    if (Math.abs(k) < 1 && k != 0) {
      k = k >= 0 ? 1 : -1
    } else {
      k = Math.round(k)
    }
    var h = this.scrollContDiv.scrollLeft + k;
    if (k > 0) {
      if (this.scrollContDiv.scrollLeft + k >= this.listDiv01.scrollWidth) {
        this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + k
            - this.listDiv01.scrollWidth
      } else {
        this.scrollContDiv.scrollLeft += k
      }
    } else {
      if (this.scrollContDiv.scrollLeft - k <= 0) {
        this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth
            + this.scrollContDiv.scrollLeft - k
      } else {
        this.scrollContDiv.scrollLeft += k
      }
    }
    i -= k;
    if (Math.abs(i) == 0) {
      c = "ready";
      if (this.autoPlay) {
        this.play()
      }
      this.accountPageIndex();
      return
    } else {
      this.accountPageIndex();
      setTimeout(
          "ScrollPicleft.childs[" + this.ID + "].move(" + i + "," + j + ")",
          this.speed)
    }
  };
  this.next = function () {
    if (c != "ready") {
      return
    }
    c = "stoping";
    this.move(this.pageWidth, true)
  };
  this.play = function () {
    if (!this.autoPlay) {
      return
    }
    clearInterval(a);
    a = setInterval("ScrollPicleft.childs[" + this.ID + "].next()",
        this.autoPlayTime * 1000)
  };
  this.stop = function () {
    clearInterval(a)
  };
  this.pageTo = function (h) {
    if (c != "ready") {
      return
    }
    c = "stoping";
    var i = h * this.frameWidth - this.scrollContDiv.scrollLeft;
    this.move(i, true)
  };
  this.accountPageIndex = function () {
    this.pageIndex = Math.round(
        this.scrollContDiv.scrollLeft / this.frameWidth);
    if (this.pageIndex > Math.round(
            this.listDiv01.offsetWidth / this.frameWidth + 0.4) - 1) {
      this.pageIndex = 0
    }
    var h;
    for (h = 0; h < this.dotObjArr.length; h++) {
      if (h == this.pageIndex) {
        this.dotObjArr[h].className = this.dotClassName
      } else {
        this.dotObjArr[h].className = this.dotOnClassName
      }
    }
  }
};

/*MSCLASS.js*/
function Marquee() {
  this.ID = document.getElementById(arguments[0]);
  if (!this.ID) {
    alert('您要设置的"' + arguments[0] + '"初始化错误\r\n请检查标签ID设置是否正确!');
    this.ID = -1;
    return
  }
  this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
  this.Step = 1;
  this.Timer = 30;
  this.DirectionArray = {top: 0, up: 0, bottom: 1, down: 1, left: 2, right: 3};
  if (typeof arguments[1] == "number" || typeof arguments[1] == "string") {
    this.Direction = arguments[1]
  }
  if (typeof arguments[2] == "number") {
    this.Step = arguments[2]
  }
  if (typeof arguments[3] == "number") {
    this.Width = arguments[3]
  }
  if (typeof arguments[4] == "number") {
    this.Height = arguments[4]
  }
  if (typeof arguments[5] == "number") {
    this.Timer = arguments[5]
  }
  if (typeof arguments[6] == "number") {
    this.DelayTime = arguments[6]
  }
  if (typeof arguments[7] == "number") {
    this.WaitTime = arguments[7]
  }
  if (typeof arguments[8] == "number") {
    this.ScrollStep = arguments[8]
  }
  this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
  this.ID.noWrap = true;
  this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
  if (arguments.length >= 7) {
    this.Start()
  }
}
Marquee.prototype.Start = function () {
  if (this.ID == -1) {
    return
  }
  if (this.WaitTime < 800) {
    this.WaitTime = 800
  }
  if (this.Timer < 20) {
    this.Timer = 20
  }
  if (this.Width == 0) {
    this.Width = parseInt(this.ID.style.width)
  }
  if (this.Height == 0) {
    this.Height = parseInt(this.ID.style.height)
  }
  if (typeof this.Direction == "string") {
    this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()]
  }
  this.HalfWidth = Math.round(this.Width / 2);
  this.HalfHeight = Math.round(this.Height / 2);
  this.BakStep = this.Step;
  this.ID.style.width = this.Width + "px";
  this.ID.style.height = this.Height + "px";
  if (typeof this.ScrollStep != "number") {
    this.ScrollStep = this.Direction > 1 ? this.Width : this.Height
  }
  var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
  var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
  var e = this;
  e.tempHTML = e.ID.innerHTML;
  if (e.Direction <= 1) {
    e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
  } else {
    if (e.ScrollStep == 0 && e.DelayTime == 0) {
      e.ID.innerHTML += e.ID.innerHTML
    } else {
      e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
    }
  }
  var f = this.Timer;
  var a = this.DelayTime;
  var c = this.WaitTime;
  e.StartID = function () {
    e.Scroll()
  };
  e.Continue = function () {
    if (e.MouseOver == 1) {
      setTimeout(e.Continue, a)
    } else {
      clearInterval(e.TimerID);
      e.CTL = e.Stop = 0;
      e.TimerID = setInterval(e.StartID, f)
    }
  };
  e.Pause = function () {
    e.Stop = 1;
    clearInterval(e.TimerID);
    setTimeout(e.Continue, a)
  };
  e.Begin = function () {
    e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2 : e.ID.scrollHeight
    / 2;
    if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step)
        || (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
      e.ID.innerHTML = e.tempHTML;
      delete (e.tempHTML);
      return
    }
    delete (e.tempHTML);
    e.TimerID = setInterval(e.StartID, f);
    if (e.ScrollStep < 0) {
      return
    }
    e.ID.onmousemove = function (g) {
      if (e.ScrollStep == 0 && e.Direction > 1) {
        var g = g || window.event;
        if (window.event) {
          if (e.IsNotOpera) {
            e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX
            - e.ID.scrollLeft : g.srcElement.offsetLeft - e.ID.scrollLeft
            + g.offsetX
          } else {
            e.ScrollStep = null;
            return
          }
        } else {
          e.EventLeft = g.layerX - e.ID.scrollLeft
        }
        e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
        e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
        e.Step = Math.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
      }
    };
    e.ID.onmouseover = function () {
      if (e.ScrollStep == 0) {
        return
      }
      e.MouseOver = 1;
      clearInterval(e.TimerID)
    };
    e.ID.onmouseout = function () {
      if (e.ScrollStep == 0) {
        if (e.Step == 0) {
          e.Step = 1
        }
        return
      }
      e.MouseOver = 0;
      if (e.Stop == 0) {
        clearInterval(e.TimerID);
        e.TimerID = setInterval(e.StartID, f)
      }
    }
  };
  setTimeout(e.Begin, c)
};
Marquee.prototype.Scroll = function () {
  switch (this.Direction) {
    case 0:
      this.CTL += this.Step;
      if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
        this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
        this.Pause();
        return
      } else {
        if (this.ID.scrollTop >= this.ClientScroll) {
          this.ID.scrollTop -= this.ClientScroll
        }
        this.ID.scrollTop += this.Step
      }
      break;
    case 1:
      this.CTL += this.Step;
      if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
        this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
        this.Pause();
        return
      } else {
        if (this.ID.scrollTop <= 0) {
          this.ID.scrollTop += this.ClientScroll
        }
        this.ID.scrollTop -= this.Step
      }
      break;
    case 2:
      this.CTL += this.Step;
      if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
        this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
        this.Pause();
        return
      } else {
        if (this.ID.scrollLeft >= this.ClientScroll) {
          this.ID.scrollLeft -= this.ClientScroll
        }
        this.ID.scrollLeft += this.Step
      }
      break;
    case 3:
      this.CTL += this.Step;
      if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
        this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
        this.Pause();
        return
      } else {
        if (this.ID.scrollLeft <= 0) {
          this.ID.scrollLeft += this.ClientScroll
        }
        this.ID.scrollLeft -= this.Step
      }
      break
  }
};
