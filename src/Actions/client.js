const CLIENT_SELECTED = "CLIENT_SELECTED";
export default function (client) {
    return {
        type: CLIENT_SELECTED,
        client
    }
}
