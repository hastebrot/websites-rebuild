import routes from "virtual:generated-pages";
import useLocationHash from "./helpers/useLocationHash";

export function App() {
  const [hash, setHash] = useLocationHash();
  const Page = routePage(hash);
  return (
    <div class="relative">
      <Page />
      <div class="absolute top-0 right-0">
        <select
          class="block m-4 border-gray-300 rounded-lg text-sm opacity-30 hover:opacity-100"
          onChange={(event: any) => {
            setHash(event.target.value);
          }}
        >
          {routes.map((route: any) => (
            <option value={route.name}>pages/{route.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

const routePage = (hash: string) => {
  const routeName = hash.slice("#".length);
  const routeIndex = routes.map((route) => route.name).indexOf(routeName);
  const route = routes[routeIndex === -1 ? 0 : routeIndex];
  return route.component;
};
