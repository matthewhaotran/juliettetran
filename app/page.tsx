import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photos = [
    { src: "/announcement_cookies.jpeg", alt: "Announcement with cookies" },
    { src: "/beach_announcement.jpeg", alt: "Beach announcement" },
    { src: "/beach_announcement_dad_gang.jpeg", alt: "Beach announcement - dad gang" },
    { src: "/beach_announcement_matthew_joyce.jpeg", alt: "Beach announcement - Matthew & Joyce" },
    { src: "/first_ultrasound.jpeg", alt: "First ultrasound" },
    { src: "/ultrasound.jpeg", alt: "Ultrasound" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-pink-100">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-pink-600 mb-2">
            Juliette Tran
          </h1>
          <p className="text-xl text-pink-500">
            Coming soon to our family
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-pink-700 mb-8 text-center">
            Our Journey
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/babyshower"
            className="px-8 py-3 bg-pink-400 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors text-center shadow-md"
          >
            Baby Shower
          </Link>
          <a
            href="mailto:hello@juliettetran.com"
            className="px-8 py-3 border-2 border-pink-400 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors text-center"
          >
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
