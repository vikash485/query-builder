import React, { useState } from "react";
import { RuleGroup } from "../types/query";
import { stringifyRuleGroup } from "../utils/convertRuleObjectToSting";
import { CopyButton } from "./CopyButton";
import { TabButton } from "./TabButton";

interface props {
    query: RuleGroup;
}

const outputTypes = ["String", "Rule object"];

export const Query: React.FC<props> = ({ query }) => {
    const [outputType, setOutputType] = useState(outputTypes[0]);

    const text =
        outputType === outputTypes[0]
            ? stringifyRuleGroup(query)
            : JSON.stringify(query, null, 2);

    return (
        <div className="p-4 my-6 border rounded bg-dark-800 border-dark-700">
            <div className="justify-between mb-4 f">
                <TabButton
                    buttons={outputTypes}
                    value={outputType}
                    onClick={setOutputType}
                />
                <CopyButton text={text} />
            </div>
            <pre className="overflow-x-hidden whitespace-pre-wrap text-ellipsis">
                {text}
            </pre>
        </div>
    );
};
