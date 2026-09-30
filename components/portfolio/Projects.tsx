import { Server, ShieldCheck } from 'lucide-react'

import SectionHead from './SectionHead'
import DonateNowFeature from './DonateNowFeature'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          kicker="Things I've Built"
          title="Featured Projects"
          subtitle="From real-time backends to ML pipelines — and a flagship charity platform crafted in Next.js + TypeScript."
        />

        <DonateNowFeature />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <ProjectCard
            title="Train Delay Prediction System"
            time="April 2026"
            stack={['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'bcrypt']}
            points={[
              'Scalable RESTful backend with 10+ endpoints for real-time train delay data.',
              'JWT authentication + bcrypt password hashing for secure sessions.',
              'Socket.io powered live updates-zero polling overhead.',
            ]}
            accent="from-cyan-500 to-blue-500"
            image="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&w=1200&q=70"
            icon={<Server className="h-5 w-5" />}
          />
          <ProjectCard
            title="Credit Card Fraud Detection"
            time="Jan 2025"
            stack={['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Logistic Regression']}
            points={[
              'End-to-end ML pipeline classifying fraudulent transactions with high accuracy.',
              'Tackled severe class imbalance with SMOTE + stratified sampling.',
              'Evaluated with AUC-ROC, precision & recall — robust and explainable.',
            ]}
            accent="from-rose-500 to-fuchsia-500"
            image="https://images.pexels.com/photos/8108728/pexels-photo-8108728.jpeg?auto=compress&w=1200"
            icon={<ShieldCheck className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  )
}
