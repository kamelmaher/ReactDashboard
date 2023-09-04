const TableRow = () => {
    return (
        <tr>
            <td>
                <p className="fw-semibold">Sally Quinn</p>
                <p>Human Resources</p>
                <span>Assistant</span>
            </td>
            <td className="fw-semibold">
                eebsworth2m@sbwire.com
            </td>
            <td>
                09/27/2018
            </td>
            <td>
                $19586.23
            </td>
            <td>
                27
            </td>
            <td>
                <span className="p-2" style={{
                    background: ["red", "green", "orange", "black"][Math.floor(Math.random() * (3 - 0 + 1)) + 0],
                    color: "white",
                    borderRadius: "8px"
                }}>
                    current
                </span>
            </td>
        </tr>
    )
}

export default TableRow
