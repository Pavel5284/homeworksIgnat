import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (valueSlide: number) => {
        setValue1(valueSlide);
    }

    const onChangeDoubleRange = (values: number[] ) => {
        setValue1(values[0]);
        setValue2(values[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div style={{display: 'inline-block', width: '25px', textAlign: 'center'}}>{value1}</div>
                <div style={{display: 'inline-block', width: '300px'}}>
             {/*  <span>{value1}</span>*/}
                <SuperRange
                    //value
                    value={value1}
                    //callback который будет менять value onChangeRange
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            </div>

            <div>
                <div style={{display: 'inline-block', width: '25px', textAlign: 'center'}}>{value1}</div>
                <div style={{display: 'inline-block', width: '300px'}}>
                <SuperDoubleRange

                    onChangeDoubleRange={onChangeDoubleRange}
                    value={[value1, value2]}
                   /* minValueSlide={value1}*/
                    /*maxValueSlide={value2}*/
                  /*  onChangeDoubleRange={onChangeDoubleRange}*/
                    // сделать так чтоб value1 и value2 изменялось
                />
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
