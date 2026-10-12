import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photos = [
    { src: "/newborn_mom_cuddle.jpeg", alt: "Mom cuddling newborn" },
    { src: "/newborn_family_selfie.jpeg", alt: "Mom, dad, and newborn" },
    { src: "/newborn_dad_holding.jpeg", alt: "Dad holding newborn" },
    { src: "/announcement_cookies.jpeg", alt: "Announcement with cookies" },
    { src: "/beach_announcement.jpeg", alt: "Beach announcement" },
    { src: "/beach_announcement_dad_gang.jpeg", alt: "Beach announcement - dad gang" },
    { src: "/first_ultrasound.jpeg", alt: "First ultrasound" },
    { src: "/ultrasound.jpeg", alt: "Ultrasound" },
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
            <div
              key={photo.src}
              className="bg-white p-2 pb-8 shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
