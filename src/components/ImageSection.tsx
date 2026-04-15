import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-125 md:h-150 lg:h-175">
        <Image 
          src="/just-up-the-footer.jpg"
          alt="The Alchemy Path"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
