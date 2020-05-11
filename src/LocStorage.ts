import { Storage } from "./interfaces/Storage";

class LocStorage implements Storage {
    saveDocument(document: Record<string, any>): string {
        const id = `document-${Date.now().toString()}`;
        const documents = [...this.getDocuments(), id];

        localStorage.setItem("documents", JSON.stringify(documents));
        localStorage.setItem(id, JSON.stringify(document));

        return id;
    }

    loadDocument(id: string): Record<string, any> {
        const document = localStorage.getItem(id);

        return JSON.parse(document);
    }

    getDocuments(): string[] {
        const items = localStorage.getItem("documents");

        return items ? JSON.parse(items) : [];
    }
}

export default LocStorage;
