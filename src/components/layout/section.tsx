


type SectionProps = React.ComponentProps<"section"> & {
  children: React.ReactNode;
};

// DESKTOP
// Title ↕ Description = 24
// Description ↕ Button = 32

// MOBILE
// Title ↕ Description = 16
// Description ↕ Button = 24



export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={`py-[48px] lg:py-[80px] ${className ?? ""}`}
      {...props}
    >
      {children}
    </section>
  );
}