import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
    return _.round(_.sum(data) / data.length);
};

const low = (data) => {
    return _.round(_.min(data));
};

const high = (data) => {
    return _.round(_.max(data));
};

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={200} height={180}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>
                <span>Now: {_.round(props.data[0])}{props.units}</span><br/>
                <span>High: {high(props.data)}{props.units}</span><br/>
                <span>Avg: {average(props.data)}{props.units}</span><br/>
                <span>Low: {low(props.data)}{props.units}</span><br/>
            </div>
        </div>
    );
}