export interface IDotaState {
    loading: boolean;
    match: IDotaMatch | null;
    error: string | null;
    open: boolean;
}

export interface IDotaMatch {
    award: number;
    kills: number;
    deaths: number;
    assists: number;
}
