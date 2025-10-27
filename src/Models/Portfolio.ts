export type PortfolioPost = {
    symbol: string;
}

export type PortfolioGet = {
    id: number;
    symbol: string;
    companyName: string;
    purchase: string;
    lastDiv: number;
    industry: string;
    marketCap: number;
    comments: any;
}