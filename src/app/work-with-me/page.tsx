import Button from "@/components/Button";
import Section from "@/components/Section";

export default function WorkWithMe() {
  return (
    <>
      {/* Hero Section */}
      <Section narrow className="py-32 md:py-48">
        <div className="text-center space-y-10">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Work With Me
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light opacity-70 max-w-2xl mx-auto">
            You're not here for surface-level shifts. You're here for total transformation.
          </p>
        </div>
      </Section>

      {/* Main Offer */}
      <Section background="dark" narrow>
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#C6A86B] tracking-tight">
              1:1 Private Coaching
            </h2>
            <p className="text-xl md:text-2xl opacity-75 font-light">
              Deep transformative work for women ready to embody their next identity
            </p>
          </div>

          <div className="space-y-16">
            {/* What's Included */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl md:text-4xl tracking-tight">
                What's Included
              </h3>
              <ul className="space-y-6 opacity-85 font-light">
                <li className="flex items-start text-base md:text-lg">
                  <span className="text-[#C6A86B] mr-4 text-xl">•</span>
                  <span>Weekly 1:1 coaching sessions (via Zoom)</span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <span className="text-[#C6A86B] mr-4 text-xl">•</span>
                  <span>Deep identity work and subconscious reprogramming</span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <span className="text-[#C6A86B] mr-4 text-xl">•</span>
                  <span>Unlimited messaging support between sessions</span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <span className="text-[#C6A86B] mr-4 text-xl">•</span>
                  <span>Personalized practices and integration exercises</span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <span className="text-[#C6A86B] mr-4 text-xl">•</span>
                  <span>Ongoing energetic and mindset recalibration</span>
                </li>
              </ul>
            </div>

            {/* What Changes */}
            <div className="space-y-8 pt-8">
              <h3 className="font-serif text-2xl md:text-4xl tracking-tight">
                What Changes For You
              </h3>
              <div className="space-y-8 opacity-85 font-light text-base md:text-lg leading-relaxed">
                <p>
                  You stop operating from the identity of someone trying to get somewhere—and start being the woman who's already there.
                </p>
                <p>
                  You no longer question your worth, your desires, or your right to have what you want.
                </p>
                <p>
                  You make decisions quickly. You trust yourself completely. You stop second-guessing everything.
                </p>
                <p>
                  Your reality shifts to match who you've become—not through force, but through alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section narrow>
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center tracking-tight">
            This Is For You If...
          </h2>
          <div className="space-y-8 text-base md:text-lg leading-relaxed font-light">
            <p>✓ You're done playing small and pretending you don't want what you want</p>
            <p>✓ You know there's a bigger version of your life waiting—and you're ready to step into it</p>
            <p>✓ You're willing to let go of who you've been to become who you're meant to be</p>
            <p>✓ You're ready to do deep, transformative work—not just surface-level mindset shifts</p>
            <p>✓ You're committed to yourself and your transformation</p>
          </div>
        </div>
      </Section>

      {/* Investment Note */}
      <Section background="dark" narrow>
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <p className="text-base md:text-lg opacity-75 leading-relaxed font-light">
            This is high-level, personalized coaching. I work with a select number of women at a time to ensure each client receives my full attention and support.
          </p>
          <p className="text-base md:text-lg opacity-75 leading-relaxed font-light">
            Investment details and availability will be discussed during your application call.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section narrow>
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Ready to begin?
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light opacity-80">
            The first step is a conversation. Apply below and I'll be in touch.
          </p>
          <div className="pt-8">
            <Button href="mailto:hello@thealchemypath.com" variant="primary">
              Apply Now
            </Button>
          </div>
          <p className="text-sm opacity-50 font-light pt-4">
            Applications are reviewed within 48 hours
          </p>
        </div>
      </Section>
    </>
  );
}
