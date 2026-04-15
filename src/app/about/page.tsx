import Button from "@/components/Button";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section narrow className="py-32 md:py-48">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight">
            About
          </h1>
        </div>
      </Section>

      {/* Realisation */}
      <Section background="dark" narrow>
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-16 text-[#C6A86B] tracking-tight">
            The Realisation
          </h2>
          <div className="space-y-10 text-lg md:text-xl leading-relaxed opacity-85 font-light">
            <p>
              For years, I tried to become the woman I thought I needed to be. I read the books. I followed the strategies. I worked harder than anyone I knew.
            </p>
            <p>
              But no matter what I achieved, it never felt like enough.
            </p>
            <p>
              Because I was trying to get somewhere while still being someone who didn't believe she could have it.
            </p>
            <p>
              The shift happened when I stopped trying to <em className="italic">become</em> her… and started <em className="italic">being</em> her.
            </p>
          </div>
        </div>
      </Section>

      {/* Identity Shift */}
      <Section narrow>
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-16 tracking-tight">
            The Identity Shift
          </h2>
          <div className="space-y-10 text-lg md:text-xl leading-relaxed font-light">
            <p>
              Everything changed when I realized: I didn't need to work harder. I needed to become someone different.
            </p>
            <p>
              Not a better version of me. A completely different identity.
            </p>
            <p>
              Someone who didn't question her worth. Someone who didn't need permission. Someone who already knew she was enough.
            </p>
            <p>
              That's the work I do now. I help women make that shift—not through force, but through transformation.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="dark" narrow>
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-16 text-[#C6A86B] tracking-tight">
            My Philosophy
          </h2>
          <div className="space-y-10 text-lg md:text-xl leading-relaxed opacity-85 font-light">
            <p>
              You don't need another strategy. You need a new operating system.
            </p>
            <p>
              One that doesn't rely on willpower, discipline, or pushing through resistance.
            </p>
            <p>
              One where you wake up as the woman who already has what you want—and everything flows from there.
            </p>
            <p>
              This is alchemy. This is identity work. This is The Alchemy Path.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section narrow>
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Ready to step into your next identity?
          </h2>
          <div className="pt-8">
            <Button href="/work-with-me" variant="primary">
              Work With Me
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
