import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photos = [
    { src: "/newborn_mom_cuddle.jpeg", caption: "first photo ever" },
    { src: "/newborn_family_selfie.jpeg", caption: "first family photo" },
    { src: "/newborn_dad_holding.jpeg", caption: "first photo with dad" },
    { src: "/announcement_cookies.jpeg", caption: "baby shower cookies" },
    { src: "/beach_announcement.jpeg", caption: "Excited for Juliette to come!" },
    { src: "/beach_announcement_dad_gang.jpeg", caption: "baby announcement" },
    { src: "/ultrasound.jpeg", caption: "first ultrasound family photo" },
    { src: "/first_ultrasound.jpeg", caption: "first ultrasound" },
    { src: "/photos/pro-01.jpg", caption: "Family in black and white" },
    { src: "/photos/pro-02.jpg", caption: "Sleepy newborn on lace" },
    { src: "/photos/pro-03.jpg", caption: "Tiny toes on lace" },
    { src: "/photos/pro-04.jpg", caption: "Pink tutu dreams" },
    { src: "/photos/pro-05.jpg", caption: "Sweet pink tutu" },
    { src: "/photos/pro-06.jpg", caption: "Tiny foot in hand" },
    { src: "/photos/pro-07.jpg", caption: "Pink flower headband" },
    { src: "/photos/pro-08.jpg", caption: "Brown tutu and bow" },
    { src: "/photos/pro-09.jpg", caption: "Happy little smile" },
    { src: "/photos/pro-10.jpg", caption: "Sunshine yellow tutu" },
    { src: "/photos/pro-11.jpg", caption: "Yawning close-up" },
    { src: "/photos/pro-12.jpg", caption: "Peaceful sleep" },
    { src: "/photos/pro-13.jpg", caption: "Dreaming on the moon" },
    { src: "/photos/pro-14.jpg", caption: "Moon pillow nap" },
    { src: "/photos/pro-15.jpg", caption: "Stars and moon" },
    { src: "/photos/pro-16.jpg", caption: "A mother's kiss" },
    { src: "/photos/pro-17.jpg", caption: "Our little family" },
    { src: "/photos/pro-18.jpg", caption: "Family cuddles" },
    { src: "/photos/pro-19.jpg", caption: "Daddy's gentle hold" },
    { src: "/photos/pro-20.jpg", caption: "Cuddles with mom and dad" },
    { src: "/photos/pro-21.jpg", caption: "Forehead kiss" },
    { src: "/photos/pro-22.jpg", caption: "Pink crib dreams" },
    { src: "/photos/pro-23.jpg", caption: "Hospital window snuggles" },
    { src: "/photos/pro-24.jpg", caption: "Hello, world" },
    { src: "/photos/pro-25.jpg", caption: "Sweet kiss at the window" },
    { src: "/photos/pro-26.jpg", caption: "Proud parents" },
    { src: "/photos/pro-27.jpg", caption: "Holding our girl" },
    { src: "/photos/pro-28.jpg", caption: "Mom's sweet cuddle" },
    { src: "/photos/pro-29.jpg", caption: "Dad's big smile" },
    { src: "/photos/pro-30.jpg", caption: "Mom's first kiss" },
    { src: "/photos/pro-31.jpg", caption: "Hello, Juliette" },
    { src: "/photos/pro-32.jpg", caption: "Nose to nose" },
    { src: "/photos/pro-33.jpg", caption: "Tucked in tight" },
    { src: "/photos/pro-34.jpg", caption: "Sleeping beauty" },
    { src: "/photos/pro-35.jpg", caption: "Dad's sweet hold" },
    { src: "/photos/pro-36.jpg", caption: "Welcome to the world" },
    { src: "/photos/pro-37.jpg", caption: "Sleepy in striped bow" },
    { src: "/photos/pro-38.jpg", caption: "Soft newborn cheeks" },
    { src: "/photos/pro-39.jpg", caption: "Footprint swaddle" },
    { src: "/photos/pro-40.jpg", caption: "Birth announcement sign" },
    { src: "/photos/pro-41.jpg", caption: "Timeless black and white" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#4a3f36]">
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl mb-6">
            Juliette Madeline Tran
          </h1>
          <nav className="text-sm">
            <Link href="/blog" className="text-[#9a7f68] hover:underline">
              Blog
            </Link>
          </nav>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10">
          {photos.map((photo) => (
            <figure key={photo.src} className="bg-white p-2 pb-4 shadow-md">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={400}
                height={400}
                className="w-full h-auto aspect-square object-cover"
              />
              <figcaption className="mt-3 text-center font-serif italic text-sm text-[#6d5b4c]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
