
const StarWarsDisplay = ({swdata}) => {
    console.log(swdata)

    return swdata.results[0].name ? (
        <>
        <p>Test</p>
        <h2>{swdata.results[0].name}</h2>
        </>
    ) : (
        <p>test12</p>
    )
}

export default StarWarsDisplay;