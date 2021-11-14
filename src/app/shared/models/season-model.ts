export interface Season {
    MRData: MRData;
}

export interface MRData {
    xmlns:       string;
    series:      string;
    url:         string;
    limit:       string;
    offset:      string;
    total:       string;
    SeasonTable: SeasonTable;
}

export interface SeasonTable {
    Seasons: SeasonElement[];
}

export interface SeasonElement {
    season: number;
    url:    string;
}
