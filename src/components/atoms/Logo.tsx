import Image from 'next/image';
import logoImage from '~/assets/images/logo.jpg';

const Logo = () => (
  <>
    <div style={{ width: 80, height: 'auto' }}>
      <Image src={logoImage} alt="Logo" layout="responsive" width={50} height={50} className="rounded-md" />
    </div>
  </>
);

export default Logo;
