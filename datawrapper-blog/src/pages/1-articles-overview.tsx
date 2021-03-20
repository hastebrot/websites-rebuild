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
          <ul class="list-none flex space-x-7 text-sm text-gray-500 whitespace-nowrap">
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
        <div class="flex flex-col divide-y-2 divide-white">
          <div class="let-post flex space-x-8 py-8">
            <div class="let-image border border-gray-300 min-w-[320px] min-h-[160px]"></div>
            <div class="space-y-4">
              <div class="text-gray-500">
                <strong>Weekly Chart</strong> / Mar 18, 2021
              </div>
              <div class="font-serif text-blue-700 font-bold text-2xl leading-normal">
                Who owns the Nile?
              </div>
            </div>
          </div>

          <div class="let-post flex space-x-8 py-8">
            <div class="let-image border border-gray-300 min-w-[320px] min-h-[160px]"></div>
            <div class="space-y-4">
              <div class="text-gray-500">
                <strong>Thoughts &amp; How-Tos</strong> / Mar 16, 2021
              </div>
              <div class="font-serif text-blue-700 font-bold text-2xl leading-normal">
                Which color scale to use when visualizing data
              </div>
            </div>
          </div>

          <div class="let-post flex space-x-8 py-8">
            <div class="let-image border border-gray-300 min-w-[320px] min-h-[160px]"></div>
            <div class="space-y-4">
              <div class="text-gray-500">
                <strong>Thoughts &amp; How-Tos</strong> / Mar 16, 2021
              </div>
              <div class="font-serif text-blue-700 font-bold text-2xl leading-normal">
                When to use quantitative and when to use qualitative color
                scales
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
