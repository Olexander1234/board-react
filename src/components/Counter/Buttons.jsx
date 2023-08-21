export function Buttons({onIncrement, onDecrement}){
    return (
        <>
        <button type="button" onClick={onDecrement}>
        Збільшити на 1
      </button>
      <button type="button" onClick={onIncrement}>
        Зменшити на 1
      </button>
        </>
    
    )
    }