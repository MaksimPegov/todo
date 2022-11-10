export const AccountInfo = ({ logOut }) => {
  return (
    <div className="AccountInfo">
      <p className="AccountInfo__text">You authorized as:</p>
      <p className="AccountInfo__username">{localStorage.getItem('user')}</p>
      <button
        className="AccountInfo__button"
        onClick={() => {
          logOut(false)
          localStorage.clear()
        }}
      >
        Log out
      </button>
    </div>
  )
}

