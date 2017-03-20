import React from 'react';
import AutoComplete from 'material-ui/AutoComplete'

class SearchComponent extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            dataSource:[]
        };

        this.handleUpdateInput= this.handleUpdateInput.bind(this);
    }

    handleUpdateInput (value) {
        let dataSource = [
            value,
            value + value,
            value + value + value,
        ];

        this.setState({
            dataSource
        });
    };

    render(){
        return (
            <div className="search">

                {/*<Autocomplete ref="autocomplete" inputProps={{title: "Title"}}*/}
                 {/*value={this.props.autoCompleteValue} items={this.props.tracks}*/}
                 {/*getItemValue={(item) => item.title} onSelect={this.props.handleSelect}*/}
                 {/*onChange={this.props.handleChange} renderItem={this.handleRenderItem.bind(this)}*/}
               {/*/>*/}
                <AutoComplete
                    hintText="Type anything"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={true}
                />
          </div>
        )
    }

    handleRenderItem(item, isHighlighted){
        const listStyles = {
             item: {
               padding: '2px 6px',
               cursor: 'default'
             },

             highlightedItem: {
               color: 'white',
               background: '#F38B72',
               padding: '2px 6px',
               cursor: 'default'
             }
           };
           return (
          <div
            style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
            key={item.id}
            id={item.id}
          >{item.title}</div>
        )
    }

}

export default SearchComponent;
