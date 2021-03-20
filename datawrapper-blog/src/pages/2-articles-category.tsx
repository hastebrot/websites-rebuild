export default function () {
  return (
    <div class="font-sans bg-white h-screen grid grid-rows-[auto,1fr]">
      <header class="max-w-lg m-10">
        <div class="tracking-[0.25em] uppercase text-4xl text-gray-500 font-semibold">
          Chartable
        </div>
        <div class="p-2 text-gray-500">
          A blog by
          <span class="text-black font-semibold border-l-2 border-b-2 border-black ml-2 p-2">
            Datawrapper
          </span>
        </div>

        <div class="mt-16">
          <ul class="list-none flex flex-col space-y-4 text-sm text-gray-500 whitespace-nowrap">
            <li class="hover:text-blue-600">Home</li>
            <li class="hover:text-blue-600">Datawrapper News</li>
            <li class="hover:text-blue-600">Thoughts &amp; How-Tos</li>
            <li class="hover:text-blue-600">Weekly Charts</li>
            <li class="hover:text-blue-600">About Us</li>
            <li class="hover:text-blue-600">Changelog</li>
          </ul>
        </div>
      </header>

      <main class="bg-gray-100 p-8">
      </main>
    </div>
  );
}
