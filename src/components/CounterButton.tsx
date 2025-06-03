type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const CounterButton = ({onClick, disabled = false, label, addClass = "bg-cf-dark-gray"}: ButtonProps) => {

    return (
        <>
            <button className= {"text-white py-2 px-4 disabled:bg-gray-300 " + addClass}
                    onClick={onClick}
                    disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default CounterButton;
