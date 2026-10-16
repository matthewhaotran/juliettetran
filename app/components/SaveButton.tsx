"use client";

type Props = { src: string; fileName: string };

// On phones that can share files, open the share sheet so "Save Image"
// puts the photo in the Photos app. Everywhere else, use the normal download.
export default function SaveButton({ src, fileName }: Props) {
  async function save(event: React.MouseEvent<HTMLAnchorElement>) {
    const probe = new File([""], fileName, { type: "image/jpeg" });
    if (!navigator.canShare?.({ files: [probe] })) return;

    event.preventDefault();
    try {
      const blob = await (await fetch(src)).blob();
      const file = new File([blob], fileName, { type: blob.type || "image/jpeg" });
      await navigator.share({ files: [file], title: fileName });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      window.open(src, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a
      href={src}
      download={fileName}
      onClick={save}
      className="shrink-0 text-[#9a7f68] hover:underline"
    >
      Download
    </a>
  );
}
