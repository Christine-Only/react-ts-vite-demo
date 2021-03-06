import { _extends } from './chunk-UP6ZZZQZ.js';
import { __toModule, require_react } from './chunk-KC7H2QC6.js';

// node_modules/react-router-dom/index.js
var import_react2 = __toModule(require_react());

// node_modules/history/index.js
var r;
var B = r || (r = {});
B.Pop = 'POP';
B.Push = 'PUSH';
B.Replace = 'REPLACE';
var C = true
  ? function (b) {
      return Object.freeze(b);
    }
  : function (b) {
      return b;
    };
function D(b, h) {
  if (!b) {
    typeof console !== 'undefined' && console.warn(h);
    try {
      throw Error(h);
    } catch (e) {}
  }
}
function E(b) {
  b.preventDefault();
  b.returnValue = '';
}
function F() {
  var b = [];
  return {
    get length() {
      return b.length;
    },
    push: function (h) {
      b.push(h);
      return function () {
        b = b.filter(function (e) {
          return e !== h;
        });
      };
    },
    call: function (h) {
      b.forEach(function (e) {
        return e && e(h);
      });
    },
  };
}
function H() {
  return Math.random().toString(36).substr(2, 8);
}
function I(b) {
  var h = b.pathname;
  h = h === void 0 ? '/' : h;
  var e = b.search;
  e = e === void 0 ? '' : e;
  b = b.hash;
  b = b === void 0 ? '' : b;
  e && e !== '?' && (h += e.charAt(0) === '?' ? e : '?' + e);
  b && b !== '#' && (h += b.charAt(0) === '#' ? b : '#' + b);
  return h;
}
function J(b) {
  var h = {};
  if (b) {
    var e = b.indexOf('#');
    0 <= e && ((h.hash = b.substr(e)), (b = b.substr(0, e)));
    e = b.indexOf('?');
    0 <= e && ((h.search = b.substr(e)), (b = b.substr(0, e)));
    b && (h.pathname = b);
  }
  return h;
}
function createBrowserHistory(b) {
  function h() {
    var c = p.location,
      a = m.state || {};
    return [
      a.idx,
      C({ pathname: c.pathname, search: c.search, hash: c.hash, state: a.usr || null, key: a.key || 'default' }),
    ];
  }
  function e(c) {
    return typeof c === 'string' ? c : I(c);
  }
  function x(c, a) {
    a === void 0 && (a = null);
    return C(
      _extends({ pathname: q.pathname, hash: '', search: '' }, typeof c === 'string' ? J(c) : c, { state: a, key: H() })
    );
  }
  function z(c) {
    t = c;
    c = h();
    v = c[0];
    q = c[1];
    d.call({ action: t, location: q });
  }
  function A(c, a) {
    function f() {
      A(c, a);
    }
    var l = r.Push,
      k = x(c, a);
    if (!g.length || (g.call({ action: l, location: k, retry: f }), false)) {
      var n = [{ usr: k.state, key: k.key, idx: v + 1 }, e(k)];
      k = n[0];
      n = n[1];
      try {
        m.pushState(k, '', n);
      } catch (G) {
        p.location.assign(n);
      }
      z(l);
    }
  }
  function y(c, a) {
    function f() {
      y(c, a);
    }
    var l = r.Replace,
      k = x(c, a);
    (g.length && (g.call({ action: l, location: k, retry: f }), 1)) ||
      ((k = [{ usr: k.state, key: k.key, idx: v }, e(k)]), m.replaceState(k[0], '', k[1]), z(l));
  }
  function w(c) {
    m.go(c);
  }
  b === void 0 && (b = {});
  b = b.window;
  var p = b === void 0 ? document.defaultView : b,
    m = p.history,
    u = null;
  p.addEventListener('popstate', function () {
    if (u) g.call(u), (u = null);
    else {
      var c = r.Pop,
        a = h(),
        f = a[0];
      a = a[1];
      if (g.length)
        if (f != null) {
          var l = v - f;
          l &&
            ((u = {
              action: c,
              location: a,
              retry: function () {
                w(-1 * l);
              },
            }),
            w(l));
        } else
          true
            ? D(
                false,
                'You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.'
              )
            : void 0;
      else z(c);
    }
  });
  var t = r.Pop;
  b = h();
  var v = b[0],
    q = b[1],
    d = F(),
    g = F();
  v == null && ((v = 0), m.replaceState(_extends({}, m.state, { idx: v }), ''));
  return {
    get action() {
      return t;
    },
    get location() {
      return q;
    },
    createHref: e,
    push: A,
    replace: y,
    go: w,
    back: function () {
      w(-1);
    },
    forward: function () {
      w(1);
    },
    listen: function (c) {
      return d.push(c);
    },
    block: function (c) {
      var a = g.push(c);
      g.length === 1 && p.addEventListener('beforeunload', E);
      return function () {
        a();
        g.length || p.removeEventListener('beforeunload', E);
      };
    },
  };
}
function createHashHistory(b) {
  function h() {
    var a = J(m.location.hash.substr(1)),
      f = a.pathname,
      l = a.search;
    a = a.hash;
    var k = u.state || {};
    return [
      k.idx,
      C({
        pathname: f === void 0 ? '/' : f,
        search: l === void 0 ? '' : l,
        hash: a === void 0 ? '' : a,
        state: k.usr || null,
        key: k.key || 'default',
      }),
    ];
  }
  function e() {
    if (t) c.call(t), (t = null);
    else {
      var a = r.Pop,
        f = h(),
        l = f[0];
      f = f[1];
      if (c.length)
        if (l != null) {
          var k = q - l;
          k &&
            ((t = {
              action: a,
              location: f,
              retry: function () {
                p(-1 * k);
              },
            }),
            p(k));
        } else
          true
            ? D(
                false,
                'You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.'
              )
            : void 0;
      else A(a);
    }
  }
  function x(a) {
    var f = document.querySelector('base'),
      l = '';
    f && f.getAttribute('href') && ((f = m.location.href), (l = f.indexOf('#')), (l = l === -1 ? f : f.slice(0, l)));
    return l + '#' + (typeof a === 'string' ? a : I(a));
  }
  function z(a, f) {
    f === void 0 && (f = null);
    return C(
      _extends({ pathname: d.pathname, hash: '', search: '' }, typeof a === 'string' ? J(a) : a, { state: f, key: H() })
    );
  }
  function A(a) {
    v = a;
    a = h();
    q = a[0];
    d = a[1];
    g.call({ action: v, location: d });
  }
  function y(a, f) {
    function l() {
      y(a, f);
    }
    var k = r.Push,
      n = z(a, f);
    true
      ? D(
          n.pathname.charAt(0) === '/',
          'Relative pathnames are not supported in hash history.push(' + JSON.stringify(a) + ')'
        )
      : void 0;
    if (!c.length || (c.call({ action: k, location: n, retry: l }), false)) {
      var G = [{ usr: n.state, key: n.key, idx: q + 1 }, x(n)];
      n = G[0];
      G = G[1];
      try {
        u.pushState(n, '', G);
      } catch (K) {
        m.location.assign(G);
      }
      A(k);
    }
  }
  function w(a, f) {
    function l() {
      w(a, f);
    }
    var k = r.Replace,
      n = z(a, f);
    true
      ? D(
          n.pathname.charAt(0) === '/',
          'Relative pathnames are not supported in hash history.replace(' + JSON.stringify(a) + ')'
        )
      : void 0;
    (c.length && (c.call({ action: k, location: n, retry: l }), 1)) ||
      ((n = [{ usr: n.state, key: n.key, idx: q }, x(n)]), u.replaceState(n[0], '', n[1]), A(k));
  }
  function p(a) {
    u.go(a);
  }
  b === void 0 && (b = {});
  b = b.window;
  var m = b === void 0 ? document.defaultView : b,
    u = m.history,
    t = null;
  m.addEventListener('popstate', e);
  m.addEventListener('hashchange', function () {
    var a = h()[1];
    I(a) !== I(d) && e();
  });
  var v = r.Pop;
  b = h();
  var q = b[0],
    d = b[1],
    g = F(),
    c = F();
  q == null && ((q = 0), u.replaceState(_extends({}, u.state, { idx: q }), ''));
  return {
    get action() {
      return v;
    },
    get location() {
      return d;
    },
    createHref: x,
    push: y,
    replace: w,
    go: p,
    back: function () {
      p(-1);
    },
    forward: function () {
      p(1);
    },
    listen: function (a) {
      return g.push(a);
    },
    block: function (a) {
      var f = c.push(a);
      c.length === 1 && m.addEventListener('beforeunload', E);
      return function () {
        f();
        c.length || m.removeEventListener('beforeunload', E);
      };
    },
  };
}
function createMemoryHistory(b) {
  function h(d, g) {
    g === void 0 && (g = null);
    return C(
      _extends({ pathname: t.pathname, search: '', hash: '' }, typeof d === 'string' ? J(d) : d, { state: g, key: H() })
    );
  }
  function e(d, g, c) {
    return !q.length || (q.call({ action: d, location: g, retry: c }), false);
  }
  function x(d, g) {
    u = d;
    t = g;
    v.call({ action: u, location: t });
  }
  function z(d, g) {
    var c = r.Push,
      a = h(d, g);
    true
      ? D(
          t.pathname.charAt(0) === '/',
          'Relative pathnames are not supported in memory history.push(' + JSON.stringify(d) + ')'
        )
      : void 0;
    e(c, a, function () {
      z(d, g);
    }) && ((m += 1), p.splice(m, p.length, a), x(c, a));
  }
  function A(d, g) {
    var c = r.Replace,
      a = h(d, g);
    true
      ? D(
          t.pathname.charAt(0) === '/',
          'Relative pathnames are not supported in memory history.replace(' + JSON.stringify(d) + ')'
        )
      : void 0;
    e(c, a, function () {
      A(d, g);
    }) && ((p[m] = a), x(c, a));
  }
  function y(d) {
    var g = Math.min(Math.max(m + d, 0), p.length - 1),
      c = r.Pop,
      a = p[g];
    e(c, a, function () {
      y(d);
    }) && ((m = g), x(c, a));
  }
  b === void 0 && (b = {});
  var w = b;
  b = w.initialEntries;
  w = w.initialIndex;
  var p = (b === void 0 ? ['/'] : b).map(function (d) {
      var g = C(
        _extends({ pathname: '/', search: '', hash: '', state: null, key: H() }, typeof d === 'string' ? J(d) : d)
      );
      true
        ? D(
            g.pathname.charAt(0) === '/',
            'Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: ' +
              JSON.stringify(d) +
              ')'
          )
        : void 0;
      return g;
    }),
    m = Math.min(Math.max(w == null ? p.length - 1 : w, 0), p.length - 1),
    u = r.Pop,
    t = p[m],
    v = F(),
    q = F();
  return {
    get index() {
      return m;
    },
    get action() {
      return u;
    },
    get location() {
      return t;
    },
    createHref: function (d) {
      return typeof d === 'string' ? d : I(d);
    },
    push: z,
    replace: A,
    go: y,
    back: function () {
      y(-1);
    },
    forward: function () {
      y(1);
    },
    listen: function (d) {
      return v.push(d);
    },
    block: function (d) {
      return q.push(d);
    },
  };
}

// node_modules/react-router/index.js
var import_react = __toModule(require_react());
function invariant(cond, message) {
  if (!cond) throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning(false, message) : void 0;
  }
}
var NavigationContext = (0, import_react.createContext)(null);
if (true) {
  NavigationContext.displayName = 'Navigation';
}
var LocationContext = (0, import_react.createContext)(null);
if (true) {
  LocationContext.displayName = 'Location';
}
var RouteContext = (0, import_react.createContext)({
  outlet: null,
  matches: [],
});
if (true) {
  RouteContext.displayName = 'Route';
}
function MemoryRouter(_ref) {
  let { basename, children, initialEntries, initialIndex } = _ref;
  let historyRef = (0, import_react.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react.useState)({
    action: history.action,
    location: history.location,
  });
  (0, import_react.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}
function Navigate(_ref2) {
  let { to, replace, state } = _ref2;
  !useInRouterContext()
    ? true
      ? invariant(false, '<Navigate> may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  true
    ? warning(
        !(0, import_react.useContext)(NavigationContext).static,
        '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
      )
    : void 0;
  let navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    navigate(to, {
      replace,
      state,
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  true
    ? invariant(
        false,
        'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
      )
    : invariant(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = '/',
    children = null,
    location: locationProp,
    navigationType = r.Pop,
    navigator,
    static: staticProp = false,
  } = _ref3;
  !!useInRouterContext()
    ? true
      ? invariant(
          false,
          'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
        )
      : invariant(false)
    : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(
    () => ({
      basename,
      navigator,
      static: staticProp,
    }),
    [basename, navigator, staticProp]
  );
  if (typeof locationProp === 'string') {
    locationProp = J(locationProp);
  }
  let { pathname = '/', search = '', hash = '', state = null, key = 'default' } = locationProp;
  let location = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key,
    };
  }, [basename, pathname, search, hash, state, key]);
  true
    ? warning(
        location != null,
        '<Router basename="' +
          basename +
          '"> is not able to match the URL ' +
          ('"' + pathname + search + hash + '" because it does not start with the ') +
          "basename, so the <Router> won't render anything."
      )
    : void 0;
  if (location == null) {
    return null;
  }
  return (0, import_react.createElement)(
    NavigationContext.Provider,
    {
      value: navigationContext,
    },
    (0, import_react.createElement)(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType,
      },
    })
  );
}
function Routes(_ref4) {
  let { children, location } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function useHref(to) {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useHref() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { basename, navigator } = (0, import_react.useContext)(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== '/') {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith('/');
    joinedPathname = pathname === '/' ? basename + (endsWithSlash ? '/' : '') : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash,
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useLocation() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigationType() {
  return (0, import_react.useContext)(LocationContext).navigationType;
}
function useMatch(pattern) {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useMatch() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { pathname } = useLocation();
  return (0, import_react.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function useNavigate() {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useNavigate() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { basename, navigator } = (0, import_react.useContext)(NavigationContext);
  let { matches } = (0, import_react.useContext)(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(
    function (to, options) {
      if (options === void 0) {
        options = {};
      }
      true
        ? warning(
            activeRef.current,
            'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
          )
        : void 0;
      if (!activeRef.current) return;
      if (typeof to === 'number') {
        navigator.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
      if (basename !== '/') {
        path.pathname = joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    },
    [basename, navigator, routePathnamesJson, locationPathname]
  );
  return navigate;
}
var OutletContext = (0, import_react.createContext)(null);
function useOutletContext() {
  return (0, import_react.useContext)(OutletContext);
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  if (outlet) {
    return (0, import_react.createElement)(
      OutletContext.Provider,
      {
        value: context,
      },
      outlet
    );
  }
  return outlet;
}
function useParams() {
  let { matches } = (0, import_react.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to) {
  let { matches } = (0, import_react.useContext)(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(
    () => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname),
    [to, routePathnamesJson, locationPathname]
  );
}
function useRoutes(routes, locationArg) {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useRoutes() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { matches: parentMatches } = (0, import_react.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : '/';
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : '/';
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = (parentRoute && parentRoute.path) || '';
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + parentPath + '"> to <Route ') +
        ('path="' + (parentPath === '/' ? '*' : parentPath + '/*') + '">.')
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === 'string' ? J(locationArg) : locationArg;
    !(
      parentPathnameBase === '/' ||
      ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null
        ? void 0
        : _parsedLocationArg$pa.startsWith(parentPathnameBase))
    )
      ? true
        ? invariant(
            false,
            'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
              ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') +
              ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')
          )
        : invariant(false)
      : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || '/';
  let remainingPathname = parentPathnameBase === '/' ? pathname : pathname.slice(parentPathnameBase.length) || '/';
  let matches = matchRoutes(routes, {
    pathname: remainingPathname,
  });
  if (true) {
    true
      ? warning(
          parentRoute || matches != null,
          'No routes matched location "' + location.pathname + location.search + location.hash + '" '
        )
      : void 0;
    true
      ? warning(
          matches == null || matches[matches.length - 1].route.element !== void 0,
          'Matched leaf route at location "' +
            location.pathname +
            location.search +
            location.hash +
            '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
        )
      : void 0;
  }
  return _renderMatches(
    matches &&
      matches.map((match) =>
        Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase, match.pathname]),
          pathnameBase:
            match.pathnameBase === '/' ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase]),
        })
      ),
    parentMatches
  );
}
function createRoutesFromChildren(children) {
  let routes = [];
  import_react.Children.forEach(children, (element) => {
    if (!(0, import_react.isValidElement)(element)) {
      return;
    }
    if (element.type === import_react.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }
    !(element.type === Route)
      ? true
        ? invariant(
            false,
            '[' +
              (typeof element.type === 'string' ? element.type : element.type.name) +
              '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
          )
        : invariant(false)
      : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }
    routes.push(route);
  });
  return routes;
}
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }
  return path
    .replace(/:(\w+)/g, (_, key) => {
      !(params[key] != null) ? (true ? invariant(false, 'Missing ":' + key + '" param') : invariant(false)) : void 0;
      return params[key];
    })
    .replace(/\/*\*$/, (_) => (params['*'] == null ? '' : params['*'].replace(/^\/*/, '/')));
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = '/';
  }
  let location = typeof locationArg === 'string' ? J(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || '/', basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = '';
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || '',
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route,
    };
    if (meta.relativePath.startsWith('/')) {
      !meta.relativePath.startsWith(parentPath)
        ? true
          ? invariant(
              false,
              'Absolute route path "' +
                meta.relativePath +
                '" nested under path ' +
                ('"' + parentPath + '" is not valid. An absolute child route path ') +
                'must start with the combined path of all its parent routes.'
            )
          : invariant(false)
        : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true)
        ? true
          ? invariant(
              false,
              'Index routes must not have child routes. Please remove ' +
                ('all child routes from route path "' + path + '".')
            )
          : invariant(false)
        : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta,
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) =>
    a.score !== b.score
      ? b.score - a.score
      : compareIndexes(
          a.routesMeta.map((meta) => meta.childrenIndex),
          b.routesMeta.map((meta) => meta.childrenIndex)
        )
  );
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === '*';
function computeScore(path, index) {
  let segments = path.split('/');
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments
    .filter((s) => !isSplat(s))
    .reduce(
      (score, segment) =>
        score + (paramRe.test(segment) ? dynamicSegmentValue : segment === '' ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = '/';
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === '/' ? pathname : pathname.slice(matchedPathname.length) || '/';
    let match = matchPath(
      {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end,
      },
      remainingPathname
    );
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route,
    });
    if (match.pathnameBase !== '/') {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function renderMatches(matches) {
  return _renderMatches(matches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return (0, import_react.createElement)(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : (0, import_react.createElement)(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1)),
      },
    });
  }, null);
}
function matchPath(pattern, pathname) {
  if (typeof pattern === 'string') {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true,
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1');
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === '*') {
      let splatValue = captureGroups[index] || '';
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, '$1');
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || '', paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern,
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true
    ? warning(
        path === '*' || !path.endsWith('*') || path.endsWith('/*'),
        'Route path "' +
          path +
          '" will be treated as if it were ' +
          ('"' + path.replace(/\*$/, '/*') + '" because the `*` character must ') +
          'always follow a `/` in the pattern. To get rid of this warning, ' +
          ('please change the route path to "' + path.replace(/\*$/, '/*') + '".')
      )
    : void 0;
  let paramNames = [];
  let regexpSource =
    '^' +
    path
      .replace(/\/*\*?$/, '')
      .replace(/^\/*/, '/')
      .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
      .replace(/:(\w+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return '([^\\/]+)';
      });
  if (path.endsWith('*')) {
    paramNames.push('*');
    regexpSource += path === '*' || path === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$';
  } else {
    regexpSource += end ? '\\/*$' : '(?:\\b|\\/|$)';
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : 'i');
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true
      ? warning(
          false,
          'The value for the URL param "' +
            paramName +
            '" will not be decoded because' +
            (' the string "' + value + '" is a malformed URL segment. This is probably') +
            (' due to a bad percent encoding (' + error + ').')
        )
      : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = '/';
  }
  let { pathname: toPathname, search = '', hash = '' } = typeof to === 'string' ? J(to) : to;
  let pathname = toPathname
    ? toPathname.startsWith('/')
      ? toPathname
      : resolvePathname(toPathname, fromPathname)
    : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash),
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, '').split('/');
  let relativeSegments = relativePath.split('/');
  relativeSegments.forEach((segment) => {
    if (segment === '..') {
      if (segments.length > 1) segments.pop();
    } else if (segment !== '.') {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join('/') : '/';
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === 'string' ? J(toArg) : toArg;
  let toPathname = toArg === '' || to.pathname === '' ? '/' : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith('..')) {
      let toSegments = toPathname.split('/');
      while (toSegments[0] === '..') {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join('/');
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : '/';
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== '/' && toPathname.endsWith('/') && !path.pathname.endsWith('/')) {
    path.pathname += '/';
  }
  return path;
}
function getToPathname(to) {
  return to === '' || to.pathname === '' ? '/' : typeof to === 'string' ? J(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === '/') return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== '/') {
    return null;
  }
  return pathname.slice(basename.length) || '/';
}
var joinPaths = (paths) => paths.join('/').replace(/\/\/+/g, '/');
var normalizePathname = (pathname) => pathname.replace(/\/+$/, '').replace(/^\/*/, '/');
var normalizeSearch = (search) => (!search || search === '?' ? '' : search.startsWith('?') ? search : '?' + search);
var normalizeHash = (hash) => (!hash || hash === '#' ? '' : hash.startsWith('#') ? hash : '#' + hash);

// node_modules/react-router-dom/index.js
function _extends2() {
  _extends2 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'];
var _excluded2 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
function warning2(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function BrowserRouter(_ref) {
  let { basename, children, window } = _ref;
  let historyRef = (0, import_react2.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window,
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location,
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}
function HashRouter(_ref2) {
  let { basename, children, window } = _ref2;
  let historyRef = (0, import_react2.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window,
    });
  }
  let history = historyRef.current;
  let [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location,
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}
function HistoryRouter(_ref3) {
  let { basename, children, history } = _ref3;
  const [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location,
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}
if (true) {
  HistoryRouter.displayName = 'unstable_HistoryRouter';
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = (0, import_react2.forwardRef)(function LinkWithRef(_ref4, ref) {
  let { onClick, reloadDocument, replace = false, state, target, to } = _ref4,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return (0, import_react2.createElement)(
    'a',
    _extends2({}, rest, {
      href,
      onClick: handleClick,
      ref,
      target,
    })
  );
});
if (true) {
  Link.displayName = 'Link';
}
var NavLink = (0, import_react2.forwardRef)(function NavLinkWithRef(_ref5, ref) {
  let {
      'aria-current': ariaCurrentProp = 'page',
      caseSensitive = false,
      className: classNameProp = '',
      end = false,
      style: styleProp,
      to,
      children,
    } = _ref5,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive =
    locationPathname === toPathname ||
    (!end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === '/');
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === 'function') {
    className = classNameProp({
      isActive,
    });
  } else {
    className = [classNameProp, isActive ? 'active' : null].filter(Boolean).join(' ');
  }
  let style =
    typeof styleProp === 'function'
      ? styleProp({
          isActive,
        })
      : styleProp;
  return (0, import_react2.createElement)(
    Link,
    _extends2({}, rest, {
      'aria-current': ariaCurrent,
      className,
      ref,
      style,
      to,
    }),
    typeof children === 'function'
      ? children({
          isActive,
        })
      : children
  );
});
if (true) {
  NavLink.displayName = 'NavLink';
}
function useLinkClickHandler(to, _temp) {
  let { target, replace: replaceProp, state } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react2.useCallback)(
    (event) => {
      if (event.button === 0 && (!target || target === '_self') && !isModifiedEvent(event)) {
        event.preventDefault();
        let replace = !!replaceProp || I(location) === I(path);
        navigate(to, {
          replace,
          state,
        });
      }
    },
    [location, navigate, path, replaceProp, state, target, to]
  );
}
function useSearchParams(defaultInit) {
  true
    ? warning2(
        typeof URLSearchParams !== 'undefined',
        "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user."
      )
    : void 0;
  let defaultSearchParamsRef = (0, import_react2.useRef)(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = (0, import_react2.useMemo)(() => {
    let searchParams2 = createSearchParams(location.search);
    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams2.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach((value) => {
          searchParams2.append(key, value);
        });
      }
    }
    return searchParams2;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = (0, import_react2.useCallback)(
    (nextInit, navigateOptions) => {
      navigate('?' + createSearchParams(nextInit), navigateOptions);
    },
    [navigate]
  );
  return [searchParams, setSearchParams];
}
function createSearchParams(init) {
  if (init === void 0) {
    init = '';
  }
  return new URLSearchParams(
    typeof init === 'string' || Array.isArray(init) || init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo, key) => {
          let value = init[key];
          return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
        }, [])
  );
}
export {
  BrowserRouter,
  HashRouter,
  Link,
  MemoryRouter,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RouteContext as UNSAFE_RouteContext,
  createRoutesFromChildren,
  createSearchParams,
  generatePath,
  matchPath,
  matchRoutes,
  renderMatches,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRoutes,
  useSearchParams,
};
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=react-router-dom.js.map
