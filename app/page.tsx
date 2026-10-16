import Image from "next/image";
import SaveButton from "./components/SaveButton";

type Photo = { src: string; caption: string; width: number; height: number };

export default function Home() {
  // Newest photos go at the top of this list.
  const photos: Photo[] = [
    { src: "/photos/pro-01.jpg", caption: "Family in black and white", width: 1064, height: 1600 },
    { src: "/photos/pro-02.jpg", caption: "Sleepy newborn on lace", width: 1600, height: 1101 },
    { src: "/photos/pro-03.jpg", caption: "Tiny toes on lace", width: 1600, height: 1064 },
    { src: "/photos/pro-04.jpg", caption: "Pink tutu dreams", width: 1600, height: 1064 },
    { src: "/photos/pro-05.jpg", caption: "Sweet pink tutu", width: 1600, height: 1166 },
    { src: "/photos/pro-06.jpg", caption: "Tiny foot in hand", width: 1600, height: 1064 },
    { src: "/photos/pro-07.jpg", caption: "Pink flower headband", width: 1600, height: 1064 },
    { src: "/photos/pro-08.jpg", caption: "Brown tutu and bow", width: 1600, height: 1125 },
    { src: "/photos/pro-09.jpg", caption: "Happy little smile", width: 1600, height: 1075 },
    { src: "/photos/pro-10.jpg", caption: "Sunshine yellow tutu", width: 1600, height: 1093 },
    { src: "/photos/pro-11.jpg", caption: "Yawning close-up", width: 1600, height: 1107 },
    { src: "/photos/pro-12.jpg", caption: "Peaceful sleep", width: 1600, height: 1146 },
    { src: "/photos/pro-13.jpg", caption: "Dreaming on the moon", width: 1600, height: 1081 },
    { src: "/photos/pro-14.jpg", caption: "Moon pillow nap", width: 1600, height: 1076 },
    { src: "/photos/pro-15.jpg", caption: "Stars and moon", width: 1600, height: 1184 },
    { src: "/photos/pro-16.jpg", caption: "A mother's kiss", width: 1064, height: 1600 },
    { src: "/photos/pro-17.jpg", caption: "Our little family", width: 1064, height: 1600 },
    { src: "/photos/pro-18.jpg", caption: "Family cuddles", width: 1064, height: 1600 },
    { src: "/photos/pro-19.jpg", caption: "Daddy's gentle hold", width: 1064, height: 1600 },
    { src: "/photos/pro-20.jpg", caption: "Cuddles with mom and dad", width: 1064, height: 1600 },
    { src: "/photos/pro-21.jpg", caption: "Forehead kiss", width: 1600, height: 1064 },
    { src: "/photos/pro-22.jpg", caption: "Pink crib dreams", width: 1600, height: 1091 },
    { src: "/photos/pro-23.jpg", caption: "Hospital window snuggles", width: 1600, height: 1066 },
    { src: "/photos/pro-24.jpg", caption: "Hello, world", width: 1600, height: 1066 },
    { src: "/photos/pro-25.jpg", caption: "Sweet kiss at the window", width: 1600, height: 1066 },
    { src: "/photos/pro-26.jpg", caption: "Proud parents", width: 1600, height: 1066 },
    { src: "/photos/pro-27.jpg", caption: "Holding our girl", width: 1066, height: 1600 },
    { src: "/photos/pro-28.jpg", caption: "Mom's sweet cuddle", width: 1066, height: 1600 },
    { src: "/photos/pro-29.jpg", caption: "Dad's big smile", width: 1066, height: 1600 },
    { src: "/photos/pro-30.jpg", caption: "Mom's first kiss", width: 1066, height: 1600 },
    { src: "/photos/pro-31.jpg", caption: "Hello, Juliette", width: 1066, height: 1600 },
    { src: "/photos/pro-32.jpg", caption: "Nose to nose", width: 1066, height: 1600 },
    { src: "/photos/pro-33.jpg", caption: "Tucked in tight", width: 1066, height: 1600 },
    { src: "/photos/pro-34.jpg", caption: "Sleeping beauty", width: 1600, height: 1066 },
    { src: "/photos/pro-35.jpg", caption: "Dad's sweet hold", width: 1066, height: 1600 },
    { src: "/photos/pro-36.jpg", caption: "Welcome to the world", width: 1600, height: 1066 },
    { src: "/photos/pro-37.jpg", caption: "Sleepy in striped bow", width: 1066, height: 1600 },
    { src: "/photos/pro-38.jpg", caption: "Soft newborn cheeks", width: 1066, height: 1600 },
    { src: "/photos/pro-39.jpg", caption: "Footprint swaddle", width: 1066, height: 1600 },
    { src: "/photos/pro-40.jpg", caption: "Birth announcement sign", width: 1066, height: 1600 },
    { src: "/photos/pro-41.jpg", caption: "Timeless black and white", width: 1064, height: 1600 },
    { src: "/newborn_mom_cuddle.jpeg", caption: "first photo ever", width: 1536, height: 2048 },
    { src: "/newborn_family_selfie.jpeg", caption: "first family photo", width: 1536, height: 2048 },
    { src: "/newborn_dad_holding.jpeg", caption: "first photo with dad", width: 1536, height: 2048 },
    { src: "/announcement_cookies.jpeg", caption: "baby shower cookies", width: 2048, height: 1536 },
    { src: "/beach_announcement.jpeg", caption: "Excited for Juliette to come!", width: 1536, height: 2048 },
    { src: "/beach_announcement_dad_gang.jpeg", caption: "baby announcement", width: 2048, height: 1365 },
    { src: "/ultrasound.jpeg", caption: "first ultrasound family photo", width: 1174, height: 875 },
    { src: "/first_ultrasound.jpeg", caption: "second ultrasound", width: 2048, height: 1536 },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#4a3f36]">
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl">
            Juliette Madeline Tran
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10">
          {photos.map((photo) => {
            const ext = photo.src.slice(photo.src.lastIndexOf("."));
            const fileName = `${photo.caption.toLowerCase().replace(/[^a-z0-9]+/g, "-")}${ext}`;

            return (
              <figure key={photo.src} className="bg-white p-2 pb-4 shadow-md">
                <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-auto"
                  />
                </a>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 px-1 text-sm">
                  <span className="font-serif italic text-[#6d5b4c]">{photo.caption}</span>
                  <SaveButton src={photo.src} fileName={fileName} />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </main>
    </div>
  );
}
