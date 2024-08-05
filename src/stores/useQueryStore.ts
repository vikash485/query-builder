import { RuleGroup } from "../types/query";
import { create } from "zustand";

interface Queries {
    queries: RuleGroup[];
    addQuery: (x: RuleGroup) => void;
}

export const useQueryStore = create<Queries>()((set) => ({
    queries: [],
    addQuery: (query) => {
        set(({ queries }) => {
            queries.push(query);
            return { queries };
        });
    },
}));
