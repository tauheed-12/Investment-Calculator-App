import UserInput from "./UserInput"

export default function Header({ onSetDetails }) {
    return (
        <div id="header">
            <h1>Investment Calculator</h1>
            <UserInput onSetDetails={onSetDetails} />
        </div>
    )
}