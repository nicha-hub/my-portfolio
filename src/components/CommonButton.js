import '../assets/scss/CommonButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CommonButton = (props) => {
    let btnMode = props.btnMode || 'btn-1';
    let title = props.title || 'Default';
    let arrowRight = props.arrowRight || false;
    let style = props.style || {};
    let onClick = props.onClick || function(){};

    return (
    <div className={'btn ' + btnMode} style={style} onClick={()=>{onClick();}}>
        <span>{title}</span>
        {arrowRight && <span className='btn-ic'><FontAwesomeIcon icon={faArrowRight} /></span>}
    </div>)
};
  
export default CommonButton;