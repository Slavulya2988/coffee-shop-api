import { Component } from 'react';
import './find.css';

class Find extends Component {

        state = {
            term: ''
        }

        buttonsDB = [
            { name: 'Brazil' },
            { name: 'Kenya' },
            { name: 'Columbia'},
            { name: 'All'}
        ]



    onUpdateInput = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);

    }

    render(){

    const buttons = () => {
     return   this.buttonsDB.map( ({name}) => {

        const active = this.props.filter === name;
        const clazz = active ? 'filter__button filter__button_selected' : 'filter__button';
              return (
                  <button type="button"
                          className={clazz}
                          key = {name}
                          onClick={() => this.props.onSelectFilter(name)}>
                          {name}
                  </button>
              )
          })
      }
        return (
            <div className="find">
            <div className="find__container">
                <div className="find__form">
                    <div className="form__seek">
                        <div htmlFor="seek">Lookiing for</div>

                        <input  type="text"
                                name="seek"
                                value={this.state.term}
                                onChange={this.onUpdateInput} /* підніття локального стану до родительского */
                                placeholder="start typing here..."/>

                    </div>

                    <div className="form__filter filter">
                        <div className="filter__label">Or filter</div>
                        {buttons()}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Find;
