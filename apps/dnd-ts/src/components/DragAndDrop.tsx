import { useState } from "react"
import { data } from "../data"
import { Data, Status } from "../types"
import ContainerCards from "./ContainerCard"

const typesHero: Status[] = ['good', 'normal', 'bad']

export const DragAndDrop = () => {
  
  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(data)

  const handleDragging = (dragging: boolean) => setIsDragging(dragging)

   const handleUpdateList = (id: number, status: Status) => {
     let card = listItems.find((item) => item.id === id)

     if (card && card.status !== status) {
       card.status = status

       setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)])
     }
  }
  
  return (
    <div className='grid'>
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={data}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  )
}
export default DragAndDrop