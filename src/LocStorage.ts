import { Storage } from "./interfaces/Storage";

class LocStorage implements Storage {
    saveDocument(document: Record<string, any>, currentId: string = null): string {
        const id = currentId || `document-${Date.now().toString()}`;
        const documents = this.getDocuments();
        const documentsJson = JSON.stringify(currentId ? documents : [...documents, id])

        localStorage.setItem("documents", documentsJson);
        localStorage.setItem(id, JSON.stringify(document));

        return id;
    }

    loadDocument(id: string): Record<string, any> {
        const document = localStorage.getItem(id);

        return JSON.parse(document);
    }

    removeDocument(id: string) {
        const documents = this.getDocuments().filter(value => value !== id)

        localStorage.setItem("documents", JSON.stringify(documents));
        localStorage.removeItem(id);
    }

    getDocuments(): string[] {
        const items = localStorage.getItem("documents");

        return items ? JSON.parse(items) : [];
    }

    saveForm(form: Record<string, any>[], currentId: string = null): string {
        const id = currentId || `form-${Date.now().toString()}`;
        const forms = this.getForms();
        const formsJson = JSON.stringify(currentId ? forms : [...forms, id])

        localStorage.setItem("forms", formsJson);
        localStorage.setItem(id, JSON.stringify(form));

        return id;
    }

    loadForm(id: string): Record<string, any>[] {
        const form = localStorage.getItem(id);

        return JSON.parse(form);
    }

    removeForm(id: string) {
        const forms = this.getForms().filter(value => value !== id)

        localStorage.setItem("forms", JSON.stringify(forms));
        localStorage.removeItem(id);
    }

    getForms(): string[] {
        const items = localStorage.getItem("forms");

        return items ? JSON.parse(items) : [];
    }
}

export default LocStorage;
