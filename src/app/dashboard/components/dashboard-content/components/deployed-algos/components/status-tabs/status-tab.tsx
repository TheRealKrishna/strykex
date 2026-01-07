import React, { useMemo } from 'react'
import { statusTabsType } from '../../config/status-tabs';

export default function StatusTab({tab, currentTab, setCurrentTab}: {tab: statusTabsType, currentTab: string, setCurrentTab: React.Dispatch<React.SetStateAction<string>>}) {

  const isActive = useMemo(() => currentTab === tab, [currentTab, tab]);

  return (
    <button className={`text-sm border-[#FFFFFF33] border rounded-full px-4 py-1 cursor-pointer ${isActive && 'bg-white text-black'}`} onClick={() => setCurrentTab(tab)}>
      {tab}
    </button>
  )
}
