import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function CustomSwitch({enabled,handleSwitchChange}:{enabled:boolean,handleSwitchChange:Function}) {
  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={handleSwitchChange}
        className={`${enabled ? 'bg-orange-red' : 'bg-orange-salmon'}
          relative inline-flex h-[38px] w-[74px] shrink-0  rrounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-3  focus-visible:ring-white rounded-full focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
