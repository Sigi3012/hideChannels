import { LazyComponent } from "@utils/react";
import { filters, find } from "@webpack";
import { disableStyle, enableStyle } from "@api/Styles";
import hiddenStyle from "../hidden.css?managed";

// State variables
let clickCount = 0;

// Function to handle click event
function handleClick() {
    clickCount++;

    if (clickCount % 2 === 0) {
        enableStyle(hiddenStyle);
        console.log("hidden");
    } else {
        disableStyle(hiddenStyle);
        console.log("shown");
    }
}

const HeaderBarIcon = LazyComponent(() => {
    const filter = filters.byCode(".HEADER_BAR_BADGE");
    return find(m => m.Icon && filter(m.Icon)).Icon;
});

export function ChannelCollapserIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24px"
            height="24px"
        >
            <path
                fill="none"
                d="M10.91.16L.18,9.56c-.24.21-.24.67,0,.88l11.1,9.84c.6.53,1.49-.35.88-.88-3.7-3.28-7.4-6.56-11.1-9.84v.88L11.79,1.05c.61-.53-.28-1.41-.88-.88h0Z"
            />
        </svg>
    );
}

export function ChannelCollapser() {
    return (
        <HeaderBarIcon
            className="vc-log-toolbox-btn"
            onClick={() => handleClick()}
            tooltip={"Collapse channels"}
            icon={ChannelCollapserIcon}
        />
    );
}
