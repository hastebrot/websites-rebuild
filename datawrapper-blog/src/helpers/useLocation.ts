// https://github.com/streamich/react-use/blob/v17.2.1/src/useLocation.ts
import { useEffect, useState } from "preact/hooks";

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}

export const isBrowser = typeof window !== "undefined";

export const isNavigator = typeof navigator !== "undefined";

const patchHistoryMethod = (method: any) => {
  const history = window.history as any;
  const original = history[method];

  history[method] = function (state: any) {
    const result = original.apply(this, arguments);
    const event = new Event(method.toLowerCase());

    (event as any).state = state;

    window.dispatchEvent(event);

    return result;
  };
};

if (isBrowser) {
  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");
}

export interface LocationSensorState {
  trigger: string;
  state?: any;
  length?: number;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

const useLocationServer = (): LocationSensorState => ({
  trigger: "load",
  length: 1,
});

const buildState = (trigger: string) => {
  const { state, length } = window.history;

  const {
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search,
  } = window.location;

  return {
    trigger,
    state,
    length,
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search,
  };
};

const useLocationBrowser = (): LocationSensorState => {
  const [state, setState] = useState(buildState("load"));

  useEffect(() => {
    const onPopstate = () => setState(buildState("popstate"));
    const onPushstate = () => setState(buildState("pushstate"));
    const onReplacestate = () => setState(buildState("replacestate"));

    on(window, "popstate", onPopstate);
    on(window, "pushstate", onPushstate);
    on(window, "replacestate", onReplacestate);

    return () => {
      off(window, "popstate", onPopstate);
      off(window, "pushstate", onPushstate);
      off(window, "replacestate", onReplacestate);
    };
  }, []);

  return state;
};

const hasEventConstructor = typeof Event === "function";

export default isBrowser && hasEventConstructor
  ? useLocationBrowser
  : useLocationServer;
