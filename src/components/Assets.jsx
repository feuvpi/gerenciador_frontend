import React from 'react'

const Assets = () => {
  return (
      <>
      <div className="w-full md:h-screen flex flex-col justify-between pt-4 rounded-lg">
      <div class="overflow-x-auto relative rounded-lg">
        <table class="w-full text-sm text-left text-slate-200">
          <thead class="text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white">
            <tr>
              <th scope="col" class="py-3 px-6 text-center">
                ATIVO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                COTAÇÃO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                QUANTIDADE
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                PREÇO MÉDIO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                TOTAL
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                RENDIMENTO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-slate-400 dark:border-gray-700 hover:bg-slate-500">
              <th
                scope="row"
                class="text-center py-4 px-6 font-medium text-slate-200 whitespace-nowrap"
              >
                PETR4
              </th>
              <td class="py-4 px-6 text-center">12.0</td>
              <td class="py-4 px-6 text-center">2000</td>
              <td class="py-4 px-6 text-center">10.0</td>
              <td class="py-4 px-6 text-center">24000.00</td>
              <td class="py-4 px-6 text-center">20%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Assets