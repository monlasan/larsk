import {
  Bot,
  CheckSquare2,
  CircleUserRound,
  FileBox,
  Frame,
  Gauge,
  ShieldCheck,
  Store,
  UserCog,
  Users,
  Workflow,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Candidate Evaluation',
      text: 'Utilize AI algorithms to analyze resumes and rank candidates based on customizable acceptance criteria, ensuring efficient screening of applicants.',
      icon: <Bot />,
    },
    {
      title: 'Embedded Application Form',
      text: 'Seamlessly embed the applicant submission form on organization websites using an iframe tag, providing a unified application experience for candidates and simplifying the application process.',
      icon: <Frame />,
    },
    {
      title: 'Real-Time Applicant Tracking and Collaboration',
      text: 'Track applicant submissions in real-time and facilitate collaboration among recruiters within the organization through a centralized workspace, streamlining communication and decision-making.',
      icon: <UserCog />,
    },
    // {
    //   title: 'Comprehensive Insights Dashboard',
    //   text: 'Access detailed insights and analytics on campaign performance, applicant demographics, and acceptance rates through a comprehensive dashboard, enabling data-driven decision-making and performance monitoring.',
    //   icon: <Gauge />,
    // },
    // {
    //   title: 'Automated Communication and Workflow',
    //   text: 'Set up automated communication workflows to send personalized notifications and updates to applicants at various stages of the recruitment process, enhancing candidate experience and streamlining communication efforts.',
    //   icon: <Workflow />,
    // },
    // {
    //   title: 'Secure and Scalable Infrastructure',
    //   text: 'Ensure the highest level of data security and compliance while benefiting from a scalable infrastructure that can accommodate a growing number of campaigns and applicants, ensuring reliability and responsiveness under heavy usage.',
    //   icon: <ShieldCheck />,
    // },
  ];
  //   {
  //     title: 'Effortless Collaboration',
  //     text: 'With AwaleERP, administrators can effortlessly create collaborator accounts, enabling smooth communication and coordination between teams and external contact.',
  //     icon: <Users />,
  //   },
  //   {
  //     title: 'Optimized Inventory Management',
  //     text: 'Simplify product management with our intuitive interface. Collaborators can create products, assign them to inventories, and streamline inventory tracking with easd.',
  //     icon: <FileBox />,
  //   },
  //   {
  //     title: 'Client-Centric Approach',
  //     text: 'Administrators and collaborators alike can easily add and manage client accounts, ensuring a personalized and attentive approach to client relationship.',
  //     icon: <CircleUserRound />,
  //   },
  //   {
  //     title: 'Streamlined Sales and Purchases',
  //     text: 'Facilitate sales and purchase processes effortlessly. Create and organize sale or purchase documents within customizable folders, ensuring clarity and efficiency throughout the transaction lifecycle',
  //     icon: <Store />,
  //   },
  //   {
  //     title: 'Seamless Integration, Exceptional Results',
  //     text: "Whether you're a commercial entity, a provider, or a constructor, AwaleERP seamlessly integrates into your workflow, empowering you to achieve exceptional results.",
  //     icon: <CheckSquare2 />,
  //   },
  // ];
  return (
    <section id='features' className='py-16 bg-white'>
      <div className='max-w-6xl px-4 mx-auto text-center items-center flex flex-col gap-4'>
        <h3 className='text-4xl font-bold'>All the features you need.</h3>
        <p className='text-lg max-w-96 mb-4 opacity-65'>
          We are constantly evolving Hireleak to provide what our users want.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-3'>
          {features.map((feature, idx) => (
            <div key={idx} className='flex gap-4'>
              <div className='text-primary'>{feature.icon}</div>
              <div className='text-left'>
                <b className='font-semibold'>{feature.title}</b>
                <p className='text-sm mt-2 opacity-80'>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
