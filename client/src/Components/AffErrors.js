import {useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert';

const AffErrors = () => {

    const errrrr = useSelector(state => state.ErrorsReducer)

  return (
    <div>
        {
            errrrr.map((el ,i, t)=> <Alert variant='danger'>
          {el.msg}
        </Alert>)
        }
    </div>
  )
}

export default AffErrors