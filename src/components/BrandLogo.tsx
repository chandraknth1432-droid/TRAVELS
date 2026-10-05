import markImage from '../assets/taj-mark.jpg';
import lockupImage from '../assets/taj-lockup.jpg';

type BrandLogoProps = {
  variant?: 'mark' | 'lockup';
  className?: string;
  alt?: string;
};

export default function BrandLogo({
  variant = 'mark',
  className = '',
  alt,
}: BrandLogoProps) {
  const isLockup = variant === 'lockup';

  return (
    <img
      src={isLockup ? lockupImage : markImage}
      alt={alt ?? (isLockup ? 'TAJ International Tours & Travels' : 'TAJ logo')}
      className={`taj-logo-screen object-contain ${className}`}
    />
  );
}
