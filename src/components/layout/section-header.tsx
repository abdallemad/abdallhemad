

type SectionHeaderProps = {
  title: string;
  subTitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subTitle, className }: SectionHeaderProps) {

  return (
    <div className={` ${className}`}>
      <h2 className="heading-2">{title}</h2>
      {subTitle && <p className="text-lg text-muted-foreground">{subTitle}</p>}
    </div>
  )
}