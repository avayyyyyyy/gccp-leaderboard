import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import TableIndex from "@/components/Table.Index";
export default function Home() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script id="blast_effect">
        {`const end = Date.now() + 30 * 150;

          // Google colors
          const colors = ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"];
          
          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            });
          
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            });
          
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
          `}
      </Script>
      <nav className="w-full  shadow-md relative ">
        <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
          <div className="">
            <Image src="/assets/cloudLg.png" alt="me" width="40" height="40" />
          </div>
          <p className="">Google Cloud STUDY JAMS 23 - 24</p>
        </div>

        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
            <div className="img w-16 h-1w-16 rounded-full ">
              <Image
                src="/assets/gdsc-logo.png"
                alt="me"
                width="64"
                height="64"
              />
            </div>
            <div className="text flex flex-col justify-start items-start">
              <p className="text-base">Google Developer Student Club</p>
              <p className="text-xs">Poornima University, Jaipur</p>
            </div>
          </div>

          <div className="links mob:py-3 flex justify-center items-center space-x-5">
            <Link href="https://chat.whatsapp.com/J1EjBNlkKRd5ONx4eQ57br">
              <div className="cursor-pointer medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
                </svg>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/gdsc-poornima-university-34696528a/">
              <div className="cursor-pointer linkedin">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="#3b82f6"
                  />
                </svg>
              </div>
            </Link>
            <Link href="https://www.instagram.com/gdsc.poornima">
              <div className="cursor-pointer insta">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    fill="#"
                  />
                </svg>
              </div>
            </Link>
            <Link href="https://twitter.com/gdsc_poornima/">
              <div className="cursor-pointer twitter">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="m-auto w-fit mt-10">
        {/* <Link href="/profilebadge" className="px-3 py-2 bg-blue-500 text-white">
          Create Badge
        </Link> */}
      </div>

      <TableIndex />

      <div className="  w-full p-2 text-center bg-gray-900 text-gray-300">
        Devloped By{" "}
        <a
          href="https://avayyyyyyy.github.io/shubhlovesweb3/"
          className="text-orange-400"
        >
          Shubhankit Jain
        </a>
      </div>
    </>
  );
}
