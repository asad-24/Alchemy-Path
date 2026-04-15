import Button from "@/components/Button";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] text-[#F7F5F2]">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.1] tracking-tight text-balance">
            You're not asking for too much…<br />
            You're asking the wrong person.
          </h1>
          <p className="text-xl md:text-2xl mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed font-light">
            For women who feel there is more… and refuse to settle for less.
          </p>
          <Button href="/work-with-me" variant="primary">
            Work With Me
          </Button>
        </div>
      </section>

      {/* Connection Section */}
      <Section narrow>
        <div className="max-w-2xl mx-auto space-y-16 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            You've tried everything. The courses. The manifestation. The positive thinking.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            But something still feels… missing.
          </p>
          <div className="w-16 h-px bg-[#C6A86B] mx-auto my-20"></div>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            That's because the problem isn't your commitment. It's not your effort.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            It's that you're still asking <em className="italic">the old version of you</em> to create something she was never designed to hold.
          </p>
        </div>
      </Section>

      {/* Authority Section */}
      <Section background="dark" narrow>
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-[#C6A86B] tracking-tight">
              I'm Dessy Ivanova
            </h2>
            <p className="text-lg md:text-xl tracking-widest uppercase opacity-60 font-light">
              Transformative Coach
            </p>
          </div>
          <div className="space-y-10 text-lg md:text-xl leading-relaxed opacity-85 font-light pt-8">
            <p>
              I work with women who are done settling. Done playing small. Done pretending they don't want what they want.
            </p>
            <p>
              This isn't about fixing you. You're not broken.
            </p>
            <p>
              This is about identity. About stepping into the version of you who already has everything you desire—and living from that place.
            </p>
          </div>
        </div>
      </Section>

      {/* Offer Section */}
      <Section narrow>
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
              1:1 Private Coaching
            </h2>
          </div>
          
          <div className="space-y-10 text-center">
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              This is deep, transformative work. We don't just shift your mindset—we rebuild your entire internal operating system.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
              You'll step into a new identity. One that doesn't question, doubt, or second-guess. One that knows she's worthy—and acts like it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
              This is for women ready to stop preparing and start being.
            </p>
          </div>

          <div className="text-center pt-8">
            <Button href="/work-with-me" variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="dark" narrow>
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            You already know you're meant for more.
          </h2>
          <p className="text-2xl md:text-3xl opacity-75 leading-relaxed font-light">
            The question is: are you ready to become her?
          </p>
          <div className="pt-8 ">
            <Button href="/work-with-me" variant="outline" className="text-white">
              Apply to Work Together
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

