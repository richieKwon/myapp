import { React } from "react";

export default function Mypage(props) {


    function pageButtonClicked(pageNumber, e) {
        // console.log(pageNumber)
        e.preventDefault();
        props.pageIndexChanged(pageNumber - 1);
    }

    function displayData() {
        const { pageNumber, pageSize, pageButtonCount, recordCount } = props;
        const pageCount = Math.ceil(recordCount / pageSize);
        const pageIndex = pageNumber - 1;
        const pages = [];

        if (pageNumber === 1) {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href="first" className="page-link first btn disabled">
                        <span style={{ fontSize: '7pt' }}>First</span>
                    </a>
                </li>
            )
        } else {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href="first" className="page-link first btn" onClick={() => { pageButtonClicked(1) }}>
                        <span style={{ fontSize: '7pt' }}>First</span>
                    </a>
                </li>
            )
        }

        let i = 0;
        let start = pageIndex / pageButtonCount * pageButtonCount + 1;
        let end = (pageIndex / pageButtonCount + 1) * pageButtonCount;

        for (i = start; i <= end; i++) {
            let currentNumber = i;
            if (i > pageCount) {
                break;
            }
            if (i === pageNumber) {
                pages.push(
                    <li className="page-item active" key={currentNumber}>
                        <a href={currentNumber} className="page-link current btn disabled">
                            <span style={{ fontSize: '7pt' }}>{i}</span>
                        </a>
                    </li>
                )
            }
            else {
                pages.push(
                    <li className="page-item" key={currentNumber}>
                        <a href={currentNumber} className="page-link current btn"
                            onClick={(e) => { pageButtonClicked(currentNumber) }}>
                            <span style={{ fontSize: '7pt' }}>{i}</span>
                        </a>
                    </li>
                )
            }
        }

        if (pageNumber !== pageCount) {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href="last" className="page-link last btn" onClick={() => { pageButtonClicked(pageCount) }}>
                        <span style={{ fontSize: '7pt' }}>Last</span>
                    </a>
                </li>
            )
        } else {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href="last" className="page-link last btn disabled">
                        <span style={{ fontSize: '7pt' }}>Last</span>
                    </a>
                </li>
            )
        }
        return pages;
    }


    return (
        <>
            <div className="d-flex">
                <ul className="pagination pagination-sm mx-auto">
                    {displayData()}
                </ul>
                {/* <input type="button" value="1" onClick={() => { pageButtonClicked() }}></input> */}
                {/* <input type="button" value="2" onClick={() => { pageButtonClicked(2) }}></input> */}
                {/* <input type="button" value="3" onClick={() => { pageButtonClicked(3) }}></input> */}
            </div>
        </>
    )
}