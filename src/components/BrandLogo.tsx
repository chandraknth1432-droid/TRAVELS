type BrandLogoProps = {
  variant?: 'mark' | 'lockup';
  className?: string;
};

export default function BrandLogo({
  variant = 'mark',
  className = '',
}: BrandLogoProps) {
  const isLockup = variant === 'lockup';

  return (
    <span className={`taj-logo ${isLockup ? 'taj-logo--lockup' : 'taj-logo--mark'} ${className}`.trim()}>
      <span className="taj-logo__mark" aria-hidden="true">
        <span className="taj-logo__arabic" lang="ar" dir="rtl">تاج</span>
        <span className="taj-logo__letters">
          <span>T</span>
          <span>A</span>
          <span>J</span>
        </span>
      </span>
      {isLockup && (
        <span className="taj-logo__caption" aria-hidden="true">
          <span>International</span>
          <span>Tours &amp; Travels</span>
        </span>
      )}
      <span className="sr-only">
        {isLockup ? 'TAJ International Tours and Travels' : 'TAJ'}
      </span>
    </span>
  );
}
