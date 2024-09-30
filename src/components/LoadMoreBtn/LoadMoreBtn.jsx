import s from "./LoadMoreBtn.module.css"


const LoadMoreBtn = ({load}) => {
  return (
      <div className={s.container}>
          <button className={s.btn} onClick={load}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn