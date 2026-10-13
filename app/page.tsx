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
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#4a3f36]">
      <main className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
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

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
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
