import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectGalleryProps = {
  title?: string;
  description?: string;
  images: GalleryImage[];
};

export default function ProjectGallery({
  title = "Project Gallery",
  description = "Selected screenshots showing implementation, configuration, and validation evidence.",
  images,
}: ProjectGalleryProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technical Evidence
        </p>

        <h2 className="mt-4 text-3xl font-bold">{title}</h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          {description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
            >
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group block"
                aria-label={`Open full-size image: ${image.caption}`}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-950/90 to-transparent px-4 pb-4 pt-14 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-cyan-400/40 bg-slate-950/90 px-4 py-2 text-xs font-semibold text-cyan-300">
                      Open full-size screenshot ↗
                    </span>
                  </div>
                </div>
              </a>

              <figcaption className="border-t border-slate-800 p-5">
                <p className="text-sm leading-6 text-slate-300">
                  {image.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}