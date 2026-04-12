import { useDeviceType } from '@/hooks/use-device-type';
import {
  Monitor
} from 'lucide-react'



type WhatIDoCardProps = {
  title: string;
  description: string;
}


export default function WhatIDoCard({ title, description }: WhatIDoCardProps) {
  const device = useDeviceType();
  return (
    <>
      {device === 'desktop' ? (
        <WhatIDoCardDesktop title={title} description={description} />
      ) : (
        <WhatIDoCardMobile title={title} description={description} />
      )}
    </>
  )
}

function WhatIDoCardDesktop({ title, description }: WhatIDoCardProps) {

  return (
    <div className="p-10 border border-accent h-[60vh] w-[40vw] shrink-0 isolate relative">
      <div className="absolute top-0 right-0 text-xl p-8 text-muted-foreground">01</div>
      <div className=" flex flex-col justify-between h-full">
        <div className="bg-primary rounded-full size-20 flex items-center justify-center">
          <Monitor className='text-primary-foreground size-10' />
        </div>
        <h3 className="heading-3 pt-8">{title}</h3>
        <div className="h-px w-full bg-accent"></div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function WhatIDoCardMobile({ title, description }: WhatIDoCardProps) {

  return (
    <div className="p-4 border border-accent isolate relative">
      <div className="absolute top-0 right-0 text-xl p-8 text-muted-foreground">01</div>
      <div className=" flex flex-col gap-2 h-full">
        <div className="bg-primary rounded-full size-20 flex items-center justify-center">
          <Monitor className='text-primary-foreground size-10' />
        </div>
        <h3 className="heading-3 pt-8">{title}</h3>
        <div className="h-px w-full bg-accent"></div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}