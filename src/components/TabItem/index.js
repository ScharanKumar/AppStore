// Write your code here

const TabItem = props => {
  const {fun, details1} = props
  const {tabId} = details1
  const f = () => {
    fun(tabId)
  }

  return (
    <li>
      <li>
        <button type="button" onClick={f}>
          {displayText}
        </button>
      </li>
    </li>
  )
}

export default TabItem
