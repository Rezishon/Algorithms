type Node<T> = {
    value: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let node = { value: item, prev: undefined } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            let head = this.head;
            this.head = undefined;
            return head?.value;
        }

        let head = this.head as Node<T>;
        this.head = head.prev;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

