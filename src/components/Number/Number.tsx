import React, {Component} from "react";

class Number extends Component<numProps> {
    findMultiples = () => {
        let {
            maxNum,
            value,
            root
        } = this.props;
        let multiples = [];
        let num = 0;
        if (!root) {
            for (let i=maxNum; i>=value; i--) {
                if (i%value === 0) {
                    multiples.push(i)
                }
            }
            num = value;
        }
        this.props.toggleMultiples(multiples, num);
    };

    render() {
        let {
            value,
            multiple,
            root
        } = this.props;
        let highlightClass = '';
        if (root) {
            highlightClass = "grid_num--origin";
        } else if (multiple) {
            highlightClass = "grid_num--multiple";
        }
        return (
            <button type="button" name={`${value}`} value={value} onClick={this.findMultiples} className={`grid_num ${highlightClass}`}>
                {value}
            </button>
        );
    }
}

type numProps = {
    value: number;
    maxNum: number;
    toggleMultiples: (arr: number[], root: number) => void;
    multiple: boolean;
    root: boolean;
}

export default Number;