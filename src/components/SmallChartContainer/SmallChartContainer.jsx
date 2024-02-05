import React from 'react'
import ProduceContainer from '@/src/components/SmallChartContainer/ProduceContainer/ProduceContainer'
import BudgetLeftContainer from '@/src/components/SmallChartContainer/BudgetLeftContainer/BudgetLeftContainer'
import ProgressContainer from '@/src/components/SmallChartContainer/ProgressContainer/ProgressContainer'
import InteractionsContainer from '@/src/components/SmallChartContainer/InteractionsContainer/InteractionsContainer'

const SmallChartContainer = () => {
  return (
    <div className="flex flex-row justify-around w-[1160px] h-[140px] mt-4">
      <ProduceContainer />
      <BudgetLeftContainer />
      <ProgressContainer />
      <InteractionsContainer />
    </div>
  )
}

export default SmallChartContainer
