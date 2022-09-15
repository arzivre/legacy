import { Data, Status } from "../types"
import CardItem from "./CardItem"

interface Props {
  items: Data[]
  status: Status
  isDragging: boolean
  handleDragging: (dragging: boolean) => void
  handleUpdateList: (id: number, status: Status) => void
}

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleUpdateList(+e.dataTransfer.getData('text'), status)
    handleDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault()

  return (
    <div
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{status} hero</p>
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  )
}
export default ContainerCards
