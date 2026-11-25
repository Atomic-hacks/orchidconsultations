import { Button } from "../components/Button";
import { Media } from "../components/Media";
import { PageHeader } from "../components/PageHeader";
import { Container, Section, SectionHeader } from "../components/SectionLayout";
import { images } from "../data/images";

const strategicPhases = [
  {
    number: "01",
    title: "Evaluate",
    summary:
      "Understand the need, establish trust and manage risk before action.",
    principles: [
      {
        letter: "S",
        title: "Solutions",
        text: "Practical responses to real business challenges.",
      },
      {
        letter: "T",
        title: "Trust",
        text: "Transparent, reliable and responsible guidance.",
      },
      {
        letter: "R",
        title: "Risk",
        text: "Careful evaluation that protects client interests.",
      },
    ],
  },
  {
    number: "02",
    title: "Enable",
    summary:
      "Connect clients to resources and strengthen their ability to move forward.",
    principles: [
      {
        letter: "A",
        title: "Access",
        text: "Connections to finance, resources and support.",
      },
      {
        letter: "T",
        title: "Transformation",
        text: "Stronger operations and financial capacity.",
      },
      {
        letter: "E",
        title: "Empowerment",
        text: "Knowledge and support for better decisions.",
      },
    ],
  },
  {
    number: "03",
    title: "Grow",
    summary:
      "Turn sound decisions into sustainable business and financial progress.",
    principles: [
      {
        letter: "G",
        title: "Growth",
        text: "Expanded capacity and stronger operations.",
      },
      {
        letter: "I",
        title: "Investment",
        text: "Productive use of capital toward long-term goals.",
      },
      {
        letter: "C",
        title: "Consulting",
        text: "Advice tailored to each client’s needs and goals.",
      },
    ],
  },
] as const;

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="01 / About Orchid"
        title="Financial insight. Practical support. Long-term growth."
        intro="Orchiddigital helps businesses access finance, strengthen operations and pursue sustainable growth through integrated financial and consulting services."
        image={images.pageHeaders.about}
      />

      {/* Trust and Certification Section */}

      {/* Trust and Certification Section */}
      <section
        className="bg-white border-b border-[var(--line)] overflow-hidden"
        aria-labelledby="about-trust-title"
      >
        <Container
          className="
      grid
      grid-cols-[minmax(0,1fr)_auto_auto]
      items-center
      gap-6
      py-8
      max-[1100px]:grid-cols-[minmax(0,1fr)_auto]
      max-[1100px]:gap-5
      max-[1100px]:py-7
      max-[767px]:grid-cols-1
      max-[767px]:gap-5
      max-[767px]:py-6
    "
        >
          {/* Trust Information */}
          <div className="min-w-0">
            <h2
              id="about-trust-title"
              className="
          whitespace-nowrap
          text-[clamp(14px,1.5vw,19px)]
          leading-[1.2]
          font-semibold
          tracking-[-0.035em]
          text-[var(--ink)]
          max-[767px]:text-[15px]
        "
            >
              Licensed. Verified. Accountable.
            </h2>

            <p
              className="
          max-w-[62ch]
          mt-2
          mb-0
          text-[var(--slate)]
          text-[13px]
          leading-[1.6]
        "
            >
              Orchiddigital operates in full regulatory compliance as a licensed
              money lending company and SCUML-certified.
            </p>
          </div>

          {/* Certification Image */}
          <figure
            className="
        flex
        items-center
        gap-4
        m-0
        pl-6
        border-l
        border-[var(--line)]
        max-[1100px]:row-start-2
        max-[1100px]:col-span-full
        max-[1100px]:pl-0
        max-[1100px]:border-l-0
        max-[1100px]:pt-5
        max-[1100px]:border-t
        max-[767px]:row-auto
        max-[767px]:col-auto
        max-[767px]:pt-0
        max-[767px]:border-t-0
      "
          >
            <span
              className="
          relative
          block
          w-[150px]
          h-[150px]
          flex-none
          overflow-hidden
          rounded-2xl
          bg-white
          border
          border-[var(--line)]
          shadow-[0_12px_30px_rgba(0,0,0,0.13)]
          ring-4
          ring-[#b9d79b]/30
          transition-transform
          duration-300
          hover:scale-[1.04]
          max-[767px]:w-[125px]
          max-[767px]:h-[125px]
        "
            >
              <img
                src="/license.jpg"
                alt="Money Lending License and SCUML certification"
                className="
            block
            w-full
            h-full
            object-contain
            p-1
          "
              />
            </span>

            <figcaption
              className="
          max-w-[18ch]
          text-[var(--ink)]
          text-[13px]
          leading-[1.5]
          font-semibold
        "
            >
              Money Lending License &amp; SCUML Certified
            </figcaption>
          </figure>

          {/* Action Buttons */}
          <div
            className="
        flex
        items-center
        justify-end
        gap-2
        max-[1100px]:col-start-2
        max-[1100px]:row-start-1
        max-[1100px]:flex-wrap
        max-[767px]:col-auto
        max-[767px]:row-auto
        max-[767px]:grid
        max-[767px]:grid-cols-1
        max-[767px]:w-full
        [&_.signature-button]:whitespace-nowrap
        max-[767px]:[&_.signature-button]:w-full
      "
            aria-label="Choose how to work with Orchid"
          >
            <Button to="/contact?service=access-to-finance">
              Discuss funding needs
            </Button>

            <Button to="/services" variant="outline">
              Explore consulting services
            </Button>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <Section>
        <Container
          className="
            flex
            justify-center
            flex-row
            gap-8
            items-center
            max-[767px]:block
          "
        >
          <div
            className="
              col-[1/7]
              [&_.section-header]:block
              [&_.section-header]:mb-[26px]
              [&_.section-header-mark]:mb-7
              [&_.section-header-copy_h2]:text-[clamp(32px,3.3vw,46px)]
              [&_.section-header-copy_h2]:leading-[1.12]
              [&_.section-header-copy_h2]:font-[480]
              max-[767px]:[&_.section-header-copy_h2]:text-[34px]
            "
          >
            <SectionHeader title="Built to connect capital, businesses and opportunity." />

            <div
              className="
                grid
                gap-9
                max-w-[62ch]
                -mt-2
                max-[767px]:gap-3
                [&_p]:m-0
                [&_p]:max-w-none
                [&_p]:text-[var(--slate)]
                [&_p]:text-[17px]
                [&_p]:leading-[1.7]
                max-[767px]:[&_p]:text-[16px]
              "
            >
              <p>
                Orchiddigital Consulting Limited provides financial, wealth
                management and consulting solutions to a diverse clientele,
                including corporate organisations, government institutions,
                financial institutions, affluent individuals, high-net-worth
                clients and institutional investors.
              </p>

              <p>
                As a growing participant in Nigeria&apos;s financial and
                consulting industry, we are strategically positioned to create
                sustainable value by combining practical expertise with the
                proven market experience, reputation and networks of our
                partners in Nigeria and around the world.
              </p>

              <p>
                Our work is professional, transparent and centred on each
                client&apos;s goals—helping individuals and institutions build,
                grow, manage and preserve wealth over the long term.
              </p>
            </div>
          </div>

          <div
            className="
              relative
              col-[7/13]
              max-[767px]:mt-7
              [&_.media-frame]:min-h-0
              [&_.media-frame]:h-[clamp(360px,36vw,480px)]
              [&_.media-frame]:aspect-auto
              max-[767px]:[&_.media-frame]:h-auto
              max-[767px]:[&_.media-frame]:aspect-[4/3]
            "
          >
            <Media {...images.about[1]} ratio="4/5" parallax />

            <span
              className="
                absolute
                left-5
                bottom-5
                grid
                min-w-[160px]
                p-5
                text-white
                bg-[var(--ink)]
                text-[12px]
                max-[767px]:left-[14px]
              "
            >
              <strong className="mb-[7px] text-[36px] leading-none font-bold">
                2019
              </strong>
              Established
            </span>
          </div>
        </Container>
      </Section>

      {/* Mission and Vision */}
      <Section className="bg-[var(--surface)]">
        <Container>
          <SectionHeader
            title="A clear purpose. A long-term view."
            lead="Our direction is grounded in responsible access to finance, practical business support and enduring client relationships."
          />

          <div
            className="
              grid
              grid-cols-2
              mt-2
              border-t
              border-b
              border-[var(--line)]
              max-[767px]:grid-cols-1
              [&>article]:min-w-0
              [&>article]:pt-8
              [&>article]:pr-10
              [&>article]:pb-9
              [&>article+article]:pr-0
              [&>article+article]:pl-10
              [&>article+article]:border-l
              [&>article+article]:border-[var(--line)]
              max-[767px]:[&>article]:pt-6
              max-[767px]:[&>article]:pr-0
              max-[767px]:[&>article]:pb-7
              max-[767px]:[&>article]:pl-0
              max-[767px]:[&>article+article]:border-l-0
              max-[767px]:[&>article+article]:border-t
              max-[767px]:[&>article+article]:border-[var(--line)]
            "
          >
            <article>
              <span className="text-[var(--mark-deep)] text-[13px] font-[650] tracking-[0.08em] uppercase">
                Mission
              </span>

              <h3
                className="
                  max-w-[18ch]
                  mt-[14px]
                  text-[var(--ink)]
                  text-[clamp(26px,2.4vw,34px)]
                  leading-[1.15]
                  font-[550]
                  tracking-[-0.025em]
                  max-[767px]:text-[26px]
                "
              >
                Tailored finance for structured growth.
              </h3>

              <p className="max-w-[58ch] mt-4 text-[var(--slate)] text-[16px] leading-[1.7]">
                To provide tailored financial and consulting services to
                structured companies that meet the eligibility criteria for
                funding, helping them access capital and pursue sustainable
                growth.
              </p>
            </article>

            <article>
              <span className="text-[var(--mark-deep)] text-[13px] font-[650] tracking-[0.08em] uppercase">
                Vision
              </span>

              <h3
                className="
                  max-w-[18ch]
                  mt-[14px]
                  text-[var(--ink)]
                  text-[clamp(26px,2.4vw,34px)]
                  leading-[1.15]
                  font-[550]
                  tracking-[-0.025em]
                  max-[767px]:text-[26px]
                "
              >
                A trusted bridge to opportunity.
              </h3>

              <p className="max-w-[58ch] mt-4 text-[var(--slate)] text-[16px] leading-[1.7]">
                To be a foremost financial and consulting services
                provider—connecting businesses, people and organisations to
                finance, markets and resources through innovative, transparent
                and client-focused solutions.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Strategic Framework */}
      <Section className="bg-[var(--ink)] text-white">
        <Container>
          <SectionHeader
            title="We are S.T.R.A.T.E.G.I.C."
            lead="Nine commitments, organised into three practical phases, guide how we create long-term value."
            dark
          />

          <div
            className="
              grid
              grid-cols-3
              mt-2
              border-t
              border-b
              border-[rgb(255_255_255/20%)]
              max-[767px]:grid-cols-1
              [&>article]:min-w-0
              [&>article]:p-7
              [&>article]:border-r
              [&>article]:border-[rgb(255_255_255/20%)]
              [&>article:first-child]:pl-0
              [&>article:last-child]:pr-0
              [&>article:last-child]:border-r-0
              max-[767px]:[&>article]:grid
              max-[767px]:[&>article]:grid-cols-[104px_minmax(0,1fr)]
              max-[767px]:[&>article]:gap-[18px]
              max-[767px]:[&>article]:px-0
              max-[767px]:[&>article]:py-[22px]
              max-[767px]:[&>article]:border-r-0
              max-[767px]:[&>article]:border-b
              max-[767px]:[&>article]:border-[rgb(255_255_255/20%)]
              max-[767px]:[&>article:last-child]:border-b-0
            "
          >
            {strategicPhases.map((phase) => (
              <article key={phase.title}>
                <div>
                  <span className="text-[#8fa0ba] text-[11px] font-[650] tracking-[0.08em]">
                    {phase.number}
                  </span>

                  <h3 className="mt-2 text-[#b9d79b] text-[30px] leading-[1.1] font-[550] max-[767px]:text-[22px]">
                    {phase.title}
                  </h3>

                  <p className="max-w-[34ch] mt-2.5 text-[#d2d8e3] text-[14px] leading-[1.55] max-[767px]:mt-2 max-[767px]:text-[12px]">
                    {phase.summary}
                  </p>
                </div>

                <ul className="m-0 mt-6 p-0 border-t border-[rgb(255_255_255/18%)] list-none max-[767px]:mt-0 max-[767px]:border-t-0">
                  {phase.principles.map((principle) => (
                    <li
                      key={`${principle.letter}-${principle.title}`}
                      className="
                        grid
                        grid-cols-[34px_minmax(0,1fr)]
                        gap-3
                        py-[14px]
                        border-b
                        border-[rgb(255_255_255/18%)]
                        last:border-b-0
                        max-[767px]:grid-cols-[28px_minmax(0,1fr)]
                        max-[767px]:gap-2
                        max-[767px]:py-2.5
                      "
                    >
                      <span className="text-[#b9d79b] text-[24px] leading-none font-semibold max-[767px]:text-[21px]">
                        {principle.letter}
                      </span>

                      <div>
                        <h4 className="text-white text-[16px] leading-[1.2] font-[550] max-[767px]:text-[15px]">
                          {principle.title}
                        </h4>

                        <p className="mt-[5px] text-[#d2d8e3] text-[13px] leading-[1.5] max-[767px]:text-[12px]">
                          {principle.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
