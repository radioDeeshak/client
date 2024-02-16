import Image from 'next/image';
import logoImage from '~/assets/images/logo.jpg';

const Logo = () => (
  <>
    <div style={{ width: 50, height: 'auto' }}>
      <Image src={logoImage} alt="Logo" layout="responsive" width={50} height={50} className='rounded-md' />
    </div>
    <span className="hidden ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:block">
      Radio Deeshak
    </span>
  </>
);

export default Logo;
