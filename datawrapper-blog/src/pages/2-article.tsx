export default function () {
  return (
    <div class="font-sans bg-white h-screen grid grid-rows-[auto,1fr]">
      <header class="bg-gray-100 p-10 grid grid-cols-[auto,1fr] gap-x-20">
        <div>
          <div class="tracking-[0.25em] uppercase text-4xl text-gray-500 font-semibold">
            Chartable
          </div>
          <div class="p-2 text-gray-500">
            A blog by
            <span class="text-black font-semibold border-l-2 border-b-2 border-black ml-2 p-2">
              Datawrapper
            </span>
          </div>
        </div>

        <div class="">
          <ul class="list-none grid grid-cols-[1fr,1fr] gap-y-2 text-sm text-gray-500 whitespace-nowrap">
            <li class="hover:text-blue-600">Home</li>
            <li class="hover:text-blue-600">Datawrapper News</li>
            <li class="hover:text-blue-600">Thoughts &amp; How-Tos</li>
            <li class="hover:text-blue-600">Weekly Charts</li>
            <li class="hover:text-blue-600">About Us</li>
            <li class="hover:text-blue-600">Changelog</li>
          </ul>
        </div>
      </header>

      <main class="bg-white p-8">
        <div class="grid grid-cols-[150px,1fr] gap-x-8">
          <div class="flex flex-col text-right text-gray-500">
            <strong>Mar 18, 2021</strong>
            <div>by Firstname Lastname</div>
          </div>
          <div>
            <header class="text-gray-500">
              <strong>Weekly Chart</strong>
            </header>
            <section class="mt-8">
              <figure class="let-image border border-gray-300 min-h-[260px]"></figure>
              <caption class="block text-left text-sm text-gray-500 mt-2 mb-5">
                Photo by Firstname Lastname, Source
              </caption>

              <section class="leading-7 space-y-5">
                <p>
                  <em>
                    Hello, this is Firstname! Here at Company Name, lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptate enim
                    possimus porro, aliquam ut repudiandae vitae quis, quasi
                    odio nihil soluta corporis quo fugiat assumenda, ducimus
                    minima itaque amet nemo.
                  </em>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore ipsa ad porro
                  <strong> dolore ab molestias dolorum</strong> ullam aspernatur
                  dicta in sequi voluptates voluptatibus repellat error, quae
                  illo quod asperiores suscipit.
                </p>
                <hr class="border-t-2 mx-20 border-gray-200" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore ipsa ad porro
                  <strong> dolore ab molestias dolorum</strong> ullam aspernatur
                  dicta in sequi voluptates voluptatibus repellat error, quae
                  illo quod asperiores suscipit.
                </p>
              </section>
            </section>
          </div>
        </div>
      </main>
      <footer class="bg-gray-100 p-10">
        <div class="flex flex-col divide-y-2 divide-white">
          <div class="pb-4 text-gray-500">Related articles</div>
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
        </div>
      </footer>
    </div>
  );
}
