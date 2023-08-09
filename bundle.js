(() => {
  var t = document.querySelector(".container"),
    e = document.querySelectorAll(".menu");
  document.body.addEventListener("click", () => {
    e.forEach((e) => {
      e.classList.contains("open") && e.classList.remove("open");
    });
  }),
    window.addEventListener("resize", () => {
      e.forEach((e) => {
        e.classList.remove("open");
      });
    }),
    e.forEach((n) => {
      const o = n.querySelector(".menu__trigger"),
        s = n.querySelector(".menu__dropdown");
      o.addEventListener("click", (o) => {
        o.stopPropagation(),
          n.classList.contains("open")
            ? n.classList.remove("open")
            : (e.forEach((e) => e.classList.remove("open")),
              n.classList.add("open")),
          s.getBoundingClientRect().right > t.getBoundingClientRect().right &&
            ((s.style.left = "auto"), (s.style.right = 0));
      }),
        s.addEventListener("click", (e) => e.stopPropagation());
    });
})(),
  (() => {
    var e = Object.getOwnPropertyNames,
      t = (t, n) =>
        function () {
          return (
            n || (0, t[e(t)[0]])((n = { exports: {} }).exports, n), n.exports
          );
        },
      n = t({
        "<stdin>"(e, t) {
          var s =
              "undefined" != typeof window
                ? window
                : "undefined" != typeof WorkerGlobalScope &&
                  self instanceof WorkerGlobalScope
                ? self
                : {},
            n = (function (e) {
              var s,
                c,
                o = /\blang(?:uage)?-([\w-]+)\b/i,
                d = 0,
                i = {},
                t = {
                  manual: e.Prism && e.Prism.manual,
                  disableWorkerMessageHandler:
                    e.Prism && e.Prism.disableWorkerMessageHandler,
                  util: {
                    encode: function e(t) {
                      return t instanceof n
                        ? new n(t.type, e(t.content), t.alias)
                        : Array.isArray(t)
                        ? t.map(e)
                        : t
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                      return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                      return (
                        e.__id ||
                          Object.defineProperty(e, "__id", { value: ++d }),
                        e.__id
                      );
                    },
                    clone: function e(n, s) {
                      var o, i, a;
                      switch (((s = s || {}), t.util.type(n))) {
                        case "Object":
                          if (((i = t.util.objId(n)), s[i])) return s[i];
                          for (a in ((o = {}), (s[i] = o), n))
                            n.hasOwnProperty(a) && (o[a] = e(n[a], s));
                          return o;
                        case "Array":
                          return (
                            (i = t.util.objId(n)),
                            s[i]
                              ? s[i]
                              : ((o = []),
                                (s[i] = o),
                                n.forEach(function (t, n) {
                                  o[n] = e(t, s);
                                }),
                                o)
                          );
                        default:
                          return n;
                      }
                    },
                    getLanguage: function (e) {
                      for (; e && !o.test(e.className); ) e = e.parentElement;
                      return e
                        ? (e.className.match(o) || [, "none"])[1].toLowerCase()
                        : "none";
                    },
                    currentScript: function () {
                      if ("undefined" == typeof document) return null;
                      if ("currentScript" in document)
                        return document.currentScript;
                      try {
                        throw new Error();
                      } catch (s) {
                        var e,
                          n,
                          t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                            s.stack
                          ) || [])[1];
                        if (t) {
                          e = document.getElementsByTagName("script");
                          for (n in e) if (e[n].src == t) return e[n];
                        }
                        return null;
                      }
                    },
                    isActive: function (e, t, n) {
                      for (var s, o = "no-" + t; e; ) {
                        if (((s = e.classList), s.contains(t))) return !0;
                        if (s.contains(o)) return !1;
                        e = e.parentElement;
                      }
                      return !!n;
                    },
                  },
                  languages: {
                    plain: i,
                    plaintext: i,
                    text: i,
                    txt: i,
                    extend: function (e, n) {
                      var o,
                        s = t.util.clone(t.languages[e]);
                      for (o in n) s[o] = n[o];
                      return s;
                    },
                    insertBefore: function (e, n, s, o) {
                      var a,
                        c,
                        l,
                        r = (o = o || t.languages)[e],
                        i = {};
                      for (a in r)
                        if (r.hasOwnProperty(a)) {
                          if (a == n)
                            for (c in s) s.hasOwnProperty(c) && (i[c] = s[c]);
                          s.hasOwnProperty(a) || (i[a] = r[a]);
                        }
                      return (
                        (l = o[e]),
                        (o[e] = i),
                        t.languages.DFS(t.languages, function (t, n) {
                          n === l && t != e && (this[t] = i);
                        }),
                        i
                      );
                    },
                    DFS: function e(n, s, o, i) {
                      (i = i || {}), (c = t.util.objId);
                      for (r in n)
                        if (n.hasOwnProperty(r)) {
                          s.call(n, r, n[r], o || r);
                          var r,
                            c,
                            a = n[r],
                            l = t.util.type(a);
                          "Object" !== l || i[c(a)]
                            ? "Array" !== l ||
                              i[c(a)] ||
                              ((i[c(a)] = !0), e(a, s, r, i))
                            : ((i[c(a)] = !0), e(a, s, null, i));
                        }
                    },
                  },
                  plugins: {},
                  highlightAll: function (e, n) {
                    t.highlightAllUnder(document, e, n);
                  },
                  highlightAllUnder: function (e, n, s) {
                    var i,
                      a,
                      o = {
                        callback: s,
                        container: e,
                        selector:
                          'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                      };
                    t.hooks.run("before-highlightall", o),
                      (o.elements = Array.prototype.slice.apply(
                        o.container.querySelectorAll(o.selector)
                      )),
                      t.hooks.run("before-all-elements-highlight", o);
                    for (a = 0; (i = o.elements[a++]); )
                      t.highlightElement(i, !0 === n, o.callback);
                  },
                  highlightElement: function (n, s, i) {
                    var a,
                      r,
                      d,
                      c = t.util.getLanguage(n),
                      u = t.languages[c];
                    (n.className =
                      n.className.replace(o, "").replace(/\s+/g, " ") +
                      " language-" +
                      c),
                      (r = n.parentElement),
                      r &&
                        "pre" === r.nodeName.toLowerCase() &&
                        (r.className =
                          r.className.replace(o, "").replace(/\s+/g, " ") +
                          " language-" +
                          c),
                      (a = {
                        element: n,
                        language: c,
                        grammar: u,
                        code: n.textContent,
                      });
                    function l(e) {
                      (a.highlightedCode = e),
                        t.hooks.run("before-insert", a),
                        (a.element.innerHTML = a.highlightedCode),
                        t.hooks.run("after-highlight", a),
                        t.hooks.run("complete", a),
                        i && i.call(a.element);
                    }
                    if (
                      (t.hooks.run("before-sanity-check", a),
                      (r = a.element.parentElement) &&
                        "pre" === r.nodeName.toLowerCase() &&
                        !r.hasAttribute("tabindex") &&
                        r.setAttribute("tabindex", "0"),
                      !a.code)
                    )
                      return (
                        t.hooks.run("complete", a),
                        void (i && i.call(a.element))
                      );
                    t.hooks.run("before-highlight", a),
                      a.grammar
                        ? s && e.Worker
                          ? ((d = new Worker(t.filename)),
                            (d.onmessage = function (e) {
                              l(e.data);
                            }),
                            d.postMessage(
                              JSON.stringify({
                                language: a.language,
                                code: a.code,
                                immediateClose: !0,
                              })
                            ))
                          : l(t.highlight(a.code, a.grammar, a.language))
                        : l(t.util.encode(a.code));
                  },
                  highlight: function (e, s, o) {
                    var i = { code: e, grammar: s, language: o };
                    return (
                      t.hooks.run("before-tokenize", i),
                      (i.tokens = t.tokenize(i.code, i.grammar)),
                      t.hooks.run("after-tokenize", i),
                      n.stringify(t.util.encode(i.tokens), i.language)
                    );
                  },
                  tokenize: function (e, s) {
                    var o,
                      r,
                      i = s.rest;
                    if (i) {
                      for (r in i) s[r] = i[r];
                      delete s.rest;
                    }
                    return (
                      (o = new u()),
                      a(o, o.head, e),
                      (function e(s, o, i, r, c, d) {
                        for (_ in i)
                          if (i.hasOwnProperty(_) && i[_]) {
                            (v = i[_]), (v = Array.isArray(v) ? v : [v]);
                            for (y = 0; y < v.length; ++y) {
                              if (d && d.cause == _ + "," + y) return;
                              var g,
                                v,
                                b,
                                j,
                                y,
                                _,
                                w,
                                O,
                                x,
                                F,
                                D,
                                m = v[y],
                                M = m.inside,
                                S = !!m.lookbehind,
                                z = !!m.greedy,
                                R = m.alias;
                              z &&
                                !m.pattern.global &&
                                ((F = m.pattern
                                  .toString()
                                  .match(/[imsuy]*$/)[0]),
                                (m.pattern = RegExp(
                                  m.pattern.source,
                                  F + "g"
                                )));
                              for (
                                var N = m.pattern || m, u = r.next, f = c;
                                u !== o.tail && !(d && f >= d.reach);
                                f += u.value.length, u = u.next
                              ) {
                                if (((b = u.value), o.length > s.length))
                                  return;
                                if (!(b instanceof n)) {
                                  if (((O = 1), z)) {
                                    if (!(g = l(N, f, s, S))) break;
                                    var E = g.index,
                                      L = g.index + g[0].length,
                                      p = f;
                                    for (p += u.value.length; p <= E; )
                                      (u = u.next), (p += u.value.length);
                                    if (
                                      ((p -= u.value.length),
                                      (f = p),
                                      u.value instanceof n)
                                    )
                                      continue;
                                    for (
                                      j = u;
                                      j !== o.tail &&
                                      (p < L || "string" == typeof j.value);
                                      j = j.next
                                    )
                                      O++, (p += j.value.length);
                                    O--, (b = s.slice(f, p)), (g.index -= f);
                                  } else if (!(g = l(N, 0, b, S))) continue;
                                  var E = g.index,
                                    C = g[0],
                                    A = b.slice(0, E),
                                    T = b.slice(E + C.length),
                                    k = f + b.length;
                                  d && k > d.reach && (d.reach = k),
                                    (w = u.prev),
                                    A && ((w = a(o, w, A)), (f += A.length)),
                                    h(o, w, O),
                                    (D = new n(
                                      _,
                                      M ? t.tokenize(C, M) : C,
                                      R,
                                      C
                                    )),
                                    ((u = a(o, w, D)),
                                    T && a(o, u, T),
                                    1 < O) &&
                                      ((x = { cause: _ + "," + y, reach: k }),
                                      e(s, o, i, u.prev, f, x),
                                      d &&
                                        x.reach > d.reach &&
                                        (d.reach = x.reach));
                                }
                              }
                            }
                          }
                      })(e, o, s, o.head, 0),
                      (function (e) {
                        for (var n = [], t = e.head.next; t !== e.tail; )
                          n.push(t.value), (t = t.next);
                        return n;
                      })(o)
                    );
                  },
                  hooks: {
                    all: {},
                    add: function (e, n) {
                      var s = t.hooks.all;
                      (s[e] = s[e] || []), s[e].push(n);
                    },
                    run: function (e, n) {
                      var o,
                        i,
                        s = t.hooks.all[e];
                      if (s && s.length) for (i = 0; (o = s[i++]); ) o(n);
                    },
                  },
                  Token: n,
                };
              function n(e, t, n, s) {
                (this.type = e),
                  (this.content = t),
                  (this.alias = n),
                  (this.length = 0 | (s || "").length);
              }
              function l(e, t, n, s) {
                e.lastIndex = t;
                var i,
                  o = e.exec(n);
                return (
                  o &&
                    s &&
                    o[1] &&
                    ((i = o[1].length), (o.index += i), (o[0] = o[0].slice(i))),
                  o
                );
              }
              function u() {
                var e = { value: null, prev: null, next: null },
                  t = { value: null, prev: e, next: null };
                (e.next = t),
                  (this.head = e),
                  (this.tail = t),
                  (this.length = 0);
              }
              function a(e, t, n) {
                var o = t.next,
                  s = { value: n, prev: t, next: o };
                return (t.next = s), (o.prev = s), e.length++, s;
              }
              function h(e, t, n) {
                for (var s = t.next, o = 0; o < n && s !== e.tail; o++)
                  s = s.next;
                ((t.next = s).prev = t), (e.length -= o);
              }
              if (
                ((e.Prism = t),
                (n.stringify = function e(n, s) {
                  if ("string" == typeof n) return n;
                  if (Array.isArray(n))
                    return (
                      (a = ""),
                      n.forEach(function (t) {
                        a += e(t, s);
                      }),
                      a
                    );
                  var a,
                    r,
                    c,
                    o = {
                      type: n.type,
                      content: e(n.content, s),
                      tag: "span",
                      classes: ["token", n.type],
                      attributes: {},
                      language: s,
                    },
                    i = n.alias;
                  i &&
                    (Array.isArray(i)
                      ? Array.prototype.push.apply(o.classes, i)
                      : o.classes.push(i)),
                    t.hooks.run("wrap", o),
                    (r = "");
                  for (c in o.attributes)
                    r +=
                      " " +
                      c +
                      '="' +
                      (o.attributes[c] || "").replace(/"/g, "&quot;") +
                      '"';
                  return (
                    "<" +
                    o.tag +
                    ' class="' +
                    o.classes.join(" ") +
                    '"' +
                    r +
                    ">" +
                    o.content +
                    "</" +
                    o.tag +
                    ">"
                  );
                }),
                !e.document)
              )
                return (
                  e.addEventListener &&
                    (t.disableWorkerMessageHandler ||
                      e.addEventListener(
                        "message",
                        function (n) {
                          var s = JSON.parse(n.data),
                            o = s.language,
                            i = s.code,
                            a = s.immediateClose;
                          e.postMessage(t.highlight(i, t.languages[o], o)),
                            a && e.close();
                        },
                        !1
                      )),
                  t
                );
              s = t.util.currentScript();
              function r() {
                t.manual || t.highlightAll();
              }
              return (
                (s &&
                  ((t.filename = s.src),
                  s.hasAttribute("data-manual") && (t.manual = !0)),
                !t.manual) &&
                  ((c = document.readyState),
                  "loading" === c || ("interactive" === c && s && s.defer)
                    ? document.addEventListener("DOMContentLoaded", r)
                    : window.requestAnimationFrame
                    ? window.requestAnimationFrame(r)
                    : window.setTimeout(r, 16)),
                t
              );
            })(s);
          "undefined" != typeof t && t.exports && (t.exports = n),
            "undefined" != typeof global && (global.Prism = n),
            (n.languages.markup = {
              comment: /<!--[\s\S]*?-->/,
              prolog: /<\?[\s\S]+?\?>/,
              doctype: {
                pattern:
                  /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                greedy: !0,
                inside: {
                  "internal-subset": {
                    pattern: /(^[^[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null,
                  },
                  string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                  punctuation: /^<!|>$|[[\]]/,
                  "doctype-tag": /^DOCTYPE/,
                  name: /[^\s<>'"]+/,
                },
              },
              cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              tag: {
                pattern:
                  /<\/?(?!\d)[^\s>/=$<%]+(?:\s(?:\s*[^\s>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                greedy: !0,
                inside: {
                  tag: {
                    pattern: /^<\/?[^\s>/]+/,
                    inside: { punctuation: /^<\/?/, namespace: /^[^\s>/:]+:/ },
                  },
                  "special-attr": [],
                  "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                  punctuation: /\/?>/,
                  "attr-name": {
                    pattern: /[^\s>/]+/,
                    inside: { namespace: /^[^\s>/:]+:/ },
                  },
                },
              },
              entity: [
                { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
                /&#x?[\da-f]{1,8};/i,
              ],
            }),
            (n.languages.markup.tag.inside["attr-value"].inside.entity =
              n.languages.markup.entity),
            (n.languages.markup.doctype.inside["internal-subset"].inside =
              n.languages.markup),
            n.hooks.add("wrap", function (e) {
              "entity" === e.type &&
                (e.attributes.title = e.content.replace(/&amp;/, "&"));
            }),
            Object.defineProperty(n.languages.markup.tag, "addInlined", {
              value: function (e, t) {
                var o,
                  i,
                  s = {};
                (s["language-" + t] = {
                  pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                  lookbehind: !0,
                  inside: n.languages[t],
                }),
                  (s.cdata = /^<!\[CDATA\[|\]\]>$/i),
                  (o = {
                    "included-cdata": {
                      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                      inside: s,
                    },
                  }),
                  (o["language-" + t] = {
                    pattern: /[\s\S]+/,
                    inside: n.languages[t],
                  }),
                  (i = {}),
                  (i[e] = {
                    pattern: RegExp(
                      "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
                        /__/g,
                        function () {
                          return e;
                        }
                      ),
                      "i"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: o,
                  }),
                  n.languages.insertBefore("markup", "cdata", i);
              },
            }),
            Object.defineProperty(n.languages.markup.tag, "addAttribute", {
              value: function (e, t) {
                n.languages.markup.tag.inside["special-attr"].push({
                  pattern: RegExp(
                    `(^|["'\\s])(?:` +
                      e +
                      `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,
                    "i"
                  ),
                  lookbehind: !0,
                  inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                      pattern: /=[\s\S]+/,
                      inside: {
                        value: {
                          pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                          lookbehind: !0,
                          alias: [t, "language-" + t],
                          inside: n.languages[t],
                        },
                        punctuation: [
                          { pattern: /^=/, alias: "attr-equals" },
                          /"|'/,
                        ],
                      },
                    },
                  },
                });
              },
            }),
            (n.languages.html = n.languages.markup),
            (n.languages.mathml = n.languages.markup),
            (n.languages.svg = n.languages.markup),
            (n.languages.xml = n.languages.extend("markup", {})),
            (n.languages.ssml = n.languages.xml),
            (n.languages.atom = n.languages.xml),
            (n.languages.rss = n.languages.xml),
            !(function (e) {
              var n,
                t =
                  /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
              (e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                  pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                  inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                      pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                      lookbehind: !0,
                      alias: "selector",
                    },
                    keyword: {
                      pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                      lookbehind: !0,
                    },
                  },
                },
                url: {
                  pattern: RegExp(
                    "\\burl\\((?:" +
                      t.source +
                      `|(?:[^\\\\
()"']|\\\\[^])*)\\)`,
                    "i"
                  ),
                  greedy: !0,
                  inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                      pattern: RegExp("^" + t.source + "$"),
                      alias: "url",
                    },
                  },
                },
                selector: {
                  pattern: RegExp(
                    `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                      t.source +
                      ")*(?=\\s*\\{)"
                  ),
                  lookbehind: !0,
                },
                string: { pattern: t, greedy: !0 },
                property: {
                  pattern:
                    /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                  lookbehind: !0,
                },
                important: /!important\b/i,
                function: {
                  pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                  lookbehind: !0,
                },
                punctuation: /[(){};:,]/,
              }),
                (e.languages.css.atrule.inside.rest = e.languages.css),
                (n = e.languages.markup),
                n &&
                  (n.tag.addInlined("style", "css"),
                  n.tag.addAttribute("style", "css"));
            })(n),
            (n.languages.clike = {
              comment: [
                {
                  pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                  lookbehind: !0,
                  greedy: !0,
                },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
              ],
              string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              "class-name": {
                pattern:
                  /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                lookbehind: !0,
                inside: { punctuation: /[.\\]/ },
              },
              keyword:
                /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
              boolean: /\b(?:true|false)\b/,
              function: /\b\w+(?=\()/,
              number:
                /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
              operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
              punctuation: /[{}[\];(),.:]/,
            }),
            (n.languages.javascript = n.languages.extend("clike", {
              "class-name": [
                n.languages.clike["class-name"],
                {
                  pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                  lookbehind: !0,
                },
              ],
              keyword: [
                { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
                {
                  pattern:
                    /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                  lookbehind: !0,
                },
              ],
              function:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
              number:
                /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
              operator:
                /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
            })),
            (n.languages.javascript["class-name"][0].pattern =
              /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
            n.languages.insertBefore("javascript", "keyword", {
              regex: {
                pattern:
                  /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: n.languages.regex,
                  },
                  "regex-delimiter": /^\/|\/$/,
                  "regex-flags": /^[a-z]+$/,
                },
              },
              "function-variable": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                alias: "function",
              },
              parameter: [
                {
                  pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                  lookbehind: !0,
                  inside: n.languages.javascript,
                },
                {
                  pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                  lookbehind: !0,
                  inside: n.languages.javascript,
                },
                {
                  pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                  lookbehind: !0,
                  inside: n.languages.javascript,
                },
                {
                  pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                  lookbehind: !0,
                  inside: n.languages.javascript,
                },
              ],
              constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
            }),
            n.languages.insertBefore("javascript", "string", {
              hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
              "template-string": {
                pattern:
                  /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  interpolation: {
                    pattern:
                      /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                      "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation",
                      },
                      rest: n.languages.javascript,
                    },
                  },
                  string: /[\s\S]+/,
                },
              },
            }),
            n.languages.markup &&
              (n.languages.markup.tag.addInlined("script", "javascript"),
              n.languages.markup.tag.addAttribute(
                "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
                "javascript"
              )),
            (n.languages.js = n.languages.javascript),
            (n.languages.actionscript = n.languages.extend("javascript", {
              keyword:
                /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|override|set|static)\b/,
              operator:
                /\+\+|--|(?:[+\-*/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
            })),
            (n.languages.actionscript["class-name"].alias = "function"),
            n.languages.markup &&
              n.languages.insertBefore("actionscript", "string", {
                xml: {
                  pattern:
                    /(^|[^.])<\/?\w+(?:\s+[^\s>/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                  lookbehind: !0,
                  inside: n.languages.markup,
                },
              }),
            (n.languages.apacheconf = {
              comment: /#.*/,
              "directive-inline": {
                pattern:
                  /(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
                lookbehind: !0,
                alias: "property",
              },
              "directive-block": {
                pattern:
                  /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,
                inside: {
                  "directive-block": {
                    pattern: /^<\/?\w+/,
                    inside: { punctuation: /^<\/?/ },
                    alias: "tag",
                  },
                  "directive-block-parameter": {
                    pattern: /.*[^>]/,
                    inside: {
                      punctuation: /:/,
                      string: {
                        pattern: /("|').*\1/,
                        inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
                      },
                    },
                    alias: "attr-value",
                  },
                  punctuation: />/,
                },
                alias: "tag",
              },
              "directive-flags": {
                pattern: /\[(?:[\w=],?)+\]/,
                alias: "keyword",
              },
              string: {
                pattern: /("|').*\1/,
                inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
              },
              variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
              regex: /\^?.*\$|\^.*\$?/,
            }),
            (n.languages.applescript = {
              comment: [
                /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
                /--.+/,
                /#.+/,
              ],
              string: /"(?:\\.|[^"\\\r\n])*"/,
              number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,
              operator: [
                /[&=≠≤≥*+\-/÷^]|[<>]=?/,
                /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/,
              ],
              keyword:
                /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
              class: {
                pattern:
                  /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
                alias: "builtin",
              },
              punctuation: /[{}():,¬«»《》]/,
            }),
            !(function (e) {
              var n =
                  "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
                o = {
                  pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
                  lookbehind: !0,
                  alias: "punctuation",
                  inside: null,
                },
                t = {
                  bash: o,
                  environment: {
                    pattern: RegExp("\\$" + n),
                    alias: "constant",
                  },
                  variable: [
                    {
                      pattern: /\$?\(\([\s\S]+?\)\)/,
                      greedy: !0,
                      inside: {
                        variable: [
                          { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                          /^\$\(\(/,
                        ],
                        number:
                          /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator:
                          /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                        punctuation: /\(\(?|\)\)?|,|;/,
                      },
                    },
                    {
                      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                      greedy: !0,
                      inside: { variable: /^\$\(|^`|\)$|`$/ },
                    },
                    {
                      pattern: /\$\{[^}]+\}/,
                      greedy: !0,
                      inside: {
                        operator: /:[-=?+]?|[!/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[[\]]/,
                        environment: {
                          pattern: RegExp("(\\{)" + n),
                          lookbehind: !0,
                          alias: "constant",
                        },
                      },
                    },
                    /\$(?:\w+|[#?*!@$])/,
                  ],
                  entity:
                    /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
                };
              (e.languages.bash = {
                shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
                comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
                "function-name": [
                  {
                    pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                    lookbehind: !0,
                    alias: "function",
                  },
                  { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
                ],
                "for-or-select": {
                  pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                  alias: "variable",
                  lookbehind: !0,
                },
                "assign-left": {
                  pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                  inside: {
                    environment: {
                      pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + n),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                  alias: "variable",
                  lookbehind: !0,
                },
                string: [
                  {
                    pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: t,
                  },
                  {
                    pattern:
                      /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: { bash: o },
                  },
                  {
                    pattern:
                      /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: t,
                  },
                  { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
                  {
                    pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                    greedy: !0,
                    inside: { entity: t.entity },
                  },
                ],
                environment: { pattern: RegExp("\\$?" + n), alias: "constant" },
                variable: t.variable,
                function: {
                  pattern:
                    /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                  lookbehind: !0,
                },
                keyword: {
                  pattern:
                    /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                  lookbehind: !0,
                },
                builtin: {
                  pattern:
                    /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                  lookbehind: !0,
                  alias: "class-name",
                },
                boolean: {
                  pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
                  lookbehind: !0,
                },
                "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
                operator: {
                  pattern:
                    /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                  inside: {
                    "file-descriptor": { pattern: /^\d/, alias: "important" },
                  },
                },
                punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                number: {
                  pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                  lookbehind: !0,
                },
              }),
                (o.inside = e.languages.bash);
              for (
                var i = [
                    "comment",
                    "function-name",
                    "for-or-select",
                    "assign-left",
                    "string",
                    "environment",
                    "function",
                    "keyword",
                    "builtin",
                    "boolean",
                    "file-descriptor",
                    "operator",
                    "punctuation",
                    "number",
                  ],
                  a = t.variable[1].inside,
                  s = 0;
                s < i.length;
                s++
              )
                a[i[s]] = e.languages.bash[i[s]];
              e.languages.shell = e.languages.bash;
            })(n),
            (n.languages.c = n.languages.extend("clike", {
              comment: {
                pattern:
                  /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                greedy: !0,
              },
              "class-name": {
                pattern:
                  /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                lookbehind: !0,
              },
              keyword:
                /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
              function: /\b[a-z_]\w*(?=\s*\()/i,
              number:
                /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
              operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
            })),
            n.languages.insertBefore("c", "string", {
              macro: {
                pattern:
                  /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                greedy: !0,
                alias: "property",
                inside: {
                  string: [
                    { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                    n.languages.c.string,
                  ],
                  comment: n.languages.c.comment,
                  "macro-name": [
                    { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                    {
                      pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                      lookbehind: !0,
                      alias: "function",
                    },
                  ],
                  directive: {
                    pattern: /^(#\s*)[a-z]+/,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  "directive-hash": /^#/,
                  punctuation: /##|\\(?=[\r\n])/,
                  expression: { pattern: /\S[\s\S]*/, inside: n.languages.c },
                },
              },
              constant:
                /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
            }),
            delete n.languages.c.boolean,
            !(function (e) {
              function n(e, t) {
                return e.replace(/<<(\d+)>>/g, function (e, n) {
                  return "(?:" + t[+n] + ")";
                });
              }
              function t(e, t, s) {
                return RegExp(n(e, t), s || "");
              }
              function r(e, t) {
                for (var n = 0; n < t; n++)
                  e = e.replace(/<<self>>/g, function () {
                    return "(?:" + e + ")";
                  });
                return e.replace(/<<self>>/g, "[^\\s\\S]");
              }
              var S =
                  "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
                c = "class enum interface record struct",
                _ =
                  "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
                f =
                  "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
              function l(e) {
                return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
              }
              var v = l(c),
                d = RegExp(l(S + " " + c + " " + _ + " " + f)),
                z = l(c + " " + _ + " " + f),
                T = l(S + " " + c + " " + f),
                u = r("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
                h = r("\\((?:[^()]|<<self>>)*\\)", 2),
                o = "@?\\b[A-Za-z_]\\w*\\b",
                m = n("<<0>>(?:\\s*<<1>>)?", [o, u]),
                i = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [z, m]),
                p = "\\[\\s*(?:,\\s*)*\\]",
                D = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [i, p]),
                a = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [
                  n("\\(<<0>>+(?:,<<0>>+)+\\)", [
                    n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [u, h, p]),
                  ]),
                  i,
                  p,
                ]),
                s = { keyword: d, punctuation: /[<>()?,.:[\]]/ },
                w = `'(?:[^
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,
                O = `"(?:\\\\.|[^\\\\"
])*"`;
              (e.languages.csharp = e.languages.extend("clike", {
                string: [
                  {
                    pattern: t("(^|[^$\\\\])<<0>>", [
                      '@"(?:""|\\\\[^]|[^\\\\"])*"(?!")',
                    ]),
                    lookbehind: !0,
                    greedy: !0,
                  },
                  {
                    pattern: t("(^|[^@$\\\\])<<0>>", [O]),
                    lookbehind: !0,
                    greedy: !0,
                  },
                  { pattern: RegExp(w), greedy: !0, alias: "character" },
                ],
                "class-name": [
                  {
                    pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [i]),
                    lookbehind: !0,
                    inside: s,
                  },
                  {
                    pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [
                      o,
                      a,
                    ]),
                    lookbehind: !0,
                    inside: s,
                  },
                  {
                    pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [o]),
                    lookbehind: !0,
                  },
                  {
                    pattern: t("(\\b<<0>>\\s+)<<1>>", [v, m]),
                    lookbehind: !0,
                    inside: s,
                  },
                  {
                    pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [i]),
                    lookbehind: !0,
                    inside: s,
                  },
                  { pattern: t("(\\bwhere\\s+)<<0>>", [o]), lookbehind: !0 },
                  {
                    pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [D]),
                    lookbehind: !0,
                    inside: s,
                  },
                  {
                    pattern: t(
                      "\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",
                      [a, T, o]
                    ),
                    inside: s,
                  },
                ],
                keyword: d,
                number:
                  /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
                operator:
                  />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
                punctuation: /\?\.?|::|[{}[\];(),.:]/,
              })),
                e.languages.insertBefore("csharp", "number", {
                  range: { pattern: /\.\./, alias: "operator" },
                }),
                e.languages.insertBefore("csharp", "punctuation", {
                  "named-parameter": {
                    pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [o]),
                    lookbehind: !0,
                    alias: "punctuation",
                  },
                }),
                e.languages.insertBefore("csharp", "class-name", {
                  namespace: {
                    pattern: t(
                      "(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",
                      [o]
                    ),
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                  "type-expression": {
                    pattern: t(
                      "(\\b(?:default|typeof|sizeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",
                      [h]
                    ),
                    lookbehind: !0,
                    alias: "class-name",
                    inside: s,
                  },
                  "return-type": {
                    pattern: t(
                      "<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",
                      [a, i]
                    ),
                    inside: s,
                    alias: "class-name",
                  },
                  "constructor-invocation": {
                    pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [a]),
                    lookbehind: !0,
                    inside: s,
                    alias: "class-name",
                  },
                  "generic-method": {
                    pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [o, u]),
                    inside: {
                      function: t("^<<0>>", [o]),
                      generic: {
                        pattern: RegExp(u),
                        alias: "class-name",
                        inside: s,
                      },
                    },
                  },
                  "type-list": {
                    pattern: t(
                      "\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",
                      [v, m, o, a, d.source, h, "\\bnew\\s*\\(\\s*\\)"]
                    ),
                    lookbehind: !0,
                    inside: {
                      "record-arguments": {
                        pattern: t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [m, h]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.csharp,
                      },
                      keyword: d,
                      "class-name": {
                        pattern: RegExp(a),
                        greedy: !0,
                        inside: s,
                      },
                      punctuation: /[,()]/,
                    },
                  },
                  preprocessor: {
                    pattern: /(^[\t ]*)#.*/m,
                    lookbehind: !0,
                    alias: "property",
                    inside: {
                      directive: {
                        pattern:
                          /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                        lookbehind: !0,
                        alias: "keyword",
                      },
                    },
                  },
                });
              var x = O + "|" + w,
                C = n(
                  `/(?![*/])|//[^
]*[
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,
                  [x]
                ),
                b = r(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [C]), 2),
                k =
                  "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
                F = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [i, b]);
              e.languages.insertBefore("csharp", "class-name", {
                attribute: {
                  pattern: t(
                    "((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",
                    [k, F]
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    target: {
                      pattern: t("^<<0>>(?=\\s*:)", [k]),
                      alias: "keyword",
                    },
                    "attribute-arguments": {
                      pattern: t("\\(<<0>>*\\)", [b]),
                      inside: e.languages.csharp,
                    },
                    "class-name": {
                      pattern: RegExp(i),
                      inside: { punctuation: /\./ },
                    },
                    punctuation: /[:,]/,
                  },
                },
              });
              var g = `:[^}
]+`,
                M = r(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [C]), 2),
                A = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [M, g]),
                E = r(
                  n(
                    `[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,
                    [x]
                  ),
                  2
                ),
                y = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [E, g]);
              function j(n, s) {
                return {
                  interpolation: {
                    pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n]),
                    lookbehind: !0,
                    inside: {
                      "format-string": {
                        pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [
                          s,
                          g,
                        ]),
                        lookbehind: !0,
                        inside: { punctuation: /^:/ },
                      },
                      punctuation: /^\{|\}$/,
                      expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: e.languages.csharp,
                      },
                    },
                  },
                  string: /[\s\S]+/,
                };
              }
              e.languages.insertBefore("csharp", "string", {
                "interpolation-string": [
                  {
                    pattern: t(
                      '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
                      [A]
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: j(A, M),
                  },
                  {
                    pattern: t(
                      '(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',
                      [y]
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: j(y, E),
                  },
                ],
              });
            })(n),
            (n.languages.dotnet = n.languages.cs = n.languages.csharp),
            !(function (e) {
              var t =
                  /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
                  /<keyword>/g,
                  function () {
                    return t.source;
                  }
                );
              (e.languages.cpp = e.languages.extend("c", {
                "class-name": [
                  {
                    pattern: RegExp(
                      "(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
                        /<keyword>/g,
                        function () {
                          return t.source;
                        }
                      )
                    ),
                    lookbehind: !0,
                  },
                  /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                  /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                  /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
                ],
                keyword: t,
                number: {
                  pattern:
                    /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                  greedy: !0,
                },
                operator:
                  />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                boolean: /\b(?:true|false)\b/,
              })),
                e.languages.insertBefore("cpp", "string", {
                  module: {
                    pattern: RegExp(
                      `(\\b(?:module|import)\\s+)(?:"(?:\\\\(?:
|[^])|[^"\\\\
])*"|<[^<>
]*>|` +
                        "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
                          /<mod-name>/g,
                          function () {
                            return n;
                          }
                        ) +
                        ")"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      string: /^[<"][\s\S]+/,
                      operator: /:/,
                      punctuation: /\./,
                    },
                  },
                  "raw-string": {
                    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                    alias: "string",
                    greedy: !0,
                  },
                }),
                e.languages.insertBefore("cpp", "keyword", {
                  "generic-function": {
                    pattern:
                      /\b[a-z_]\w*\s*<(?:[^<>]|<(?:[^<>])*>)*>(?=\s*\()/i,
                    inside: {
                      function: /^\w+/,
                      generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: e.languages.cpp,
                      },
                    },
                  },
                }),
                e.languages.insertBefore("cpp", "operator", {
                  "double-colon": { pattern: /::/, alias: "punctuation" },
                }),
                e.languages.insertBefore("cpp", "class-name", {
                  "base-clause": {
                    pattern:
                      /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: e.languages.extend("cpp", {}),
                  },
                }),
                e.languages.insertBefore(
                  "inside",
                  "double-colon",
                  { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
                  e.languages.cpp["base-clause"]
                );
            })(n),
            (n.languages.cmake = {
              comment: /#.*/,
              string: {
                pattern: /"(?:[^\\"]|\\.)*"/,
                greedy: !0,
                inside: {
                  interpolation: {
                    pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
                    inside: { punctuation: /\$\{|\}/, variable: /\w+/ },
                  },
                },
              },
              variable:
                /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
              property:
                /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
              keyword:
                /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
              boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
              namespace:
                /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
              operator:
                /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
              inserted: { pattern: /\b\w+::\w+\b/, alias: "class-name" },
              number: /\b\d+(?:\.\d+)*\b/,
              function: /\b[a-z_]\w*(?=\s*\()\b/i,
              punctuation: /[()>}]|\$[<{]/,
            }),
            !(function (e) {
              var n = /#(?!\{).+/,
                t = { pattern: /#\{[^}]+\}/, alias: "variable" };
              (e.languages.coffeescript = e.languages.extend("javascript", {
                comment: n,
                string: [
                  { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
                  {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    greedy: !0,
                    inside: { interpolation: t },
                  },
                ],
                keyword:
                  /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
              })),
                e.languages.insertBefore("coffeescript", "comment", {
                  "multiline-comment": {
                    pattern: /###[\s\S]+?###/,
                    alias: "comment",
                  },
                  "block-regex": {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: "regex",
                    inside: { comment: n, interpolation: t },
                  },
                }),
                e.languages.insertBefore("coffeescript", "string", {
                  "inline-javascript": {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    inside: {
                      delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                      script: {
                        pattern: /[\s\S]+/,
                        alias: "language-javascript",
                        inside: e.languages.javascript,
                      },
                    },
                  },
                  "multiline-string": [
                    { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                    {
                      pattern: /"""[\s\S]*?"""/,
                      greedy: !0,
                      alias: "string",
                      inside: { interpolation: t },
                    },
                  ],
                }),
                e.languages.insertBefore("coffeescript", "keyword", {
                  property: /(?!\d)\w+(?=\s*:(?!:))/,
                }),
                delete e.languages.coffeescript["template-string"],
                (e.languages.coffee = e.languages.coffeescript);
            })(n),
            (n.languages.csp = {
              directive: {
                pattern:
                  /(^|[^-\da-z])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[^-\da-z]|$)/i,
                lookbehind: !0,
                alias: "keyword",
              },
              safe: {
                pattern:
                  /'(?:deny|none|report-sample|self|strict-dynamic|top-only|(?:nonce|sha(?:256|384|512))-[-+/\w=]+)'/i,
                alias: "selector",
              },
              unsafe: {
                pattern:
                  /(?:'unsafe-(?:allow-redirects|dynamic|eval|hash-attributes|hashed-attributes|hashes|inline)'|\*)/i,
                alias: "function",
              },
            }),
            !(function (e) {
              (t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/),
                (e.languages.css.selector = {
                  pattern: e.languages.css.selector.pattern,
                  lookbehind: !0,
                  inside: (n = {
                    "pseudo-element":
                      /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                    "pseudo-class": /:[-\w]+/,
                    class: /\.[-\w]+/,
                    id: /#[-\w]+/,
                    attribute: {
                      pattern: RegExp(`\\[(?:[^[\\]"']|` + t.source + ")*\\]"),
                      greedy: !0,
                      inside: {
                        punctuation: /^\[|\]$/,
                        "case-sensitivity": {
                          pattern: /(\s)[si]$/i,
                          lookbehind: !0,
                          alias: "keyword",
                        },
                        namespace: {
                          pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                          lookbehind: !0,
                          inside: { punctuation: /\|$/ },
                        },
                        "attr-name": {
                          pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                          lookbehind: !0,
                        },
                        "attr-value": [
                          t,
                          {
                            pattern:
                              /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: !0,
                          },
                        ],
                        operator: /[|~*^$]?=/,
                      },
                    },
                    "n-th": [
                      {
                        pattern:
                          /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                        lookbehind: !0,
                        inside: { number: /[\dn]+/, operator: /[+-]/ },
                      },
                      {
                        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                        lookbehind: !0,
                      },
                    ],
                    combinator: />|\+|~|\|\|/,
                    punctuation: /[(),]/,
                  }),
                }),
                (e.languages.css.atrule.inside[
                  "selector-function-argument"
                ].inside = n),
                e.languages.insertBefore("css", "property", {
                  variable: {
                    pattern:
                      /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                    lookbehind: !0,
                  },
                });
              var t,
                n,
                s = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
                o = {
                  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                  lookbehind: !0,
                };
              e.languages.insertBefore("css", "function", {
                operator: { pattern: /(\s)[+\-*/](?=\s)/, lookbehind: !0 },
                hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
                color: [
                  {
                    pattern:
                      /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                    inside: {
                      unit: s,
                      number: o,
                      function: /[\w-]+(?=\()/,
                      punctuation: /[(),]/,
                    },
                  },
                ],
                entity: /\\[\da-f]{1,8}/i,
                unit: s,
                number: o,
              });
            })(n),
            !(function (e) {
              e.languages.diff = {
                coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
              };
              var t = {
                "deleted-sign": "-",
                "deleted-arrow": "<",
                "inserted-sign": "+",
                "inserted-arrow": ">",
                unchanged: " ",
                diff: "!",
              };
              Object.keys(t).forEach(function (n) {
                var o = t[n],
                  s = [];
                /^\w+$/.test(n) || s.push(/\w+/.exec(n)[0]),
                  "diff" === n && s.push("bold"),
                  (e.languages.diff[n] = {
                    pattern: RegExp(
                      "^(?:[" +
                        o +
                        `].*(?:
?|
|(?![\\s\\S])))+`,
                      "m"
                    ),
                    alias: s,
                    inside: {
                      line: {
                        pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                        lookbehind: !0,
                      },
                      prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                    },
                  });
              }),
                Object.defineProperty(e.languages.diff, "PREFIXES", {
                  value: t,
                });
            })(n),
            !(function (e) {
              function t(e, t) {
                return "___" + e.toUpperCase() + t + "___";
              }
              Object.defineProperties((e.languages["markup-templating"] = {}), {
                buildPlaceholders: {
                  value: function (n, s, o, i) {
                    if (n.language === s) {
                      var a = (n.tokenStack = []);
                      (n.code = n.code.replace(o, function (e) {
                        if ("function" == typeof i && !i(e)) return e;
                        for (
                          var r, o = a.length;
                          -1 !== n.code.indexOf((r = t(s, o)));

                        )
                          ++o;
                        return (a[o] = e), r;
                      })),
                        (n.grammar = e.languages.markup);
                    }
                  },
                },
                tokenizePlaceholders: {
                  value: function (n, s) {
                    if (n.language === s && n.tokenStack) {
                      n.grammar = e.languages[s];
                      var o = 0,
                        i = Object.keys(n.tokenStack);
                      !(function a(r) {
                        for (d = 0; d < r.length && !(o >= i.length); d++)
                          if (
                            ((c = r[d]),
                            "string" == typeof c ||
                              (c.content && "string" == typeof c.content))
                          ) {
                            {
                              var c,
                                d,
                                m = i[o],
                                f = n.tokenStack[m],
                                u = "string" == typeof c ? c : c.content,
                                p = t(s, m),
                                h = u.indexOf(p);
                              if (-1 < h) {
                                ++o;
                                var g = u.substring(0, h),
                                  b = new e.Token(
                                    s,
                                    e.tokenize(f, n.grammar),
                                    "language-" + s,
                                    f
                                  ),
                                  v = u.substring(h + p.length),
                                  l = [];
                                g && l.push.apply(l, a([g])),
                                  l.push(b),
                                  v && l.push.apply(l, a([v])),
                                  "string" == typeof c
                                    ? r.splice.apply(r, [d, 1].concat(l))
                                    : (c.content = l);
                              }
                            }
                          } else c.content && a(c.content);
                        return r;
                      })(n.tokens);
                    }
                  },
                },
              });
            })(n),
            !(function (e) {
              e.languages.django = {
                comment: /^\{#[\s\S]*?#\}$/,
                tag: {
                  pattern: /(^\{%[+-]?\s*)\w+/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                delimiter: {
                  pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
                  alias: "punctuation",
                },
                string: {
                  pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                  greedy: !0,
                },
                filter: {
                  pattern: /(\|)\w+/,
                  lookbehind: !0,
                  alias: "function",
                },
                test: {
                  pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
                  lookbehind: !0,
                  alias: "function",
                },
                function: /\b[a-z_]\w+(?=\s*\()/i,
                keyword:
                  /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
                operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                number: /\b\d+(?:\.\d+)?\b/,
                boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
                variable: /\b\w+?\b/,
                punctuation: /[{}[\](),.:;]/,
              };
              var n = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,
                t = e.languages["markup-templating"];
              e.hooks.add("before-tokenize", function (e) {
                t.buildPlaceholders(e, "django", n);
              }),
                e.hooks.add("after-tokenize", function (e) {
                  t.tokenizePlaceholders(e, "django");
                }),
                (e.languages.jinja2 = e.languages.django),
                e.hooks.add("before-tokenize", function (e) {
                  t.buildPlaceholders(e, "jinja2", n);
                }),
                e.hooks.add("after-tokenize", function (e) {
                  t.tokenizePlaceholders(e, "jinja2");
                });
            })(n),
            !(function (e) {
              var i = "(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(
                  /<SP_BS>/g,
                  function () {
                    return `\\\\[
](?:\\s|\\\\[
]|#.*(?!.))*(?![\\s#]|\\\\[
])`;
                  }
                ),
                n = `"(?:[^"\\\\
]|\\\\(?:
|[^]))*"|'(?:[^'\\\\
]|\\\\(?:
|[^]))*'`,
                a = `--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(
                  /<STR>/g,
                  function () {
                    return n;
                  }
                ),
                s = { pattern: RegExp(n), greedy: !0 },
                o = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
              function t(e, t) {
                return (
                  (e = e
                    .replace(/<OPT>/g, function () {
                      return a;
                    })
                    .replace(/<SP>/g, function () {
                      return i;
                    })),
                  RegExp(e, t)
                );
              }
              (e.languages.docker = {
                instruction: {
                  pattern:
                    /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    options: {
                      pattern: t(
                        "(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*",
                        "i"
                      ),
                      lookbehind: !0,
                      greedy: !0,
                      inside: {
                        property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
                        string: [
                          s,
                          {
                            pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                            lookbehind: !0,
                          },
                        ],
                        operator: /\\$/m,
                        punctuation: /=/,
                      },
                    },
                    keyword: [
                      {
                        pattern: t(
                          "(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
                          "i"
                        ),
                        lookbehind: !0,
                        greedy: !0,
                      },
                      {
                        pattern: t(
                          "(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS",
                          "i"
                        ),
                        lookbehind: !0,
                        greedy: !0,
                      },
                      {
                        pattern: t("(^ONBUILD<SP>)\\w+", "i"),
                        lookbehind: !0,
                        greedy: !0,
                      },
                      { pattern: /^\w+/, greedy: !0 },
                    ],
                    comment: o,
                    string: s,
                    variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                    operator: /\\$/m,
                  },
                },
                comment: o,
              }),
                (e.languages.dockerfile = e.languages.docker);
            })(n),
            (n.languages.elixir = {
              doc: {
                pattern:
                  /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
                inside: { attribute: /^@\w+/, string: /['"][\s\S]+/ },
              },
              comment: { pattern: /#.*/m, greedy: !0 },
              regex: {
                pattern:
                  /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
                greedy: !0,
              },
              string: [
                {
                  pattern:
                    /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
                  greedy: !0,
                  inside: {},
                },
                { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
                {
                  pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  greedy: !0,
                  inside: {},
                },
              ],
              atom: {
                pattern: /(^|[^:]):\w+/,
                lookbehind: !0,
                alias: "symbol",
              },
              module: { pattern: /\b[A-Z]\w*\b/, alias: "class-name" },
              "attr-name": /\b\w+\??:(?!:)/,
              argument: {
                pattern: /(^|[^&])&\d+/,
                lookbehind: !0,
                alias: "variable",
              },
              attribute: { pattern: /@\w+/, alias: "variable" },
              function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
              number:
                /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
              keyword:
                /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
              boolean: /\b(?:true|false|nil)\b/,
              operator: [
                /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*/^]/,
                { pattern: /([^<])<(?!<)/, lookbehind: !0 },
                { pattern: /([^>])>(?!>)/, lookbehind: !0 },
              ],
              punctuation: /<<|>>|[.,%[\]{}()]/,
            }),
            n.languages.elixir.string.forEach(function (e) {
              e.inside = {
                interpolation: {
                  pattern: /#\{[^}]+\}/,
                  inside: {
                    delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                    rest: n.languages.elixir,
                  },
                },
              };
            }),
            (n.languages.elm = {
              comment: /--.*|\{-[\s\S]*?-\}/,
              char: {
                pattern:
                  /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
                greedy: !0,
              },
              string: [
                { pattern: /"""[\s\S]*?"""/, greedy: !0 },
                { pattern: /"(?:[^\\"\r\n]|\\.)*"/, greedy: !0 },
              ],
              "import-statement": {
                pattern:
                  /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
                lookbehind: !0,
                inside: { keyword: /\b(?:import|as|exposing)\b/ },
              },
              keyword:
                /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
              builtin:
                /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
              number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
              operator:
                /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
              hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
              constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
              punctuation: /[{}[\]|(),.:]/,
            }),
            (n.languages.erlang = {
              comment: /%.+/,
              string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
              "quoted-function": {
                pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
                alias: "function",
              },
              "quoted-atom": {
                pattern: /'(?:\\.|[^\\'\r\n])+'/,
                alias: "atom",
              },
              boolean: /\b(?:true|false)\b/,
              keyword:
                /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
              number: [
                /\$\\?./,
                /\b\d+#[a-z0-9]+/i,
                /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
              ],
              function: /\b[a-z][\w@]*(?=\()/,
              variable: {
                pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
                lookbehind: !0,
              },
              operator: [
                /[=/<>:]=|=[:/]=|\+\+?|--?|[=*/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
                { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
                { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 },
              ],
              atom: /\b[a-z][\w@]*/,
              punctuation: /[()[\]{}:;,.#|]|<<|>>/,
            }),
            (n.languages.fsharp = n.languages.extend("clike", {
              comment: [
                { pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/, lookbehind: !0 },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
              ],
              string: {
                pattern:
                  /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
                greedy: !0,
              },
              "class-name": {
                pattern:
                  /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
                lookbehind: !0,
                inside: { operator: /->|\*/, punctuation: /\./ },
              },
              keyword:
                /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
              number: [
                /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
                /\b0b[01]+(?:y|uy)?\b/,
                /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
                /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/,
              ],
              operator:
                /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/,
            })),
            n.languages.insertBefore("fsharp", "keyword", {
              preprocessor: {
                pattern: /(^[\t ]*)#.*/m,
                lookbehind: !0,
                alias: "property",
                inside: {
                  directive: {
                    pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                },
              },
            }),
            n.languages.insertBefore("fsharp", "punctuation", {
              "computation-expression": {
                pattern: /\b[_a-z]\w*(?=\s*\{)/i,
                alias: "keyword",
              },
            }),
            n.languages.insertBefore("fsharp", "string", {
              annotation: {
                pattern: /\[<.+?>\]/,
                inside: {
                  punctuation: /^\[<|>\]$/,
                  "class-name": {
                    pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
                    lookbehind: !0,
                  },
                  "annotation-content": {
                    pattern: /[\s\S]+/,
                    inside: n.languages.fsharp,
                  },
                },
              },
            }),
            !(function (e) {
              (e.languages.flow = e.languages.extend("javascript", {})),
                e.languages.insertBefore("flow", "keyword", {
                  type: [
                    {
                      pattern:
                        /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                      alias: "tag",
                    },
                  ],
                }),
                (e.languages.flow["function-variable"].pattern =
                  /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i),
                delete e.languages.flow.parameter,
                e.languages.insertBefore("flow", "operator", {
                  "flow-punctuation": {
                    pattern: /\{\||\|\}/,
                    alias: "punctuation",
                  },
                }),
                Array.isArray(e.languages.flow.keyword) ||
                  (e.languages.flow.keyword = [e.languages.flow.keyword]),
                e.languages.flow.keyword.unshift(
                  {
                    pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                    lookbehind: !0,
                  }
                );
            })(n),
            (n.languages.git = {
              comment: /^#.*/m,
              deleted: /^[-–].*/m,
              inserted: /^\+.*/m,
              string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
              command: {
                pattern: /^.*\$ git .*$/m,
                inside: { parameter: /\s--?\w+/m },
              },
              coord: /^@@.*@@$/m,
              "commit-sha1": /^commit \w{40}$/m,
            }),
            (n.languages.go = n.languages.extend("clike", {
              string: {
                pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                greedy: !0,
              },
              keyword:
                /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
              boolean: /\b(?:_|iota|nil|true|false)\b/,
              number:
                /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
              operator:
                /[*/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
              builtin:
                /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
            })),
            delete n.languages.go["class-name"],
            (n.languages.graphql = {
              comment: /#.*/,
              description: {
                pattern:
                  /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                greedy: !0,
                alias: "string",
                inside: {
                  "language-markdown": {
                    pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: n.languages.markdown,
                  },
                },
              },
              string: {
                pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
                greedy: !0,
              },
              number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
              boolean: /\b(?:true|false)\b/,
              variable: /\$[a-z_]\w*/i,
              directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
              "attr-name": {
                pattern:
                  /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                greedy: !0,
              },
              "atom-input": {
                pattern: /[A-Z]\w*Input(?=!?.*$)/m,
                alias: "class-name",
              },
              scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
              constant: /\b[A-Z][A-Z_\d]*\b/,
              "class-name": {
                pattern:
                  /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                lookbehind: !0,
              },
              fragment: {
                pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function",
              },
              "definition-mutation": {
                pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function",
              },
              "definition-query": {
                pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function",
              },
              keyword:
                /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
              operator: /[!=|&]|\.{3}/,
              "property-query": /\w+(?=\s*\()/,
              object: /\w+(?=\s*\{)/,
              punctuation: /[!(){}[\]:=,]/,
              property: /\w+/,
            }),
            n.hooks.add("after-tokenize", function (e) {
              if ("graphql" === e.language)
                for (
                  var o,
                    i,
                    a,
                    r,
                    c,
                    l,
                    d,
                    n = e.tokens.filter(function (e) {
                      return (
                        "string" != typeof e &&
                        "comment" !== e.type &&
                        "scalar" !== e.type
                      );
                    }),
                    t = 0;
                  t < n.length;

                )
                  if (
                    ((d = n[t++]),
                    "keyword" === d.type && "mutation" === d.content)
                  ) {
                    if (
                      ((o = []),
                      h(["definition-mutation", "punctuation"]) &&
                        "(" === s(1).content)
                    ) {
                      if (((t += 2), (i = m(/^\($/, /^\)$/)), -1 === i))
                        continue;
                      for (; t < i; t++)
                        (a = s(0)),
                          "variable" === a.type &&
                            (u(a, "variable-input"), o.push(a.content));
                      t = i + 1;
                    }
                    if (
                      h(["punctuation", "property-query"]) &&
                      "{" === s(0).content &&
                      (t++, u(s(0), "property-mutation"), 0 < o.length)
                    ) {
                      if (((l = m(/^\{$/, /^\}$/)), -1 === l)) continue;
                      for (r = t; r < l; r++)
                        (c = n[r]),
                          "variable" === c.type &&
                            0 <= o.indexOf(c.content) &&
                            u(c, "variable-input");
                    }
                  }
              function s(e) {
                return n[t + e];
              }
              function h(e, t) {
                t = t || 0;
                for (var o, n = 0; n < e.length; n++)
                  if (((o = s(n + t)), !o || o.type !== e[n])) return !1;
                return !0;
              }
              function m(e, s) {
                for (var i, a, r = 1, o = t; o < n.length; o++)
                  if (
                    ((a = n[o]),
                    (i = a.content),
                    "punctuation" === a.type && "string" == typeof i)
                  )
                    if (e.test(i)) r++;
                    else if (s.test(i) && 0 === --r) return o;
                return -1;
              }
              function u(e, t) {
                var n = e.alias;
                n
                  ? Array.isArray(n) || (e.alias = n = [n])
                  : (e.alias = n = []),
                  n.push(t);
              }
            }),
            !(function (e) {
              e.languages.ruby = e.languages.extend("clike", {
                comment: [
                  /#.*/,
                  { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0 },
                ],
                "class-name": {
                  pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
                  lookbehind: !0,
                  inside: { punctuation: /[.\\]/ },
                },
                keyword:
                  /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
              });
              var t = {
                pattern: /#\{[^}]+\}/,
                inside: {
                  delimiter: { pattern: /^#\{|\}$/, alias: "tag" },
                  rest: e.languages.ruby,
                },
              };
              delete e.languages.ruby.function,
                e.languages.insertBefore("ruby", "keyword", {
                  regex: [
                    {
                      pattern: RegExp(
                        "%r(?:" +
                          [
                            "([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1",
                            "\\((?:[^()\\\\]|\\\\[^])*\\)",
                            "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}",
                            "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]",
                            "<(?:[^<>\\\\]|\\\\[^])*>",
                          ].join("|") +
                          ")[egimnosux]{0,6}"
                      ),
                      greedy: !0,
                      inside: { interpolation: t },
                    },
                    {
                      pattern:
                        /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                      lookbehind: !0,
                      greedy: !0,
                      inside: { interpolation: t },
                    },
                  ],
                  variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
                  symbol: {
                    pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
                    lookbehind: !0,
                  },
                  "method-definition": {
                    pattern: /(\bdef\s+)[\w.]+/,
                    lookbehind: !0,
                    inside: { function: /\w+$/, rest: e.languages.ruby },
                  },
                }),
                e.languages.insertBefore("ruby", "number", {
                  builtin:
                    /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
                  constant: /\b[A-Z]\w*(?:[?!]|\b)/,
                }),
                (e.languages.ruby.string = [
                  {
                    pattern: RegExp(
                      "%[qQiIwWxs]?(?:" +
                        [
                          "([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1",
                          "\\((?:[^()\\\\]|\\\\[^])*\\)",
                          "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}",
                          "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]",
                          "<(?:[^<>\\\\]|\\\\[^])*>",
                        ].join("|") +
                        ")"
                    ),
                    greedy: !0,
                    inside: { interpolation: t },
                  },
                  {
                    pattern:
                      /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                    greedy: !0,
                    inside: { interpolation: t },
                  },
                  {
                    pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
                        alias: "symbol",
                        inside: { punctuation: /^<<[-~]?/ },
                      },
                      interpolation: t,
                    },
                  },
                  {
                    pattern:
                      /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
                        alias: "symbol",
                        inside: { punctuation: /^<<[-~]?'|'$/ },
                      },
                    },
                  },
                ]),
                (e.languages.rb = e.languages.ruby);
            })(n),
            !(function (e) {
              e.languages.haml = {
                "multiline-comment": {
                  pattern:
                    /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
                  lookbehind: !0,
                  alias: "comment",
                },
                "multiline-code": [
                  {
                    pattern:
                      /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
                    lookbehind: !0,
                    inside: e.languages.ruby,
                  },
                  {
                    pattern:
                      /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
                    lookbehind: !0,
                    inside: e.languages.ruby,
                  },
                ],
                filter: {
                  pattern:
                    /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
                  lookbehind: !0,
                  inside: {
                    "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                  },
                },
                markup: {
                  pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
                  lookbehind: !0,
                  inside: e.languages.markup,
                },
                doctype: {
                  pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
                  lookbehind: !0,
                },
                tag: {
                  pattern:
                    /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[/<>]*/,
                  lookbehind: !0,
                  inside: {
                    attributes: [
                      {
                        pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
                        lookbehind: !0,
                        inside: e.languages.ruby,
                      },
                      {
                        pattern: /\([^)]+\)/,
                        inside: {
                          "attr-value": {
                            pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                            lookbehind: !0,
                          },
                          "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                          punctuation: /[=(),]/,
                        },
                      },
                      { pattern: /\[[^\]]+\]/, inside: e.languages.ruby },
                    ],
                    punctuation: /[<>]/,
                  },
                },
                code: {
                  pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
                  lookbehind: !0,
                  inside: e.languages.ruby,
                },
                interpolation: {
                  pattern: /#\{[^}]+\}/,
                  inside: {
                    delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
                    rest: e.languages.ruby,
                  },
                },
                punctuation: {
                  pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
                  lookbehind: !0,
                },
              };
              for (
                var t,
                  s = [
                    "css",
                    { filter: "coffee", language: "coffeescript" },
                    "erb",
                    "javascript",
                    "less",
                    "markdown",
                    "ruby",
                    "scss",
                    "textile",
                  ],
                  o = {},
                  n = 0,
                  i = s.length;
                n < i;
                n++
              )
                (t = s[n]),
                  (t = "string" == typeof t ? { filter: t, language: t } : t),
                  e.languages[t.language] &&
                    (o["filter-" + t.filter] = {
                      pattern: RegExp(
                        "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+".replace(
                          "{{filter_name}}",
                          function () {
                            return t.filter;
                          }
                        )
                      ),
                      lookbehind: !0,
                      inside: {
                        "filter-name": {
                          pattern: /^:[\w-]+/,
                          alias: "variable",
                        },
                        rest: e.languages[t.language],
                      },
                    });
              e.languages.insertBefore("haml", "filter", o);
            })(n),
            !(function (e) {
              (e.languages.handlebars = {
                comment: /\{\{![\s\S]*?\}\}/,
                delimiter: {
                  pattern: /^\{\{\{?|\}\}\}?$/i,
                  alias: "punctuation",
                },
                string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                number:
                  /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                boolean: /\b(?:true|false)\b/,
                block: {
                  pattern: /^(\s*(?:~\s*)?)[#/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
                  lookbehind: !0,
                  alias: "keyword",
                },
                brackets: {
                  pattern: /\[[^\]]+\]/,
                  inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
                },
                punctuation: /[!"#%&':()*+,./;<=>@[\\\]^`{|}~]/,
                variable: /[^!"#%&'()*+,/;<=>@[\\\]^`{|}~\s]+/,
              }),
                e.hooks.add("before-tokenize", function (t) {
                  e.languages["markup-templating"].buildPlaceholders(
                    t,
                    "handlebars",
                    /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
                  );
                }),
                e.hooks.add("after-tokenize", function (t) {
                  e.languages["markup-templating"].tokenizePlaceholders(
                    t,
                    "handlebars"
                  );
                }),
                (e.languages.hbs = e.languages.handlebars);
            })(n),
            (n.languages.haskell = {
              comment: {
                pattern:
                  /(^|[^-!#$%*+=?&@|~.:<>^\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\/].*|$)|\{-[\s\S]*?-\})/m,
                lookbehind: !0,
              },
              char: {
                pattern:
                  /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
                alias: "string",
              },
              string: { pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/, greedy: !0 },
              keyword:
                /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
              "import-statement": {
                pattern:
                  /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
                lookbehind: !0,
                inside: {
                  keyword: /\b(?:import|qualified|as|hiding)\b/,
                  punctuation: /\./,
                },
              },
              builtin:
                /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
              number:
                /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
              operator: [
                { pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/, greedy: !0 },
                { pattern: /(\s)\.(?=\s)/, lookbehind: !0 },
                /[-!#$%*+=?&@|~:<>^\\/][-!#$%*+=?&@|~.:<>^\\/]*|\.[-!#$%*+=?&@|~.:<>^\\/]+/,
              ],
              hvariable: {
                pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,
                inside: { punctuation: /\./ },
              },
              constant: {
                pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,
                inside: { punctuation: /\./ },
              },
              punctuation: /[{}[\];(),.:]/,
            }),
            (n.languages.hs = n.languages.haskell),
            !(function (e) {
              e.languages.http = {
                "request-line": {
                  pattern:
                    /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,
                  inside: {
                    method: { pattern: /^[A-Z]+\b/, alias: "property" },
                    "request-target": {
                      pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                      lookbehind: !0,
                      alias: "url",
                      inside: e.languages.uri,
                    },
                    "http-version": {
                      pattern: /^(\s)HTTP\/[0-9.]+/,
                      lookbehind: !0,
                      alias: "property",
                    },
                  },
                },
                "response-status": {
                  pattern: /^HTTP\/[0-9.]+ \d+ .+/m,
                  inside: {
                    "http-version": {
                      pattern: /^HTTP\/[0-9.]+/,
                      alias: "property",
                    },
                    "status-code": {
                      pattern: /^(\s)\d+(?=\s)/,
                      lookbehind: !0,
                      alias: "number",
                    },
                    "reason-phrase": {
                      pattern: /^(\s).+/,
                      lookbehind: !0,
                      alias: "string",
                    },
                  },
                },
                "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" },
              };
              var n,
                s,
                i,
                a,
                r,
                t = e.languages,
                o = {
                  "application/javascript": t.javascript,
                  "application/json": t.json || t.javascript,
                  "application/xml": t.xml,
                  "text/xml": t.xml,
                  "text/html": t.html,
                  "text/css": t.css,
                },
                c = { "application/json": !0, "application/xml": !0 };
              for (n in o)
                o[n] &&
                  ((s = s || {}),
                  (r = c[n]
                    ? (void 0,
                      (a = (i = n).replace(/^[a-z]+\//, "")),
                      "(?:" +
                        i +
                        "|\\w+/(?:[\\w.-]+\\+)+" +
                        a +
                        "(?![+\\w.-]))")
                    : n),
                  (s[n.replace(/\//g, "-")] = {
                    pattern: RegExp(
                      "(content-type:\\s*" +
                        r +
                        `(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*`,
                      "i"
                    ),
                    lookbehind: !0,
                    inside: o[n],
                  }));
              s && e.languages.insertBefore("http", "header-name", s);
            })(n),
            !(function (e) {
              var t =
                  /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
                s =
                  "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
                n = {
                  pattern: RegExp(s + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
                  lookbehind: !0,
                  inside: {
                    namespace: {
                      pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                      inside: { punctuation: /\./ },
                    },
                    punctuation: /\./,
                  },
                };
              (e.languages.java = e.languages.extend("clike", {
                "class-name": [
                  n,
                  {
                    pattern: RegExp(s + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
                    lookbehind: !0,
                    inside: n.inside,
                  },
                ],
                keyword: t,
                function: [
                  e.languages.clike.function,
                  { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
                ],
                number:
                  /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                operator: {
                  pattern:
                    /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                  lookbehind: !0,
                },
              })),
                e.languages.insertBefore("java", "string", {
                  "triple-quoted-string": {
                    pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                    greedy: !0,
                    alias: "string",
                  },
                }),
                e.languages.insertBefore("java", "class-name", {
                  annotation: {
                    pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                    lookbehind: !0,
                    alias: "punctuation",
                  },
                  generics: {
                    pattern:
                      /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                    inside: {
                      "class-name": n,
                      keyword: t,
                      punctuation: /[<>(),.:]/,
                      operator: /[?&|]/,
                    },
                  },
                  namespace: {
                    pattern: RegExp(
                      "(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(
                        /<keyword>/g,
                        function () {
                          return t.source;
                        }
                      )
                    ),
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                });
            })(n),
            (n.languages.json = {
              property: {
                pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
                lookbehind: !0,
                greedy: !0,
              },
              string: {
                pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                lookbehind: !0,
                greedy: !0,
              },
              comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
              number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
              punctuation: /[{}[\],]/,
              operator: /:/,
              boolean: /\b(?:true|false)\b/,
              null: { pattern: /\bnull\b/, alias: "keyword" },
            }),
            (n.languages.webmanifest = n.languages.json),
            !(function (e) {
              (e.languages.kotlin = e.languages.extend("clike", {
                keyword: {
                  pattern:
                    /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                  lookbehind: !0,
                },
                function: [
                  { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
                  {
                    pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                    lookbehind: !0,
                    greedy: !0,
                  },
                ],
                number:
                  /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                operator:
                  /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
              })),
                delete e.languages.kotlin["class-name"],
                e.languages.insertBefore("kotlin", "string", {
                  "raw-string": {
                    pattern: /("""|''')[\s\S]*?\1/,
                    alias: "string",
                  },
                }),
                e.languages.insertBefore("kotlin", "keyword", {
                  annotation: {
                    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                    alias: "builtin",
                  },
                }),
                e.languages.insertBefore("kotlin", "function", {
                  label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" },
                });
              var t = [
                {
                  pattern: /\$\{[^}]+\}/,
                  inside: {
                    delimiter: { pattern: /^\$\{|\}$/, alias: "variable" },
                    rest: e.languages.kotlin,
                  },
                },
                { pattern: /\$\w+/, alias: "variable" },
              ];
              (e.languages.kotlin.string.inside = e.languages.kotlin[
                "raw-string"
              ].inside =
                { interpolation: t }),
                (e.languages.kt = e.languages.kotlin),
                (e.languages.kts = e.languages.kotlin);
            })(n),
            !(function (e) {
              var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
                n = { "equation-command": { pattern: t, alias: "regex" } };
              (e.languages.latex = {
                comment: /%.*/m,
                cdata: {
                  pattern:
                    /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                  lookbehind: !0,
                },
                equation: [
                  {
                    pattern:
                      /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
                    inside: n,
                    alias: "string",
                  },
                  {
                    pattern:
                      /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                    lookbehind: !0,
                    inside: n,
                    alias: "string",
                  },
                ],
                keyword: {
                  pattern:
                    /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                  lookbehind: !0,
                },
                url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
                headline: {
                  pattern:
                    /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                  lookbehind: !0,
                  alias: "class-name",
                },
                function: { pattern: t, alias: "selector" },
                punctuation: /[[\]{}&]/,
              }),
                (e.languages.tex = e.languages.latex),
                (e.languages.context = e.languages.latex);
            })(n),
            (n.languages.less = n.languages.extend("css", {
              comment: [
                /\/\*[\s\S]*?\*\//,
                { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
              ],
              atrule: {
                pattern:
                  /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
                inside: { punctuation: /[:()]/ },
              },
              selector: {
                pattern:
                  /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
                inside: { variable: /@+[\w-]+/ },
              },
              property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
              operator: /[+\-*/]/,
            })),
            n.languages.insertBefore("less", "property", {
              variable: [
                { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
                /@@?[\w-]+/,
              ],
              "mixin-usage": {
                pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
                lookbehind: !0,
                alias: "function",
              },
            }),
            (n.languages.llvm = {
              comment: /;.*/,
              string: { pattern: /"[^"]*"/, greedy: !0 },
              boolean: /\b(?:true|false)\b/,
              variable: /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,
              label: /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,
              type: {
                pattern:
                  /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,
                alias: "class-name",
              },
              keyword: /\b[a-z_][a-z_0-9]*\b/,
              number:
                /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,
              punctuation: /[{}[\];(),.!*=<>]/,
            }),
            (n.languages.makefile = {
              comment: {
                pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
                lookbehind: !0,
              },
              string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
              symbol: {
                pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
                inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
              },
              variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
              keyword: [
                /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
                {
                  pattern:
                    /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
                  lookbehind: !0,
                },
              ],
              operator: /(?:::|[?:+!])?=|[|@]/,
              punctuation: /[:;(){}]/,
            }),
            !(function (e) {
              function n(e) {
                return (
                  (e = e.replace(/<inner>/g, function () {
                    return `(?:\\\\.|[^\\\\

]|(?:
|
?)(?![
]))`;
                  })),
                  RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")")
                );
              }
              var s =
                  "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
                t = `\\|?__(?:\\|__)+\\|?(?:(?:
|
?)|(?![^]))`.replace(/__/g, function () {
                  return s;
                }),
                o = `\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|
?)`;
              (e.languages.markdown = e.languages.extend("markup", {})),
                e.languages.insertBefore("markdown", "prolog", {
                  "front-matter-block": {
                    pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      punctuation: /^---|---$/,
                      "font-matter": {
                        pattern: /\S+(?:\s+\S+)*/,
                        alias: ["yaml", "language-yaml"],
                        inside: e.languages.yaml,
                      },
                    },
                  },
                  blockquote: {
                    pattern: /^>(?:[\t ]*>)*/m,
                    alias: "punctuation",
                  },
                  table: {
                    pattern: RegExp("^" + t + o + "(?:" + t + ")*", "m"),
                    inside: {
                      "table-data-rows": {
                        pattern: RegExp("^(" + t + o + ")(?:" + t + ")*$"),
                        lookbehind: !0,
                        inside: {
                          "table-data": {
                            pattern: RegExp(s),
                            inside: e.languages.markdown,
                          },
                          punctuation: /\|/,
                        },
                      },
                      "table-line": {
                        pattern: RegExp("^(" + t + ")" + o + "$"),
                        lookbehind: !0,
                        inside: { punctuation: /\||:?-{3,}:?/ },
                      },
                      "table-header-row": {
                        pattern: RegExp("^" + t + "$"),
                        inside: {
                          "table-header": {
                            pattern: RegExp(s),
                            alias: "important",
                            inside: e.languages.markdown,
                          },
                          punctuation: /\|/,
                        },
                      },
                    },
                  },
                  code: [
                    {
                      pattern:
                        /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                      lookbehind: !0,
                      alias: "keyword",
                    },
                    {
                      pattern: /^```[\s\S]*?^```$/m,
                      greedy: !0,
                      inside: {
                        "code-block": {
                          pattern:
                            /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                          lookbehind: !0,
                        },
                        "code-language": {
                          pattern: /^(```).+/,
                          lookbehind: !0,
                        },
                        punctuation: /```/,
                      },
                    },
                  ],
                  title: [
                    {
                      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                      alias: "important",
                      inside: { punctuation: /==+$|--+$/ },
                    },
                    {
                      pattern: /(^\s*)#.+/m,
                      lookbehind: !0,
                      alias: "important",
                      inside: { punctuation: /^#+|#+$/ },
                    },
                  ],
                  hr: {
                    pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                    lookbehind: !0,
                    alias: "punctuation",
                  },
                  list: {
                    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                    lookbehind: !0,
                    alias: "punctuation",
                  },
                  "url-reference": {
                    pattern:
                      /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                    inside: {
                      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                      string:
                        /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                      punctuation: /^[[\]!:]|[<>]/,
                    },
                    alias: "url",
                  },
                  bold: {
                    pattern: n(
                      "\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      content: {
                        pattern: /(^..)[\s\S]+(?=..$)/,
                        lookbehind: !0,
                        inside: {},
                      },
                      punctuation: /\*\*|__/,
                    },
                  },
                  italic: {
                    pattern: n(
                      "\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      content: {
                        pattern: /(^.)[\s\S]+(?=.$)/,
                        lookbehind: !0,
                        inside: {},
                      },
                      punctuation: /[*_]/,
                    },
                  },
                  strike: {
                    pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      content: {
                        pattern: /(^~~?)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: {},
                      },
                      punctuation: /~~?/,
                    },
                  },
                  "code-snippet": {
                    pattern:
                      /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                    lookbehind: !0,
                    greedy: !0,
                    alias: ["code", "keyword"],
                  },
                  url: {
                    pattern: n(
                      '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'
                    ),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      operator: /^!/,
                      content: {
                        pattern: /(^\[)[^\]]+(?=\])/,
                        lookbehind: !0,
                        inside: {},
                      },
                      variable: {
                        pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                        lookbehind: !0,
                      },
                      url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                      string: {
                        pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                        lookbehind: !0,
                      },
                    },
                  },
                }),
                ["url", "bold", "italic", "strike"].forEach(function (t) {
                  ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                    function (n) {
                      t !== n &&
                        (e.languages.markdown[t].inside.content.inside[n] =
                          e.languages.markdown[n]);
                    }
                  );
                }),
                e.hooks.add("after-tokenize", function (e) {
                  ("markdown" !== e.language && "md" !== e.language) ||
                    !(function e(t) {
                      if (t && "string" != typeof t)
                        for (var n, s, o, i, r, a = 0, c = t.length; a < c; a++)
                          (s = t[a]),
                            "code" === s.type
                              ? ((o = s.content[1]),
                                (n = s.content[3]),
                                o &&
                                  n &&
                                  "code-language" === o.type &&
                                  "code-block" === n.type &&
                                  "string" == typeof o.content &&
                                  ((r = o.content
                                    .replace(/\b#/g, "sharp")
                                    .replace(/\b\+\+/g, "pp")),
                                  (i =
                                    "language-" +
                                    (r = (/[a-z][\w-]*/i.exec(r) || [
                                      "",
                                    ])[0].toLowerCase())),
                                  n.alias
                                    ? "string" == typeof n.alias
                                      ? (n.alias = [n.alias, i])
                                      : n.alias.push(i)
                                    : (n.alias = [i])))
                              : e(s.content);
                    })(e.tokens);
                }),
                e.hooks.add("wrap", function (t) {
                  if ("code-block" === t.type) {
                    for (
                      var o, c, l, d, n = "", s = 0, u = t.classes.length;
                      s < u;
                      s++
                    )
                      if (
                        ((d = t.classes[s]), (o = /language-(.+)/.exec(d)), o)
                      ) {
                        n = o[1];
                        break;
                      }
                    (c = e.languages[n]),
                      c
                        ? (t.content = e.highlight(
                            (function (e) {
                              var t = e.replace(i, "");
                              return (t = t.replace(
                                /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                                function (e, t) {
                                  if ("#" === (t = t.toLowerCase())[0])
                                    return (
                                      (n =
                                        "x" === t[1]
                                          ? parseInt(t.slice(2), 16)
                                          : Number(t.slice(1))),
                                      r(n)
                                    );
                                  var n,
                                    s = a[t];
                                  return s || e;
                                }
                              ));
                            })(t.content),
                            c,
                            n
                          ))
                        : n &&
                          "none" !== n &&
                          e.plugins.autoloader &&
                          ((l =
                            "md-" +
                            new Date().valueOf() +
                            "-" +
                            Math.floor(1e16 * Math.random())),
                          (t.attributes.id = l),
                          e.plugins.autoloader.loadLanguages(n, function () {
                            var t = document.getElementById(l);
                            t &&
                              (t.innerHTML = e.highlight(
                                t.textContent,
                                e.languages[n],
                                n
                              ));
                          }));
                  }
                });
              var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
                a = { amp: "&", lt: "<", gt: ">", quot: '"' },
                r = String.fromCodePoint || String.fromCharCode;
              e.languages.md = e.languages.markdown;
            })(n),
            (n.languages.nasm = {
              comment: /;.*$/m,
              string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
              label: {
                pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
                lookbehind: !0,
                alias: "function",
              },
              keyword: [
                /\[?BITS (?:16|32|64)\]?/,
                { pattern: /(^\s*)section\s*[a-z.]+:?/im, lookbehind: !0 },
                /(?:extern|global)[^;\r\n]*/i,
                /(?:CPU|FLOAT|DEFAULT).*$/m,
              ],
              register: {
                pattern:
                  /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
                alias: "variable",
              },
              number:
                /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
              operator: /[[\]*+\-/%<>=&|$!]/,
            }),
            (n.languages.objectivec = n.languages.extend("c", {
              string:
                /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
              keyword:
                /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
              operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*/@]/,
            })),
            delete n.languages.objectivec["class-name"],
            (n.languages.objc = n.languages.objectivec),
            (n.languages.ocaml = {
              comment: /\(\*[\s\S]*?\*\)/,
              string: [
                { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
                {
                  pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
                  greedy: !0,
                },
              ],
              number:
                /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
              directive: { pattern: /\B#\w+/, alias: "important" },
              label: { pattern: /\B~\w+/, alias: "function" },
              "type-variable": { pattern: /\B'\w+/, alias: "function" },
              variant: { pattern: /`\w+/, alias: "variable" },
              module: { pattern: /\b[A-Z]\w+/, alias: "variable" },
              keyword:
                /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
              boolean: /\b(?:false|true)\b/,
              operator:
                /:=|[=<>@^|&+\-*/$%!?~][!$%&*+\-./:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
              punctuation: /[(){}[\]|.,:;]|\b_\b/,
            }),
            (n.languages.perl = {
              comment: [
                { pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: !0 },
                { pattern: /(^|[^\\$])#.*/, lookbehind: !0 },
              ],
              string: [
                {
                  pattern:
                    /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{([<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                  greedy: !0,
                },
                {
                  pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
                  greedy: !0,
                },
                {
                  pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
                  greedy: !0,
                },
                {
                  pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
                  greedy: !0,
                },
                {
                  pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
                  greedy: !0,
                },
                { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
                { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
              ],
              regex: [
                {
                  pattern:
                    /\b(?:m|qr)\s*([^a-zA-Z0-9\s{([<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{([<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern:
                    /\/(?:[^/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
                  greedy: !0,
                },
              ],
              variable: [
                /[&*$@%]\{\^[A-Z]+\}/,
                /[&*$@%]\^[A-Z_]/,
                /[&*$@%]#?(?=\{)/,
                /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/i,
                /[&*$@%]\d+/,
                /(?!%=)[$@%][!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
              ],
              filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol" },
              vstring: {
                pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
                alias: "string",
              },
              function: { pattern: /sub \w+/i, inside: { keyword: /sub/ } },
              keyword:
                /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
              number:
                /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
              operator:
                /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
              punctuation: /[{}[\];(),:]/,
            }),
            !(function (e) {
              var t,
                n,
                s = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
                o = [
                  { pattern: /\b(?:false|true)\b/i, alias: "boolean" },
                  {
                    pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                    greedy: !0,
                    lookbehind: !0,
                  },
                  /\b(?:null)\b/i,
                  /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
                ],
                i =
                  /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                a =
                  /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
                r = /[{}[\](),:;]/;
              (e.languages.php = {
                delimiter: {
                  pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                  alias: "important",
                },
                comment: s,
                variable: /\$+(?:\w+\b|(?=\{))/i,
                package: {
                  pattern:
                    /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                "class-name-definition": {
                  pattern:
                    /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                  lookbehind: !0,
                  alias: "class-name",
                },
                "function-definition": {
                  pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
                keyword: [
                  {
                    pattern:
                      /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                    alias: "type-casting",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                    alias: "type-hint",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                    alias: "type-hint",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                    alias: "return-type",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
                    alias: "return-type",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                    alias: "type-declaration",
                    greedy: !0,
                  },
                  {
                    pattern: /(\|\s*)(?:null|false)\b/i,
                    alias: "type-declaration",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                    alias: "static-context",
                    greedy: !0,
                  },
                  { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
                  /\bclass\b/i,
                  {
                    pattern:
                      /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                    lookbehind: !0,
                  },
                ],
                "argument-name": {
                  pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                  lookbehind: !0,
                },
                "class-name": [
                  {
                    pattern:
                      /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                    greedy: !0,
                    lookbehind: !0,
                  },
                  { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
                  {
                    pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                    alias: "class-name-fully-qualified",
                    greedy: !0,
                    lookbehind: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                    alias: "class-name-fully-qualified",
                    greedy: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern:
                      /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                    alias: "class-name-fully-qualified",
                    greedy: !0,
                    lookbehind: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                    alias: "type-declaration",
                    greedy: !0,
                  },
                  {
                    pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                    alias: ["class-name-fully-qualified", "type-declaration"],
                    greedy: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern: /\b[a-z_]\w*(?=\s*::)/i,
                    alias: "static-context",
                    greedy: !0,
                  },
                  {
                    pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                    alias: ["class-name-fully-qualified", "static-context"],
                    greedy: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                    alias: "type-hint",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                    alias: ["class-name-fully-qualified", "type-hint"],
                    greedy: !0,
                    lookbehind: !0,
                    inside: { punctuation: /\\/ },
                  },
                  {
                    pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                    alias: "return-type",
                    greedy: !0,
                    lookbehind: !0,
                  },
                  {
                    pattern:
                      /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                    alias: ["class-name-fully-qualified", "return-type"],
                    greedy: !0,
                    lookbehind: !0,
                    inside: { punctuation: /\\/ },
                  },
                ],
                constant: o,
                function: {
                  pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
                number: i,
                operator: a,
                punctuation: r,
              }),
                (t = {
                  pattern:
                    /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n[\]]+\]|->\w+)?)/,
                  lookbehind: !0,
                  inside: e.languages.php,
                }),
                (n = [
                  {
                    pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                    alias: "nowdoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: { punctuation: /^<<<'?|[';]$/ },
                      },
                    },
                  },
                  {
                    pattern:
                      /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: { punctuation: /^<<<"?|[";]$/ },
                      },
                      interpolation: t,
                    },
                  },
                  {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    alias: "backtick-quoted-string",
                    greedy: !0,
                  },
                  {
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    alias: "single-quoted-string",
                    greedy: !0,
                  },
                  {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    alias: "double-quoted-string",
                    greedy: !0,
                    inside: { interpolation: t },
                  },
                ]),
                e.languages.insertBefore("php", "variable", {
                  string: n,
                  attribute: {
                    pattern:
                      /#\[(?:[^"'/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                    greedy: !0,
                    inside: {
                      "attribute-content": {
                        pattern: /^(#\[)[\s\S]+(?=\]$)/,
                        lookbehind: !0,
                        inside: {
                          comment: s,
                          string: n,
                          "attribute-class-name": [
                            {
                              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                              alias: "class-name",
                              greedy: !0,
                              lookbehind: !0,
                            },
                            {
                              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                              alias: [
                                "class-name",
                                "class-name-fully-qualified",
                              ],
                              greedy: !0,
                              lookbehind: !0,
                              inside: { punctuation: /\\/ },
                            },
                          ],
                          constant: o,
                          number: i,
                          operator: a,
                          punctuation: r,
                        },
                      },
                      delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
                    },
                  },
                }),
                e.hooks.add("before-tokenize", function (t) {
                  /<\?/.test(t.code) &&
                    e.languages["markup-templating"].buildPlaceholders(
                      t,
                      "php",
                      /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi
                    );
                }),
                e.hooks.add("after-tokenize", function (t) {
                  e.languages["markup-templating"].tokenizePlaceholders(
                    t,
                    "php"
                  );
                });
            })(n),
            n.languages.insertBefore("php", "variable", {
              this: /\$this\b/,
              global:
                /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
              scope: {
                pattern: /\b[\w\\]+::/,
                inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
              },
            }),
            !(function () {
              var t = (n.languages.powershell = {
                  comment: [
                    { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
                    { pattern: /(^|[^`])#.*/, lookbehind: !0 },
                  ],
                  string: [
                    {
                      pattern: /"(?:`[\s\S]|[^`"])*"/,
                      greedy: !0,
                      inside: {
                        function: {
                          pattern:
                            /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
                          lookbehind: !0,
                          inside: {},
                        },
                      },
                    },
                    { pattern: /'(?:[^']|'')*'/, greedy: !0 },
                  ],
                  namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^[\]])*\]|[^[\]])*\]/i,
                  boolean: /\$(?:true|false)\b/i,
                  variable: /\$\w+\b/,
                  function: [
                    /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
                    /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
                  ],
                  keyword:
                    /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
                  operator: {
                    pattern:
                      /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*/%]=?)/i,
                    lookbehind: !0,
                  },
                  punctuation: /[|{}[\];(),.]/,
                }),
                s = t.string[0].inside;
              (s.boolean = t.boolean),
                (s.variable = t.variable),
                (s.function.inside = t);
            })(),
            (n.languages.processing = n.languages.extend("clike", {
              keyword:
                /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
              operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*/]=?/,
            })),
            n.languages.insertBefore("processing", "number", {
              constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
              type: {
                pattern:
                  /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
                alias: "variable",
              },
            }),
            (n.languages.processing.function = /\b\w+(?=\s*\()/),
            (n.languages.processing["class-name"].alias = "variable"),
            !(function (e) {
              e.languages.pug = {
                comment: {
                  pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
                  lookbehind: !0,
                },
                "multiline-script": {
                  pattern:
                    /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                  lookbehind: !0,
                  inside: e.languages.javascript,
                },
                filter: {
                  pattern:
                    /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                  lookbehind: !0,
                  inside: {
                    "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
                  },
                },
                "multiline-plain-text": {
                  pattern:
                    /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                  lookbehind: !0,
                },
                markup: {
                  pattern: /(^[\t ]*)<.+/m,
                  lookbehind: !0,
                  inside: e.languages.markup,
                },
                doctype: {
                  pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
                  lookbehind: !0,
                },
                "flow-control": {
                  pattern:
                    /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
                  lookbehind: !0,
                  inside: {
                    each: {
                      pattern: /^each .+? in\b/,
                      inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
                    },
                    branch: {
                      pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                      alias: "keyword",
                    },
                    rest: e.languages.javascript,
                  },
                },
                keyword: {
                  pattern:
                    /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
                  lookbehind: !0,
                },
                mixin: [
                  {
                    pattern: /(^[\t ]*)mixin .+/m,
                    lookbehind: !0,
                    inside: {
                      keyword: /^mixin/,
                      function: /\w+(?=\s*\(|\s*$)/,
                      punctuation: /[(),.]/,
                    },
                  },
                  {
                    pattern: /(^[\t ]*)\+.+/m,
                    lookbehind: !0,
                    inside: {
                      name: { pattern: /^\+\w+/, alias: "function" },
                      rest: e.languages.javascript,
                    },
                  },
                ],
                script: {
                  pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
                  lookbehind: !0,
                  inside: e.languages.javascript,
                },
                "plain-text": {
                  pattern:
                    /(^[\t ]*(?!-)[\w\-#.]*[\w-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
                  lookbehind: !0,
                },
                tag: {
                  pattern:
                    /(^[\t ]*)(?!-)[\w\-#.]*[\w-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                  lookbehind: !0,
                  inside: {
                    attributes: [
                      {
                        pattern: /&[^(]+\([^)]+\)/,
                        inside: e.languages.javascript,
                      },
                      {
                        pattern: /\([^)]+\)/,
                        inside: {
                          "attr-value": {
                            pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: e.languages.javascript,
                          },
                          "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                          punctuation: /[!=(),]+/,
                        },
                      },
                    ],
                    punctuation: /:/,
                    "attr-id": /#[\w-]+/,
                    "attr-class": /\.[\w-]+/,
                  },
                },
                code: [
                  {
                    pattern: /(^[\t ]*(?:-|!?=)).+/m,
                    lookbehind: !0,
                    inside: e.languages.javascript,
                  },
                ],
                punctuation: /[.\-!=|]+/,
              };
              for (
                var t,
                  s = [
                    { filter: "atpl", language: "twig" },
                    { filter: "coffee", language: "coffeescript" },
                    "ejs",
                    "handlebars",
                    "less",
                    "livescript",
                    "markdown",
                    { filter: "sass", language: "scss" },
                    "stylus",
                  ],
                  o = {},
                  n = 0,
                  i = s.length;
                n < i;
                n++
              )
                (t = s[n]),
                  (t = "string" == typeof t ? { filter: t, language: t } : t),
                  e.languages[t.language] &&
                    (o["filter-" + t.filter] = {
                      pattern: RegExp(
                        "(^([	 ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[	 ].+|\\s*?(?=\r?\n|\r)))+".replace(
                          "<filter_name>",
                          function () {
                            return t.filter;
                          }
                        ),
                        "m"
                      ),
                      lookbehind: !0,
                      inside: {
                        "filter-name": {
                          pattern: /^:[\w-]+/,
                          alias: "variable",
                        },
                        rest: e.languages[t.language],
                      },
                    });
              e.languages.insertBefore("pug", "filter", o);
            })(n),
            (n.languages.python = {
              comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
              "string-interpolation": {
                pattern:
                  /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                greedy: !0,
                inside: {
                  interpolation: {
                    pattern:
                      /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                    lookbehind: !0,
                    inside: {
                      "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0,
                      },
                      "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation",
                      },
                      rest: null,
                    },
                  },
                  string: /[\s\S]+/,
                },
              },
              "triple-quoted-string": {
                pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
                greedy: !0,
                alias: "string",
              },
              string: {
                pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                greedy: !0,
              },
              function: {
                pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                lookbehind: !0,
              },
              "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
              decorator: {
                pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
                lookbehind: !0,
                alias: ["annotation", "punctuation"],
                inside: { punctuation: /\./ },
              },
              keyword:
                /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
              builtin:
                /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
              boolean: /\b(?:True|False|None)\b/,
              number:
                /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,
              operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
              punctuation: /[{}[\];(),.:]/,
            }),
            (n.languages.python[
              "string-interpolation"
            ].inside.interpolation.inside.rest = n.languages.python),
            (n.languages.py = n.languages.python),
            (n.languages.r = {
              comment: /#.*/,
              string: {
                pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
              boolean: /\b(?:TRUE|FALSE)\b/,
              ellipsis: /\.\.(?:\.|\d+)/,
              number: [
                /\b(?:NaN|Inf)\b/,
                /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
              ],
              keyword:
                /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
              operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*/^$@~]/,
              punctuation: /[(){}[\],;]/,
            }),
            !(function (e) {
              var t,
                o,
                i = e.util.clone(e.languages.javascript),
                s = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
              function n(e, t) {
                return (
                  (e = e
                    .replace(/<S>/g, function () {
                      return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
                    })
                    .replace(/<BRACES>/g, function () {
                      return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
                    })
                    .replace(/<SPREAD>/g, function () {
                      return s;
                    })),
                  RegExp(e, t)
                );
              }
              (s = n(s).source),
                (e.languages.jsx = e.languages.extend("markup", i)),
                (e.languages.jsx.tag.pattern = n(
                  `</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`
                )),
                (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>/]*/i),
                (e.languages.jsx.tag.inside["attr-value"].pattern =
                  /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i),
                (e.languages.jsx.tag.inside.tag.inside["class-name"] =
                  /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
                (e.languages.jsx.tag.inside.comment = i.comment),
                e.languages.insertBefore(
                  "inside",
                  "attr-name",
                  {
                    spread: { pattern: n("<SPREAD>"), inside: e.languages.jsx },
                  },
                  e.languages.jsx.tag
                ),
                e.languages.insertBefore(
                  "inside",
                  "special-attr",
                  {
                    script: {
                      pattern: n("=<BRACES>"),
                      inside: {
                        "script-punctuation": {
                          pattern: /^=(?=\{)/,
                          alias: "punctuation",
                        },
                        rest: e.languages.jsx,
                      },
                      alias: "language-javascript",
                    },
                  },
                  e.languages.jsx.tag
                ),
                (t = function (e) {
                  return e
                    ? "string" == typeof e
                      ? e
                      : "string" == typeof e.content
                      ? e.content
                      : e.content.map(t).join("")
                    : "";
                }),
                (o = function (n) {
                  for (var s, r, c, i = [], a = 0; a < n.length; a++)
                    (s = n[a]),
                      (c = !1),
                      ("string" != typeof s &&
                        ("tag" === s.type &&
                        s.content[0] &&
                        "tag" === s.content[0].type
                          ? "</" === s.content[0].content[0].content
                            ? 0 < i.length &&
                              i[i.length - 1].tagName ===
                                t(s.content[0].content[1]) &&
                              i.pop()
                            : "/>" ===
                                s.content[s.content.length - 1].content ||
                              i.push({
                                tagName: t(s.content[0].content[1]),
                                openedBraces: 0,
                              })
                          : 0 < i.length &&
                            "punctuation" === s.type &&
                            "{" === s.content
                          ? i[i.length - 1].openedBraces++
                          : 0 < i.length &&
                            0 < i[i.length - 1].openedBraces &&
                            "punctuation" === s.type &&
                            "}" === s.content
                          ? i[i.length - 1].openedBraces--
                          : (c = !0)),
                      (c || "string" == typeof s) &&
                        0 < i.length &&
                        0 === i[i.length - 1].openedBraces) &&
                        ((r = t(s)),
                        a < n.length - 1 &&
                          ("string" == typeof n[a + 1] ||
                            "plain-text" === n[a + 1].type) &&
                          ((r += t(n[a + 1])), n.splice(a + 1, 1)),
                        0 < a &&
                          ("string" == typeof n[a - 1] ||
                            "plain-text" === n[a - 1].type) &&
                          ((r = t(n[a - 1]) + r), n.splice(a - 1, 1), a--),
                        (n[a] = new e.Token("plain-text", r, null, r))),
                      s.content && "string" != typeof s.content && o(s.content);
                }),
                e.hooks.add("after-tokenize", function (e) {
                  ("jsx" !== e.language && "tsx" !== e.language) || o(e.tokens);
                });
            })(n),
            !(function (e) {
              (e.languages.typescript = e.languages.extend("javascript", {
                "class-name": {
                  pattern:
                    /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: null,
                },
                builtin:
                  /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
              })),
                e.languages.typescript.keyword.push(
                  /\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
                  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
                  /\btype\b(?=\s*(?:[{*]|$))/
                ),
                delete e.languages.typescript.parameter;
              var t = e.languages.extend("typescript", {});
              delete t["class-name"],
                (e.languages.typescript["class-name"].inside = t),
                e.languages.insertBefore("typescript", "function", {
                  decorator: {
                    pattern: /@[$\w\xA0-\uFFFF]+/,
                    inside: {
                      at: { pattern: /^@/, alias: "operator" },
                      function: /^[\s\S]+/,
                    },
                  },
                  "generic-function": {
                    pattern:
                      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                    greedy: !0,
                    inside: {
                      function:
                        /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                      generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: t,
                      },
                    },
                  },
                }),
                (e.languages.ts = e.languages.typescript);
            })(n),
            !(function (e) {
              var t,
                n = e.util.clone(e.languages.typescript);
              (e.languages.tsx = e.languages.extend("jsx", n)),
                (t = e.languages.tsx.tag),
                (t.pattern = RegExp(
                  "(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")",
                  t.pattern.flags
                )),
                (t.lookbehind = !0);
            })(n),
            (n.languages.reason = n.languages.extend("clike", {
              string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0,
              },
              "class-name": /\b[A-Z]\w*/,
              keyword:
                /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
              operator:
                /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
            })),
            n.languages.insertBefore("reason", "class-name", {
              character: {
                pattern:
                  /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                alias: "string",
              },
              constructor: {
                pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
                alias: "variable",
              },
              label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
            }),
            delete n.languages.reason.function,
            !(function (e) {
              for (
                var t = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", n = 0;
                n < 2;
                n++
              )
                t = t.replace(/<self>/g, function () {
                  return t;
                });
              (t = t.replace(/<self>/g, function () {
                return "[^\\s\\S]";
              })),
                (e.languages.rust = {
                  comment: [
                    {
                      pattern: RegExp("(^|[^\\\\])" + t),
                      lookbehind: !0,
                      greedy: !0,
                    },
                    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                  ],
                  string: {
                    pattern:
                      /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                    greedy: !0,
                  },
                  char: {
                    pattern:
                      /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                    greedy: !0,
                    alias: "string",
                  },
                  attribute: {
                    pattern: /#!?\[(?:[^[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                    greedy: !0,
                    alias: "attr-name",
                    inside: { string: null },
                  },
                  "closure-params": {
                    pattern:
                      /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                      "closure-punctuation": {
                        pattern: /^\||\|$/,
                        alias: "punctuation",
                      },
                      rest: null,
                    },
                  },
                  "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" },
                  "fragment-specifier": {
                    pattern: /(\$\w+:)[a-z]+/,
                    lookbehind: !0,
                    alias: "punctuation",
                  },
                  variable: /\$\w+/,
                  "function-definition": {
                    pattern: /(\bfn\s+)\w+/,
                    lookbehind: !0,
                    alias: "function",
                  },
                  "type-definition": {
                    pattern: /(\b(?:enum|struct|union)\s+)\w+/,
                    lookbehind: !0,
                    alias: "class-name",
                  },
                  "module-declaration": [
                    {
                      pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                      lookbehind: !0,
                      alias: "namespace",
                    },
                    {
                      pattern:
                        /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                      lookbehind: !0,
                      alias: "namespace",
                      inside: { punctuation: /::/ },
                    },
                  ],
                  keyword: [
                    /\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                    /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/,
                  ],
                  function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                  macro: { pattern: /\b\w+!/, alias: "property" },
                  constant: /\b[A-Z_][A-Z_\d]+\b/,
                  "class-name": /\b[A-Z]\w*\b/,
                  namespace: {
                    pattern:
                      /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                    inside: { punctuation: /::/ },
                  },
                  number:
                    /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
                  boolean: /\b(?:false|true)\b/,
                  punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                  operator:
                    /[-+*/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
                }),
                (e.languages.rust["closure-params"].inside.rest =
                  e.languages.rust),
                (e.languages.rust.attribute.inside.string =
                  e.languages.rust.string);
            })(n),
            !(function (e) {
              (e.languages.sass = e.languages.extend("css", {
                comment: {
                  pattern: /^([ \t]*)\/[/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
                  lookbehind: !0,
                  greedy: !0,
                },
              })),
                e.languages.insertBefore("sass", "atrule", {
                  "atrule-line": {
                    pattern: /^(?:[ \t]*)[@+=].+/m,
                    greedy: !0,
                    inside: { atrule: /(?:@[\w-]+|[+=])/m },
                  },
                }),
                delete e.languages.sass.atrule;
              var t = /\$[-\w]+|#\{\$[-\w]+\}/,
                n = [
                  /[+*/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
                  { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
                ];
              e.languages.insertBefore("sass", "property", {
                "variable-line": {
                  pattern: /^[ \t]*\$.+/m,
                  greedy: !0,
                  inside: { punctuation: /:/, variable: t, operator: n },
                },
                "property-line": {
                  pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                  greedy: !0,
                  inside: {
                    property: [
                      /[^:\s]+(?=\s*:)/,
                      { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                    ],
                    punctuation: /:/,
                    variable: t,
                    operator: n,
                    important: e.languages.sass.important,
                  },
                },
              }),
                delete e.languages.sass.property,
                delete e.languages.sass.important,
                e.languages.insertBefore("sass", "punctuation", {
                  selector: {
                    pattern:
                      /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                    lookbehind: !0,
                    greedy: !0,
                  },
                });
            })(n),
            (n.languages.scss = n.languages.extend("css", {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              atrule: {
                pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
                inside: { rule: /@[\w-]+/ },
              },
              url: /(?:[-a-z]+-)?url(?=\()/i,
              selector: {
                pattern:
                  /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
                inside: {
                  parent: { pattern: /&/, alias: "important" },
                  placeholder: /%[-\w]+/,
                  variable: /\$[-\w]+|#\{\$[-\w]+\}/,
                },
              },
              property: {
                pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
                inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
              },
            })),
            n.languages.insertBefore("scss", "atrule", {
              keyword: [
                /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
                { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
              ],
            }),
            n.languages.insertBefore("scss", "important", {
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            }),
            n.languages.insertBefore("scss", "function", {
              "module-modifier": {
                pattern: /\b(?:as|with|show|hide)\b/i,
                alias: "keyword",
              },
              placeholder: { pattern: /%[-\w]+/, alias: "selector" },
              statement: {
                pattern: /\B!(?:default|optional)\b/i,
                alias: "keyword",
              },
              boolean: /\b(?:true|false)\b/,
              null: { pattern: /\bnull\b/, alias: "keyword" },
              operator: {
                pattern: /(\s)(?:[-+*/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                lookbehind: !0,
              },
            }),
            (n.languages.scss.atrule.inside.rest = n.languages.scss),
            (n.languages.scala = n.languages.extend("java", {
              "triple-quoted-string": {
                pattern: /"""[\s\S]*?"""/,
                greedy: !0,
                alias: "string",
              },
              string: {
                pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              keyword:
                /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
              number:
                /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
              builtin:
                /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
              symbol: /'[^\d\s\\]\w*/,
            })),
            delete n.languages.scala["class-name"],
            delete n.languages.scala.function,
            (n.languages.scheme = {
              comment:
                /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^[\]]|\[[^[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
              string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0 },
              symbol: { pattern: /'[^()[\]#'\s]+/, greedy: !0 },
              character: {
                pattern:
                  /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
                greedy: !0,
                alias: "string",
              },
              "lambda-parameter": [
                {
                  pattern:
                    /((?:^|[^'`#])[([]lambda\s+)(?:[^|()[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,
                  lookbehind: !0,
                },
                {
                  pattern: /((?:^|[^'`#])[([]lambda\s+[([])[^()[\]']+/,
                  lookbehind: !0,
                },
              ],
              keyword: {
                pattern:
                  /((?:^|[^'`#])[([])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|export|except|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()[\]\s]|$)/,
                lookbehind: !0,
              },
              builtin: {
                pattern:
                  /((?:^|[^'`#])[([])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()[\]\s]|$)/,
                lookbehind: !0,
              },
              operator: {
                pattern:
                  /((?:^|[^'`#])[([])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,
                lookbehind: !0,
              },
              number: {
                pattern: RegExp(
                  (function (e) {
                    for (var t in e)
                      e[t] = e[t].replace(/<[\w\s]+>/g, function (t) {
                        return "(?:" + e[t].trim() + ")";
                      });
                    return e[t];
                  })({
                    "<ureal dec>":
                      "\\d+(?:/\\d+)|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?",
                    "<real dec>": "[+-]?<ureal dec>|[+-](?:inf|nan)\\.0",
                    "<imaginary dec>": "[+-](?:<ureal dec>|(?:inf|nan)\\.0)?i",
                    "<complex dec>":
                      "<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>",
                    "<num dec>": "(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>",
                    "<ureal box>": "[0-9a-f]+(?:/[0-9a-f]+)?",
                    "<real box>": "[+-]?<ureal box>|[+-](?:inf|nan)\\.0",
                    "<imaginary box>": "[+-](?:<ureal box>|(?:inf|nan)\\.0)?i",
                    "<complex box>":
                      "<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>",
                    "<num box>":
                      "#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>",
                    "<number>":
                      "(^|[()\\[\\]\\s])(?:<num dec>|<num box>)(?=[()\\[\\]\\s]|$)",
                  }),
                  "i"
                ),
                lookbehind: !0,
              },
              boolean: {
                pattern: /(^|[()[\]\s])#(?:[ft]|false|true)(?=[()[\]\s]|$)/,
                lookbehind: !0,
              },
              function: {
                pattern:
                  /((?:^|[^'`#])[([])(?:[^|()[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()[\]\s]|$)/,
                lookbehind: !0,
              },
              identifier: {
                pattern: /(^|[()[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()[\]\s]|$)/,
                lookbehind: !0,
                greedy: !0,
              },
              punctuation: /[()[\]']/,
            }),
            (n.languages.sql = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                lookbehind: !0,
              },
              variable: [
                { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
                /@[\w.$]+/,
              ],
              string: {
                pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                greedy: !0,
                lookbehind: !0,
              },
              function:
                /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
              keyword:
                /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
              boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
              number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
              operator:
                /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
              punctuation: /[;[\]()`,.]/,
            }),
            !(function (e) {
              var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
                s = {
                  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                  lookbehind: !0,
                },
                t = {
                  comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
                  string: {
                    pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                    greedy: !0,
                  },
                  interpolation: null,
                  func: null,
                  important: /\B!(?:important|optional)\b/i,
                  keyword: {
                    pattern:
                      /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s|$)|@[\w-]+)/,
                    lookbehind: !0,
                  },
                  hexcode: /#[\da-f]{3,6}/i,
                  color: [
                    /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                    {
                      pattern:
                        /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                      inside: {
                        unit: n,
                        number: s,
                        function: /[\w-]+(?=\()/,
                        punctuation: /[(),]/,
                      },
                    },
                  ],
                  entity: /\\[\da-f]{1,8}/i,
                  unit: n,
                  boolean: /\b(?:true|false)\b/,
                  operator: [
                    /~|[+!/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
                  ],
                  number: s,
                  punctuation: /[{}()[\];:,]/,
                };
              (t.interpolation = {
                pattern: /\{[^\r\n}:]+\}/,
                alias: "variable",
                inside: {
                  delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
                  rest: t,
                },
              }),
                (t.func = {
                  pattern: /[\w-]+\([^)]*\).*/,
                  inside: { function: /^[^(]+/, rest: t },
                }),
                (e.languages.stylus = {
                  "atrule-declaration": {
                    pattern: /(^[ \t]*)@.+/m,
                    lookbehind: !0,
                    inside: { atrule: /^@[\w-]+/, rest: t },
                  },
                  "variable-declaration": {
                    pattern:
                      /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                    lookbehind: !0,
                    inside: { variable: /^\S+/, rest: t },
                  },
                  statement: {
                    pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                    lookbehind: !0,
                    inside: { keyword: /^\S+/, rest: t },
                  },
                  "property-declaration": {
                    pattern:
                      /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                    lookbehind: !0,
                    inside: {
                      property: {
                        pattern: /^[^\s:]+/,
                        inside: { interpolation: t.interpolation },
                      },
                      rest: t,
                    },
                  },
                  selector: {
                    pattern:
                      /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                    lookbehind: !0,
                    inside: {
                      interpolation: t.interpolation,
                      comment: t.comment,
                      punctuation: /[{},]/,
                    },
                  },
                  func: t.func,
                  string: t.string,
                  comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0,
                    greedy: !0,
                  },
                  interpolation: t.interpolation,
                  punctuation: /[{}()[\];:.]/,
                });
            })(n),
            (n.languages.swift = {
              comment: {
                pattern:
                  /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                lookbehind: !0,
                greedy: !0,
              },
              "string-literal": [
                {
                  pattern:
                    RegExp(`(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|
|[^(])|[^\\\\
"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])`),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    interpolation: {
                      pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                      lookbehind: !0,
                      inside: null,
                    },
                    "interpolation-punctuation": {
                      pattern: /^\)|\\\($/,
                      alias: "punctuation",
                    },
                    punctuation: /\\(?=[\r\n])/,
                    string: /[\s\S]+/,
                  },
                },
                {
                  pattern: RegExp(
                    '(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    interpolation: {
                      pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                      lookbehind: !0,
                      inside: null,
                    },
                    "interpolation-punctuation": {
                      pattern: /^\)|\\#+\($/,
                      alias: "punctuation",
                    },
                    string: /[\s\S]+/,
                  },
                },
              ],
              directive: {
                pattern: RegExp(
                  "#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ 	]*)?(?:\\b\\w+\\b(?:[ 	]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ 	]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"
                ),
                alias: "property",
                inside: {
                  "directive-name": /^#\w+/,
                  boolean: /\b(?:true|false)\b/,
                  number: /\b\d+(?:\.\d+)*\b/,
                  operator: /!|&&|\|\||[<>]=?/,
                  punctuation: /[(),]/,
                },
              },
              literal: {
                pattern:
                  /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                alias: "constant",
              },
              "other-directive": { pattern: /#\w+\b/, alias: "property" },
              attribute: { pattern: /@\w+/, alias: "atrule" },
              "function-definition": {
                pattern: /(\bfunc\s+)\w+/,
                lookbehind: !0,
                alias: "function",
              },
              label: {
                pattern:
                  /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                lookbehind: !0,
                alias: "important",
              },
              keyword:
                /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
              boolean: /\b(?:true|false)\b/,
              nil: { pattern: /\bnil\b/, alias: "constant" },
              "short-argument": /\$\d+\b/,
              omit: { pattern: /\b_\b/, alias: "keyword" },
              number:
                /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
              "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
              function: /\b[a-z_]\w*(?=\s*\()/i,
              constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
              operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
              punctuation: /[{}[\]();,.:\\]/,
            }),
            n.languages.swift["string-literal"].forEach(function (e) {
              e.inside.interpolation.inside = n.languages.swift;
            }),
            !(function (e) {
              function t(e, t) {
                return RegExp(
                  e
                    .replace(/<MOD>/g, function () {
                      return `(?:\\([^|()
]+\\)|\\[[^\\]
]+\\]|\\{[^}
]+\\})`;
                    })
                    .replace(/<PAR>/g, function () {
                      return `(?:\\)|\\((?![^|()
]+\\)))`;
                    }),
                  t || ""
                );
              }
              var o,
                a,
                i = {
                  css: {
                    pattern: /\{[^{}]+\}/,
                    inside: { rest: e.languages.css },
                  },
                  "class-id": {
                    pattern: /(\()[^()]+(?=\))/,
                    lookbehind: !0,
                    alias: "attr-value",
                  },
                  lang: {
                    pattern: /(\[)[^[\]]+(?=\])/,
                    lookbehind: !0,
                    alias: "attr-value",
                  },
                  punctuation: /[\\/]\d+|\S/,
                },
                r = (e.languages.textile = e.languages.extend("markup", {
                  phrase: {
                    pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                    lookbehind: !0,
                    inside: {
                      "block-tag": {
                        pattern: t("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),
                        inside: {
                          modifier: {
                            pattern: t(
                              "(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"
                            ),
                            lookbehind: !0,
                            inside: i,
                          },
                          tag: /^[a-z]\w*/,
                          punctuation: /\.$/,
                        },
                      },
                      list: {
                        pattern: t("^[*#]+<MOD>*\\s+\\S.*", "m"),
                        inside: {
                          modifier: {
                            pattern: t("(^[*#]+)<MOD>+"),
                            lookbehind: !0,
                            inside: i,
                          },
                          punctuation: /^[*#]+/,
                        },
                      },
                      table: {
                        pattern: t(
                          "^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|",
                          "m"
                        ),
                        inside: {
                          modifier: {
                            pattern: t(`(^|\\|(?:
?
|
)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)`),
                            lookbehind: !0,
                            inside: i,
                          },
                          punctuation: /\||^\./,
                        },
                      },
                      inline: {
                        pattern: t(
                          "(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"
                        ),
                        lookbehind: !0,
                        inside: {
                          bold: {
                            pattern: t("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),
                            lookbehind: !0,
                          },
                          italic: {
                            pattern: t("(^(__?)<MOD>*).+?(?=\\2)"),
                            lookbehind: !0,
                          },
                          cite: {
                            pattern: t("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),
                            lookbehind: !0,
                            alias: "string",
                          },
                          code: {
                            pattern: t("(^@<MOD>*).+?(?=@)"),
                            lookbehind: !0,
                            alias: "keyword",
                          },
                          inserted: {
                            pattern: t("(^\\+<MOD>*).+?(?=\\+)"),
                            lookbehind: !0,
                          },
                          deleted: {
                            pattern: t("(^-<MOD>*).+?(?=-)"),
                            lookbehind: !0,
                          },
                          span: {
                            pattern: t("(^%<MOD>*).+?(?=%)"),
                            lookbehind: !0,
                          },
                          modifier: {
                            pattern: t(
                              "(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"
                            ),
                            lookbehind: !0,
                            inside: i,
                          },
                          punctuation: /[*_%?@+\-^~]+/,
                        },
                      },
                      "link-ref": {
                        pattern: /^\[[^\]]+\]\S+$/m,
                        inside: {
                          string: {
                            pattern: /(^\[)[^\]]+(?=\])/,
                            lookbehind: !0,
                          },
                          url: { pattern: /(^\])\S+$/, lookbehind: !0 },
                          punctuation: /[[\]]/,
                        },
                      },
                      link: {
                        pattern: t('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                        inside: {
                          text: {
                            pattern: t('(^"<MOD>*)[^"]+(?=")'),
                            lookbehind: !0,
                          },
                          modifier: {
                            pattern: t('(^")<MOD>+'),
                            lookbehind: !0,
                            inside: i,
                          },
                          url: { pattern: /(:).+/, lookbehind: !0 },
                          punctuation: /[":]/,
                        },
                      },
                      image: {
                        pattern: t(
                          "!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"
                        ),
                        inside: {
                          source: {
                            pattern: t(
                              "(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)"
                            ),
                            lookbehind: !0,
                            alias: "url",
                          },
                          modifier: {
                            pattern: t("(^!)(?:<MOD>|<PAR>|[<>=])+"),
                            lookbehind: !0,
                            inside: i,
                          },
                          url: { pattern: /(:).+/, lookbehind: !0 },
                          punctuation: /[!:]/,
                        },
                      },
                      footnote: {
                        pattern: /\b\[\d+\]/,
                        alias: "comment",
                        inside: { punctuation: /\[|\]/ },
                      },
                      acronym: {
                        pattern: /\b[A-Z\d]+\([^)]+\)/,
                        inside: {
                          comment: {
                            pattern: /(\()[^()]+(?=\))/,
                            lookbehind: !0,
                          },
                          punctuation: /[()]/,
                        },
                      },
                      mark: {
                        pattern: /\b\((?:TM|R|C)\)/,
                        alias: "comment",
                        inside: { punctuation: /[()]/ },
                      },
                    },
                  },
                })),
                s = r.phrase.inside,
                n = {
                  inline: s.inline,
                  link: s.link,
                  image: s.image,
                  footnote: s.footnote,
                  acronym: s.acronym,
                  mark: s.mark,
                };
              (r.tag.pattern =
                /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
                (a = s.inline.inside),
                (a.bold.inside = n),
                (a.italic.inside = n),
                (a.inserted.inside = n),
                (a.deleted.inside = n),
                (a.span.inside = n),
                (o = s.table.inside),
                (o.inline = n.inline),
                (o.link = n.link),
                (o.image = n.image),
                (o.footnote = n.footnote),
                (o.acronym = n.acronym),
                (o.mark = n.mark);
            })(n),
            !(function (e) {
              function t(e) {
                return e.replace(/__/g, function () {
                  return `(?:[\\w-]+|'[^'

]*'|"(?:\\\\.|[^\\\\"
])*")`;
                });
              }
              e.languages.toml = {
                comment: { pattern: /#.*/, greedy: !0 },
                table: {
                  pattern: RegExp(
                    t(
                      "(^[	 ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"
                    ),
                    "m"
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  alias: "class-name",
                },
                key: {
                  pattern: RegExp(
                    t("(^[	 ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"),
                    "m"
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  alias: "property",
                },
                string: {
                  pattern:
                    /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
                  greedy: !0,
                },
                date: [
                  {
                    pattern:
                      /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
                    alias: "number",
                  },
                  {
                    pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
                    alias: "number",
                  },
                ],
                number:
                  /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
                boolean: /\b(?:true|false)\b/,
                punctuation: /[.,=[\]{}]/,
              };
            })(n),
            (n.languages.twig = {
              comment: /\{#[\s\S]*?#\}/,
              tag: {
                pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
                inside: {
                  ld: {
                    pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
                    inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ },
                  },
                  rd: {
                    pattern: /-?(?:%\}|\}\})$/,
                    inside: { punctuation: /.+/ },
                  },
                  string: {
                    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    inside: { punctuation: /^['"]|['"]$/ },
                  },
                  keyword: /\b(?:even|if|odd)\b/,
                  boolean: /\b(?:true|false|null)\b/,
                  number:
                    /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
                  operator: [
                    {
                      pattern:
                        /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                      lookbehind: !0,
                    },
                    /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
                  ],
                  property: /\b[a-zA-Z_]\w*\b/,
                  punctuation: /[()[\]{}:.,]/,
                },
              },
              other: {
                pattern: /\S(?:[\s\S]*\S)?/,
                inside: n.languages.markup,
              },
            }),
            (n.languages.vim = {
              string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
              comment: /".*/,
              function: /\b\w+(?=\()/,
              keyword:
                /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
              builtin:
                /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
              number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
              operator:
                /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*/%?]|\b(?:is(?:not)?)\b/,
              punctuation: /[{}[\](),;:]/,
            }),
            (n.languages["visual-basic"] = {
              comment: {
                pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
                inside: { keyword: /^REM/i },
              },
              directive: {
                pattern:
                  /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
                alias: "comment",
                greedy: !0,
              },
              string: {
                pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
                greedy: !0,
              },
              date: {
                pattern:
                  /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i,
                alias: "builtin",
              },
              number:
                /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
              boolean: /\b(?:True|False|Nothing)\b/i,
              keyword:
                /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i,
              operator: [
                /[+\-*/\\^<=>&#@$%!]/,
                { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: !0 },
              ],
              punctuation: /[{}().,:?]/,
            }),
            (n.languages.vb = n.languages["visual-basic"]),
            (n.languages.vba = n.languages["visual-basic"]),
            (n.languages.wasm = {
              comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
              string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
              keyword: [
                { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
                {
                  pattern:
                    /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
                  inside: { punctuation: /\./ },
                },
                /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
              ],
              variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/i,
              number:
                /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
              punctuation: /[()]/,
            }),
            !(function (e) {
              var n = /[*&][^\s[\]{},]+/,
                s =
                  /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                o =
                  "(?:" +
                  s.source +
                  "(?:[ 	]+" +
                  n.source +
                  ")?|" +
                  n.source +
                  "(?:[ 	]+" +
                  s.source +
                  ")?)",
                a =
                  "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(
                    /<PLAIN>/g,
                    function () {
                      return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
                    }
                  ),
                i = `"(?:[^"\\\\
]|\\\\.)*"|'(?:[^'\\\\
]|\\\\.)*'`;
              function t(e, t) {
                t = (t || "").replace(/m/g, "") + "m";
                var n =
                  `([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[
]\\s*)?#))`
                    .replace(/<<prop>>/g, function () {
                      return o;
                    })
                    .replace(/<<value>>/g, function () {
                      return e;
                    });
                return RegExp(n, t);
              }
              (e.languages.yaml = {
                scalar: {
                  pattern: RegExp(
                    "([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?\n|\r)[ 	]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(
                      /<<prop>>/g,
                      function () {
                        return o;
                      }
                    )
                  ),
                  lookbehind: !0,
                  alias: "string",
                },
                comment: /#.*/,
                key: {
                  pattern: RegExp(
                    `((?:^|[:\\-,[{
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`
                      .replace(/<<prop>>/g, function () {
                        return o;
                      })
                      .replace(/<<key>>/g, function () {
                        return "(?:" + a + "|" + i + ")";
                      })
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  alias: "atrule",
                },
                directive: {
                  pattern: /(^[ \t]*)%.+/m,
                  lookbehind: !0,
                  alias: "important",
                },
                datetime: {
                  pattern: t(
                    "\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"
                  ),
                  lookbehind: !0,
                  alias: "number",
                },
                boolean: {
                  pattern: t("true|false", "i"),
                  lookbehind: !0,
                  alias: "important",
                },
                null: {
                  pattern: t("null|~", "i"),
                  lookbehind: !0,
                  alias: "important",
                },
                string: { pattern: t(i), lookbehind: !0, greedy: !0 },
                number: {
                  pattern: t(
                    "[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)",
                    "i"
                  ),
                  lookbehind: !0,
                },
                tag: s,
                important: n,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
              }),
                (e.languages.yml = e.languages.yaml);
            })(n),
            !(function () {
              if (
                "undefined" != typeof n &&
                "undefined" != typeof document &&
                document.querySelector
              ) {
                var s,
                  r = "line-numbers",
                  e = "linkable-line-numbers",
                  h = function () {
                    if (void 0 === s) {
                      var e = document.createElement("div");
                      (e.style.fontSize = "13px"),
                        (e.style.lineHeight = "1.5"),
                        (e.style.padding = "0"),
                        (e.style.border = "0"),
                        (e.innerHTML = "&nbsp;<br />&nbsp;"),
                        document.body.appendChild(e),
                        (s = 38 === e.offsetHeight),
                        document.body.removeChild(e);
                    }
                    return s;
                  },
                  o = !0,
                  c = 0;
                n.hooks.add("before-sanity-check", function (e) {
                  var n,
                    s = e.element.parentElement;
                  i(s) &&
                    ((n = 0),
                    t(".line-highlight", s).forEach(function (e) {
                      (n += e.textContent.length), e.parentNode.removeChild(e);
                    }),
                    n &&
                      /^(?: \n)+$/.test(e.code.slice(-n)) &&
                      (e.code = e.code.slice(0, -n)));
                }),
                  n.hooks.add("complete", function e(t) {
                    if (((s = t.element.parentElement), i(s))) {
                      clearTimeout(c);
                      var s,
                        o = n.plugins.lineNumbers,
                        d = t.plugins && t.plugins.lineNumbers;
                      l(s, r) && o && !d
                        ? n.hooks.add("line-numbers", e)
                        : (a(s)(), (c = setTimeout(u, 1)));
                    }
                  }),
                  window.addEventListener("hashchange", u),
                  window.addEventListener("resize", function () {
                    t("pre")
                      .filter(i)
                      .map(function (e) {
                        return a(e);
                      })
                      .forEach(d);
                  });
              }
              function t(e, t) {
                return Array.prototype.slice.call(
                  (t || document).querySelectorAll(e)
                );
              }
              function l(e, t) {
                return e.classList.contains(t);
              }
              function d(e) {
                e();
              }
              function i(t) {
                return (
                  !!t &&
                  !!/pre/i.test(t.nodeName) &&
                  (!!t.hasAttribute("data-line") ||
                    (!!t.id && !!n.util.isActive(t, e)))
                );
              }
              function a(s, i, a) {
                var f,
                  v,
                  b = (i =
                    "string" == typeof i
                      ? i
                      : s.getAttribute("data-line") || "")
                    .replace(/\s+/g, "")
                    .split(",")
                    .filter(Boolean),
                  j = +s.getAttribute("data-line-offset") || 0,
                  y = (h() ? parseInt : parseFloat)(
                    getComputedStyle(s).lineHeight
                  ),
                  m = n.util.isActive(s, r),
                  u = s.querySelector("code"),
                  p = m ? s : u || s,
                  c = [],
                  g =
                    u && p != u
                      ? (function (e, t) {
                          var o = getComputedStyle(e),
                            s = getComputedStyle(t);
                          function n(e) {
                            return +e.substr(0, e.length - 2);
                          }
                          return (
                            t.offsetTop +
                            n(s.borderTopWidth) +
                            n(s.paddingTop) -
                            n(o.paddingTop)
                          );
                        })(s, u)
                      : 0;
                return (
                  b.forEach(function (e) {
                    var r,
                      l,
                      u,
                      h,
                      d = e.split("-"),
                      o = +d[0],
                      i = +d[1] || o,
                      t =
                        s.querySelector(
                          '.line-highlight[data-range="' + e + '"]'
                        ) || document.createElement("div");
                    c.push(function () {
                      t.setAttribute("aria-hidden", "true"),
                        t.setAttribute("data-range", e),
                        (t.className = (a || "") + " line-highlight");
                    }),
                      m && n.plugins.lineNumbers
                        ? ((r = n.plugins.lineNumbers.getLine(s, o)),
                          (l = n.plugins.lineNumbers.getLine(s, i)),
                          r &&
                            ((u = r.offsetTop + g + "px"),
                            c.push(function () {
                              t.style.top = u;
                            })),
                          l &&
                            ((h =
                              l.offsetTop -
                              r.offsetTop +
                              l.offsetHeight +
                              "px"),
                            c.push(function () {
                              t.style.height = h;
                            })))
                        : c.push(function () {
                            t.setAttribute("data-start", String(o)),
                              o < i && t.setAttribute("data-end", String(i)),
                              (t.style.top = (o - j - 1) * y + g + "px"),
                              (t.textContent = new Array(i - o + 2).join(` 
`));
                          }),
                      c.push(function () {
                        t.style.width = s.scrollWidth + "px";
                      }),
                      c.push(function () {
                        p.appendChild(t);
                      });
                  }),
                  (f = s.id),
                  m &&
                    n.util.isActive(s, e) &&
                    f &&
                    (l(s, e) ||
                      c.push(function () {
                        s.classList.add(e);
                      }),
                    (v = parseInt(s.getAttribute("data-start") || "1")),
                    t(".line-numbers-rows > span", s).forEach(function (e, t) {
                      var n = t + v;
                      e.onclick = function () {
                        var e = f + "." + n;
                        (o = !1),
                          (location.hash = e),
                          setTimeout(function () {
                            o = !0;
                          }, 1);
                      };
                    })),
                  function () {
                    c.forEach(d);
                  }
                );
              }
              function u() {
                if (
                  ((e = location.hash.slice(1)),
                  t(".temporary.line-highlight").forEach(function (e) {
                    e.parentNode.removeChild(e);
                  }),
                  (s = (e.match(/\.([\d,-]+)$/) || [, ""])[1]),
                  s && !document.getElementById(e))
                ) {
                  var e,
                    s,
                    i = e.slice(0, e.lastIndexOf(".")),
                    n = document.getElementById(i);
                  n &&
                    (n.hasAttribute("data-line") ||
                      n.setAttribute("data-line", ""),
                    a(n, s, "temporary ")(),
                    o &&
                      document
                        .querySelector(".temporary.line-highlight")
                        .scrollIntoView());
                }
              }
            })(),
            !(function () {
              if ("undefined" != typeof n && "undefined" != typeof document) {
                var e = "line-numbers",
                  s = /\n(?!$)/g,
                  i = (n.plugins.lineNumbers = {
                    getLine: function (t, n) {
                      if (
                        "PRE" === t.tagName &&
                        t.classList.contains(e) &&
                        ((s = t.querySelector(".line-numbers-rows")), s)
                      ) {
                        var s,
                          a,
                          o = parseInt(t.getAttribute("data-start"), 10) || 1,
                          i = o + (s.children.length - 1);
                        return (
                          n < o && (n = o),
                          i < n && (n = i),
                          (a = n - o),
                          s.children[a]
                        );
                      }
                    },
                    resize: function (e) {
                      t([e]);
                    },
                    assumeViewportIndependence: !0,
                  }),
                  o = void 0;
                window.addEventListener("resize", function () {
                  (i.assumeViewportIndependence && o === window.innerWidth) ||
                    ((o = window.innerWidth),
                    t(
                      Array.prototype.slice.call(
                        document.querySelectorAll("pre." + e)
                      )
                    ));
                }),
                  n.hooks.add("complete", function (o) {
                    if (
                      o.code &&
                      ((a = o.element),
                      (i = a.parentNode),
                      i &&
                        /pre/i.test(i.nodeName) &&
                        !a.querySelector(".line-numbers-rows") &&
                        n.util.isActive(a, e))
                    ) {
                      a.classList.remove(e), i.classList.add(e);
                      var i,
                        a,
                        r,
                        c = o.code.match(s),
                        l = c ? c.length + 1 : 1,
                        d = new Array(l + 1).join("<span></span>");
                      (r = document.createElement("span")).setAttribute(
                        "aria-hidden",
                        "true"
                      ),
                        (r.className = "line-numbers-rows"),
                        (r.innerHTML = d),
                        i.hasAttribute("data-start") &&
                          (i.style.counterReset =
                            "linenumber " +
                            (parseInt(i.getAttribute("data-start"), 10) - 1)),
                        o.element.appendChild(r),
                        t([i]),
                        n.hooks.run("line-numbers", o);
                    }
                  }),
                  n.hooks.add("line-numbers", function (e) {
                    (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
                  });
              }
              function t(e) {
                if (
                  0 !=
                  (e = e.filter(function (e) {
                    var t = (function (e) {
                      return e
                        ? window.getComputedStyle
                          ? getComputedStyle(e)
                          : e.currentStyle || null
                        : null;
                    })(e)["white-space"];
                    return "pre-wrap" === t || "pre-line" === t;
                  })).length
                ) {
                  var t = e
                    .map(function (e) {
                      var t,
                        o,
                        i,
                        n = e.querySelector("code"),
                        a = e.querySelector(".line-numbers-rows");
                      if (n && a)
                        return (
                          (t = e.querySelector(".line-numbers-sizer")),
                          (o = n.textContent.split(s)),
                          t ||
                            (((t = document.createElement("span")).className =
                              "line-numbers-sizer"),
                            n.appendChild(t)),
                          (t.innerHTML = "0"),
                          (t.style.display = "block"),
                          (i = t.getBoundingClientRect().height),
                          (t.innerHTML = ""),
                          {
                            element: e,
                            lines: o,
                            lineHeights: [],
                            oneLinerHeight: i,
                            sizer: t,
                          }
                        );
                    })
                    .filter(Boolean);
                  t.forEach(function (e) {
                    var s = e.sizer,
                      t = e.lines,
                      n = e.lineHeights,
                      o = e.oneLinerHeight;
                    (n[t.length - 1] = void 0),
                      t.forEach(function (e, t) {
                        if (e && 1 < e.length) {
                          var i = s.appendChild(document.createElement("span"));
                          (i.style.display = "block"), (i.textContent = e);
                        } else n[t] = o;
                      });
                  }),
                    t.forEach(function (e) {
                      for (
                        var s = e.sizer, n = e.lineHeights, o = 0, t = 0;
                        t < n.length;
                        t++
                      )
                        void 0 === n[t] &&
                          (n[t] =
                            s.children[o++].getBoundingClientRect().height);
                    }),
                    t.forEach(function (e) {
                      var t = e.sizer,
                        n = e.element.querySelector(".line-numbers-rows");
                      (t.style.display = "none"),
                        (t.innerHTML = ""),
                        e.lineHeights.forEach(function (e, t) {
                          n.children[t].style.height = e + "px";
                        });
                    });
                }
              }
            })(),
            !(function () {
              if ("undefined" != typeof n && "undefined" != typeof document) {
                (e = []),
                  s(function (e) {
                    if (e && e.meta && e.data) {
                      if (e.meta.status && 400 <= e.meta.status)
                        return "Error: " + (e.data.message || e.meta.status);
                      if ("string" == typeof e.data.content)
                        return "function" == typeof atob
                          ? atob(e.data.content.replace(/\s/g, ""))
                          : "Your browser cannot decode base64";
                    }
                    return null;
                  }, "github"),
                  s(function (e, t) {
                    if (e && e.meta && e.data && e.data.files) {
                      if (e.meta.status && 400 <= e.meta.status)
                        return "Error: " + (e.data.message || e.meta.status);
                      var o,
                        s = e.data.files,
                        n = t.getAttribute("data-filename");
                      if (n == null)
                        for (o in s)
                          if (s.hasOwnProperty(o)) {
                            n = o;
                            break;
                          }
                      return void 0 !== s[n]
                        ? s[n].content
                        : "Error: unknown or missing gist file " + n;
                    }
                    return null;
                  }, "gist"),
                  s(function (e) {
                    return e && e.node && "string" == typeof e.data
                      ? e.data
                      : null;
                  }, "bitbucket");
                var e,
                  l = 0,
                  t = "data-jsonp-status",
                  r = "loading",
                  c = "loaded",
                  o = "failed",
                  i =
                    "pre[data-jsonp]:not([" +
                    t +
                    '="' +
                    c +
                    '"]):not([' +
                    t +
                    '="' +
                    r +
                    '"])';
                n.hooks.add("before-highlightall", function (e) {
                  e.selector += ", " + i;
                }),
                  n.hooks.add("before-sanity-check", function (s) {
                    if (((a = s.element), a.matches(i))) {
                      (s.code = ""),
                        a.setAttribute(t, r),
                        (d = a.appendChild(document.createElement("CODE"))),
                        (d.textContent = "Loading…"),
                        (h = s.language),
                        (d.className = "language-" + h),
                        (m = n.plugins.autoloader),
                        m && m.loadLanguages(h);
                      var a,
                        d,
                        h,
                        m,
                        p,
                        u = a.getAttribute("data-adapter"),
                        f = null;
                      if (u) {
                        if ("function" != typeof window[u])
                          return (
                            a.setAttribute(t, o),
                            void (d.textContent = (function (e) {
                              return (
                                '✖ Error: JSONP adapter function "' +
                                e +
                                `" doesn't exist`
                              );
                            })(u))
                          );
                        f = window[u];
                      }
                      (p = a.getAttribute("data-jsonp")),
                        !(function (e, t, s, o) {
                          var i,
                            d,
                            r = "prismjsonp" + l++,
                            a = document.createElement("a");
                          (a.href = e),
                            (a.href +=
                              (a.search ? "&" : "?") +
                              (t || "callback") +
                              "=" +
                              r),
                            (i = document.createElement("script")),
                            (i.src = a.href),
                            (i.onerror = function () {
                              c(), o("network");
                            }),
                            (d = setTimeout(function () {
                              c(), o("timeout");
                            }, n.plugins.jsonphighlight.timeout));
                          function c() {
                            clearTimeout(d),
                              document.head.removeChild(i),
                              delete window[r];
                          }
                          (window[r] = function (e) {
                            c(), s(e);
                          }),
                            document.head.appendChild(i);
                        })(
                          p,
                          a.getAttribute("data-callback"),
                          function (s) {
                            if (((i = null), f)) i = f(s, a);
                            else
                              for (
                                var i, r = 0, l = e.length;
                                r < l && null === (i = e[r].adapter(s, a));
                                r++
                              );
                            null === i
                              ? (a.setAttribute(t, o),
                                (d.textContent =
                                  "✖ Error: Cannot parse response (perhaps you need an adapter function?)"))
                              : (a.setAttribute(t, c),
                                (d.textContent = i),
                                n.highlightElement(d));
                          },
                          function () {
                            a.setAttribute(t, o),
                              (d.textContent = (function (e) {
                                return "✖ Error: Timeout loading " + e;
                              })(p));
                          }
                        );
                    }
                  }),
                  (n.plugins.jsonphighlight = {
                    timeout: 5e3,
                    registerAdapter: s,
                    removeAdapter: function (t) {
                      if (
                        ("string" == typeof t && (t = a(t)),
                        "function" == typeof t)
                      ) {
                        var n = e.findIndex(function (e) {
                          return e.adapter === t;
                        });
                        0 <= n && e.splice(n, 1);
                      }
                    },
                    highlight: function (e) {
                      for (
                        var t, s = (e || document).querySelectorAll(i), o = 0;
                        (t = s[o++]);

                      )
                        n.highlightElement(t);
                    },
                  });
              }
              function s(t, n) {
                (n = n || t.name),
                  "function" != typeof t ||
                    a(t) ||
                    a(n) ||
                    e.push({ adapter: t, name: n });
              }
              function a(t) {
                if ("function" == typeof t) {
                  for (var n, s = 0; (n = e[s++]); )
                    if (n.adapter.valueOf() === t.valueOf()) return n.adapter;
                } else if ("string" == typeof t)
                  for (s = 0; (n = e[s++]); )
                    if (n.name === t) return n.adapter;
                return null;
              }
            })(),
            "undefined" != typeof n &&
              n.hooks.add("wrap", function (e) {
                "keyword" === e.type && e.classes.push("keyword-" + e.content);
              }),
            !(function () {
              if ("undefined" != typeof n && "undefined" != typeof document) {
                var e = /(?:^|\s)command-line(?:\s|$)/,
                  s = "command-line-prompt",
                  i = "".startsWith
                    ? function (e, t) {
                        return e.startsWith(t);
                      }
                    : function (e, t) {
                        return 0 === e.indexOf(t);
                      };
                n.hooks.add("before-highlight", function (n) {
                  if (((r = t(n)), !r.complete && n.code))
                    if (
                      ((c = n.element.parentElement),
                      c &&
                        /pre/i.test(c.nodeName) &&
                        (e.test(c.className) || e.test(n.element.className)))
                    ) {
                      (l = n.element.querySelector("." + s)),
                        l && l.remove(),
                        (o = n.code.split(`
`)),
                        (r.numberOfLines = o.length);
                      var o,
                        a,
                        r,
                        c,
                        l,
                        u = (r.outputLines = []),
                        h = c.getAttribute("data-output"),
                        d = c.getAttribute("data-filter-output");
                      if (null !== h)
                        h.split(",").forEach(function (e) {
                          var t,
                            i = e.split("-"),
                            n = parseInt(i[0], 10),
                            s = 2 === i.length ? parseInt(i[1], 10) : n;
                          if (!isNaN(n) && !isNaN(s)) {
                            n < 1 && (n = 1),
                              s > o.length && (s = o.length),
                              s--;
                            for (t = --n; t <= s; t++)
                              (u[t] = o[t]), (o[t] = "");
                          }
                        });
                      else if (d)
                        for (a = 0; a < o.length; a++)
                          i(o[a], d) &&
                            ((u[a] = o[a].slice(d.length)), (o[a] = ""));
                      n.code = o.join(`
`);
                    } else r.complete = !0;
                  else r.complete = !0;
                }),
                  n.hooks.add("before-insert", function (e) {
                    if (((s = t(e)), !s.complete)) {
                      for (
                        var s,
                          i = e.highlightedCode.split(`
`),
                          o = s.outputLines || [],
                          n = 0,
                          a = o.length;
                        n < a;
                        n++
                      )
                        o.hasOwnProperty(n) && (i[n] = o[n]);
                      e.highlightedCode = i.join(`
`);
                    }
                  }),
                  n.hooks.add("complete", function (n) {
                    if (
                      (function (e) {
                        return "command-line" in (e.vars = e.vars || {});
                      })(n) &&
                      ((i = t(n)), !i.complete)
                    ) {
                      (r = n.element.parentElement),
                        e.test(n.element.className) &&
                          (n.element.className = n.element.className.replace(
                            e,
                            " "
                          )),
                        e.test(r.className) || (r.className += " command-line"),
                        (u = i.numberOfLines || 0),
                        (h = m("data-prompt", "")),
                        "" !== h
                          ? (d = o('<span data-prompt="' + h + '"></span>', u))
                          : (d = o(
                              '<span data-user="' +
                                m("data-user", "user") +
                                '" data-host="' +
                                m("data-host", "localhost") +
                                '"></span>',
                              u
                            )),
                        (a = document.createElement("span")),
                        (a.className = s),
                        (a.innerHTML = d);
                      for (
                        var i,
                          a,
                          r,
                          l,
                          d,
                          u,
                          h,
                          f = i.outputLines || [],
                          c = 0,
                          p = f.length;
                        c < p;
                        c++
                      )
                        f.hasOwnProperty(c) &&
                          ((l = a.children[c]),
                          l.removeAttribute("data-user"),
                          l.removeAttribute("data-host"),
                          l.removeAttribute("data-prompt"));
                      n.element.insertBefore(a, n.element.firstChild),
                        (i.complete = !0);
                    }
                    function m(e, t) {
                      return (r.getAttribute(e) || t).replace(/"/g, "&quot");
                    }
                  });
              }
              function o(e, t) {
                for (var n = "", s = 0; s < t; s++) n += e;
                return n;
              }
              function t(e) {
                var t = (e.vars = e.vars || {});
                return (t["command-line"] = t["command-line"] || {});
              }
            })(),
            !(function () {
              if ("undefined" != typeof n && "undefined" != typeof document) {
                var s,
                  o,
                  t = [],
                  e = {},
                  i = function () {};
                (n.plugins.toolbar = {}),
                  (s = n.plugins.toolbar.registerButton =
                    function (n, s) {
                      var o =
                        "function" == typeof s
                          ? s
                          : function (e) {
                              var t;
                              return (
                                "function" == typeof s.onClick
                                  ? (((t =
                                      document.createElement("button")).type =
                                      "button"),
                                    t.addEventListener("click", function () {
                                      s.onClick.call(this, e);
                                    }))
                                  : "string" == typeof s.url
                                  ? ((t = document.createElement("a")).href =
                                      s.url)
                                  : (t = document.createElement("span")),
                                s.className && t.classList.add(s.className),
                                (t.textContent = s.text),
                                t
                              );
                            };
                      n in e
                        ? console.warn(
                            'There is a button with the key "' +
                              n +
                              '" registered already.'
                          )
                        : t.push((e[n] = o));
                    }),
                  (o = n.plugins.toolbar.hook =
                    function (n) {
                      if (
                        ((s = n.element.parentNode),
                        s &&
                          /pre/i.test(s.nodeName) &&
                          !s.parentNode.classList.contains("code-toolbar"))
                      ) {
                        (o = document.createElement("div")),
                          o.classList.add("code-toolbar"),
                          s.parentNode.insertBefore(o, s),
                          o.appendChild(s),
                          (a = document.createElement("div")),
                          a.classList.add("toolbar");
                        var s,
                          o,
                          a,
                          r = t,
                          c = (function (e) {
                            for (; e; ) {
                              var t = e.getAttribute("data-toolbar-order");
                              if (t != null)
                                return (t = t.trim()).length
                                  ? t.split(/\s*,\s*/g)
                                  : [];
                              e = e.parentElement;
                            }
                          })(n.element);
                        c &&
                          (r = c.map(function (t) {
                            return e[t] || i;
                          })),
                          r.forEach(function (e) {
                            var t,
                              s = e(n);
                            s &&
                              ((t = document.createElement("div")),
                              t.classList.add("toolbar-item"),
                              t.appendChild(s),
                              a.appendChild(t));
                          }),
                          o.appendChild(a);
                      }
                    }),
                  s("label", function (e) {
                    var n,
                      s,
                      o,
                      t = e.element.parentNode;
                    if (
                      t &&
                      /pre/i.test(t.nodeName) &&
                      t.hasAttribute("data-label")
                    ) {
                      o = t.getAttribute("data-label");
                      try {
                        s = document.querySelector("template#" + o);
                      } catch {}
                      return (
                        s
                          ? (n = s.content)
                          : (t.hasAttribute("data-url")
                              ? ((n = document.createElement("a")).href =
                                  t.getAttribute("data-url"))
                              : (n = document.createElement("span")),
                            (n.textContent = o)),
                        n
                      );
                    }
                  }),
                  n.hooks.add("complete", o);
              }
            })(),
            !(function () {
              function t(t, n) {
                t.addEventListener("click", function () {
                  !(function (t) {
                    navigator.clipboard
                      ? navigator.clipboard
                          .writeText(t.getText())
                          .then(t.success, function () {
                            e(t);
                          })
                      : e(t);
                  })(n);
                });
              }
              function e(e) {
                var n,
                  t = document.createElement("textarea");
                (t.value = e.getText()),
                  (t.style.top = "0"),
                  (t.style.left = "0"),
                  (t.style.position = "fixed"),
                  document.body.appendChild(t),
                  t.focus(),
                  t.select();
                try {
                  (n = document.execCommand("copy")),
                    setTimeout(function () {
                      n ? e.success() : e.error();
                    }, 1);
                } catch (t) {
                  setTimeout(function () {
                    e.error(t);
                  }, 1);
                }
                document.body.removeChild(t);
              }
              "undefined" != typeof n &&
                "undefined" != typeof document &&
                (n.plugins.toolbar
                  ? n.plugins.toolbar.registerButton(
                      "copy-to-clipboard",
                      function (e) {
                        var i,
                          o = e.element,
                          a = (function (e) {
                            n = {
                              copy: "Copy",
                              "copy-error": "Press Ctrl+C to copy",
                              "copy-success": "Copied!",
                              "copy-timeout": 5e3,
                            };
                            for (s in n) {
                              for (
                                var n, s, o = "data-prismjs-" + s, t = e;
                                t && !t.hasAttribute(o);

                              )
                                t = t.parentElement;
                              t && (n[s] = t.getAttribute(o));
                            }
                            return n;
                          })(o),
                          n = document.createElement("button");
                        return (
                          (n.className = "copy-to-clipboard-button"),
                          n.setAttribute("type", "button"),
                          (i = document.createElement("span")),
                          n.appendChild(i),
                          s("copy"),
                          t(n, {
                            getText: function () {
                              return o.textContent;
                            },
                            success: function () {
                              s("copy-success"), r();
                            },
                            error: function () {
                              s("copy-error"),
                                setTimeout(function () {
                                  !(function (e) {
                                    window.getSelection().selectAllChildren(e);
                                  })(o);
                                }, 1),
                                r();
                            },
                          }),
                          n
                        );
                        function r() {
                          setTimeout(function () {
                            s("copy");
                          }, a["copy-timeout"]);
                        }
                        function s(e) {
                          (i.textContent = a[e]),
                            n.setAttribute("data-copy-state", e);
                        }
                      }
                    )
                  : console.warn(
                      "Copy to Clipboard plugin loaded before Toolbar plugin."
                    ));
            })();
        },
      });
    n();
  })();