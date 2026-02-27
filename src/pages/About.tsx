import { SectionTitle } from "../components/section-title";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 md:px-16 lg:px-32 bg-gray-50">
      <SectionTitle
        title="About This Project"
        description="Learn everything about our Electrical Expert Platform designed for Bangladesh and Singapore electricians."
      />

      <motion.div
        className="mt-12 space-y-8 max-w-4xl text-gray-800 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-gray-700">
          This platform is designed to empower electricians with comprehensive
          knowledge about electrical works, from home wiring to mega DB board
          setups, load calculation, safety inspection, and government
          regulations. It combines a structured learning experience with
          practical examples to help electricians perform their tasks safely and
          efficiently.
        </p>

        <p className="text-gray-700">
          Our goal is to provide a one-stop solution for both novice and
          experienced electricians in Bangladesh and Singapore. Every section of
          the platform is carefully structured to deliver theoretical knowledge,
          practical insights, and visual aids such as diagrams, images, and
          charts.
        </p>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            The platform covers:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
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
        </motion.div>

        <p className="text-gray-700">
          Additionally, the platform connects electricians to relevant
          government offices and officers, making it easier to comply with
          regulations and gain official support when needed. The UI is fully
          frontend-based, responsive, and designed to be user-friendly while
          keeping modern aesthetic consistency with the Hero and Feature
          sections.
        </p>

        <p className="text-gray-700">
          In summary, this project acts as both an educational tool and a
          practical resource hub for electricians, helping them improve their
          skills, stay updated with regulations, and execute electrical projects
          efficiently and safely.
        </p>
      </motion.div>

      {/* Industrial Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-industrial-stripes bg-repeat opacity-10 -z-10"></div>
    </section>
  );
};
