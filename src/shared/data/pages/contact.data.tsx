import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

export const contactHero: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`شكراً لاهتمامك بـ`}</span>
      {`راديو ديشاك. نحن هنا لمساعدتك والإجابة على أي سؤال قد يكون لديك. نتطلع إلى استقبال آرائكم وتعليقاتكم واقتراحاتكم`}
    </>
  ),
};

export const contactContent: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: <>استخدم الاستمارة أدناه وسنرد عليكم في أسرع وقت ممكن</>,
  },
  items: [
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Email: contact@deeshak.com'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        autocomplete: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        label: 'Email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email',
      },
    ],
    textarea: {
      label: 'Message',
      name: 'message',
      cols: 30,
      rows: 10,
      placeholder: 'Your message',
    },
    btn: {
      title: 'Send message',
      type: 'submit',
    },
  },
};
