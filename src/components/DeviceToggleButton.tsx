import { Toggle } from "./ui/toggle";
import { Laptop, Smartphone } from "lucide-react"

type Props = {
    toggleView: () => void;
    toggleTo: string;
}

const DeviceToggleButton = ({ toggleTo, toggleView }: Props) => {
    return (
        <Toggle className="flex mx-auto" onClick={toggleView}>
            {
                (toggleTo === 'mobile' ?
                    <Smartphone className="h-4 w-4" />
                    :
                    <Laptop className="h-4 w-4" />)
            }{`Switch to ${toggleTo}`}
        </Toggle>
    )
}

export default DeviceToggleButton;