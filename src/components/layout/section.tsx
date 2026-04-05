

type SectionProps = {
  children: React.ReactNode;
  className?: string;
}

// DESKTOP
// Title ↕ Description = 24
// Description ↕ Button = 32

// MOBILE
// Title ↕ Description = 16
// Description ↕ Button = 24


export default function Section({ children, className }: SectionProps) {

  return (
    <div className={`py-[48px] lg:py-[80px]  ${className}`}>
      {children}
    </div>
  )
}