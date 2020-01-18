export default abstract class Filter {
    title: string;
    key: string;
    howMany: number;

    constructor(title, key, howMany) {
        this.title = title;
        this.key = key;
        this.howMany = howMany;
    }
}
