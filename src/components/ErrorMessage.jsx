import { Alert, Container} from 'react-bootstrap';

export default function ErrorMessage(props){
    if(props.message){
        return(
            <Container><Alert key='danger' variant='danger'>
                                       {props.message}
                                      </Alert></Container>
            )
    }
}
