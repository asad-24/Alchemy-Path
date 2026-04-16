import Section from "@/components/Section";

export default function Terms() {
  return (
    <Section narrow className="py-32 md:py-48">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-20 text-center tracking-tight">
          Terms & Conditions
        </h1>

        <div className="space-y-16 text-base md:text-lg leading-relaxed font-light">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Overview</h2>
            <p className="opacity-75">
              By engaging with The Alchemy Path coaching services, you agree to the following terms and conditions. Please read them carefully before proceeding.
            </p>
          </div>

          {/* Services Disclaimer */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Services Disclaimer</h2>
            <div className="space-y-6 opacity-75">
              <p>
                The coaching services provided by The Alchemy Path are designed for personal and professional growth. This is not therapy, medical advice, or a substitute for professional mental health treatment.
              </p>
              <p>
                All guidance, strategies, and recommendations are provided for educational and transformational purposes only. Results may vary based on individual commitment and circumstances.
              </p>
              <p>
                By participating in coaching sessions, you acknowledge that you are solely responsible for your own choices, actions, and results.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Payment Terms</h2>
            <div className="space-y-6 opacity-75">
              <p>
                Payment is required in full before coaching services begin, unless otherwise agreed upon in writing.
              </p>
              <p>
                <strong className="font-medium">No refunds:</strong> Due to the personalised nature of 1:1 coaching, all payments are non-refundable once services have commenced. By enrolling, you commit to the full coaching programme.
              </p>
              <p>
                Payment plans may be available on a case-by-case basis and must be agreed upon prior to starting the programme.
              </p>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Client Responsibilities</h2>
            <div className="space-y-6 opacity-75">
              <p>
                As a client, you agree to:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Attend scheduled sessions on time or provide at least 24 hours notice for rescheduling</li>
                <li>Engage fully and honestly in the coaching process</li>
                <li>Complete any assigned practices or integration work between sessions</li>
                <li>Take full responsibility for your own transformation and results</li>
              </ul>
              <p>
                Missed sessions without 24 hours notice are non-refundable and cannot be rescheduled.
              </p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Confidentiality</h2>
            <p className="opacity-75">
              All information shared during coaching sessions is kept strictly confidential, unless required by law or if there is a risk of harm to yourself or others.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Limitation of Liability</h2>
            <div className="space-y-6 opacity-75">
              <p>
                The Alchemy Path and its coach(es) are not liable for any decisions, actions, or outcomes resulting from participation in coaching programmes.
              </p>
              <p>
                You acknowledge that personal transformation requires your active participation and commitment, and that results cannot be guaranteed.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Intellectual Property</h2>
            <p className="opacity-75">
              All materials, frameworks, and content provided during coaching are the intellectual property of The Alchemy Path and may not be reproduced, shared, or distributed without written permission.
            </p>
          </div>

          {/* Termination */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Termination</h2>
            <p className="opacity-75">
              The Alchemy Path reserves the right to terminate coaching services at any time if terms are violated or if the coaching relationship is no longer aligned. In such cases, a partial refund may be issued at the coach's discretion.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl tracking-tight">Contact</h2>
            <p className="opacity-75">
              For questions regarding these terms, please contact:{" "}
              <a href="mailto:hello@thealchemypath.com" className="text-[#C6A86B] hover:underline">
                hello@thealchemypath.com
              </a>
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-12 border-t border-[#0B0B0B]/10">
            <p className="text-sm opacity-50">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
