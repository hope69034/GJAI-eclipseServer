import { Link } from 'react-router-dom'

// style
const body       = {backgroundColor : '#282c34'               }
const styleDoor  = {backgroundColor : 'red'    , color: 'black'}
const styleService  = {backgroundColor : 'orange' , color: 'black'}
const styleProposal = {backgroundColor : 'yellow'  , color: 'black'}
const stylePresentation = {backgroundColor : 'green'  , color: 'black'}
const styleIntroduction = {backgroundColor : 'blue'  , color: 'black'}

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={styleDoor}> Door </Link>
            <Link to='/Service' style={styleService}> Service </Link>
            <Link to='/Proposal' style={styleProposal}> Proposal </Link>
            <Link to='/Presentation' style={stylePresentation}> Presentation </Link>
            <Link to='/Introduction' style={styleIntroduction}> Introduction </Link>
        </body>

        </>
    )
}
export default Header