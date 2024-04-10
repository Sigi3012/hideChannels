import definePlugin from "@utils/types";
import ErrorBoundary from "@components/ErrorBoundary";
import { ChannelCollapser } from "./components/Button";

export default definePlugin({
    name: "Hide Channels",
    description: "Hide the chnanel bar in a server",
    authors: [
        {
            id: 461431998570037250n,
            name: "Sigi",
        },
    ],
    patches: [
        {
            find: "toolbar:function",
            replacement: {
                match: /(function \i\(\i\){)(.{1,200}toolbar.{1,100}mobileToolbar)/,
                replace: "$1$self.addIconToToolBar(arguments[0]);$2"
            }
        },
    ],
    addIconToToolBar(e: { toolbar: React.ReactNode[] | React.ReactNode; }) {
        if (Array.isArray(e.toolbar))
            return e.toolbar.push(
                <ErrorBoundary noop={true}>
                    <ChannelCollapser />
                </ErrorBoundary>
            );

        e.toolbar = [
            <ErrorBoundary noop={true}>
                <ChannelCollapser />
            </ErrorBoundary>,
            e.toolbar,
        ];
    },
});
