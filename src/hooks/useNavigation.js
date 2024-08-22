
import { useNavigate } from 'react-router-dom'

const useNavigation = (path) => {

    const navigate = useNavigate()

    const navigation =  navigate(path)

  return navigation 
}

export default useNavigation