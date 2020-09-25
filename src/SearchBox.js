import React from 'react';


class SearchBox extends React.Component{
    render(){
        return(
            <div className='pa2'>
                <div className='pa3 '>
                <input type='search' placeholder='Search robots' onInput={this.props.onSearchChange} />
                </div>
            </div>
        );
    }
}

export default SearchBox;