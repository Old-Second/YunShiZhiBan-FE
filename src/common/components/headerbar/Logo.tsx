import Image from 'next/image';
import Link from 'next/link';

const HEADER_BG_WIDTH = 425;
const HEADER_BG_HEIGHT = 386;

const Logo = () => {
  return (
    <Link href="/" className="relative">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={HEADER_BG_WIDTH}
        height={HEADER_BG_HEIGHT}
        className="h-[6vh] w-[6.6vh] select-none"
      />
    </Link>
  );
};
export default Logo;