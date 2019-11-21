const TABLE_SELECTED = "TABLE_SELECTED";
export default function (table) {
    return {
        type: TABLE_SELECTED,
        table
    }
}
