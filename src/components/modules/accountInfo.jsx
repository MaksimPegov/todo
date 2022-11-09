import { useNavigate } from 'react-router-dom'

export const AccountInfo = () => {
  const navigate = useNavigate()

  return (
    <div className="AccountInfo">
      <p className="AccountInfo__text">You authorized as:</p>
      <p className="AccountInfo__username">{localStorage.getItem('user')}</p>
      <button
        className="AccountInfo__button"
        onClick={() => {
          navigate('/login')
          localStorage.clear()
        }}
      >
        Log out
      </button>
    </div>
  )
}
