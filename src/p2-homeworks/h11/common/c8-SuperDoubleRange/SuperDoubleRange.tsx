/*import React, {useState} from 'react';
import { Slider, Switch } from 'antd';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const [disabled, setDisabled] = useState(false);

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    // сделать самому, можно подключать библиотеки

    return (
        <>

            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
        </>
    )
}

export default SuperDoubleRange*/


/*import { Slider, Switch } from 'antd';
import React, { useState } from 'react';

type SuperDoubleRangePropsType = {
    /!*onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...*!/

    minValueSlide: number
    maxValueSlide: number
    onChangeDoubleRange: (minValueSlide: number, maxValueSlide: number) => void
    onChangeRange?: (value: [number, number]) => void
}



const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {

    const [disabled, setDisabled] = useState(false)


    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };


    return (
        <>
            <Slider value={props.minValueSlide} disabled={disabled}  />
            <Slider range value={[props.minValueSlide, props.maxValueSlide]} disabled={disabled} />
            Disabled: <Switch checked={disabled} onChange={onChange} />
        </>
    );
};

export default SuperDoubleRange;*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 5;

type SuperDoubleRangePropsType = {
    onChangeDoubleRange: (values: number[] ) => void
    value: [number, number]
}

export default function SuperDoubleRange(props: SuperDoubleRangePropsType) {
   /* const [value1, setValue1] = React.useState<number[]>([20, 37]);*/

/*    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };*/

    //const [value2, setValue2] = React.useState<number[]>([20, 37]);

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                props.onChangeDoubleRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                props.onChangeDoubleRange([clamped - minDistance, clamped]);
            }
        } else {
            props.onChangeDoubleRange(newValue as number[]);
        }
    };

    return (
        <Box sx={{ width: 129 }}>

            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={props.value}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}