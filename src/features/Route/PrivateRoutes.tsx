import { Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  // const navigate = useNavigate()
  // const authenticated = localStorage.getItem('authenticated')


  // useEffect(() => {
  //   if (authenticated === 'false' || authenticated === null) {
  //     return navigate(`${process.env.PUBLIC_URL}/login`)
  //   }
  // })
  return <>{<Outlet />}</>
}

export default PrivateRoutes
