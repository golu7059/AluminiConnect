import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Connect with Peers',
    description:
      'Stay connected with your batchmates and build lifelong relationships through our interactive alumni network.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Data',
    description:
      'Your information is safe with us. We prioritize the security of your personal and professional details.',
    icon: LockClosedIcon,
  },
  {
    name: 'Streamlined Communication',
    description:
      'Easily communicate and collaborate with alumni groups or individuals using our efficient messaging system.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Exclusive Opportunities',
    description:
      'Gain access to exclusive job postings, mentorship programs, and alumni-only events to advance your career.',
    icon: FingerPrintIcon,
  },
];

export default function WhyAluminiConnect() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center reveal">
          <h2 className="text-base/7 font-semibold text-indigo-600">Stay Connected</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Empowering Alumni Connections
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Join a thriving community of alumni. Engage, network, and grow with peers who share your journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 reveal">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
