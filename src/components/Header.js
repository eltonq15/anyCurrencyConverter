import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function Header(props) {
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <div style={!isMobile ? headerStyle : headerStyleMobile}>
            {props.title}
        </div>
    );
};


const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: 60,
    width: '100%',
    boxShadow: '0 5px 5px gray',
    fontFamily: 'Rokkitt',
    fontSize: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '2px solid gray',
    flexDirection: 'column'
    
};

const headerStyleMobile = {
    backgroundColor: 'black',
    color: 'white',
    height: 220,
    width: '100%',
    boxShadow: '0 5px 5px gray',
    fontFamily: 'Rokkitt',
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid gray',
    flexDirection: 'column',
    padding: '10px'
};

export default Header;