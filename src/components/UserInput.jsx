import InputComp from "./InputComp"

export default function UserInput({ onSetDetails }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <InputComp name="initialInvestment" label="Initial Investment" onSetDetails={onSetDetails} />
                <InputComp name="annualInvestment" label="Annual Investment" onSetDetails={onSetDetails} />
            </div>
            <div className="input-group">
                <InputComp name="expectedResult" label="Expected Return" onSetDetails={onSetDetails} />
                <InputComp name="duration" label="Duration" onSetDetails={onSetDetails} />
            </div>
        </div>
    )
}