import React from 'react'
import ProduceContainer from '@/src/components/SmallChartContainer/ProduceContainer/ProduceContainer'
import BudgetLeftContainer from '@/src/components/SmallChartContainer/BudgetLeftContainer/BudgetLeftContainer'
import ProgressContainer from '@/src/components/SmallChartContainer/ProgressContainer/ProgressContainer'
import InteractionsContainer from '@/src/components/SmallChartContainer/InteractionsContainer/InteractionsContainer'

const SmallChartContainer = () => {
  return (
    <div className="flex flex-row mt-4 gap-2 flex-wrap lg:justify-between">
      <ProduceContainer />
      <BudgetLeftContainer />
      <ProgressContainer />
      <InteractionsContainer />
    </div>
  )
}

export default SmallChartContainer
