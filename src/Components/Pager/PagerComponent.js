import React, { useState } from "react";
import Mypage from '../Shared/Mypage'

export default function PagerComponent() {

    // const [state, setState] = useState(
    //     {
    //         pageNumber: 1,
    //         pageSize: 10,
    //         pagerButtonCount: 5,
    //         recordCount: 0,
    //         pageIndex: 0
    //     }
    // )


    function pageIndexChanged(pageIndex) {
        console.log(pageIndex);
    }
    return (
        <>
            <h1>Hello</h1>
            <Mypage
                pageNumber={8}

                pageSize={10}
                pagerButtonCount={5}
                recordCount={100}
                pageIndexChanged={(pageIndex) => { pageIndexChanged(pageIndex) }} />
        </>

    )
}