import { SectionTitle } from "../components/section-title";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 md:px-16 lg:px-32">
      <SectionTitle
        title="About This Project"
        description="Learn everything about our Electrical Expert Platform designed for Bangladesh and Singapore electricians."
      />

      <div className="mt-12 space-y-8 max-w-4xl text-zinc-300">
        <p>
          This platform is designed to empower electricians with comprehensive
          knowledge about electrical works, from home wiring to mega DB board
          setups, load calculation, safety inspection, and government
          regulations. It combines a structured learning experience with
          practical examples to help electricians perform their tasks safely and
          efficiently.
        </p>

        <p>
          Our goal is to provide a one-stop solution for both novice and
          experienced electricians in Bangladesh and Singapore. Every section of
          the platform is carefully structured to deliver theoretical knowledge,
          practical insights, and visual aids such as diagrams, images, and
          charts.
        </p>

        <p>
          The platform covers:
          <ul className="list-disc list-inside mt-2">
            <li>Home wiring tutorials with step-by-step diagrams.</li>
            <li>DB board setup instructions with critical safety tips.</li>
            <li>
              Load calculation guides for industrial and residential projects.
            </li>
            <li>
              Safety inspections highlighting different hazards and preventive
              measures.
            </li>
            <li>
              Government rules and regulations related to electrical works.
            </li>
            <li>
              Tools and equipment knowledge with specifications and usage
              instructions.
            </li>
          </ul>
        </p>

        <p>
          Additionally, the platform connects electricians to relevant
          government offices and officers, making it easier to comply with
          regulations and gain official support when needed. The UI is fully
          frontend-based, responsive, and designed to be user-friendly while
          keeping modern aesthetic consistency with the Hero and Feature
          sections.
        </p>

        <p>
          In summary, this project acts as both an educational tool and a
          practical resource hub for electricians, helping them improve their
          skills, stay updated with regulations, and execute electrical projects
          efficiently and safely.
        </p>
      </div>
    </div>
  );
};
