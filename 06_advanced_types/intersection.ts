type FileData = {
    path: string;
    content: string;
};

type DatabaseData = {
    connectionUrl: string;
    credentisals: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;
