import React, { Component } from "react";

class Smiles extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            emojis: JSON.parse(localStorage.getItem("emojis")) || props.smiles,
            result: null
        };
    }

    onVoteSmile = (id) => {
        const updateEmojis = this.state.emojis.map(
            (el) => el.id === id ? {...el, count: el.count +1} : el
        );

        localStorage.setItem("emojis", JSON.stringify(updateEmojis));
        this.setState({emojis: updateEmojis});
    }

    onClear = () => {
        const defaultValues = this.state.emojis.map((el) => {
            return {...el, count: 0};
        });
        this.setState({emojis: defaultValues});
    }

    onShowResult = () => {
        const maxValueObj = this.state.emojis.reduce((max, obj) => {
            return obj.count > max.count? obj: max;
        }, this.state.emojis[0]);
        this.setState({...this.state, result: maxValueObj.count !== 0 ? maxValueObj: null});
    }

    render() {
        const elements = this.state.emojis.map(({id, label, count}) => (
            <span key={id} className="smiles-group-item">
                <span onClick = {() => this.onVoteSmile(id)}>{label}</span>
                <span>{count}</span>
            </span>
        ));

        let result = null;

        if (this.state.result) {
            result = <div className="smiles-result">
                <div>Переможець</div>
               {this.state.result.label} : {this.state.result.count}
            </div>;
        }

        return (
            <div>
                <div className="smiles-group">
                    {elements}
                </div>
                <div className="smiles-wrapper">
                    <button className="smiles-btn" onClick={() => this.onClear()}>Clear</button>
                    <button className="smiles-btn" onClick={() => this.onShowResult()}>Show result</button>
                </div>
                {result}
            </div>
        );
    }
}

export default Smiles;