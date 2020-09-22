import React, { useState, useEffect } from 'react'

import Awser0 from '../Image/BirusaWM-ME610_04.jpg'
import Awser1 from '../Image/CANDY DCS4 1051D1_2-07.jpg'
import Awser2 from '../Image/BirusaWM-ME610_04.jpg'
import Awser3 from '../Image/BirusaWM-ME610_04.jpg'
import Awser4 from '../Image/BirusaWM-ME610_04.jpg'

type ResultProps = {
    weights: Array<number>
}
type Awnser = {
    Name: string,
    Image: string
}

const Result: React.FC<ResultProps> = ({ weights }) => {

    const AnwserArray: Array<Awnser> = [
        { Name: "Бирюса WM-ME610/04", Image: Awser0 },
        { Name: "CANDY DCS4 1051D1/2-07", Image: Awser1 },
        { Name: "BEKO RGS 54P1 BWW", Image: Awser2 },
        { Name: "SAMSUNG WF60F1R0F2W", Image: Awser3 },
        { Name: "ATLANT 70У1010-00", Image: Awser4 },

    ];
    const [index, setIndex] = useState(-1);
    const findMax = (props?: any): number => {
        let maxI: number = 0;
        let max: number = weights[0];
        for (var i = 1; i < weights.length; ++i) {
            if (weights[i] >= max) {
                max = weights[i];
                maxI = i;
            }
        }
        setIndex(maxI);
        return maxI;
    }
    useEffect(() => {
        findMax();
    }, [])

    return (
        <div className="Welcome">
            {index !== -1 &&
                <>
                    <p>Вам больше всего подходит</p>
                    <p>{AnwserArray[index].Name}</p>
                    <img src={AnwserArray[index].Image} />
                    <button onClick={() => window.location.reload()}>Пройти ещё раз</button>
                </>
            }
        </div>
    )
}

export default Result
