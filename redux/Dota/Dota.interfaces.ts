export interface IDotaState {
    loading: boolean;
    match: IDotaMatch | null;
    error: string | null;
}

export interface IDotaMatch {
    kills: number;
    deaths: number;
    assists: number;
}
