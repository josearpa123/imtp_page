import { apiFetch } from "./api"; // si ya lo usan

export const LeadsService = {
    create(payload) {
        return apiFetch("/leads", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    },
};
