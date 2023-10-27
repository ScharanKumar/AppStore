// Write your code here

const AppItem = props => {
  const {details2, fun1} = props
  const {appId} = details2
  const x = () => {
    fun1(appId)
  }

  return (
    <li>
      <li>
        <button type="button" onClick={x}>
          <img src={imageUrl} />
          <p>{appName}</p>
        </button>
      </li>
    </li>
  )
}

export default AppItem
