import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

export const contactHero: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`شكرًا لاهتمامك بـ .`}</span>
      {`راديو ديشاك. نحن هنا لمساعدتك والإجابة على أي سؤال قد يكون لديك. نتطلع إلى الاستماع منك.
      `}
    </>
  ),
};

export const contactContent: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        يرجى أخذ لحظة لملء هذا النموذج.{' '}
        <span className="hidden md:inline">{`حتى نتمكن من فهم احتياجاتك بشكل أفضل وبدء العملية بسلاسة.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: info@deeshak.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};
