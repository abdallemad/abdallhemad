


type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {

  return (
    <div className={`max-w-[1380px] mx-auto px-[16px] sm:px-[24px] ${className}`}>
      {children}
    </div>
  )
}